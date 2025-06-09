import {
  useEffect, useState, useMemo, useRef,
} from 'react';
import Plx from 'react-plx';

import { IHaasFlow } from '../interfaces/IHaasFlow';
import useWindowSize from '../../../hook/useWindowSize';
import Icons from '../../../assets/icon';
import { IParallaxConfig } from '../interfaces/IParallaxConfig';
import HaasText from './HaasText';
import { LG_DEVICE, MD_DEVICE, XXL_DEVICE } from 'constants/constants';

import styles from '../sass/HaasFlowSection.module.scss';

function HaasFlowSection({ isMaxDesktop, isTablet, isMobile }: IHaasFlow) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [firstAnimation, setFirstAnimation] = useState<IParallaxConfig[]>([]);
  const [secondAnimation, setSecondAnimation] = useState<IParallaxConfig[]>([]);
  const [thirdAnimation, setThirdAnimation] = useState<IParallaxConfig[]>([]);
  const [headerAnimation, setHeaderAnimation] = useState<IParallaxConfig[]>([]);
  const [subHeaderAnimation, setSubHeaderAnimation] = useState<IParallaxConfig[]>([]);
  const [imgAnimation, setImgAnimation] = useState<IParallaxConfig[]>([]);
  const [contentAnimation, setContentAnimation] = useState<IParallaxConfig[]>([]);
  const [scrollY, setScrollY] = useState<number>(0);

  const { width, height } = useWindowSize();

  const [firstTranslateX, thirdTranslateX, firstTranslateY, secondTranslateY, thirdTranslateY] = useMemo(() => {
    let values = [0, 0, 0, 0, 0];

    if (width >= XXL_DEVICE) {
      values = [-127, -48, 258, 198, -132];
    } else if (width < XXL_DEVICE && width > LG_DEVICE) {
      values = [-203.5, -80, 218, 174, 29];
    } else if (width <= LG_DEVICE && width >= MD_DEVICE) {
      values = [-137, -46.5, 0, -44, -189];
    }

    return values;
  }, [width]);

  const flowContent = [
    {
      id: 1,
      icon: <Icons.IconHaasFlow1 />,
      content: 'Application that automates Haas internal processes',
      parallaxData: firstAnimation,
    },
    {
      id: 2,
      icon: <Icons.IconHaasFlow3 />,
      content: 'Ecommerce app for buying and controlling machines',
      parallaxData: secondAnimation,
    },
    {
      id: 3,
      icon: <Icons.IconHaasFlow2 />,
      content: 'Service app for machines maintenance',
      parallaxData: thirdAnimation,
    },
  ];

  const handleScroll = () => {
    setScrollY(window.scrollY);

    const sectionOffsetTop = sectionRef.current?.offsetTop || 4000;
    const start = sectionOffsetTop > 0 ? sectionOffsetTop - 370 : 4000;

    const animationStartValue = isMaxDesktop ? 420 : 216;
    const animationEndValue = isMaxDesktop ? 420 : 268;
    const animationImageStartTopValue = 50;
    const animationImageEndTopValue = isMaxDesktop ? 24.5 : 16.5;
    const animationImageStartResizeValue = isMaxDesktop ? 168 : 87;
    const animationImageEndResizeValue = isMaxDesktop ? 168 : 70;

    setHeaderAnimation([
      {
        start,
        startOffset: 300,
        duration: 200,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
        ],
      },
    ]);

    setSubHeaderAnimation([
      {
        start,
        startOffset: 300,
        duration: 300,
        properties: [
          {
            startValue: 0,
            endValue: -220,
            unit: 'px',
            property: 'translateY',
          },
        ],
      },
    ]);

    setFirstAnimation([
      {
        start,
        startOffset: 300,
        duration: 600,
        properties: [
          {
            startValue: 0,
            endValue: firstTranslateX,
            unit: '%',
            property: 'translateX',
          },
          {
            startValue: 0,
            endValue: firstTranslateY,
            unit: 'px',
            property: 'translateY',
          },
          {
            startValue: animationStartValue,
            endValue: animationEndValue,
            unit: 'px',
            property: 'height',
          },
        ],
      },
    ]);

    setSecondAnimation([
      {
        start,
        startOffset: 300,
        duration: 600,
        properties: [
          {
            startValue: 0,
            endValue: 0,
            unit: '%',
            property: 'translateX',
          },
          {
            startValue: 0,
            endValue: secondTranslateY,
            unit: 'px',
            property: 'translateY',
          },
          {
            startValue: animationStartValue,
            endValue: animationEndValue,
            unit: 'px',
            property: 'height',
          },
        ],
      },
    ]);

    setThirdAnimation([
      {
        start,
        startOffset: 300,
        duration: 600,
        properties: [
          {
            startValue: 0,
            endValue: thirdTranslateX,
            unit: '%',
            property: 'translateX',
          },
          {
            startValue: 0,
            endValue: thirdTranslateY,
            unit: 'px',
            property: 'translateY',
          },
          {
            startValue: animationStartValue,
            endValue: animationEndValue,
            unit: 'px',
            property: 'height',
          },
        ],
      },
    ]);

    setImgAnimation([
      {
        start,
        startOffset: 950,
        duration: 150,
        properties: [
          {
            startValue: animationImageStartTopValue,
            endValue: animationImageEndTopValue,
            unit: '%',
            property: 'top',
          },
          {
            startValue: animationImageStartResizeValue,
            endValue: animationImageEndResizeValue,
            unit: 'px',
            property: 'height',
          },
          {
            startValue: animationImageStartResizeValue,
            endValue: animationImageEndResizeValue,
            unit: 'px',
            property: 'width',
          },
        ],
      },
    ]);

    setContentAnimation([
      {
        start,
        startOffset: 1100,
        duration: 300,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: 'opacity',
          },
        ],
      },
    ]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef.current, scrollY, width, height]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.flow}`}>
        <div className={styles.titleBlock}>
          <Plx
            parallaxData={headerAnimation}
            style={{ opacity: 1 }}
            disabled={isMobile || isTablet}
          >
            <HaasText tag="h2" variant="title" className="flowHeader">The app’s user flow</HaasText>
          </Plx>
          <Plx
            parallaxData={subHeaderAnimation}
            disabled={isMobile || isTablet}
          >
            <HaasText tag="h3">
              The HAAS project consists of
              three main solutions:
            </HaasText>
          </Plx>
        </div>
        <div className={styles.cardsContainer}>
          {flowContent.map(({
            id, icon, content, parallaxData,
          }) => (
            <Plx
              key={id}
              className={`${styles.card}`}
              parallaxData={parallaxData}
              disabled={isMobile}
            >
              <Plx
                parallaxData={imgAnimation}
                className={styles.cardImg}
                disabled={isMobile}
              >
                {icon}
              </Plx>
              <Plx
                parallaxData={contentAnimation}
                className={styles.cardText}
                style={isMobile ? { opacity: 1 } : { opacity: 0 }}
                disabled={isMobile}
              >
                <HaasText tag="p">{content}</HaasText>
              </Plx>
            </Plx>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HaasFlowSection;
