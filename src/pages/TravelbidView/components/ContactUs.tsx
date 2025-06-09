import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';

import styles from '../sass/ContactUs.module.scss';

function ContactUs({ idBtn }: { idBtn: ButtonType }) {
  const dispatch = useDispatch();
  return (
    <button
      id={idBtn}
      onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
      className={`${styles.button} btnContactModal`}
      type="button"
    >
      Contact us
    </button>

  );
}

export default ContactUs;
