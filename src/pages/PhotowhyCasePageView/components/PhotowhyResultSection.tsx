import Link from 'next/link';
import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';

import GoogleIcon from '@/images/Photowhy/img_google_icon.webp';
import AppIcon from '@/images/Photowhy/img_app_icon.webp';
import ResultTablet from '@/images/Photowhy/img_result_tablet.webp';
import ResultMobile from '@/images/Photowhy/img_result_mobile.webp';
import ResultDesctop from '@/images/Photowhy/img_result_desctop.webp';
import styles from '../sass/photowhyResultSection.module.scss';

function PhotowhyResultSection({ isMobile }: { isMobile:boolean }) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = { background: ResultDesctop };
    if (isMDDevice || isSMDevice) {
      bg.background = ResultTablet;
    } else if (isXSDevice) {
      bg.background = ResultMobile;
    }
    return bg;
  };

  return (
    <section className={styles.resultSection}>
      <div className="resultContainer container">
        <div className={styles.firstBlock}>
          <h2 className="leftAlign">Results & Prospects</h2>
          <p>
            The initial project estimate was around 4 months. But since features were constantly added, the work
            lasted for 7 months.
            <br />
            <br />
            The time spent on the project, including quality assurance, DevOps, etc., has totaled 2,700 hours so far.
            <br />
            <br />
            {!'https://play.google.com/store/apps/details?id=com.photowhy'
              && 'PhotoWhy was published on the Apple App Store and Google Play Market in February 2022.'}
          </p>
          {!'https://play.google.com/store/apps/details?id=com.photowhy' && !isMobile && (
            <div className={styles.iconsBlock}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.photowhy"
                prefetch={false}
                legacyBehavior
              >
                <div className={styles.link}>
                  <div className={styles.iconWrapper}>
                    <ImageComponent width={180} height={53} src={GoogleIcon} alt="googlePlayImage" sizes="100vw" />
                  </div>
                </div>
              </Link>
              <Link href="https://apps.apple.com/us/app/photowhy/id1574681555" legacyBehavior>
                <div className={styles.link}>
                  <div className={styles.iconWrapper}>
                    <ImageComponent width={180} height={53} src={AppIcon} alt="appStoreImage" sizes="100vw" />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.imgBlock}>
          <ImageComponent
            fill
            src={getBackground().background}
            sizes="100vw"
            alt="Mobiles"
          />
        </div>
        {!'https://play.google.com/store/apps/details?id=com.photowhy' && isMobile && (
          <div className={styles.iconsBlock}>
            <Link href="https://play.google.com/store/apps/details?id=com.photowhy" legacyBehavior>
              <div className={styles.link}>
                <div className={styles.iconWrapper}>
                  <ImageComponent width={180} height={53} src={GoogleIcon} alt="googlePlayImage" />
                </div>
              </div>
            </Link>
            <Link href="https://apps.apple.com/us/app/photowhy/id1574681555" legacyBehavior>
              <div className={styles.link}>
                <div className={styles.iconWrapper}>
                  <ImageComponent width={180} height={53} src={AppIcon} alt="appStoreImage" />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotowhyResultSection;
