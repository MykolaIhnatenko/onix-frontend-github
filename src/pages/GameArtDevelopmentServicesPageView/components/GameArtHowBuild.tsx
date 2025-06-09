import React from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import { firstGameArtHowBuildData, secondGameArtHowBuildData } from '../data/gameArtHowBuildData';
import PreProduction from '@/images/gameArt/howBuild/img_Pre_Production@2x.webp';
import Production from '@/images/gameArt/howBuild/img_Production@2x.webp';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/gameArtHowBuild.module.scss';

function GameArtHowBuild() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.blockTitle}>
        How We&apos;ll Build 3D Game Art Process With You
      </MainTitle>
      <ContentText tag="p" className={styles.firstText}>
        At Onix, collaboration and transparency are crucial to creating exceptional
        game art that brings your vision to life.
      </ContentText>
      <ContentText tag="p" className={styles.secondText}>
        Our well-structured process ensures a smooth and efficient workflow involving
        you in every step. Here&apos;s how we&apos;ll build the 3D game art development process with you:
      </ContentText>
      <div className={`${styles.contentContainer} ${styles.first}`}>
        <MainTitle tag="h3" className={styles.title}>
          Pre-production
        </MainTitle>
        <div className={styles.content}>
          <div className={styles.image}>
            <ImageComponent
              src={PreProduction}
              alt="PreProduction"
            />
          </div>
          <MainTitle tag="h3" className={styles.secondTitle}>
            Pre-production
          </MainTitle>
          <div className={styles.item}>
            <AccordionBlack
              data={firstGameArtHowBuildData}
              activeFirst
              borderTopFirst
              borderBottomLast
              classes={styles}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <MainTitle tag="h3" className={styles.title}>
          Production
        </MainTitle>
        <div className={styles.content}>
          <div className={`${styles.image} ${styles.second}`}>
            <ImageComponent
              src={Production}
              alt="Production"
            />
          </div>
          <MainTitle tag="h3" className={styles.secondTitle}>
            Production
          </MainTitle>
          <div className={styles.item}>
            <AccordionBlack
              data={secondGameArtHowBuildData}
              activeFirst
              borderTopFirst
              borderBottomLast
              classes={styles}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default GameArtHowBuild;
