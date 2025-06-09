import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

import DetailCategory from './DetailCategory';
import Calculate from './Calculate';
import Switch from './Switch';
import IDetailCategories from '../interfaces/IDetailCategories';

import styles from '../sass/blogPreview.module.scss';

const BlogButtonSection = dynamic(() => import(
  '../../../components/BlogButtonSection/BlogButtonSection'
), { ssr: false });

const DownloadEbookBlock = dynamic(() => import(
  './DownloadEbookBlock'
), { ssr: false });

const BlogsNewArticleSection = dynamic(() => import(
  './BlogsNewArticleSection'
), { ssr: false });

function DetailCategories({ filteredCategories, newestBlog }: IDetailCategories) {
  return (
    <div className={styles.detailCategoriesContainer}>
      {filteredCategories?.map(({
        id, attributes: {
          title,
          url,
          description: categoryDescription,
          blogSubcategories,
          blogs,
        },
      }, index) => (
        <Fragment key={id}>
          <DetailCategory
            key={id}
            title={title}
            url={url}
            description={categoryDescription}
            blogSubcategories={blogSubcategories}
            blogs={blogs}
          />
          {index === 2 && (
            <BlogButtonSection>
              <Calculate />
            </BlogButtonSection>
          )}
          {index === 5 && <BlogsNewArticleSection newestBlog={newestBlog} />}
          {index === 8 && <DownloadEbookBlock />}
          {index === 11 && (
            <BlogButtonSection>
              <Switch />
            </BlogButtonSection>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default DetailCategories;
