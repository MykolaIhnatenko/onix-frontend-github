import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../../src/layout/Layout';
import { IBlogAuthorPage } from '../../../src/interfaces/IBlogAuthorPage';
import pageToSalesChannels from '../../../src/constants/PageToSalesChannels';
import AuthorPageView from '../../../src/pages/AuthorPageView/AuthorPageView';
import AuthorJsonLd from '../../../src/components/AuthorJsonLd/AuthorJsonLd';
import { IBreadcrumbsItem } from '../../../src/layout/interfaces/IBreadcrumbs';
import { seoDataType } from '../../../src/constants/constants';
import getAuthor, { getAuthorBlogsList } from '../../../src/api/getAuthor';
import getAuthors from '../../../src/api/getAuthors';
import getSeoData from '../../../src/api/getSeoData';
import IStore from '../../../src/store/interfaces/IStore';
import { IApp } from '../../../src/store/app/interfaces/IApp';
import { checkPagination } from 'utils/blogsUtils';
import getFooterContent from 'api/getFooterContent';

function Author({
  author, seoData, footerContent, authorBlogs, pagination,
}: IBlogAuthorPage) {
  const {
    attributes: {
      name, surname, linkedin, email, position,
      picture, url,
    },
  } = author;

  const router = useRouter();
  const page = router.query.page as string;
  const [scrollHeight, setsScrollHeight] = useState(0);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

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
      path: `/author/${url}/${page}`,
    },
  ];

  useEffect(() => {
    const storedPreviousPath = sessionStorage.getItem('authorPreviousPath');
    let pageHeight = 736;
    if (scrollHeight === 0) {
      if (isMDDevice) {
        pageHeight = 768;
      } else if (isSMDevice || isXSDevice) {
        pageHeight = 560;
      }
    } else {
      pageHeight = scrollHeight;
    }

    if (storedPreviousPath && storedPreviousPath !== router.asPath) {
      window.scrollTo(0, pageHeight);
    }

    sessionStorage.setItem('authorPreviousPath', router.asPath);
  }, [router]);

  return (
    <>
      <Head>
        {AuthorJsonLd({
          name,
          surname,
          photo: picture?.data?.attributes?.url,
          linkedin,
          email,
          job: position,
          url,
        })}
      </Head>
      <Layout
        footerContent={footerContent}
        seoData={seoData}
        salesChannel={pageToSalesChannels.BLOG_AUTHOR}
        isBlogsPage
        breadcrumbs={breadcrumbs}
      >
        <AuthorPageView
          setsScrollHeight={setsScrollHeight}
          author={author}
          authorBlogs={authorBlogs}
          pagination={pagination}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params: { author, page } }: { params: { author: string, page: string } }) {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: author, type: seoDataType.SINGLE_AUTHOR });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const response = await getAuthor(author);
  const currentPageNumber = +page;
  const {
    data,
    pagination,
  } = await getAuthorBlogsList(author, currentPageNumber);

  const resultPagination = checkPagination(pagination);

  if (resultPagination && !data?.length) {
    return {
      notFound: true,
    };
  }

  if (page === '0' || page === '1') {
    return {
      redirect: {
        destination: `/author/${author}`,
      },
    };
  }

  return {
    props: {
      author: response[0],
      seoData,
      footerContent,
      authorBlogs: data,
      pagination,
    },
  };
}

export async function getStaticPaths() {
  const pageArray = [2, 3, 4, 5];
  const authors = await getAuthors();

  const paths = authors.map(({ attributes: { url } }) => pageArray.map((index) => (
    {
      params: { author: encodeURI(url), page: `${index}` },
    }
  ))).flat();

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Author;
