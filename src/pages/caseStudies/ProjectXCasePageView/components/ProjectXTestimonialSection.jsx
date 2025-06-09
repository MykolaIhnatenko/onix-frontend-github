import PropTypes from 'prop-types';

import { resultCardsContent, technologyItemContent } from '../data/ProjectXData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXTestimonialSection.module.scss';

const testimonialCircleBg = '/static/images/Pages/ProjectX/testimonialSection/img_testimonial_circle_bg@2x.webp';
const testimonialCircleBgMobile = '/static/images/Pages/ProjectX/testimonialSection/img_circle_bg_mobile.webp';
const resultIcon = '/static/images/Pages/ProjectX/testimonialSection/ic_result_icon.svg';
const resultWoman = '/static/images/Pages/ProjectX/testimonialSection/img_result_woman@2x.webp';

function ProjectXTestimonialSection({ isNotMobile }) {
  return (
    <section className={styles.testimonialSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.technologyBlock}>
          {technologyItemContent.map(({
            id,
            imgSrc,
            imgVariant,
            title,
            imgWidth,
            imgHeight,
            imgAlt,
          }) => (
            <div className={styles.technologyItem} key={id}>
              <div className={styles[imgVariant]}>
                <ImageComponent
                  className={styles.img}
                  src={imgSrc}
                  width={imgWidth}
                  height={imgHeight}
                  alt={imgAlt}
                  sizes="100vw"
                />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className={styles.resultBlock}>
          <div className={styles.resultBlockContent}>
            <h3 className="fs_20">Results</h3>
            <p>
              As a result of Onix’s collaboration, our client now operates a reliable, well-performing web
              application that allows for a deeper level of control over clients&apos; data, their results,
              and communication.
            </p>
            <p>
              Combining digital workflow with a highly interactive all-in-one fitness platform, our client
              offers a comfortable environment for thousands of users on the platform acting simultaneously: watching
              workout videos, doing daily check-ins, onboarding, creating and updating their fitness goals.
            </p>
            <p>
              From now on, our client delivers professional coaching services online more efficiently while helping
              his customers achieve the best results.
            </p>
          </div>
          <div className={styles.resultBlockImg}>
            <div className={styles.resultImg}>
              <ImageComponent
                className={styles.img}
                src={resultWoman}
                fill
                sizes="100vw"
                alt="woman"
              />
            </div>
          </div>
        </div>
        <h2 className={styles.resultSecondTitle}>Achieved business results</h2>
        <div className={styles.resultCardsContainer}>
          {resultCardsContent.map(({
            id,
            title,
          }) => (
            <div className={styles.resultCardWrapper} key={id}>
              <div className={styles.resultCard}>
                <div className={styles.resultCardIcon}>
                  <ImageComponent
                    src={resultIcon}
                    fill
                    alt="checkbox-icon"
                  />
                </div>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.testimonialCirclesBg}>
        <div className={styles.testimonialCirclesBgContainer}>
          <ImageComponent
            src={isNotMobile ? testimonialCircleBg : testimonialCircleBgMobile}
            fill
            alt="circles"
          />
        </div>
      </div>
    </section>
  );
}

ProjectXTestimonialSection.propTypes = {
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXTestimonialSection;
