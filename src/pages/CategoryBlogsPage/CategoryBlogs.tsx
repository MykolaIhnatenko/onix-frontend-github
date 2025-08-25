import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../layout/Layout';
import { ICategoryBlogsPageView } from '../../interfaces/ICategories';
import CategoryDescriptionBlock from '../../components/CategoryDescriprionBlock/CategoryDescriptionBlock';
import PageContainer from '../../components/PageContainer/PageContainer';
import useBackground from '../../hook/useBackground';
import ImageComponent from '../../components/Image/Image';
import Category from '../Blogs/components/Category';
import { BlogPreviewsCarouselVariant, CategoryVariant } from '../../constants/enums';
import Pagination from '../../components/Pagination/Pagination';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import BlogPreviewsSelector from '../Blogs/components/BlogPreviewsSelector';
import BlogPreview from '../Blogs/components/BlogPreview';

import CategoryPageBgMobile from '@/images/category/img_category_page_mobile@2x.webp';
import CategoryPageBgTablet from '@/images/category/img_category_page_tablet@2x.webp';
import CategoryPageBg from '@/images/category/img_category_page@2x.webp';
import styles from './sass/categoryBlogsPage.module.scss';

function CategoryBlogs({
  seoData,
  breadcrumbs,
  title,
  url,
  description,
  blogSubcategories,
  blogs,
  pagination,
  subcategoryUrl,
  salesChannel,
  footerContent,
}:ICategoryBlogsPageView) {
  const {
    screenSizes: {
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const bg = useBackground(CategoryPageBg, CategoryPageBgTablet, CategoryPageBgMobile);
  const firstBlogs = blogs?.slice(0, isMDDevice ? 1 : 2);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      salesChannel={salesChannel}
      isBlogsPage
      className={styles.overflow}
    >
      <div className={styles.categoryBlogs}>
        <div className={styles.bg}>
          {bg && (
            <ImageComponent
              src={bg}
              fill
              alt="figures"
            />
          )}
        </div>
        <PageContainer className={styles.container}>
          <CategoryDescriptionBlock
            title={title}
            description={description}
          />
          {blogSubcategories && blogSubcategories?.length > 0 && (
          <div className={styles.subcategories}>
            {blogSubcategories?.map(({
              id,
              attributes: {
                name,
                url: subcatUrl,
              },
            }) => (
              <Category
                key={id}
                title={name}
                url={url}
                subcategoryUrl={subcatUrl}
                variant={CategoryVariant.CATEGORY_PAGE}
              />
            ))}
          </div>
          )}
        </PageContainer>
        <BlogPreviewsSelector
          blogs={firstBlogs}
          variant={BlogPreviewsCarouselVariant.BIG_PREVIEWS}
          generalSubcategory
          categoryUrl={url}
        />
        <PageContainer>
          <div className={styles.blogsContainer}>
            {blogs?.slice(isMDDevice ? 1 : 2)
              ?.map((item) => (
                <BlogPreview
                  key={item.id}
                  item={item}
                  variant={BlogPreviewsCarouselVariant.SINGLE_BLOG}
                  generalSubcategory
                  categoryUrl={url}
                />
              ))}
          </div>
        </PageContainer>
        <Pagination
          pagination={pagination}
          category={url}
          subcategory={subcategoryUrl}
        />
      </div>
    </Layout>
  );
}

export default CategoryBlogs;
