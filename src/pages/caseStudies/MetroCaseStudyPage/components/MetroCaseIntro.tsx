import Link from 'next/link';

import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';
import IPageStatus from '../../../../interfaces/IPageStatus';
import MetroUaImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroUaImage.webp';
import GooglePlayImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_googlePlayImage.webp';
import AppStoreImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_appStoreImage.webp';

import styles from '../sass/metroCaseIntro.module.scss';

function MetroCaseIntro({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <div className={styles.background} />
      <VRARContent className={styles.headerContainer}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Retail shopping mobile application development</h1>
          <div className={styles.metroImage}>
            <ImageComponent
              src={MetroUaImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p>Branded application for a nation-wide chain of wholesale grocery retail stores</p>
          </div>
          {!saleUrl && (
            <div className={styles.linksContainer}>
              <Link
                href="https://apps.apple.com/sk/app/metro-ua/id1467730962?l=en"
                prefetch={false}
              >
                <div className={styles.linksContainerItem}>
                  <div className={styles.appStoreImageWrapper}>
                    <ImageComponent
                      src={AppStoreImage}
                    />
                  </div>
                </div>
              </Link>
              <Link
                prefetch={false}
                href="https://play.google.com/store/apps/details?id=ua.metro.app&hl=en&gl=US"
              >
                <div className={styles.linksContainerItem}>
                  <div className={styles.googlePlayImageWrapper}>
                    <ImageComponent
                      src={GooglePlayImage}
                    />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </VRARContent>
    </div>
  );
}

export default MetroCaseIntro;
