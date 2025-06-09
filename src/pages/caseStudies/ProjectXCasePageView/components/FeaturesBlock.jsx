import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/FeaturesBlock.module.scss';

const videoUrl = '/static/video/project_x_banner.mp4';
const mobileBg = '/static/images/Pages/ProjectX/featuresSection/img_mobileBg.webp';

function FeaturesBlock({
  id, title, content, imgSrc, isVideo, isPlx, plxSrc, plxHeight, style, videoStyle, isNotMobile,
}) {
  return (
    <div className={styles.featuresBlock}>
      <div className={styles.featuresBlockContent}>
        <h3 className="featuresCardTitle" id={`titleId${id}`}>{title}</h3>
        <p className="featuresCardContent">{content}</p>
      </div>
      <div className={`${styles.featuresBlockImg} ${styles[videoStyle]}`} id={`phone${id}`}>
        <ImageComponent
          src={imgSrc}
          width={255}
          height={513}
          className={styles.featuresImg}
          alt="phone"
        />
        {isVideo && (
        <div className={styles.featuresVideo}>
          {isNotMobile ? (
            <video
              autoPlay
              muted
              loop
              src={videoUrl}
            >
              <track kind="captions" />
            </video>
          ) : (
            <ImageComponent
              fill
              src={mobileBg}
              alt="Coach"
            />
          )}
        </div>
        )}
        {isPlx && (
        <div className={styles.innerContentWrap}>
          <div className={`${styles.innerContent} ${styles[style]}`}>
            <ImageComponent
              src={plxSrc}
              width={229}
              height={plxHeight}
              className={styles.featuresImg}
              alt="content"
            />
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

FeaturesBlock.defaultProps = {
  videoStyle: '',
};

FeaturesBlock.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  plxSrc: PropTypes.string.isRequired,
  isVideo: PropTypes.bool.isRequired,
  isPlx: PropTypes.bool.isRequired,
  plxHeight: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  videoStyle: PropTypes.string,
  isNotMobile: PropTypes.bool.isRequired,
};

export default FeaturesBlock;
