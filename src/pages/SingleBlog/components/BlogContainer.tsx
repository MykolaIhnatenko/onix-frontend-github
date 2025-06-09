import IPageContainer from 'components/PageContainer/interfaces/IPageContainer';

import styles from '../sass/blogContainer.module.scss';

function BlogContainer({ children, className = '' }: IPageContainer) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

export default BlogContainer;
