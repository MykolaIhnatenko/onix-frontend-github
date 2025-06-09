import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';

import styles from '../sass/ProjectXMainSection.module.scss';

const videoUrl = '/static/video/project_x_banner.mp4';
const coachMobile = '/static/images/Pages/ProjectX/mainSection/img_coachMobile.webp';
const logo = '/static/images/Pages/ProjectX/mainSection/img_logo.webp';
const logo2x = '/static/images/Pages/ProjectX/mainSection/img_logo@2x.webp';

function ProjectXMainSection({ isNotMobile }) {
  return (
    <section className={`${styles.mainSection} ${muktaVaaniFont.variable}`}>
      <div className={styles.videoContainer}>
        {isNotMobile
          ? (
            <video autoPlay muted loop playsInline>
              <source src={videoUrl} type="video/mp4" />
            </video>
          )
          : <ImageComponent fill src={coachMobile} priority alt="Coach" />}
      </div>
      <div className={`${styles.container} container`}>
        <div className={styles.logoWrapper}>
          <ImageComponent
            src={logo2x}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            width={197}
            height={40}
            alt="logo"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
        <h1>A platform for online fitness coaching</h1>
        <p className="subtitle">
          Learn how we built a convenient platform for personal trainers that takes customer experience
          to the next level!
        </p>
      </div>
    </section>
  );
}

ProjectXMainSection.propTypes = {
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXMainSection;
