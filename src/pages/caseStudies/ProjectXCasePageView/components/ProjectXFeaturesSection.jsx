import PropTypes from 'prop-types';

import FeaturesBlock from './FeaturesBlock';
import { featuresBlockContent } from '../data/ProjectXData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXFeaturesSection.module.scss';

const featuresBg = '/static/images/Pages/ProjectX/featuresSection/background.png';

function ProjectXFeaturesSection({ isNotMobile }) {
  return (
    <section className={styles.featuresSection}>
      <div className={`${styles.container} container`}>
        <h2 className="featuresTitle">The Project X covers the following advanced features:</h2>
        {featuresBlockContent.map(({
          id, title, content, imgSrc, isVideo, isPlx, plxSrc, plxHeight, style, videoStyle,
        }) => (
          <FeaturesBlock
            key={id}
            id={id}
            title={title}
            imgSrc={imgSrc}
            plxSrc={plxSrc}
            content={content}
            isVideo={isVideo}
            plxHeight={plxHeight}
            isPlx={isPlx}
            style={style}
            videoStyle={videoStyle}
            isNotMobile={isNotMobile}
          />
        ))}
      </div>
      <div className={`${styles.blur} ${styles.firstBlur}`} />
      <div className={`${styles.blur} ${styles.secondBlur}`} />
      <div className={`${styles.blur} ${styles.thirdBlur}`} />
      <div className={`${styles.blur} ${styles.fourthBlur}`} />
      <div className={`${styles.blur} ${styles.fifthBlur}`} />
      <div className={`${styles.blur} ${styles.sixthBlur}`} />
      <div className={styles.featuresBg}>
        <div className={styles.bgImg}>
          <ImageComponent
            src={featuresBg}
            fill
            alt="background"
          />
        </div>
      </div>
    </section>
  );
}

ProjectXFeaturesSection.propTypes = {
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXFeaturesSection;
