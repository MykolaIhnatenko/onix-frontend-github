import PageContainer from '../PageContainer/PageContainer';
import useBackground from '../../hook/useBackground';
import BlogsCalculateBg from '@/images/blogsPage/img_blogs_calculate_bg@2x.webp';
import BlogsCalculateBgTablet from '@/images/blogsPage/img_blogs_calculate_bg_tablet@2x.webp';
import BlogsCalculateBgMobile from '@/images/blogsPage/img_blogs_calculate_bg_mobile@2x.webp';
import ImageComponent from '../Image/Image';
import { MD_DEVICE } from '../../constants/constants';
import IBlogButtonSection from './interfaces/IBlogButtonSection';

import styles from './sass/blogButtonSection.module.scss';

function BlogButtonSection({ children }: IBlogButtonSection) {
  const background = useBackground(
    BlogsCalculateBg,
    BlogsCalculateBgTablet,
    BlogsCalculateBgMobile,
    MD_DEVICE,
  );

  return (
    <section className={styles.calculate}>
      {background && (
      <ImageComponent
        src={background}
        fill
        alt="calculate-background"
        className={styles.bg}
        sizes="100vw"
      />
      )}
      <PageContainer className={styles.container}>
        {children}
      </PageContainer>
    </section>
  );
}

export default BlogButtonSection;
