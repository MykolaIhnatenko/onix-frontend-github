import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import VRARContent from '../../../components/VRARContent/VRARContent';
import IContactUs from '../interfaces/IContactUs';

import styles from '../sass/coloradoSportsVideoContactUsSection.module.scss';

function ColoradoSportsVideoContactUsSection({ content: { title, buttonTitle }, idBtn }: IContactUs) {
  const dispatch = useDispatch();

  return (
    <section className={styles.contactUsSection}>
      <div className={`${styles.container} coloradoContainer`} id={idBtn}>
        <VRARContent>
          {title}
        </VRARContent>
        <div
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          className={`${styles.btn} btnContactModal`}
        >
          {buttonTitle}
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoContactUsSection;
