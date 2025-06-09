import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceContactUsSectionProps from '../interfaces/ISalesforceContactUsSection';
import { ButtonType } from 'constants/enums';

import styles from '../sass/salesforceContactUsSection.module.scss';

function SalesforceContactUsSection({ colorBtn = 'colorBtn', title, classes = '' }:ISalesforceContactUsSectionProps) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.contactUs} ${styles[classes]}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>{title}</h2>
        </VRARContent>
        <VRARContent>
          <div
            id={ButtonType.CASE2}
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            className={`btn ${colorBtn} btnContactModal`}
          >
            Contact us
          </div>
        </VRARContent>
      </div>
    </div>
  );
}

export default SalesforceContactUsSection;
