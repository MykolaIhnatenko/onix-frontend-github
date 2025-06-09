import Link from 'next/link';

import PhotowhyWhiteSection from './PhotowhyWhiteSection';
import IPhotowhySolutions from '../interfaces/IPhotowhySolutions';
import PageLinks from 'constants/PageLinks';

import styles from '../sass/photowhyWhiteSection.module.scss';

function PhotowhySolutionsSection({ saleUrl }: IPhotowhySolutions) {
  return (
    <PhotowhyWhiteSection>
      <div className={`${styles.container} ${styles.techSolutionContainer} container`}>
        <div className={`${styles.block} ${styles.techBlock}`}>
          <div className={styles.leftBlock}>
            <h2>Technical Solutions</h2>
            <p className={styles.techSolutionParagraph}>
              Onix developed and implemented all app infrastructure using the best modern solutions.
              <br />
              <br />
              For example, we used CDN delivery from S3 bucket to speed up photos loading.
              <br />
              <br />
              Onix’s team also foresaw the problem of inappropriate content on the platform.
              To mitigate this risk, we implemented image recognition at the uploading stage.
              We have already encountered such problems in the framework of
              {' '}
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
                >
                  travel app development services.
                </Link>
              ) : (
                <>travel app development services</>
              )}
              {' '}
              Therefore, we knew how to act correctly.
            </p>
          </div>
          <div className={styles.rightBlock}>
            <p className={styles.title}>
              Tech stack we used in the social network and peer-to-peer learning app develop:
            </p>
            <ul className={styles.techSolutionList}>
              <li className={styles.techSolutionItem}>
                <p>
                  <span>Back-end:</span>
                  <br />
                  Django REST framework, PostgreSQL, Redis, Celery, Celery beat, AWS S3 buckets, Amazon Rekognition
                </p>
              </li>
              <li className={styles.techSolutionItem}>
                <p>
                  <span>Payments:</span>
                  <br />
                  Stripe, Apple in-app purchase API, Google in-app subscriptions
                </p>
              </li>
              <li className={styles.techSolutionItem}>
                <p>
                  <span>
                    {!saleUrl ? (
                      <Link
                        prefetch={false}
                        href="/blog/how-to-build-live-video-streaming-app"
                      >
                        Live video streaming:
                      </Link>
                    ) : (
                      <>Live video streaming:</>
                    )}
                  </span>
                  <br />
                  Agora SDK
                </p>
              </li>
              <li className={styles.techSolutionItem}>
                <p>
                  <span>Push notifications:</span>
                  <br />
                  Firebase Cloud Messaging
                </p>
              </li>
              <li className={styles.techSolutionItem}>
                <p>
                  <span>Front-end:</span>
                  <br />
                  React Native, babel-core, babel-runtime, ESLint
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PhotowhyWhiteSection>
  );
}

export default PhotowhySolutionsSection;
