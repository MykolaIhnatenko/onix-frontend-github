import CardItem from './CardItem';
import ImageComponent from '../../../../components/Image/Image';
import Icon from '../../../../assets/icon';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';

import MetroAppDiscountImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroAppDiscountImage.webp';
import MetroAppLoyaltyImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroAppLoyaltyImage.webp';
import MetroAppScannerImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroAppScannerImage.webp';
import MetroAppShoppingImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroAppShoppingImage.webp';
import MetroAppVoucherImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_metroAppVoucherImage.webp';
import FeaturesResultImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_featuresResultImage.webp';
import styles from '../sass/metroCaseFeatures.module.scss';

function MetroCaseFeatures() {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <VRARContent className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          The app’s killer features and their implementation
        </h2>
      </VRARContent>
      <div>
        <VRARContent className={styles.featureItemContainer}>
          <CardItem
            cardView="feature"
            image={MetroAppScannerImage}
            imagePosition="right"
            imageHeight={540}
            imageWidth={636}
          >
            <h3 className={styles.featureItemTitle}>Product scanner</h3>
            <div className={styles.featureItemTextContainer}>
              <p className={styles.featureItemText}>
                With a wide variety of goods at the stores and frequent changes
                in product promotions, it is important that the customer always
                sees the correct price of each item. Still, customers may often
                have difficulty finding the right price tag.
              </p>
              <p className={styles.featureItemText}>
                The mobile application solves this problem. The user just needs
                to point the scanner at a product’s barcode, and its valid price
                will be promptly displayed on the mobile screen.
              </p>
              <p className={styles.featureItemText}>
                To implement this feature, we developed a compact design of the
                price tag including several price levels, an image, a description,
                and some legal text that is mandatory since the company specializes in wholesales.
              </p>
              <p className={styles.featureItemText}>
                After the first release and collecting user feedback, we discovered
                that it is convenient for the users to scan several products in a row and
                then view information about the products on the smartphone. This determined
                the next step: the development of a multi-scan and carousel of scanned products.
              </p>
              <p className={styles.featureItemText}>
                All scanned items are stored and can be conveniently viewed on the
                user’s smartphone at any time. Moreover, since the goods prices
                and the relevance of promotional offers may vary at different METRO
                stores, the app updates the price tags every time the user opens the app.
              </p>
            </div>
          </CardItem>
        </VRARContent>
        <VRARContent className={styles.featureItemContainer}>
          <CardItem
            cardView="feature"
            image={MetroAppShoppingImage}
            imageHeight={540}
            imageWidth={636}
          >
            <h3 className={styles.featureItemTitle}>Shopping list</h3>
            <div className={styles.featureItemTextContainer}>
              <p className={styles.featureItemText}>
                Users have the option to compile a shopping list before going to the supermarket.
              </p>
              <p className={styles.featureItemText}>
                The products on the list will be automatically grouped by category that
                corresponds to the physical store’s different departments.
                This solution will save the customers’ time and effort while shopping:
                the list will help them move purposefully through the multiple departments in a huge store.
              </p>
            </div>
            <div className={styles.featureItemListContainer}>
              <p className={styles.featureItemListTitle}>
                Several improvements related to the shopping list are being planned as well:
              </p>
              <ul className={styles.featureItemList}>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>the app may send automatic reminders about frequently purchased items</p>
                </li>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>the app would notify customers when products on their list are available at a discount</p>
                </li>
                <li>
                  <Icon.IconCheck className={styles.icon} />
                  <p>
                    when the company launches online sales, the shopping list
                    will be easily converted to the customer’s cart
                  </p>
                </li>
              </ul>
            </div>
          </CardItem>
        </VRARContent>
        <VRARContent className={styles.featureItemContainer}>
          <CardItem
            cardView="feature"
            image={MetroAppLoyaltyImage}
            imagePosition="right"
            imageHeight={540}
            imageWidth={636}
          >
            <h3 className={styles.featureItemTitle}>Loyalty program</h3>
            <div className={styles.featureItemTextContainer}>
              <p className={styles.featureItemStrongText}>
                This feature is realized on three screens:
              </p>
            </div>
            <div className={styles.featureItemSubTitleContainer}>
              <p className={styles.featureItemSubTitle}>Status screen</p>
            </div>
            <div className={styles.featureItemTextContainer}>
              <p className={`${styles.featureItemText} ${styles.featureFirstText}`}>
                The app displays information about the user’s current and next possible status,
                bonuses they’ve accumulated, and bonuses to earn for the next level via a progress bar and figures.
              </p>
            </div>
          </CardItem>
        </VRARContent>
        <VRARContent className={styles.featureItemContainer}>
          <CardItem
            cardView="feature"
            image={MetroAppVoucherImage}
            imageHeight={540}
            imageWidth={636}
          >
            <h3 className={styles.featureItemTitle}>Vouchers screen</h3>
            <div className={styles.featureItemTextContainer}>
              <p className={`${styles.featureItemText} ${styles.featureFirstText}`}>
                This screen allows users to generate vouchers with different values,
                depending on the amount of bonuses they’ve earned. They use the same
                screen to make new purchases with the vouchers: at the supermarket,
                the cashier will have to scan a voucher’s barcode.
              </p>
            </div>
          </CardItem>
        </VRARContent>
        <VRARContent className={styles.featureItemContainer}>
          <CardItem
            cardView="featuйre"
            image={MetroAppDiscountImage}
            imagePosition="right"
            imageHeight={540}
            imageWidth={636}
          >
            <h3 className={styles.featureItemTitle}>Direct discount screen</h3>
            <div className={styles.featureItemTextContainer}>
              <p className={`${styles.featureItemText} ${styles.featureFirstText}`}>
                On this screen, the customer can see the available discount,
                as determined by their status, but doesn’t have to do anything
                with it. At the checkout, they will simply have their customer
                card scanned, and the system will automatically recognize their
                status and apply the direct discount percentage.
              </p>
            </div>
          </CardItem>
        </VRARContent>
      </div>
      <VRARContent className={styles.resultContainer}>
        <div className={styles.resultimageContainer}>
          <ImageComponent
            src={FeaturesResultImage}
            alt="featuresResultImage"
            width={200}
            height={193}
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className={styles.resultTextContainer}>
          <p className={styles.resultText}>
            The launch of the loyalty program was a milestone in the development
            of METRO UA apps. By better satisfying customers’ day-to-day needs,
            the feature helped to significantly boost customer loyalty.
          </p>
        </div>
      </VRARContent>
    </div>
  );
}

export default MetroCaseFeatures;
