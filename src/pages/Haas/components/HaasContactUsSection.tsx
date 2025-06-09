import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { useAppDispatch } from '../../../hook/reduxToolkit';
import HaasText from './HaasText';
import { ButtonType } from 'constants/enums';

import styles from '../sass/HaasContactUsSection.module.scss';

function HaasContactUsSection() {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <HaasText tag="h2" variant="title">
          Looking for a reliable tech partner to digitize your&nbsp;business?
        </HaasText>
        <div
          id={ButtonType.CASE}
          className={`btnContactModal ${styles.btn}`}
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        >
          Contact Us
        </div>
      </div>
    </section>
  );
}

export default HaasContactUsSection;
