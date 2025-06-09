import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useSelector } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import ChinEasyGreenHero from '@/images/chinEasy/mainSection/img_green@2x.webp';
import ChinEasyGreenHeroTablet from '@/images/chinEasy/mainSection/img_green_tablet@2x.webp';
import ChinEasyGreenHeroMobile from '@/images/chinEasy/mainSection/img_green_mobile@2x.webp';
import ChinEasyOrangeHero from '@/images/chinEasy/mainSection/img_orange@2x.webp';
import ChinEasyOrangeHeroTablet from '@/images/chinEasy/mainSection/img_orange_tablet@2x.webp';
import ChinEasyOrangeHeroMobile from '@/images/chinEasy/mainSection/img_orange_mobile@2x.webp';
import ChinEasyPinkHero from '@/images/chinEasy/mainSection/img_pink@2x.webp';
import ChinEasyPinkHeroTablet from '@/images/chinEasy/mainSection/img_pink_tablet@2x.webp';
import ChinEasyPinkHeroMobile from '@/images/chinEasy/mainSection/img_pink_mobile@2x.webp';
import ChinEasyPurpleHero from '@/images/chinEasy/mainSection/img_purple@2x.webp';
import ChinEasyPurpleHeroTablet from '@/images/chinEasy/mainSection/img_purple_tablet@2x.webp';
import ChinEasyPurpleHeroMobile from '@/images/chinEasy/mainSection/img_purple_mobile@2x.webp';
import ChinEasyMainPhone from '@/images/chinEasy/mainSection/img_iphone@2x.webp';
import ChinEasyMainPhoneTablet from '@/images/chinEasy/mainSection/img_iphone_tablet@2x.webp';
import ChinEasyMainPhoneMobile from '@/images/chinEasy/mainSection/img_iphone_mobile@2x.webp';

import styles from '../sass/chinEasyMainSecion.module.scss';

function ChinEasyMainSection() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      phone: ChinEasyMainPhone,
      orange: ChinEasyOrangeHero,
      green: ChinEasyGreenHero,
      pink: ChinEasyPinkHero,
      purple: ChinEasyPurpleHero,
    };
    if (isMDDevice) {
      bg.phone = ChinEasyMainPhoneTablet;
      bg.orange = ChinEasyOrangeHeroTablet;
      bg.green = ChinEasyGreenHeroTablet;
      bg.pink = ChinEasyPinkHeroTablet;
      bg.purple = ChinEasyPurpleHeroTablet;
    } else if (isSMDevice || isXSDevice) {
      bg.phone = ChinEasyMainPhoneMobile;
      bg.orange = ChinEasyOrangeHeroMobile;
      bg.green = ChinEasyGreenHeroMobile;
      bg.pink = ChinEasyPinkHeroMobile;
      bg.purple = ChinEasyPurpleHeroMobile;
    }

    return bg;
  };

  const isTabletOrMobile = isSMDevice || isXSDevice || isMDDevice;

  const containerRef = useRef<HTMLElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);
  const pinkRef = useRef<HTMLDivElement>(null);
  const purpleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  useEffect(() => {
    const orangeElement = orangeRef.current;
    const greenElement = greenRef.current;
    const pinkElement = pinkRef.current;
    const purpleElement = purpleRef.current;

    const isElementsExist = orangeElement && greenElement && pinkElement && purpleElement;

    const handleMouseMove = (event: MouseEvent) => {
      if (isElementsExist) {
        const rotate = `${event.pageY / 90}deg`;
        const transformX = `${event.pageX / 32}px`;
        const transformY = `${event.pageY / 22}px`;
        orangeElement.style.transform = `translate3d(
        ${transformX}, ${transformY}, 0px) scale3d(1, 1, 1) rotateZ(${rotate}`;
        greenElement.style.transform = `translate3d(
        ${transformX}, ${transformY}, 0px) scale3d(1, 1, 1) rotateZ(${rotate}`;
        pinkElement.style.transform = `translate3d(
        ${transformX}, ${transformY}, 0px) scale3d(1, 1, 1) rotateZ(${rotate})`;
        purpleElement.style.transform = `translate3d(
        ${transformX}, ${transformY}, 0px) scale3d(1, 1, 1) rotateZ(${rotate}`;
      }
    };

    if (isTabletOrMobile && isElementsExist) {
      orangeElement.style.transform = '';
      greenElement.style.transform = '';
      pinkElement.style.transform = '';
      purpleElement.style.transform = '';
    }

    if (inView && !isTabletOrMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [inView, isTabletOrMobile]);

  return (
    <section className={styles.mainSection} ref={containerRef}>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <MainTitle tag="h1" className={styles.title}>
            ChinEasy —
            <br />
            a language learning app
          </MainTitle>
          <MainTitle tag="p" className={styles.subtitle}>
            UX/UI case study
          </MainTitle>
        </div>
        <div className={styles.imagesBlock}>
          <div className={styles.phone}>
            <ImageComponent
              src={getBackground().phone}
              alt="phone"
              quality={90}
              fill
            />
          </div>
          <div className={styles.orange} ref={orangeRef}>
            <ImageComponent
              src={getBackground().orange}
              quality={90}
              alt="orange-hero"
              fill
            />
          </div>
          <div className={styles.green} ref={greenRef}>
            <ImageComponent
              src={getBackground().green}
              quality={90}
              alt="green-hero"
              fill
            />
          </div>
          <div className={styles.pink} ref={pinkRef}>
            <ImageComponent
              src={getBackground().pink}
              quality={90}
              alt="pink-hero"
              fill
            />
          </div>
          <div className={styles.purple} ref={purpleRef}>
            <ImageComponent
              src={getBackground().purple}
              quality={90}
              alt="purple-hero"
              fill
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ChinEasyMainSection;
