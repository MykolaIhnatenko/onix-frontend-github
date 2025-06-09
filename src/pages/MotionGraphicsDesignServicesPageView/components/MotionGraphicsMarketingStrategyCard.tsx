import React from 'react';

import IMotionGraphicsMarketingStrategyCard from '../interfaces/IMotionGraphicsMarketingStrategyCard';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/MotionGraphicsMarketingStrategyCard.module.scss';

function MotionGraphicsMarketingStrategyCard({
  number, prefix, text,
}: IMotionGraphicsMarketingStrategyCard) {
  return (
    <div className={styles.container}>
      <p className={styles.titleBlock}>
        <span className={styles.number}>{number}</span>
        <span className={styles.prefix}>{prefix}</span>
      </p>
      <ContentText tag="p" className={styles.text}>
        {text}
      </ContentText>
    </div>
  );
}

export default MotionGraphicsMarketingStrategyCard;
