import PropTypes from 'prop-types';

import OpacityCards from './OpacityCards';
import ImageComponent from '../../../../components/Image/Image';
import { implementationCardContent } from '../data/ProjectXData';

import styles from '../sass/ProjectXImplementationBlackSection.module.scss';

const phonesGroup = '/static/images/Pages/ProjectX/implementationSection/img_phones_group@2x.webp';
const technologyBgImg = '/static/images/Pages/ProjectX/technologySection/img_technology_bg_img@2x.webp';
const technologyCircleBgMobile = '/static/images/Pages/ProjectX/technologySection/img_technology_circle_bg_mobile.webp';
const technologyCircleBg = '/static/images/Pages/ProjectX/technologySection/img_technology_circle_bg@2x.webp';
function ProjectXImplementationBlackSection({ isNotMobile }) {
  return (
    <section className={styles.implementationBlackSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.implementationCardsContainer}>
          {implementationCardContent.map(({
            id, src, title, content,
          }) => (
            <div className={styles.implementationCardWrapper} key={id}>
              <div className={styles.implementationCard}>
                <ImageComponent
                  src={src}
                  width={32}
                  height={32}
                  alt="icon"
                />
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.container} ${styles.phonesContainer}`}>
        <div className={styles.phonesImg}>
          <div className={styles.phonesImgContainer}>
            <ImageComponent
              src={phonesGroup}
              alt="phones_group"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
            />
          </div>
          <OpacityCards cardClass="implementationCardContainer" />
        </div>
      </div>
      <div className="container technologyContainer">
        <div className={styles.technologyBgImgContainer}>
          <div className={styles.technologyBgImg}>
            <ImageComponent
              src={technologyBgImg}
              fill
              alt="man"
            />
          </div>
        </div>
        <p className={`${styles.technologyParagraph} paragraphColor`}>
          We&apos;ve worked hard to deliver simple, clean, and attractive UI / UX design. Thanks to our design
          solutions, end-users can use the platform quickly and effortlessly!
        </p>
        <h2 className="technologyTitle">Core technology</h2>
      </div>
      <div className={styles.circleBg}>
        <div className={styles.circleBgContainer}>
          <ImageComponent
            src={isNotMobile ? technologyCircleBg : technologyCircleBgMobile}
            fill
            alt="man"
          />
        </div>
      </div>
    </section>
  );
}

ProjectXImplementationBlackSection.propTypes = {
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXImplementationBlackSection;
