import { useMemo } from 'react';

import useWindowSize from '../../../../hook/useWindowSize';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import VideoBlock from '../../../../components/CasesComponents/VideoBlock/VideoBlock';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRVideoBlock.module.scss';

const imgMobile = '/static/images/Pages/InnerVR/problemSection/img_mobile@2x.webp';
const imgTablet = '/static/images/Pages/InnerVR/problemSection/img_tablet@2x.webp';
const imgDesktop = '/static/images/Pages/InnerVR/problemSection/img_@2x.webp';
const problemVideo = '/static/video/about-video.mp4';
function InnerVRVideoBlock() {
  const { width } = useWindowSize();

  const { src, imgWidth, imgHeight } = useMemo(() => {
    const values = { src: imgDesktop, imgWidth: 610, imgHeight: 397 };
    if (width < 968) {
      values.src = imgTablet;
      values.imgWidth = 658;
      values.imgHeight = 397;
    }
    if (width < 450) {
      values.src = imgMobile;
      values.imgWidth = 295;
      values.imgHeight = 192;
    }

    return values;
  });

  const ImageComponenta = (
    <div className={styles.image}>
      <ImageComponent
        src={src}
        width={imgWidth}
        height={imgHeight}
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
        alt="woman"
      />
    </div>
  );

  return (
    <div className={styles.videoBlock}>
      <div className={`${styles.videoBlockContent} leftFlex`}>
        <VRARPageAppearAnimation tag="p" classes="title">
          The problems InnerVR solves
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
          Regular mindfulness practice benefits people both mentally and physically.
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation tag="p" classes={`${styles.text} text`}>
          Unfortunately, often people who need it most can’t do it due to trouble focusing attention
          or lack of motivation.
        </VRARPageAppearAnimation>
      </div>
      <div className={`${styles.videoContainer} rightFlex`}>
        <VideoBlock
          videoSrc={problemVideo}
          imgSrc={src}
          videoId="innerVRVideo"
          imageComponent={ImageComponenta}
        />
      </div>
    </div>
  );
}

export default InnerVRVideoBlock;
