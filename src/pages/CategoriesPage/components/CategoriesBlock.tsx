import { ICategoriesBlock } from '../interfaces/ICategoriesPageView';
import Category from './Category';

import styles from '../sass/categoriesBlock.module.scss';

function CategoriesBlock({ categories }: ICategoriesBlock) {
  return (
    <div className={styles.categoriesBlock}>
      <div className={styles.categories}>
        {categories?.data?.map(({ id, attributes: { title, url, blogSubcategories } }) => (
          <Category
            key={id}
            title={title}
            url={url}
            blogSubcategories={blogSubcategories}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesBlock;
