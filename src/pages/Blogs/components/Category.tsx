import { useRouter } from 'next/router';

import { ICategoryItem } from '../interfaces/ICategoriesListBlock';
import LinkComponent from '../../../components/Link/Link';

import styles from '../sass/category.module.scss';

function Category({
  title, url, subcategoryUrl, variant,
}: ICategoryItem) {
  const { asPath } = useRouter();

  const replacedAsPath = asPath.replace(/\/\d+$/, '');

  const getHref = () => (subcategoryUrl ? `/blogs/${url}/${subcategoryUrl}` : `/blogs/${url}`);

  return (
    <LinkComponent href={getHref()}>
      <div
        className={`${styles.category} ${variant && replacedAsPath === getHref() ? styles.active : ''}`}
      >
        <p>{title}</p>
      </div>
    </LinkComponent>
  );
}

export default Category;
