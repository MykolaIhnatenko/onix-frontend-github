import dynamic from 'next/dynamic';

import pageToSalesChannels from '../../constants/PageToSalesChannels';
import Layout from '../../layout/Layout';
import { IBlogsScreen } from '../../interfaces/IBlogsPage';
import TitleSection from './components/TitleSection';
import SearchInputBlock from '../../components/SearchInputBlock/SearchInputBlock';
import CategoriesListBlock from './components/CategoriesListBlock';
import TrendingArticles from './components/TrendingArticles';
import { getFilteredBlogsCategories } from 'utils/blogsUtils';
import DetailCategories from './components/DetailCategories';

import styles from './sass/blogs.module.scss';

const SubscribeBlock = dynamic(() => import(
  './components/SubscribeBlock'
), { ssr: false });

function Blogs({
  description = '',
  seoData,
  breadcrumbs,
  categories,
  newestBlog,
  trendingArticles,
  footerContent,
}: IBlogsScreen) {
  const filteredCategories = getFilteredBlogsCategories(categories);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      salesChannel={pageToSalesChannels.BLOG}
      className={styles.blogsStyles}
      isBlogsPage
    >
      <div className={styles.blogs}>
        <TitleSection seoData={seoData} description={description} />
        <div className={styles.categoriesBlock}>
          <SearchInputBlock label="Search..." />
          <CategoriesListBlock categories={categories} />
        </div>
        <TrendingArticles trendingArticles={trendingArticles} />
        <SubscribeBlock categories={categories} />
        <DetailCategories filteredCategories={filteredCategories} newestBlog={newestBlog} />
      </div>
    </Layout>
  );
}

export default Blogs;
