import React from 'react';

import weOfferData from '../data/singleCareerWeOfferData.json';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';

import styles from '../sass/WeOfferBlock.module.scss';

function WeOfferBlock() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.heading} tag="h2">We offer</MainTitle>
      {weOfferData.weOfferArray.map((text: string) => (
        <div key={text} className={styles.offerItem}>
          <p className={styles.offerPrefix}>﹂</p>
          <p>{text}</p>
        </div>
      ))}
    </PageContainer>
  );
}

export default WeOfferBlock;
