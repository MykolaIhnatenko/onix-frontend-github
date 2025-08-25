import customerRoleContent from '../data/customerRoleContent.json';
import serviceRoleContent from '../data/serviceRoleContent.json';
import Card from './Card';
import ImageComponent from 'components/Image/Image';
import VRARContent from 'components/VRARContent/VRARContent';

import ImageCustomer from '@/images/travelbid/problemsSection/img_customer-role.webp';
import ImageService from '@/images/travelbid/problemsSection/img_service-role.webp';
import styles from '../sass/TravelbidView.module.scss';

function ProblemsSection() {
  return (
    <section className={`${styles.problems} problemsSection`}>
      <VRARContent className={styles.row}>
        <h2>
          The problems&nbsp;
          <br />
          TravelBid solves
        </h2>
        <p className={styles.marginBottom}>
          <span className={styles.blurBg} />
          Service providers like hotels or car rental agencies sell highly perishable products and
          can’t afford to be idle: a hotel room night can’t be sold tomorrow. A 50% discount is better
          than no sale at all, but businesses are reluctant to publicize prices below their average pricing level.
          <br />
          <br />
          Ralph Schonfelder, the client, decided to create a travel booking system for business owners to
          offer special deals when the demand is low without publishing prices below market average on
          popular booking engines.
          <br />
          <br />
          For price-sensitive travelers, the platform offers opportunities to book special local deals they would
          find nowhere else. Without searching, emailing, and calling dozens of service providers,
          they can receive an offer tailored specifically to their needs.
        </p>
      </VRARContent>
      <VRARContent className={styles.row}>
        <h2>
          How the&nbsp;
          <br />
          platform works
        </h2>
        <p>
          The system distinguishes two categories of users:
          <br />
          <br />
          Customers – travelers
          <br />
          Vendors – travel and hospitality service providers
        </p>
      </VRARContent>
      <VRARContent>
        <h3>
          <span>
            Customers can post inquiries for booking
            accommodation,
          </span>
        &nbsp;airport transfer, or rental car.&nbsp;
          <br />
          For example:
        </h3>
      </VRARContent>
      <div className={styles.listWrapper}>
        <ul className={`${styles.steps} ${styles.customerRoleSteps}`}>
          {customerRoleContent.map((item) => <Card key={item.id} item={item} />)}
        </ul>
        <div className={styles.customerRoleImage}>
          <ImageComponent
            src={ImageCustomer}
            sizes="100vw"
            width={611}
            height={478}
            alt="Customer role"
            quality={100}
          />
          <div className={styles.overlay} />
        </div>
        <span className={styles.blurBgCustomerRole} />
      </div>
      <VRARContent>
        <h3>
          In the same case, a&nbsp;
          <span>
            transport service uses
            <br />
            the vendors’ interface
          </span>
        &nbsp;of the platform:
        </h3>
      </VRARContent>
      <div className={styles.listWrapper}>
        <ul className={`${styles.steps} ${styles.stepsSecond} ${styles.customerRoleSteps}`}>
          {serviceRoleContent.map((item) => <Card key={item.id} item={item} />)}
        </ul>
        <div className={styles.customerRoleImage}>
          <ImageComponent
            src={ImageService}
            sizes="100vw"
            width={598}
            height={514}
            alt="Service role"
            quality={100}
          />
          <div className={styles.overlay} />
        </div>
        <span className={styles.blurBgServiceRole} />
      </div>
    </section>
  );
}

export default ProblemsSection;
