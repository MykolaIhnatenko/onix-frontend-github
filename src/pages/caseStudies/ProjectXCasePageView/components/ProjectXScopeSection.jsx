import { useMemo } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import ImageComponent from '../../../../components/Image/Image';
import { benefitsCards, cardContent } from '../data/ProjectXData';

import styles from '../sass/ProjectXScopeSection.module.scss';

const basePath = '/static/images/Pages/ProjectX/projectScopeSection';
const challengesImg = `${basePath}/img_challenges_phones@2x.webp`;
const circlesGroup = `${basePath}/img_circle_group@2x.webp`;
const woman = `${basePath}/img_woman.webp`;

function ProjectXScopeSection({ isMobile, isTablet }) {
  const girlImgHeightMobile = 307;
  const girlImgWidthMobile = 335;
  const girlImgHeightTablet = 359;
  const girlImgWidthTablet = 340;
  const girlImgHeightDesktop = 631;
  const girlImgWidthDesktop = 481;

  const [girlImgHeight, girlImgWidth] = useMemo(() => {
    let imgValue = [girlImgHeightDesktop, girlImgWidthDesktop];

    if (isTablet) {
      imgValue = [girlImgHeightTablet, girlImgWidthTablet];
    }
    if (isMobile) {
      imgValue = [girlImgHeightMobile, girlImgWidthMobile];
    }

    return imgValue;
  }, [isMobile, isTablet]);

  return (
    <section className={styles.projectScopeSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.challengesBlock}>
          <div className={styles.challengesBlockImgContainer}>
            <ImageComponent
              className={styles.img}
              src={challengesImg}
              width={450}
              height={370}
              sizes="(max-width: 450px) 50vw, 100vw"
              alt="phones"
            />
          </div>
          <div className={styles.challengesBlockContent}>
            <h2>Challenges to overcome</h2>
            <p>
              Providing online fitness coaching requires plenty of communication and managing content
              such as educational videos, workout plans, recipes, clients&apos; results, and many more. Using
              different tools like spreadsheets, email, YouTube videos, and text messages is not effective
              and is rather inconvenient. Moreover, this sort of management is a thing of the past, especially
              with the advent of new technologies.
            </p>
            <p>
              Therefore, fitness coaches and clients need a single place where they can cooperate smoothly
              and effectively without spending much time on the admin tasks.
            </p>
          </div>
        </div>
        <div className={styles.productBlock}>
          <h2>Product scope</h2>
          <h3 className="fs_20">The Onix team was responsible for:</h3>
          <div className={styles.productCards}>
            {cardContent.map(({ id, src, content }) => (
              <ProductCard src={src} content={content} key={id} />
            ))}
          </div>
        </div>
        <div className={styles.benefitsBlock}>
          <div className={styles.girlContainer}>
            <h2>The platform we built benefits several groups of end-users:</h2>
            <div className={styles.womanImg}>
              <ImageComponent
                className={styles.img}
                src={woman}
                width={girlImgWidth}
                height={girlImgHeight}
                sizes="100vw"
                alt="woman"
              />
            </div>
          </div>
          <div className={styles.benefitsCards}>
            {benefitsCards.map(({ id, title, content }) => (
              <div className={styles.benefitsCard} key={id}>
                <h2>{title}</h2>
                <ul>
                  {content.map(({ sentenceId, sentence }) => (
                    <li key={sentenceId}>{sentence}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bgCircleContainer}>
        <ImageComponent
          src={circlesGroup}
          width={423}
          height={846}
          layout="intrinsic"
          sizes="100vw"
          alt="circle"
        />
      </div>
      <div className={styles.bgContainer} />
    </section>
  );
}

ProjectXScopeSection.propTypes = {
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ProjectXScopeSection;
