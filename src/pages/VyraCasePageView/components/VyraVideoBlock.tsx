import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import ContentText from '../../../components/ContentText/ContentText';
import Poster from '@/images/vyraCasePage/videoBlock/img_poster.webp';
import VideoBg from '@/images/vyraCasePage/videoBlock/img_video_bg.webp';
import VideoBgTablet from '@/images/vyraCasePage/videoBlock/img_video_bg_tablet.webp';
import VideoBgMobile from '@/images/vyraCasePage/videoBlock/img_video_bg_mobile.webp';

import styles from '../sass/vyraVideoBlock.module.scss';

function VyraVideoBlock() {
  const videoSrc = '/static/video/vyra.mp4';
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    if (isXSDevice) {
      return VideoBgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return VideoBgTablet;
    }
    return VideoBg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        src={getBackground()}
        alt="background"
        className={styles.bg}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        fill
      />
      <PageContainer className={styles.container}>
        <ContentText className={styles.name} tag="p">[ Client Testimonial ]</ContentText>
        <MainTitle className={styles.title}>
          Here is our client&apos;s statement about their experience with the Onix services
        </MainTitle>
        <div className={styles.videoContainer}>
          <VideoPlayer
            src={videoSrc}
            poster={Poster}
            classes={{
              controls: 'screen-md:!w-[100.5%] screen-md:!h-[100.5%]',
            }}
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default VyraVideoBlock;
