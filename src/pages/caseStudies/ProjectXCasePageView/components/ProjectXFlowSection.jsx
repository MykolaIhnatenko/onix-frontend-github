import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXFlowSection.module.scss';

const runningWoman = '/static/images/Pages/ProjectX/flowSection/img_running_woman.webp';
const runningWomanTablet = '/static/images/Pages/ProjectX/flowSection/img_running_woman_tablet.webp';
const runningWomanDesktop = '/static/images/Pages/ProjectX/flowSection/img_running_woman_desktop.webp';
const scheme = '/static/images/Pages/ProjectX/flowSection/img_scheme.webp';
const schemeTablet = '/static/images/Pages/ProjectX/flowSection/img_scheme_tablet.webp';
const schemeDesktop = '/static/images/Pages/ProjectX/flowSection/img_scheme_desktop@2x.webp';

function ProjectXFlowSection({ isTablet }) {
  return (
    <section className={styles.flowSection}>
      <div className="flowContainer container">
        <div className={styles.flowContent}>
          <h2>User flow</h2>
          <p>
            Based on the outcome of the research, we prepared a mindmap to visualize a representation of the
            users’ interactions with the product.
          </p>
        </div>
        <div className={styles.runningWomanImgMobile}>
          <ImageComponent
            className={styles.img}
            src={runningWoman}
            width={207}
            height={535}
            sizes="100vw"
            alt="running_woman"
          />
        </div>
        <div className={styles.runningWomanImg}>
          <ImageComponent
            className={styles.img}
            src={isTablet ? runningWomanTablet : runningWomanDesktop}
            width={isTablet ? 360 : 875}
            height={isTablet ? 730 : 1431}
            sizes="100vw"
            alt="running_woman"
          />
        </div>
        <div className={styles.schemeImgMobile}>
          <ImageComponent
            src={scheme}
            width={256}
            height={320}
            sizes="100vw"
            alt="scheme"
          />
        </div>
        <div className={styles.schemeImg}>
          <ImageComponent
            className={styles.img}
            src={isTablet ? schemeTablet : schemeDesktop}
            width={isTablet ? 465 : 815}
            height={isTablet ? 567 : 1468}
            sizes="100vw"
            alt="scheme"
          />
        </div>
      </div>
    </section>
  );
}

ProjectXFlowSection.propTypes = {
  isTablet: PropTypes.bool.isRequired,
};

export default ProjectXFlowSection;
