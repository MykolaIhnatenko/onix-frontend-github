import React from 'react';

import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ImageComponent from '../../../components/Image/Image';
import motionGraphicsNumbersBlockData from '../data/motionGraphicsNumbersBlockData';
import background from '../../../assets/images/motionGraphics/numbersBlock/img_bg.webp';

import styles from '../sass/MotionGraphicsNumberBlockData.module.scss';

function MotionGraphicsNumbersBlock() {
  return (
    <PageContainer className={styles.container}>
      <div className={styles.bgContainer}>
        <ImageComponent
          src={background}
          fill
          sizes="100vw"
          alt="motion-graphics-background"
        />
      </div>
      <div className={styles.content}>
        <NumbersBlock data={motionGraphicsNumbersBlockData} />
      </div>
    </PageContainer>
  );
}

export default MotionGraphicsNumbersBlock;
