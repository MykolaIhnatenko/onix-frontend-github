import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { LG_DEVICE } from '../../../constants/constants';

import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import OnixStoryRomanSerebryakov from '@/images/onixStory/img_main_man.webp';
import OnixStoryRomanSerebryakovMobile from '@/images/onixStory/img_main_man_mobile@2x.webp';
import styles from '../sass/onixStoryMain.module.scss';

function OnixStoryMainBlock() {
  const {
    screenSizes: {
      isXXXLDevice, isMDDevice, isSMDevice, isXSDevice, screenWidth,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: IndustriesMainBg,
      mainIamge: OnixStoryRomanSerebryakov,
    };
    if (isXXXLDevice) {
      bg.background = IndustriesMainBgBigDesc;
    } else if (isMDDevice || isSMDevice) {
      bg.background = IndustriesMainBgTablet;
    } else if (isXSDevice) {
      bg.mainIamge = OnixStoryRomanSerebryakovMobile;
      bg.background = IndustriesMainBgMobile;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      {screenWidth > LG_DEVICE && (
        <div className={styles.background}>
          <ImageComponent
            className={styles.bgImage}
            src={getBackground().background}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}
      <div className={styles.leftColum}>
        {screenWidth <= LG_DEVICE && (
          <div className={styles.leftColumBg}>
            <ImageComponent
              className={styles.bgImage}
              src={getBackground().background}
              alt="MainBackground"
              fill
              priority
              sizes="100vw"
            />
          </div>
        )}
        <div className={styles.content}>
          <MainTitle className={styles.title} tag="h1">Onix’s story</MainTitle>
          <ContentText tag="p" className={styles.text}>
            Onix was founded in 2000 by three technology enthusiasts:
            Roman Serebryakov, Edward Prykhodkin, and Dmitry Durach.
          </ContentText>
          <ContentText tag="p" className={styles.text}>
            Roman Serebryakov, founder:
            <br />
            “At that time, Ukraine was experiencing a web development boom but lacked expertise in more advanced
            technologies. Our vision was to offer
            premium services and solve everyday business problems through the emerging tech power.”
          </ContentText>
        </div>
      </div>
      <div className={styles.rightColum}>
        <ImageComponent
          className={styles.bgRight}
          src={getBackground().mainIamge}
          alt="photo"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export default OnixStoryMainBlock;
