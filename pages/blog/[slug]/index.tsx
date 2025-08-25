import Script from 'next/script';
import { useEffect, useState } from 'react';

import Layout from '../../../src/layout/Layout';
import getSeoData from '../../../src/api/getSeoData';
import { IBlogDetailsPage } from '../../../src/interfaces/IBlogDetailsPage';
import getBlogsLinks from '../../../src/api/getBlogsLinks';
import { seoDataType } from '../../../src/constants/constants';
import getSingleBlog from '../../../src/api/getSingleBlog';
import SingleBlogPageView from '../../../src/pages/SingleBlog/SingleBlogPageView';
import { BreadcrumbsVariant } from '../../../src/constants/enums';
import { prepareContent } from '../../../src/utils/helpers';
import parseCodes from '../../../src/utils/contentParser';
import getBlogsByIds from '../../../src/api/getBlogsByIds';
import sortBlogs from '../../../src/utils/sortBlogs';
import getRandomBlogs from '../../../src/api/getRandomBlogs';
import normalizeBlogsData from '../../../src/utils/normalizeBlogData';
import { getSingleBlogBreadcrumbs } from '../../../src/utils/blogsUtils';
import PagesToSalesChannels from '../../../src/constants/PageToSalesChannels';
import getFooterContent from 'api/getFooterContent';

function BlogsPage({
  seoData, slug, blogData, footerContent, lastCrumbTitle, categoryCrumb, subcategoryCrumb,
}:IBlogDetailsPage) {
  const isWhitepapers = blogData?.attributes?.categories?.data?.some((
    category,
  ) => category.attributes?.url.toLowerCase() === 'whitepapers');
  const breadcrumbs = getSingleBlogBreadcrumbs(categoryCrumb, subcategoryCrumb, { lastCrumbTitle, slug });
  const [mailerlite, setMailerlite] = useState(<> </>);
  useEffect(() => {
    setTimeout(() => {
      setMailerlite(<Script
        id="mailerlite_script"
        strategy="lazyOnload"
        defer
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, e, u, f, l, n) {
              w[f] = w[f] || function() { (w[f].q = w[f].q || []).push(arguments); };
              l = d.createElement(e);
              l.async = 1;
              l.src = u;
              n = d.getElementsByTagName(e)[0];
              if (n) {
                n.parentNode.insertBefore(l, n);
              } else {
                d.body.appendChild(l);
              }
            })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
            ml('account', '196571');
          `,
        }}
      />);
    }, 2000);
  }, []);

  return (
    <>
      {mailerlite}
      <Layout
        footerContent={footerContent}
        seoData={seoData}
        breadcrumbs={breadcrumbs}
        breadcrumbsVariant={BreadcrumbsVariant.WHITE_SINGLE_BLOG}
        salesChannel={PagesToSalesChannels.BLOG_ARTICLE_PAGE}
      >
        <SingleBlogPageView blog={blogData} isWhitepapers={isWhitepapers || false} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params: { slug } }:{ params:{ slug:string } }) {
  const [blog] = await getSingleBlog(slug);
  if (!blog) {
    return {
      notFound: true,
    };
  }
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: slug, type: seoDataType.SINGLE_BLOG });
  const {
    attributes: {
      blogTitle,
      content,
      contentTable,
      relatedBlogs: relatedBlogsDataFromServer,
      categories: blogCategories,
      relatedSubcategory,
    } = {},
  } = blog;

  const blogContent = prepareContent(content, contentTable) as string;
  const blogCategoriesIds = blogCategories?.data ? blogCategories?.data?.map(({ id }) => id) : [];

  let relatedBlogs;
  if (relatedBlogsDataFromServer?.length) {
    const relatedBlogsData = await getBlogsByIds(
      relatedBlogsDataFromServer?.map(({ id }) => id),
      {
        '[fields][0]': 'id',
        '[fields][1]': 'blogTitle',
        '[fields][2]': 'url',
        'fields[3]': 'datePublication',
        'fields[4]': 'time_to_reading',
        'fields[5]': 'description',
        'fields[6]': 'views',
        'populate[picture][fields][0]': 'alternativeText',
        'populate[picture][fields][1]': 'formats',
        'populate[picture][fields][2]': 'url',
        'populate[blogSubcategories][fields][0]': 'url',
        'populate[blogSubcategories][fields][1]': 'name',
        'populate[executor][populate][0]': 'picture',
        'populate[writer][populate][1]': 'picture',
      },
    );
    relatedBlogs = sortBlogs(
      relatedBlogsData,
      relatedBlogsDataFromServer?.map(({ id }) => id),
    );
  } else {
    const result = await getRandomBlogs(blogCategoriesIds);
    relatedBlogs = normalizeBlogsData(result);
  }

  return {
    props: {
      seoData: { ...seoData, faq: blog.attributes.faq },
      footerContent,
      slug: slug || '',
      lastCrumbTitle: blogTitle,
      categoryCrumb: blogCategories?.data?.[0]?.attributes || {},
      subcategoryCrumb: relatedSubcategory && relatedSubcategory?.length > 0 ? relatedSubcategory?.[0] : {},
      blogData: parseCodes({
        ...blog,
        attributes: {
          ...blog.attributes,
          content: blogContent,
          relatedBlogs,
          relatedSubcategory,
        },
      }),
    },
  };
}

export async function getStaticPaths() {
  const links = await getBlogsLinks();
  const paths = links?.map((url) => ({ params: { slug: encodeURI(url) } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default BlogsPage;
