import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/AdoricCaseView.module.scss';

function Approach() {
  return (
    <section className={styles.artItem}>
      <div className="col l12">
        <div className={styles.projectContext}>
          <VRARPageAppearAnimation>
            <h2 className={`${styles.contentHeaderPrimary} ${styles.center}`}>
              Approach
            </h2>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <p>
              Our customer set the goal of generating both an unobtrusive and simple SaaS
              product for digital
              marketers who would create lightboxes, use them to help their websites receive
              better ROI and
              conversions, build effective marketing strategies and receive regular campaign
              updates.
              <br />
              <br />
              From the customer’s side experienced marketers were invited to participate in
              functionality
              structuring. This helped create a product that has no complicated settings or
              necessity to have
              any
              additional knowledge to grow conversions on a website.
              <br />
              <br />
              The collaboration and communication with the customer and Onix team have been
              built on partnership
              that has become our path to success. We relied on daily calls, functionality
              planning and market
              requirements research, dived into the problems of our customer to understand the
              task better,
              provided openness for all processes and ensured their clarity to the customer.
            </p>
          </VRARPageAppearAnimation>
        </div>
      </div>
    </section>
  );
}

export default Approach;
