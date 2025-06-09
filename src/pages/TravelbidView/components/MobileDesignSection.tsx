import MobileDesignSlider from './MobileDesignSlider';
import IMobileDesignSection from '../interfaces/IMobileDesignSection';
import VRARContent from 'components/VRARContent/VRARContent';

import styles from '../sass/TravelbidView.module.scss';

function MobileDesignSection({ isMobile }: IMobileDesignSection) {
  return (
    <section className={`${styles.mobileDesign} mobileDesignSection`}>
      <div className={styles.mobileDesignDescription}>
        <span className={styles.blurBgTop} />
        <VRARContent>
          <h3>
            Finally, the designer adapted the&nbsp;
            <span>
              web interface for mobile browsers.
            </span>
          </h3>
        </VRARContent>
        <p>
          The designer used Figma to develop the wireframes, visual design, prototype, and logo and color
          palette for the platform.
          <br />
          <br />
          Communication with the client was facilitated with a project management
          service like Trello. The client created a project, created various tasks, and wrote all his
          requirements and corrections there.
          <br />
          <br className="startMobileDesignAnimation" />
          After the client approved the final design, the team proceeded
          with programming the travel booking platform.
          <span className={styles.blurBgBottom} />
        </p>
      </div>
      <MobileDesignSlider isMobile={isMobile} />
      <div className={styles.shadowBgBottom} />
    </section>
  );
}

export default MobileDesignSection;
