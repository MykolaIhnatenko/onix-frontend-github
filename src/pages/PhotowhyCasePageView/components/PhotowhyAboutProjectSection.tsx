import Link from 'next/link';

import PhotowhyWhiteSection from './PhotowhyWhiteSection';
import IPhotowhyAboutProject from '../interfaces/IPhotowhyAboutProject';
import PageLinks from 'constants/PageLinks';

import styles from '../sass/photowhyWhiteSection.module.scss';

function PhotowhyAboutProjectSection({ saleUrl }: IPhotowhyAboutProject) {
  return (
    <PhotowhyWhiteSection>
      <div className={`${styles.container} container`}>
        <div className={styles.block}>
          <div className={styles.leftBlock}>
            <h2>
              About&nbsp;
              <br />
              the project
            </h2>
            <p className={styles.leftBlockParagraph}>
              Initially, the client wanted to create a social network where every enthusiast would be able to grow
              as a photographer by viewing the work of the world’s leading photographers.
            </p>
          </div>
          <div className={styles.rightBlock}>
            <p>
              To attract professional photographers to the platform, the company had to offer them incentives.
              Several features were intended to solve this problem while promoting the future app’s monetization:
            </p>
            <ul className={styles.firstBlockList}>
              <li className={styles.firstBlockListItem}>
                <p>
                  ・Daily live talks (on a rotation basis) would provide exposure to the photographers and help
                  increase their popularity;
                </p>
              </li>
              <li>
                <p>
                  ・Instead of likes and comments, amateurs can have their work evaluated by professionals;
                </p>
              </li>
              <li>
                <p>
                  ・Having to pay for the review and comments makes them more valuable;
                </p>
              </li>
              <li>
                <p>
                  ・Users can get personalized education from their favorite photographers while the professionals
                  can monetize their expertise via paid lessons.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.blockWithoutLine} ${styles.block}`}>
          <div className={styles.leftBlock}>
            <p className={styles.leftBlockText}>
              Thus, a social media platform idea evolved into an educational marketplace of sorts.
              <br />
              <br />
              The client preferred our company after we convinced him that we have relevant experience and all
              the skills and processes required to
              {' '}
              <span>
                build a peer-to-peer learning marketplace.
              </span>
            </p>
          </div>
          <div className={styles.rightBlock}>
            <p>
              Onix’s
              {' '}
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
                  legacyBehavior
                >
                  eLearning app development team
                </Link>
              ) : (
                <>eLearning app development team</>
              )}
              {' '}
              joined the project when the client had already developed a list of requirements and the
              visual design. However, we went on to suggest several major and minor changes
              to the design and functionality.
            </p>
            <p>
              <span className={styles.devTitle}>The app development team at Onix included:</span>
              <br />
              <br />
              2 Front-end Developers + Tech Lead
              <br />
              3 Back-end Developers + Tech Lead
            </p>
          </div>
        </div>
      </div>
    </PhotowhyWhiteSection>
  );
}

export default PhotowhyAboutProjectSection;
