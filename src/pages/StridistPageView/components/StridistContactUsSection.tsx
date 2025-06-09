import { ReactNode } from 'react';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { useAppDispatch } from '../../../hook/reduxToolkit';
import { ButtonType } from '../../../constants/enums';

import styles from '../sass/stridistContactUsSection.module.scss';

function StridistContactUsSection({ children, type, idBtn }: { children: ReactNode, type:string, idBtn:ButtonType }) {
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.container}>
        {children}
        <div
          id={idBtn}
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          className={`${styles.btn} btnContactModal`}
          role="presentation"
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default StridistContactUsSection;
