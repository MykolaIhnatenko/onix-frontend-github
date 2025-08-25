import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import { useAppSelector } from 'hook/reduxToolkit';

import CrossPlatfromIPhone from '@/images/crossplatformDesign/img_iphone.webp';
import CrossPlatfromSamsung from '@/images/crossplatformDesign/img_samsung.webp';
import BgImg from '@/images/crossplatformDesign/img_main_bg.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import styles from '../sass/CrossPlatformMainSection.module.scss';

function CrossPlatformMainSection() {
  const [coordinatesIphone, setCoordinatesIphone] = useState({ left: 0, top: -15 });
  const [coordinatesSamsung, setCoordinatesSamsung] = useState({ left: 0, top: -15 });
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef);

  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: IndustriesMainBg,
    };
    if (isXXXLDevice) {
      bg.background = IndustriesMainBgBigDesc;
    } else if (isMDDevice) {
      bg.background = IndustriesMainBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = IndustriesMainBgMobile;
    }

    return bg;
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (Number.isFinite(clientX) && Number.isFinite(clientY)) {
        const element = document?.elementFromPoint(clientX, clientY);
        if (element) {
          setTimeout(() => {
            setCoordinatesIphone({ left: clientX / 17, top: clientY / 17 });
            setCoordinatesSamsung({ left: clientX / 22, top: clientY / 22 });
          }, 50);
        }
      }
    };

    if (inView) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <section
      className={styles.mainSection}
      ref={containerRef}
    >
      <div className={styles.bgContainer}>
        <ImageComponent
          src={getBackground().background}
          alt="MainBackground"
          priority
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <MainTitle tag="h1" className={styles.title}>
            Cross-Platform Design & Development Services
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            Onix is your trusted cross-platform mobile app development company that professionally combines
            cutting-edge technologies with industry best practices to build high-performance, feature-rich
            apps that work seamlessly across multiple platforms.
          </ContentText>
          <ContentText tag="p" className={styles.text}>
            Whether you need to build a brand-new app from scratch or enhance an existing one, we have the
            technical proficiency and creativity to bring your vision to life.
          </ContentText>
        </div>
        <div
          className={styles.animationBlock}
        >
          <ImageComponent
            src={BgImg}
            priority
            sizes="100vw"
            alt="background"
            fill
          />
          <div className={styles.samsungContainer}>
            <ImageComponent
              width={280}
              height={660}
              priority
              className={styles.samsung}
              sizes="100vw"
              alt="phone"
              src={CrossPlatfromSamsung}
              data-disable-interaction="true"
              style={{
                transform: `translate(${coordinatesSamsung.left}px, ${coordinatesSamsung.top}px)`,
              }}
            />
          </div>
          <div className={styles.iphoneContainer}>
            <ImageComponent
              width={240}
              height={620}
              sizes="100vw"
              className={styles.iphone}
              alt="phone"
              priority
              src={CrossPlatfromIPhone}
              data-disable-interaction="true"
              style={{
                transform: `translate(${coordinatesIphone.left}px, ${coordinatesIphone.top}px)`,
              }}
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CrossPlatformMainSection;
