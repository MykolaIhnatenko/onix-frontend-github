import { useEffect, useRef, useState } from 'react';
import Plx from 'react-plx';

import { IHaasWhat } from '../interfaces/IHaasWhat';
import HaasText from './HaasText';
import { IParallaxConfig } from '../interfaces/IParallaxConfig';
import ImageComponent from '../../../components/Image/Image';
import Bg from '@/images/haas/whatSection/img_what-bg.webp';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HaasWhatSection.module.scss';

function HaasWhatSection({
  isMaxDesktop, isMobile,
}: IHaasWhat) {
  const [firstAnimation, setFirstAnimation] = useState<IParallaxConfig[]>([]);
  const [secondAnimation, setSecondAnimation] = useState<IParallaxConfig[]>([]);
  const [thirdAnimation, setThirdAnimation] = useState<IParallaxConfig[]>([]);
  const [dotAnimation, setDotAnimation] = useState<IParallaxConfig[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const whatContent = [
    {
      id: 1,
      title: (
        <HaasText tag="h3">
          Application for&nbsp;
          <br />
          employees
        </HaasText>
      ),
      content: 'The application for Haas employees enhances their operational efficiency and automates internal '
          + 'processes: assembly of equipment and integration of electronic document management.',
      parallaxData: firstAnimation,
    },
    {
      id: 2,
      title: (
        <HaasText tag="h3">
          Machine&apos;s&nbsp;
          <br />
          performance
        </HaasText>
      ),
      content: 'The service app allows employees of the plant, warehouse, and support to provide qualitative machines '
          + 'maintenance service. If it breaks down, a technician checks the machine\'s performance and creates a '
          + 'request for service maintenance with an attached description of the issue with photos, etc.',
      parallaxData: secondAnimation,
    },
    {
      id: 3,
      title: (
        <HaasText tag="h3">
          eCommerce&nbsp;
          <br />
          mobile application
        </HaasText>
      ),
      content: 'MyHAAS is an eCommerce mobile application for selling machine tools, spare parts, consumables '
          + '(drills, saws), and accessories. Using this app, customers can use a comprehensive suite of functionality '
          + 'for Haas CNC machines, including tool ordering, speeds & feeds calculator, easy access to service '
          + 'procedures, troubleshooting guides, videos, and more.',
      parallaxData: thirdAnimation,
    },
  ];

  useEffect(() => {
    setScrollY(window.scrollY);
    const start = sectionRef.current?.offsetTop || 6000;
    const firstStep = start + 450;
    const secondStep = firstStep + 400;
    const thirdStep = secondStep + 100;
    const fourthStep = thirdStep + 450;
    const fifthStep = fourthStep + 450;
    const sixthStep = fifthStep + 100;
    const dotAnimationValue = isMaxDesktop ? 650 : 30;
    const unitValue = isMaxDesktop ? 'px' : 'vh';
    const translateValue = isMaxDesktop ? 'translateX' : 'translateY';
    const leftTopPaddingValue = isMaxDesktop ? 'paddingLeft' : 'paddingTop';
    const rightBottomPaddingValue = isMaxDesktop ? 'paddingRight' : 'paddingBottom';

    setFirstAnimation([
      {
        start,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: dotAnimationValue,
            unit: unitValue,
            property: translateValue,
          },
        ],
      },
      {
        start: secondStep,
        duration: 100,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
        ],
      },
    ]);

    setSecondAnimation([
      {
        start: secondStep,
        duration: 100,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: 'opacity',
          },
        ],
      },
      {
        start: fourthStep,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: isMaxDesktop ? -650 : -30,
            unit: unitValue,
            property: translateValue,
          },
        ],
      },
      {
        start: fifthStep,
        duration: 100,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'opacity',
          },
        ],
      },
    ]);

    setThirdAnimation([
      {
        start: sixthStep,
        duration: 100,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: 'opacity',
          },
        ],
      },
    ]);

    setDotAnimation([
      {
        start,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: dotAnimationValue,
            unit: unitValue,
            property: rightBottomPaddingValue,
          },
        ],
      },
      {
        start: firstStep,
        duration: 400,
        properties: [
          {
            startValue: dotAnimationValue,
            endValue: 0,
            unit: unitValue,
            property: rightBottomPaddingValue,
          },
        ],
      },
      {
        start: firstStep,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: dotAnimationValue,
            unit: unitValue,
            property: translateValue,
          },
        ],
      },
      {
        start: thirdStep,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: dotAnimationValue,
            unit: unitValue,
            property: leftTopPaddingValue,
          },
          {
            startValue: dotAnimationValue,
            endValue: 0,
            unit: unitValue,
            property: translateValue,
          },
        ],
      },
      {
        start: fourthStep,
        duration: 400,
        properties: [
          {
            startValue: dotAnimationValue,
            endValue: 0,
            unit: unitValue,
            property: leftTopPaddingValue,
          },
        ],
      },
    ]);
  }, [scrollY, sectionRef.current, isMaxDesktop, isMobile]);

  return (
    <section ref={sectionRef} className={`${styles.whatSection}`}>
      <PageContainer className={styles.what}>
        <HaasText tag="h2" variant="title">What we did</HaasText>
        <Plx className={styles.animatedDot} parallaxData={dotAnimation} disabled={isMobile} />
        <div className={styles.list}>
          {whatContent.map(({
            id, title, content, parallaxData,
          }) => (
            <Plx
              key={id}
              className={styles.item}
              parallaxData={parallaxData}
              disabled={isMobile}
            >
              <div className={styles.titleBlock}>
                <div className={styles.dot} />
                <div className={styles.content}>
                  {title}
                  <HaasText tag="p" variant="fs18_27">{content}</HaasText>
                </div>
              </div>
            </Plx>
          ))}
        </div>
      </PageContainer>
      <div className={styles.imgContainer}>
        <ImageComponent
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          src={Bg}
          alt="background"
          fill
        />
      </div>
    </section>
  );
}

export default HaasWhatSection;
