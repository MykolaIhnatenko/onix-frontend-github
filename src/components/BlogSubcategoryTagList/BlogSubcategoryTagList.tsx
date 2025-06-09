import BlogSubcategoryTag from '../BlogSubcategoryTag/BlogSubcategoryTag';
import IBlogSubcategoryTagList from '../../pages/Blogs/interfaces/IBlogSubcategoryTagList';

import styles from './sass/blogSubcategoryTagList.module.scss';

function BlogSubcategoryTagList({ data = [], variant }:IBlogSubcategoryTagList) {
  return (
    <div className={`d-flex d-row ${styles.container} ${variant ? styles[variant] : ''}`}>
      {data?.map(({
        id,
        attributes: { name } = {},
      }) => (
        <BlogSubcategoryTag
          key={id}
          text={name || ''}
          variant={variant}
        />
      ))}
    </div>
  );
}
export default BlogSubcategoryTagList;
