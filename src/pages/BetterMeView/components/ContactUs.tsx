import { useDispatch } from 'react-redux';

import Icon from '../../../assets/icon';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { ButtonType } from 'constants/enums';

import styles from '../sass/contactUs.module.scss';

function ContactUs({ title, idBtn }: { title: string, idBtn: ButtonType }) {
  const dispatch = useDispatch();

  return (
    <section className={styles.contactUs}>
      <div className="betterMeContainer">
        <div className={styles.background}>
          <VRARContent>
            <h2>{title}</h2>
          </VRARContent>
          <VRARContent>
            <div
              id={idBtn}
              role="presentation"
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              className={`${styles.link} btnContactModal`}
            >
              <Icon.IconArrow />
              <span className="btn">Contact us</span>
            </div>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
