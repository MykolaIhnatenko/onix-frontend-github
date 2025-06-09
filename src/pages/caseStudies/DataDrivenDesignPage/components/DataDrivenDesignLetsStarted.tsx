import { useDispatch } from 'react-redux';

import ExpertCard from './ExpertCard';
import UpwardTextAnimation from './UpwardTextAnimation';
import ImageComponent from '../../../../components/Image/Image';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';
import IPageStatus from 'interfaces/IPageStatus';

import styles from '../sass/DataDrivenDesignLetsStarted.module.scss';

const painterImage = '/static/images/Pages/DataDrivenDesignPage/img_painterImage.webp';
const diamondImage = '/static/images/Pages/DataDrivenDesignPage/img_diamondImage.webp';
const microscopeImage = '/static/images/Pages/DataDrivenDesignPage/img_microscopeImage.webp';
const handImage = '/static/images/Pages/DataDrivenDesignPage/img_handImage.webp';

function DataDrivenDesignLetsStarted({ saleUrl }: IPageStatus) {
  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.cardTitle}>
        Please don’t hesitate to contact Onix.
        Our experts can:
      </h3>
      <UpwardTextAnimation classes={`${styles.cardContainer}  ${saleUrl ? styles.sale : ''}`}>
        <ExpertCard image={painterImage} text="Redesign your website or app partly or entirely" />
        <ExpertCard image={diamondImage} text="Create a unique and appealing UX/UI design from scratch" />
        <ExpertCard image={microscopeImage} text="Conduct a comprehensive UX review of your product" />
      </UpwardTextAnimation>
      {!saleUrl && (
        <div className={styles.contactUsContainer}>
          <h2 className={styles.title}>Let’s get started!</h2>
          <div className={styles.textContainer}>
            Suggest design solutions backed by UX data to refine your customer experience
            and improve your product’s performance in a fast and cost-effective manner
          </div>
          <div
            className={`${styles.redirectButton} btnContactModal`}
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          >

            Contact us
          </div>
          <ImageComponent
            width={102}
            height={220}
            className={styles.contactUsImage}
            src={handImage}
            alt="handImage"
          />
        </div>
      )}
    </div>
  );
}

export default DataDrivenDesignLetsStarted;
