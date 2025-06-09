import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../../src/layout/Layout';
import getAuthor, { getAuthorBlogsList } from '../../../src/api/getAuthor';
import getAuthors from '../../../src/api/getAuthors';
import getSeoData from '../../../src/api/getSeoData';
import { IBlogAuthorPage } from '../../../src/interfaces/IBlogAuthorPage';
import pageToSalesChannels from '../../../src/constants/PageToSalesChannels';
import AuthorPageView from '../../../src/pages/AuthorPageView/AuthorPageView';
import AuthorJsonLd from '../../../src/components/AuthorJsonLd/AuthorJsonLd';
import { IBreadcrumbsItem } from '../../../src/layout/interfaces/IBreadcrumbs';
import { seoDataType } from '../../../src/constants/constants';
import { checkPagination } from 'utils/blogsUtils';
import getFooterContent from 'api/getFooterContent';

function Author({
  authorBlogs, pagination, footerContent, author, seoData,
}: IBlogAuthorPage) {
  const {
    attributes: {
      name,
      surname,
      linkedin,
      email,
      position,
      picture,
      url,
    },
  } = author;

  const router = useRouter();

  const breadcrumbs:IBreadcrumbsItem[] = [
    {
      id: 1,
      title: 'Onix',
      path: '/',
    },
    {
      id: 2,
      title: 'Blog',
      path: '/blogs',
    },
    {
      id: 3,
      title: 'About author',
      path: `/author/${url}`,
    },
  ];

  useEffect(() => {
    sessionStorage.setItem('authorPreviousPath', router.asPath);
  }, []);

  return (
    <>
      <Head>
        {AuthorJsonLd({
          name,
          surname,
          linkedin,
          email,
          photo: picture?.data?.attributes?.url,
          job: position,
          url,
        })}
      </Head>
      <Layout
        footerContent={footerContent}
        breadcrumbs={breadcrumbs}
        seoData={seoData}
        salesChannel={pageToSalesChannels.BLOG_AUTHOR}
        isBlogsPage
      >
        <AuthorPageView
          pagination={pagination}
          author={author}
          authorBlogs={authorBlogs}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params: { author } }: { params: { author: string } }) {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: author, type: seoDataType.SINGLE_AUTHOR });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const response = await getAuthor(author);
  const { data, pagination } = await getAuthorBlogsList(author);

  const resultPagination = checkPagination(pagination);

  if (resultPagination && !data?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      author: response[0],
      authorBlogs: data,
      pagination,
      seoData,
      footerContent,
    },
  };
}

export async function getStaticPaths() {
  const response = await getAuthors();

  const paths = response.map(({ attributes: { url } }) => ({
    params: {
      author: encodeURI(url),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Author;
