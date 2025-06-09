import PropTypes from 'prop-types';

import OpacityCards from './OpacityCards';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXAboutSection.module.scss';

const basePath = '/static/images/Pages/ProjectX/aboutSection';
const coach = `${basePath}/img_coach@2x.webp`;
const portraitImg = `${basePath}/img_portrait.webp`;
const portraitVideo = '/static/video/portrait.mp4';

function ProjectXAboutSection({ isNotMobile }) {
  return (
    <section className={styles.aboutSection}>
      <div className="aboutContainer container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutTextBlock}>
            <h2>About the client</h2>
            <p>
              For ten years, Diren Kartal, the fitness coach and the owner of Project X, has been conducting
              fitness training. Since Diren established Project X, he created a hybrid training environment,
              where he communicated with his clients using Aweber and Slack, and he tracked their results by
              means of Excel Tables. To some extent, Project X had been operated manually. That was inconvenient
              for both Diren and his clients.
              <br />
              That’s how our client came up with the idea of the end-to-end fitness platform for online coaching.
            </p>
          </div>
          <div className={styles.aboutImageBlock}>
            <div className={styles.coachContainer}>
              <ImageComponent
                className={styles.img}
                src={coach}
                width={542}
                height={543}
                sizes="100vw"
                priority
                alt="coach"
              />
              <OpacityCards cardClass="aboutCardContainer" />
            </div>
          </div>
        </div>
        <div className={styles.aboutCoachBlock}>
          <div className={styles.portrait}>
            {isNotMobile ? (
              <video
                autoPlay
                muted
                loop
                src={portraitVideo}
              >
                <track kind="captions" />
              </video>
            ) : (
              <ImageComponent
                className={styles.img}
                src={portraitImg}
                width={95}
                height={95}
                alt="coach-portrait"
              />
            )}
          </div>
          <div className={styles.aboutCoachCard}>
            <p>
              Diren chose Onix upon the recommendation of an existing client who also had a fitness project.
              So our client knew that Onix had the right expertise and a proven track record for fitness projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectXAboutSection.propTypes = {
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXAboutSection;
