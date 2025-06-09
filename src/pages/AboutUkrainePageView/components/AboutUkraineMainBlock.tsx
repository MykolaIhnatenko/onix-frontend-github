import useWindowSize from '../../../hook/useWindowSize';
import useBackground from '../../../hook/useBackground';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import AboutUkraineMainBlockBg from '../../../assets/images/aboutUkraine/img_bg_main.webp';
import AboutUkraineMainBlockTablet from '../../../assets/images/aboutUkraine/img_bg_main_tablet.webp';
import AboutUkraineMainBlockMobile from '../../../assets/images/aboutUkraine/img_bg_main_mobile.webp';
import AboutUkraineFlagOfUkraine from '../../../assets/images/aboutUkraine/img_flag_ukraine.webp';
import ImageComponent from '../../../components/Image/Image';
import { MD_DEVICE, SM_DEVICE } from '../../../constants/constants';

import styles from '../sass/aboutUkraineMainBlock.module.scss';

function AboutUkraineMainBlock() {
  const videoSrc = '/static/video/symbol_of_ukraine.mp4';
  const { width } = useWindowSize();
  const isMobile = width < MD_DEVICE;
  const background = useBackground(
    AboutUkraineMainBlockBg,
    AboutUkraineMainBlockTablet,
    AboutUkraineMainBlockMobile,
    SM_DEVICE,
  );

  return (
    <section className={styles.section}>
      {background && (
      <ImageComponent
        className={styles.background}
        src={background}
        alt="background"
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        priority
      />
      )}
      <div className={styles.container}>
        <MainTitle className={styles.title} tag="h1">About Ukraine</MainTitle>
        <div className={styles.textWrapper}>
          <ContentText tag="p" className={styles.firstText}>
            Ukraine is the largest country entirely in Europe, with a population of around 42 million.
          </ContentText>
          <ContentText tag="p" className={styles.secondText}>
            The semi-presidential republic has a multi-party system. Initially neutral, in 2002,
            the country entered the NATO-Ukraine Action Plan reflecting the new Western-oriented
            generation’s values and aspirations.
          </ContentText>
        </div>
      </div>
      <div className={styles.videoContainer}>
        {!isMobile ? <VideoPlayer src={videoSrc} loopVariant autoPlayVariant mutedVariant controls={false} withoutBtn />
          : <ImageComponent src={AboutUkraineFlagOfUkraine} alt="flagUkraine" className={styles.imageFlag} priority />}
      </div>
    </section>
  );
}

export default AboutUkraineMainBlock;
