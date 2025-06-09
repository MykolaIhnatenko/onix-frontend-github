import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import MainTitle from '../../../components/MainTitle/MainTitle';
import MainBg from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainBg@2x.webp';
import MainTabletBg from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainTabletBg@2x.webp';
import MainMobileBg from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainMobileBg@2x.webp';
import MainLogo from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainLogo@2x.webp';
import MainLogoTablet from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainTabletLogo@2x.webp';
import MainLogoMobile from '../../../assets/images/fitnessCoachingCaseStudyPageView/mainBlock/img_mainMobileLogo@2x.webp';

import styles from '../sass/fitnessCoachingMainBlock.module.scss';

function FitnessCoachingMainBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: MainBg,
      logo: MainLogo,
    };
    if (isMDDevice) {
      bg.background = MainTabletBg;
      bg.logo = MainLogoTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = MainMobileBg;
      bg.logo = MainLogoMobile;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <ImageComponent
              src={getBackground().logo}
              alt="logo"
              sizes="100vw"
            />
          </div>
          <MainTitle tag="h1" className={styles.title}>
            A platform
            <br />
            for online fitness coaching
          </MainTitle>
        </div>
      </div>
    </div>
  );
}

export default FitnessCoachingMainBlock;
