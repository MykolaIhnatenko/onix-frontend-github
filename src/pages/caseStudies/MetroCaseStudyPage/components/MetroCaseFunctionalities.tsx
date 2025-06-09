import HalfFilledContactUs from './HalfFilledContactUs';
import FunctionalitiesList from './FunctionalitiesList';
import ContactUsImageV2 from '@/images/caseStudiesPage/MetroCaseStudyPage/img_contactUsImageV2.webp';
import Icon from '../../../../assets/icon';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import IPageStatus from '../../../../interfaces/IPageStatus';
import { ButtonType } from 'constants/enums';

import styles from '../sass/metroCaseFunctionalities.module.scss';

function MetroCaseFunctionalities({ saleUrl }: IPageStatus) {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <div className={styles.mainContentContainer}>
        <VRARContent>
          <h2 className={styles.contentTitle}>
            The functionalities
            <br />
            of the METRO UA app
          </h2>
        </VRARContent>
        <VRARContent>
          <p className={styles.contentText}>
            The grocery app encompasses a classic customer flow
            and auxiliary features for the METRO marketing department.
          </p>
          <p className={styles.contentFeatureIntro}>
            The customers’ functionalities include:
          </p>
        </VRARContent>
        <FunctionalitiesList />
        <VRARContent className={styles.rewardTypeContainer}>
          <p className={styles.rewardTypeTitle}>
            The mobile app enables customers to use either type of reward they’ve chosen:
          </p>
          <div className={styles.rewardTypeItemsContainer}>
            <div className={styles.rewardTypeItemWrapper}>
              <div className={styles.rewardTypeItem}>
                <div className={styles.rewardTypeItemIcon}>
                  <Icon.IconVoucher />
                </div>
                <p className={styles.rewardTypeItemTitle}>
                  Vouchers
                </p>
                <p className={styles.rewardTypeItemText}>
                  Users who accumulate bonuses can spend them by generating vouchers during subsequent purchases
                </p>
              </div>
            </div>
            <div className={styles.rewardTypeItemWrapper}>
              <div className={styles.rewardTypeItem}>
                <div className={styles.rewardTypeItemIcon}>
                  <Icon.IconDiscount />
                </div>
                <p className={styles.rewardTypeItemTitle}>
                  Direct discount
                </p>
                <p className={styles.rewardTypeItemText}>
                  Each status comes with different discount conditions for B2B customers.
                  They use the app to learn about the discount available to them
                </p>
              </div>
            </div>
          </div>
        </VRARContent>
        <VRARContent className={styles.functionalitiesListContainer}>
          <p className={styles.functionalitiesListTitle}>
            The app’s admin panel provides functionalities through which a marketer/administrator can:
          </p>
          <ul className={styles.functionalitiesList}>
            <li>
              <Icon.IconCheck className={styles.icon} />
              <p>manage the addresses of the stores (create, delete, and edit)</p>
            </li>
            <li>
              <Icon.IconCheck className={styles.icon} />
              <p>create promotional brochures to display to the customers</p>
            </li>
            <li>
              <Icon.IconCheck className={styles.icon} />
              <p>send personalized push notifications</p>
            </li>
            <li>
              <Icon.IconCheck className={styles.icon} />
              <p>manage the banner carousel (add, delete, and link)</p>
            </li>
            <li>
              <Icon.IconCheck className={styles.icon} />
              <p>edit T&C</p>
            </li>
          </ul>
        </VRARContent>
      </div>
      { !saleUrl && (
      <VRARContent className={styles.contactUsWrapper}>
        <HalfFilledContactUs
          imageSrc={ContactUsImageV2}
          imageWidth={100}
          imageHeight={100}
          idBtnFirst={ButtonType.CASE2}
          idBtnSecond={ButtonType.CASE3}
        >
          <h2 className={styles.contactUsText}>
            Do you need help with your shopping mobile app design?
            <br />
            Just book a free consultation with Onix’s design experts
            — we are here to create great user experiences!
          </h2>
        </HalfFilledContactUs>
      </VRARContent>
      )}
    </div>
  );
}

export default MetroCaseFunctionalities;
