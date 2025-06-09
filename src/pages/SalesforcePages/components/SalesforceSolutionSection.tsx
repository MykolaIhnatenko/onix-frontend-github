import { useDispatch } from 'react-redux';
import { StaticImageData } from 'next/image';

import { setShowContactForm } from '../../../store/app/contactForm/slice';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { ButtonType } from 'constants/enums';

import styles from '../sass/salesforceSolutionSection.module.scss';

function SalesforceSolutionSection({ imgPath }: { imgPath: StaticImageData }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.solutionSection}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>Looking for custom Salesforce development services for your project?</h2>
        </VRARContent>
        <VRARContent>
          <div
            id={ButtonType.CASE}
            role="presentation"
            className="btnContactModal"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          >
            <button className="btn" type="button">Contact us</button>
          </div>
        </VRARContent>
      </div>
      <div className={styles.solutionsImg}>
        <ImageComponent
          width={347}
          height={470}
          src={imgPath}
          alt="Sales force"
        />
      </div>
    </div>
  );
}

export default SalesforceSolutionSection;
