import IRelatedBlogsBlock from '../interfaces/IRelatedBlogsBlock';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import BlogPreviewsList from '../../Blogs/components/BlogPreviewsList';
import { useAppSelector } from 'hook/reduxToolkit';

import styles from '../sass/relatedBlogsBlock.module.scss';

function RelatedBlogsBlock({ relatedBlogs }: IRelatedBlogsBlock) {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state.app);
  const isMinDesctop = screenWidth <= 1280;
  const firstBlogs = isMinDesctop ? relatedBlogs?.slice(0, 2) : relatedBlogs?.slice(0, 3);
  const centerBlogs = relatedBlogs?.slice(2, 4);
  const lastBlogs = isMinDesctop ? relatedBlogs?.slice(4, 6) : relatedBlogs?.slice(3, 6);

  return (
    <div className={styles.relatedBlogs}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Related articles
        </MainTitle>
      </PageContainer>
      <div className={styles.blogsWrapper}>
        <BlogPreviewsList
          blogs={firstBlogs}
          variant={BlogPreviewsCarouselVariant.SINGLE_BLOG_BOTTOM}
        />
        {isMinDesctop && (
          <BlogPreviewsList
            blogs={centerBlogs}
            variant={BlogPreviewsCarouselVariant.SINGLE_BLOG_BOTTOM}
          />
        )}
        <BlogPreviewsList
          blogs={lastBlogs}
          variant={BlogPreviewsCarouselVariant.SINGLE_BLOG_BOTTOM}
        />
      </div>
    </div>
  );
}

export default RelatedBlogsBlock;
