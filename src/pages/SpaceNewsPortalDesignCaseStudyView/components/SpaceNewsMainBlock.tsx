import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import useWindowSize from '../../../hook/useWindowSize';
import ImageComponent from '../../../components/Image/Image';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import { MD_DEVICE } from '../../../constants/constants';
import ISpaceNewsMainBlok from '../interfaces/ISpaceNewsMainBlok';
import { SpaceNewsMainBlokVariant } from '../../../constants/enums';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import MainBg from '@/images/spaceNewsPage/mainBlock/img_main_bg.webp';
import MainBgTablet from '@/images/spaceNewsPage/mainBlock/img_main_bg_tablet.webp';
import MainBgMobile from '@/images/spaceNewsPage/mainBlock/img_main_bg_mobile.webp';
import DarkMainBg from '@/images/animatedConceptCaseStudyPage/mainBlock/img_dark_main_bg.webp';
import DarkMainBgTablet from '@/images/animatedConceptCaseStudyPage/mainBlock/img_dark_main_bg_tablet.webp';
import DarkMainBgMobile from '@/images/animatedConceptCaseStudyPage/mainBlock/img_dark_main_bg_mobile.webp';

import styles from '../sass/spaceNewsMainBlok.module.scss';

function SpaceNewsMainBlok({
  title, text, video, variant, videoBaner, background,
}: ISpaceNewsMainBlok) {
  const { width } = useWindowSize();
  const isMobile = width < MD_DEVICE;
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBg: variant === SpaceNewsMainBlokVariant.ANIMATED_CONCEPT ? DarkMainBg : MainBg,
    };
    if (isMDDevice) {
      bg.mainBg = variant === SpaceNewsMainBlokVariant.ANIMATED_CONCEPT ? DarkMainBgTablet : MainBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = variant === SpaceNewsMainBlokVariant.ANIMATED_CONCEPT ? DarkMainBgMobile : MainBgMobile;
    }
    return bg;
  };

  return (
    <section className={`${styles.section} ${variant ? styles[variant] : ''}`}>
      <ImageComponent
        src={background || getBackground().mainBg}
        alt="MainBackground"
        fill
        priority
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      <PageContainer className={styles.container}>
        <div className={styles.leftColum}>
          <MainTitle className={styles.title} tag="h1">{title}</MainTitle>
          {text && (
          <ContentText tag="p" className={styles.text}>
            {text}
          </ContentText>
          )}
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <VideoPlayer
              src={video}
              loopVariant={variant !== SpaceNewsMainBlokVariant.SPATIO}
              autoPlayVariant={variant !== SpaceNewsMainBlokVariant.SPATIO}
              mutedVariant={variant !== SpaceNewsMainBlokVariant.SPATIO}
              withoutBtn={variant === SpaceNewsMainBlokVariant.SPATIO ? false : !isMobile}
              poster={videoBaner}
              controls={variant === SpaceNewsMainBlokVariant.SPATIO}
              classes={variant !== SpaceNewsMainBlokVariant.SPATIO
                ? {
                  videoPlayer: '!aspect-auto',
                  video: '!rounded-[18px] screen-md:!rounded-[8px]',
                }
                : {
                  controls: '!w-[688px] !h-[58px] !bottom-[8px] !py-[5px] '
                    + '!pr-[20px] !pl-[5px] screen-md:!p-0 screen-md:!w-full',
                  buttonControls: '!w-[48px] !h-[48px]',
                  progressBar: '!mt-[9px] screen-md:!mt-0',
                  zoomButton: '!ml-[20px]',
                }}
              priorityImage
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default SpaceNewsMainBlok;
