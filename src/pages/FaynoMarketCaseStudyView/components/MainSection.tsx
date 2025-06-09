import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import ImageComponent from '../../../components/Image/Image';
import IMainSection from '../interfaces/IMainSection';
import VRARContent from 'components/VRARContent/VRARContent';
import PageContainer from 'components/PageContainer/PageContainer';
import ConfettiAnimation from './ConfettiAnimation';
import HeroImages from './HeroImages';

import styles from '../sass/MainSection.module.scss';

function MainSection({
  title, backgroundImg, confettiData, isMobile,
}: IMainSection) {
  const [screenHeight, setScreenHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  const translateY = useTransform(scrollY, [0, screenHeight], [0, 50]);
  const translateYSecond = useTransform(scrollY, [0, screenHeight], [0, -80]);

  return (
    <div className={styles.container}>
      {backgroundImg && (
        <div className={styles.bgContainer}>
          <ImageComponent
            src={backgroundImg}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
      )}
      {!isMobile && (
        <>
          <HeroImages translateY={translateY} translateYSecond={translateYSecond} />
          <ConfettiAnimation data={confettiData} />
        </>
      )}
      <PageContainer className={styles.titleContainer}>
        <VRARContent>
          {title || ''}
        </VRARContent>
      </PageContainer>
    </div>
  );
}

export default MainSection;
