import { DateTime } from 'luxon';

import ContentText from '../../../components/ContentText/ContentText';
import IBlogInfoBlock from '../interfaces/IBlogInfoBlock';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';

import styles from '../sass/blogInfoBlock.module.scss';

function BlogInfoBlock({
  datePublication, timeToReading, views, variant, carouselVariant,
}: IBlogInfoBlock) {
  return (
    <div className={`${styles.blogInfoBlock} ${variant ? styles[variant] : ''} d-flex d-row d-item-center`}>
      {datePublication && (
        <ContentText tag="p" className={styles.blogInfo}>
          {DateTime.fromISO(datePublication).toFormat('LLL dd,yyyy')}
        </ContentText>
      )}
      <span className={styles.circle} />
      <ContentText tag="p" className={styles.blogInfo}>
        {timeToReading || 15}
        {' '}
        min read
      </ContentText>
      <span className={`${styles.circle} ${carouselVariant === BlogPreviewsCarouselVariant.BIG_PREVIEWS
        || carouselVariant === BlogPreviewsCarouselVariant.TOP_BLOGS_PREVIEW
        ? styles.bigPreviewCircle : ''}`}
      />
      <ContentText
        tag="p"
        className={`${styles.blogInfo} ${carouselVariant === BlogPreviewsCarouselVariant.TOP_BLOGS_PREVIEW
          || carouselVariant === BlogPreviewsCarouselVariant.BIG_PREVIEWS ? styles.bigPreviewBlogInfo : ''}`}
      >
        {views || 100}
        {' '}
        views
      </ContentText>
    </div>
  );
}

export default BlogInfoBlock;
