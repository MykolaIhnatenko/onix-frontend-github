import React from 'react';

import {
  motionGraphicsNumbersData,
  motionGraphicsNumbersTitle,
} from '../data/motionGraphicsOurWorkData';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MotionGraphicsMarketingStrategyCard from './MotionGraphicsMarketingStrategyCard';

import styles from '../sass/MotionGraphicsOurWorkBlock.module.scss';

function MotionGraphicsOurWorkBlock() {
  return (
    <div className={styles.container}>
      <PageContainer>
        <MainTitle tag="h2" className={styles.numbersTitle}>{motionGraphicsNumbersTitle}</MainTitle>
        <div className={styles.cardsContainer}>
          {motionGraphicsNumbersData.map(({
            prefix, text, number, id,
          }) => (
            <MotionGraphicsMarketingStrategyCard id={id} key={id} prefix={prefix} text={text} number={number} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default MotionGraphicsOurWorkBlock;
