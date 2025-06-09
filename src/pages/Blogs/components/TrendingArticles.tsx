import { useAppSelector } from 'hook/reduxToolkit';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ITrendingArticles from '../interfaces/ITrendingArticles';
import BlogPreviewCarousel from './BlogPreviewsCarousel';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import { XXL_DEVICE } from '../../../constants/constants';
import BlogPreviewsList from './BlogPreviewsList';

import styles from '../sass/trendingArticles.module.scss';

function TrendingArticles({ trendingArticles }: ITrendingArticles) {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state.app);
  const trendingArticlesBigDesc = trendingArticles.slice(0, 2);

  return (
    <div className={styles.trendingArticles}>
      <PageContainer className={styles.container}>
        <MainTitle>
          Trending Articles
        </MainTitle>
        <div className={styles.textWrapper}>
          <ContentText tag="p" className={styles.text}>
            Discover the Onix blog about software development and IT technologies
            to stay updated about the latest technology trends and get lots of tips
            from software development experts.
          </ContentText>
        </div>
      </PageContainer>
      <div className={styles.blogsWrapper}>
        {screenWidth > XXL_DEVICE ? (
          <BlogPreviewsList
            blogs={trendingArticlesBigDesc}
            variant={BlogPreviewsCarouselVariant.TRENDING_ARTICLES}
            mainTitleTag="h3"
          />
        ) : (
          <BlogPreviewCarousel
            blogs={trendingArticles}
            variant={BlogPreviewsCarouselVariant.TOP_BLOGS_PREVIEW}
            mainTitleTag="h3"
          />
        )}
      </div>
    </div>
  );
}
export default TrendingArticles;
