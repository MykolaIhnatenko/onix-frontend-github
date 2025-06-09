import { useEffect, useRef } from 'react';

import ICalculateMachineL from '../interfaces/ICalculateMachineL';
import CardSlider from '../../../components/CardSlider/CardSlider';
import ImageComponent from '../../../components/Image/Image';

import styles from '../sass/calculateMachineL.module.scss';

function MachineLCalculate({
  pageTitle, pageText, background, data, variant,
}: ICalculateMachineL) {
  const containerRefsArray = useRef<HTMLDivElement[]>([]);

  const setContainerRef = (element: HTMLDivElement, index: number) => {
    containerRefsArray.current[index] = element;
  };

  const handleScroll = () => {
    containerRefsArray?.current.forEach((item, index) => {
      if (containerRefsArray.current[index - 1]) {
        const { top } = item.getBoundingClientRect();
        const prevCardPos = containerRefsArray.current[index - 1].getBoundingClientRect();

        const checkPos = top <= prevCardPos.bottom;
        const prevCardCheck = prevCardPos.bottom - top;
        const elementPrev = containerRefsArray.current[index - 1];
        const cardHeight = item.clientHeight;

        if (checkPos) {
          switch (true) {
            case prevCardCheck > cardHeight / 2 + cardHeight / 4:
              elementPrev.style.opacity = '0';
              break;
            case prevCardCheck > cardHeight / 2:
              elementPrev.style.opacity = '0.4';
              break;
            case prevCardCheck > cardHeight / 4:
              elementPrev.style.opacity = '0.6';
              break;
            case prevCardCheck > cardHeight / 6:
              elementPrev.style.opacity = '0.8';
              break;
            default:
              elementPrev.style.opacity = '1';
              break;
          }
        } else {
          elementPrev.style.opacity = '1';
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.section} ${variant ? styles[variant] : ''}`}>
      {background && (
        <div className={styles.topBg}>
          <div className={`${styles.imageContainer}`}>
            <ImageComponent
              className={styles.imageContainer}
              src={background}
              fill
              alt="figures"
              sizes="100vw"
            />
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            {pageTitle}
            {pageText}
          </div>
        </div>
        <div className={styles.cards}>
          {data.map(({ id, title, text }, index) => (
            <div key={id} className={styles.cardWrapper}>
              <div
                className={styles.cardContainer}
                ref={(element) => setContainerRef(element as HTMLDivElement, index)}
              >
                <CardSlider
                  id={id}
                  title={title}
                  text={text}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MachineLCalculate;
