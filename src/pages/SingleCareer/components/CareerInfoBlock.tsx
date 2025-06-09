import React from 'react';

import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ICareerInfoBlock from '../interfaces/ICareerInfoBlock';
import CareerInfoBg from '@/images/singleCareer/careerInfo/img_CareerInfoBg2x.webp';
import getImageCareer from '../../../utils/getImageCareer';

import styles from '../sass/CareerInfoBlock.module.scss';

function CareerInfoBlock({
  name, description, department,
}: ICareerInfoBlock) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          className={styles.image}
          src={CareerInfoBg}
          alt="background"
        />
      </div>
      <div className={styles.departmentImage}>
        <ImageComponent
          className={styles.image}
          src={getImageCareer(department)}
          alt="department"
        />
      </div>
      <PageContainer className={styles.contentContainer}>
        <MainTitle className={styles.title} tag="h1">
          {name}
        </MainTitle>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      </PageContainer>
    </div>
  );
}

export default CareerInfoBlock;
