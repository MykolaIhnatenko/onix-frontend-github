import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXDesignSection.module.scss';

const designImgMobile = '/static/images/Pages/ProjectX/designSection/img_design_img_mobile.webp';
const designImg = '/static/images/Pages/ProjectX/designSection/img_design_img@2x.webp';

function ProjectXDesignSection({ isTablet, isMobile }) {
  return (
    <section className={styles.designSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.designContent}>
          <h2 className={styles.designTitle}>Onix design solutions</h2>
          <h3 className="designTitle">
            Make UI design clean and minimalistic. Ensure simple
            and intuitive UX.
          </h3>
          <h2 className={styles.title}>
            Research
          </h2>
          <p>
            Any successful product is created with the end-user in mind. So at that stage, we thoroughly
            learned about the audience and identified users’ needs.
          </p>
        </div>
        <div className={styles.designImgBlock}>
          <div className={styles.designCard}>
            <ul>
              <li>
                Consider basic user needs (What’s their problem? What issue are we trying to solve for users?)
              </li>
              <li>
                Carry out a comparative analysis of competitors (we visually display the comparison in different
                charts)
              </li>
              <li>
                Prepare user persona based on research data (profile of our ideal customer)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.designImg}>
        <ImageComponent
          src={(isTablet || isMobile) ? designImgMobile : designImg}
          width={(isTablet || isMobile) ? 375 : 1098}
          height={(isTablet || isMobile) ? 618 : 781}
          sizes="100vw"
          alt="girl"
        />
      </div>
    </section>
  );
}

ProjectXDesignSection.propTypes = {
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ProjectXDesignSection;
