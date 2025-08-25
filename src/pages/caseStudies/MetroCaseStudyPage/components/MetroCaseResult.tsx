import Link from 'next/link';

import VRARContent from '../../../../components/VRARContent/VRARContent';
import HalfFilledContactUs from './HalfFilledContactUs';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';
import ImageComponent from '../../../../components/Image/Image';
import IPageStatus from '../../../../interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';

import GooglePlayImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_googlePlayImage.webp';
import ContactUsImageV2 from '@/images/caseStudiesPage/MetroCaseStudyPage/img_contactUsImageV2.webp';
import AppStoreImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_appStoreImage.webp';
import styles from '../sass/metroCaseResult.module.scss';

function MetroCaseResult({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <div className={styles.contentContainer}>
        <VRARContent>
          <h2 className={styles.contentTitle}>
            The result and prospects
          </h2>
        </VRARContent>
        <VRARContent>
          <div className={styles.contentTextContainer}>
            <p>
              The apps have been released on Google Play and App Store,
              where they are available for free. The version for iPhones
              requires iOS 10.0 and up. The Android version is compatible
              with Android 5.0 and up.
            </p>
            <p>As of September 2021, the apps have been downloaded over 100,000 times.</p>
          </div>
          <div className={styles.resultCardContainer}>
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>iOS 10.0</p>
              <p className={styles.cardText}>requirement for iPhones</p>
            </div>
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>Android 5.0</p>
              <p className={styles.cardText}>requirement for Android</p>
            </div>
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>100,000+</p>
              <p className={styles.cardText}>downloads</p>
            </div>
          </div>
          <div className={styles.contentSubTitleContainer}>
            <p>
              Currently, Onix’s team is both fixing issues and actively
              developing the retail shopping applications by adding new functionality.
            </p>
          </div>
          { !saleUrl && (
          <div className={styles.linksContainer}>
            <Link
              href="https://apps.apple.com/sk/app/metro-ua/id1467730962?l=en"
              prefetch={false}
            >
              <div className={styles.linksContainerItem}>
                <div className={styles.appStoreImageWrapper}>
                  <ImageComponent
                    src={AppStoreImage}
                    alt="appStoreImage"
                    width={120}
                    height={40}
                  />
                </div>
              </div>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=ua.metro.app&hl=en&gl=US"
              prefetch={false}
            >
              <div className={styles.linksContainerItem}>
                <div className={styles.googlePlayImageWrapper}>
                  <ImageComponent
                    src={GooglePlayImage}
                    alt="googlePlayImage"
                    width={135}
                    height={40}
                  />
                </div>
              </div>
            </Link>
          </div>
          )}
        </VRARContent>
      </div>
      { !saleUrl && (

      <VRARContent className={styles.contactUsWrapper}>
        <HalfFilledContactUs
          imageSrc={ContactUsImageV2}
          imageWidth={100}
          imageHeight={100}
          idBtnFirst={ButtonType.CASE4}
          idBtnSecond={ButtonType.CASE5}
        >
          <h2 className={styles.contactUsText}>
            Do you plan to have any of the features in your shopping app? Wondering how to implement a feature?
            Please feel free to schedule a free consultation with Onix’s team —
            we are here to help!
          </h2>
        </HalfFilledContactUs>
      </VRARContent>
      )}

    </div>
  );
}

export default MetroCaseResult;
