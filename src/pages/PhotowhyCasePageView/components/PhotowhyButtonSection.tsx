import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';

import styles from '../sass/photowhyButtonSection.module.scss';

function PhotowhyButtonSection() {
  const dispatch = useDispatch();

  return (
    <section className={styles.buttonSection}>
      <div className={`${styles.container} container`}>
        <h2>
          Want to develop&nbsp;
          <br />
          a peer-to-peer learning marketplace app?
        </h2>
        <div
          id={ButtonType.CASE}
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          className={`${styles.btn} btnContactModal`}
        >
          Contact us
        </div>
      </div>
    </section>
  );
}

export default PhotowhyButtonSection;
