import Blogs from '../../src/pages/Blogs/Blogs';
import getSeoData from '../../src/api/getSeoData';
import { IBreadcrumbsItem } from '../../src/layout/interfaces/IBreadcrumbs';
import { IBlogsPage } from '../../src/interfaces/IBlogsPage';
import getBlogsCategoriesList from '../../src/api/getBlogsCategoriesList';
import getSingleBlog from '../../src/api/getSingleBlog';
import getTopBlogs from '../../src/api/getTopBlogs';
import getFooterContent from 'api/getFooterContent';

function BlogsPage({
  seoData, footerContent, categories, newestBlog, trendingArticles,
}:IBlogsPage) {
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
  ];

  return (
    <Blogs
      categories={categories}
      description={seoData?.description || ''}
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      newestBlog={newestBlog}
      trendingArticles={trendingArticles}
      footerContent={footerContent}
    />
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'blogs' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const categories = await getBlogsCategoriesList({
    isBlogSubcategories: true,
    isBlogs: true,
    isBlogsPicture: true,
    isBlogsAuthors: true,
  });
  const newestBlog = await getSingleBlog();
  const trendingArticles = await getTopBlogs();

  return {
    props: {
      seoData,
      footerContent,
      categories,
      newestBlog,
      trendingArticles,
    },
  };
}

export default BlogsPage;
