import useWindowSize from '../../../hook/useWindowSize';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { MD_DEVICE } from '../../../constants/constants';
import IVideoBlockProps from '../interfaces/IVideoBlock';

import VRVideoPlaceholder from '@/images/vrServicesPage/img_vr_placeholder_video.webp';
import VRVideoBg from '@/images/vrServicesPage/img_vr_bg_video.webp';
import styles from '../sass/videoBlock.module.scss';

function VideoBlock({ title, subtitle }: IVideoBlockProps) {
  const videoSrc = '/static/video/vr-ar-video.mp4';
  const { width } = useWindowSize();
  const isMobile = width <= MD_DEVICE;

  return (
    <section className={styles.section}>
      {!isMobile && <ImageComponent className={styles.bgImage} src={VRVideoBg} alt="Background" />}
      <PageContainer className={styles.container}>
        <div className={styles.textBlock}>
          <MainTitle className={styles.title}>{title}</MainTitle>
          <ContentText tag="p" className={styles.text}>{subtitle}</ContentText>
        </div>
        <div className={styles.videoBlock}>
          <VideoPlayer src={videoSrc} poster={VRVideoPlaceholder} />
        </div>
      </PageContainer>
    </section>
  );
}

export default VideoBlock;
