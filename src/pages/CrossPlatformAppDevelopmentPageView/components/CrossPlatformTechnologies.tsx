import { useSelector } from 'react-redux';
import React from 'react';

import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import CrossPlatformTechnologiesData from '../data/CrossPlatformTechnologiesData';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import CrossPlatformTechnologiesBg from '@/images/crossplatformDesign/img_technologies@2x.webp';
import CrossPlatformTechnologiesTabletBg from '@/images/crossplatformDesign/img_technologiesTablet@2x.webp';
import CrossPlatformTechnologiesMobileBg from '@/images/crossplatformDesign/img_technologiesMobile@2x.webp';

import styles from '../sass/CrossPlatformTechnologies.module.scss';

export default function CrossPlatformTechnologies() {
  const { pageTitle, pageDescription, rowsTechnologies } = CrossPlatformTechnologiesData;
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,
    isLGDevice,
    isXLDevice,
    isXXLDevice,
    isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isSMDevice || isXSDevice;
  const isTablet = isMDDevice;
  const isDesktop = isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  const background = useBackground(
    CrossPlatformTechnologiesBg,
    CrossPlatformTechnologiesTabletBg,
    CrossPlatformTechnologiesMobileBg,
  );

  return (
    <PageContainer className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="background image"
            sizes="100vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <MainTitle className={styles.sectionTitle}>
          {pageTitle}
        </MainTitle>
        <ContentText tag="p" className={styles.sectionDescription}>
          {pageDescription}
        </ContentText>
        <div className={styles.technologiesContainer}>
          {(isDesktop || isTablet) && rowsTechnologies.map((row, index) => (
            <div
              className={`${styles.technologiesList} ${isTablet ? styles.listTablet : ''}`}
              key={[index, index].join('_')}
            >
              {
                row.map(({ id, title }) => (
                  <div
                    key={[title, id].join('_')}
                    className={`${styles.technology} ${isTablet ? styles.tabletItem : ''}`}
                  >
                    <p>{title}</p>
                  </div>
                ))
              }
            </div>
          ))}
          {isMobile && (
            <div className={`${styles.technologiesList} ${styles.listMobile}`}>
              {rowsTechnologies[0].concat(rowsTechnologies[1]).map(({ id, title }) => (
                <p
                  key={[title, id].join('_')}
                  className={`${styles.technology} ${styles.mobileItem}`}
                >
                  {title}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

    </PageContainer>
  );
}
