import { useDispatch } from 'react-redux';

import VRARContent from '../../../components/VRARContent/VRARContent';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';

import styles from '../sass/InteractiveContactUsBlock.module.scss';

function InteractiveContactUsBlock({ idBtn }: { idBtn: ButtonType; }) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.contactUs} purple`}>
      <div className={`${styles.container} container4D`}>
        <div className={styles.contentBlock}>
          <VRARContent>
            <h2>
              Are you interested in VR, mobile,&nbsp;
              <br />
              or another training simulator development?
            </h2>
          </VRARContent>
          <VRARContent>
            <p>
              Onix can build one for you from A to Z or provide expert developers!
            </p>
          </VRARContent>
        </div>
        <div
          id={idBtn}
          className={`${styles.button} btnContactModal`}
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default InteractiveContactUsBlock;
