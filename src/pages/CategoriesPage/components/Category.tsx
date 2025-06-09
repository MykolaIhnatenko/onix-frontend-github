import { useEffect } from 'react';

import { ICategory } from '../interfaces/ICategoriesPageView';
import MainTitle from '../../../components/MainTitle/MainTitle';
import LinkComponent from '../../../components/Link/Link';
import Subcategory from './Subcategory';

import styles from '../sass/category.module.scss';

function Category({ url, title, blogSubcategories }: ICategory) {
  useEffect(() => {
    const categoryNodeList = document.querySelectorAll('.blogsCategory');
    if (categoryNodeList.length % 2 === 0) {
      categoryNodeList[categoryNodeList.length - 2].classList.add(styles.lastEvenCategory);
    } else if (categoryNodeList.length % 2 !== 0) {
      categoryNodeList[categoryNodeList.length - 2].classList.add(styles.lastOddCategory);
      categoryNodeList[categoryNodeList.length - 3].classList.add(styles.lastOddCategory);
    }
  }, []);

  return (
    <div className={`${styles.category} blogsCategory`}>
      <LinkComponent href={`/blogs/${url}`}>
        <MainTitle className={styles.title}>{title}</MainTitle>
      </LinkComponent>
      <div className={styles.subcategories}>
        {blogSubcategories?.data?.length !== 0
          ? blogSubcategories?.data?.map(({ id: subId, attributes: { name: subtitle, url: subcategoryUrl } }) => (
            <Subcategory key={subId} href={`/blogs/${url}/${subcategoryUrl}`} subtitle={subtitle} />
          )) : (
            <Subcategory href={`/blogs/${url}`} subtitle="View All" />
          )}
      </div>
    </div>
  );
}

export default Category;
