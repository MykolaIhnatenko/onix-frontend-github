import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Arrow from '../../../../../public/static/images/Pages/InnerVR/worldsSection/ic_arrow.svg';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';
import { ButtonType } from '../../../../constants/enums';

import styles from '../sass/InnerVRContactUs.module.scss';

function InnerVRContactUsSection({ idBtn }) {
  const dispatch = useDispatch();
  return (
    <section className={styles.contactUsSection}>
      <div className={`${styles.container} containerInnerVR`}>
        <h2 className={styles.title}>
          Are you interested in custom VR app development? Creative AR/VR developers are just one click away!
        </h2>
        <div
          id={idBtn}
          className={`${styles.titleContainer} btnContactModal`}
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        >
          Contact Us
          <Arrow className={styles.arrow} />
        </div>
      </div>
    </section>
  );
}

InnerVRContactUsSection.propTypes = {
  idBtn: PropTypes.oneOf(Object.values(ButtonType)).isRequired,
};

export default InnerVRContactUsSection;
