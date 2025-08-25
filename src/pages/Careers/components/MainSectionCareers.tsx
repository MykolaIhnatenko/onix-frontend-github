import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';

import CareerMainSectionBg from '@/images/careers/mainScreen/img_CareerMainSectionBg@2x.webp';
import CareersMainScreenBg from '@/images/careers/mainScreen/main_screen_bg@2x.webp';
import CareersMainScreenBgTablets from '@/images/careers/mainScreen/main_screen_bg_tablets@2x.webp';
import CareersMainScreenBgMobile from '@/images/careers/mainScreen/main_screen_bg_mobile@2x.webp';
import styles from '../sass/MainSectionCareers.module.scss';

function MainSectionCareers() {
  const [background, setBackground] = useState<StaticImageData>();
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  useEffect(() => {
    const getBackground = () => {
      let bg = CareersMainScreenBg;
      if (isMDDevice) {
        bg = CareersMainScreenBgTablets;
      } else if (isSMDevice || isXSDevice) {
        bg = CareersMainScreenBgMobile;
      }
      setBackground(bg);
    };
    getBackground();
  }, [isMDDevice, isSMDevice, isXSDevice]);

  return (
    <div className={`d-flex d-row ${styles.container}`}>
      <div className={styles.background}>
        {background && (
          <ImageComponent
            src={background}
            alt="TrustUsBackground"
            fill
            priority
            className={styles.backgroundImg}
          />
        )}
      </div>
      <div className={styles.leftCol}>
        <div className="d-flex d-col">
          <MainTitle tag="h1" capitalize className={styles.mainTitle}>
            Join our growing
            {' '}
            <br className={styles.mobileSpace} />
            team
          </MainTitle>
          <ContentText tag="p" className={styles.topText}>
            Onix is a top Ukrainian IT company with 23 years of experience with
            international clients. Our projects involve web and mobile app development,
            AR and VR technologies, AI, ML, and more, and our team is continuously enriched
            with new specializations and talent.
          </ContentText>
        </div>
        <div>
          <ContentText tag="p" className={styles.bottomText}>
            If you are a tech enthusiast, quick learner, and team player, you are
            more than welcome to Onix! You will meet other professionals, mentors,
            caring managers, and new friends here. Together, we can create great things,
            advance technologies, and grow!
          </ContentText>
        </div>
      </div>
      <div className={`d-flex d-col ${styles.rightCol}`}>
        <div className={styles.content}>
          {!isMobile && (
          <div className={styles.bgMobile}>
            <ImageComponent
              src={CareerMainSectionBg}
              alt="TrustUsBackground"
              fill
              priority
            />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSectionCareers;
