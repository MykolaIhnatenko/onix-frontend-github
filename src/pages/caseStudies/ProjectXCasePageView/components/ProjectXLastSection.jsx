import { useDispatch } from 'react-redux';

import ImageComponent from '../../../../components/Image/Image';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';

import styles from '../sass/ProjectXLastSection.module.scss';

const lastSectionBg = '/static/images/Pages/ProjectX/lastSection/img_last_section_circle_bg@2x.webp';

function ProjectXLastSection() {
  const dispatch = useDispatch();
  return (
    <section className={styles.lastSection}>
      <div className={styles.lastSectionBg}>
        <ImageComponent
          src={lastSectionBg}
          width={479}
          height={954}
          alt="circles"
        />
      </div>
      <div className={`${styles.container} container`}>
        <h2>
          Looking for a reliable tech partner to digitize your fitness business?
        </h2>
        <div className={styles.btnBlock}>
          <div
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            className="btn lastSectionBtn btnContactModal"
          >
            Contact us
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectXLastSection;
