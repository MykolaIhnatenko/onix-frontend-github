import { useDispatch } from 'react-redux';

import { IJSAContactUs } from '../interfaces/IJSAContactUs';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAText from './JSAText';
import JSAPageContainer from './JSAPageContainer';

import styles from '../sass/JSAContactUs.module.scss';

function JSAContactUs({
  title, buttonText = 'Contact us', className = '', idBtn,
}: IJSAContactUs) {
  const dispatch = useDispatch();
  return (
    <JSAPageContainer className={`${styles.contactUs} ${className}`}>
      <VRARContent className={styles.contactWrapper}>
        <JSAText tag="h2" variant="middleTitle">
          {title}
        </JSAText>
        <div
          id={idBtn}
          role="presentation"
          className="btnContactModal"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        >
          {buttonText}
        </div>
      </VRARContent>
    </JSAPageContainer>
  );
}

export default JSAContactUs;
