import { useEffect, useRef, useState } from 'react';
import Plx from 'react-plx';

import { IHaasNeeded } from '../interfaces/IHaasNeeded';
import { IParallaxConfig } from '../interfaces/IParallaxConfig';
import HaasText from './HaasText';
import neededContent from '../data/neededContent';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HaasNeededSection.module.scss';

function HaasNeededSection({ isMobile, isTablet, isDesktop }: IHaasNeeded) {
  const [currentId, setCurrentId] = useState(1);
  const [slideAnimation, setSlideAnimation] = useState<IParallaxConfig[]>([]);
  const [progressValue, setProgressValue] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideDelta, setSlideDelta] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const endSliderValue = -4000;

  const getSlideWidth = () => {
    if (isDesktop) {
      setSlideWidth(692);
      setSlideDelta(slideWidth / 4);
    } else if (isMobile) {
      setSlideWidth(326);
      setSlideDelta(slideWidth / 2);
    } else {
      setSlideWidth(502);
      setSlideDelta(slideWidth / 2);
    }
  };

  const getCurrentSlide = () => {
    getSlideWidth();
    const carousel = document.querySelector('#carousel');
    if (!carousel) return;
    const { left } = carousel.getBoundingClientRect();
    if (Math.abs(left) <= 80) {
      setCurrentId(1);
    } else if (Math.abs(left) < slideWidth + slideDelta) {
      setCurrentId(2);
    } else if (Math.abs(left) < slideWidth * 2 + slideDelta) {
      setCurrentId(3);
    } else if (Math.abs(left) < slideWidth * 3 + slideDelta) {
      setCurrentId(4);
    } else if (Math.abs(left) < slideWidth * 3.5) {
      setCurrentId(5);
    }
  };

  const getSlideClass = (id: number) => (currentId === id ? styles.active : '');

  const handleScroll = () => {
    setScrollY(window.scrollY);
    getCurrentSlide();
    const coefficient = 2;
    const carousel = document.querySelector('#carousel');
    if (!carousel) return;
    const carouselLeft = carousel.getBoundingClientRect().left;
    const value = Math.abs(carouselLeft) * coefficient;
    if (carouselLeft < 0 && carouselLeft > endSliderValue) {
      setProgressValue(value);
    }
    if (carouselLeft > 0) {
      setProgressValue(0);
    }
  };

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 2000;
    const start = top > 0 ? top : 2000;

    const end = start + 3000;

    setSlideAnimation([
      {
        start,
        end,
        properties: [
          {
            startValue: 0,
            endValue: endSliderValue,
            property: 'translateX',
          },
        ],
      },
    ]);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, isTablet, sectionRef.current, scrollY]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <PageContainer className={`${styles.stickyWrapper}`}>
        <div className={styles.container}>
          <HaasText tag="h2" variant="title">The Onix team needed to:</HaasText>
          <div className={styles.carouselContainer}>
            <Plx id="carousel" parallaxData={slideAnimation} className={styles.carousel}>
              {neededContent.map(({ id, icon, content }) => (
                <div
                  key={id}
                  className={`${styles.slide} ${isDesktop ? getSlideClass(id) : styles.active}`}
                >
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      {icon}
                    </div>
                    <HaasText tag="p" variant="fs20">{content}</HaasText>
                  </div>
                </div>
              ))}
            </Plx>
          </div>
          <div className={styles.progressContainer}>
            <progress id="progress" className={styles.progress} value={progressValue} max={-endSliderValue} />
          </div>
        </div>
      </PageContainer>

    </section>
  );
}

export default HaasNeededSection;
