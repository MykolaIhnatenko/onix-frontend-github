import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../../store/app/contactForm/slice';

import styles from '../sass/ContactUs.module.scss';

function ContactUs({ children }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.textContent}>{children}</div>
      <div className={styles.redirectButtonContainer}>
        <div
          role="presentation"
          className="btnContactModal"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactUs;
