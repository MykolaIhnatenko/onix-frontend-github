import ContactUs from './ContactUs';
import { ButtonType } from 'constants/enums';

import styles from '../sass/Offer.module.scss';

interface IOffer {
  text: string;
  idBtn: ButtonType;
}

function Offer({ text, idBtn }:IOffer) {
  return (
    <div className={styles.offer}>
      <h2>
        {text}
      </h2>
      <ContactUs idBtn={idBtn} />
    </div>
  );
}
export default Offer;
