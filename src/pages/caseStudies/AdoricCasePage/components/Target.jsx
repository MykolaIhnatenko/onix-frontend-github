import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/AdoricCaseView.module.scss';

function Target() {
  return (
    <section className={styles.artItem}>
      <div className="col l12">
        <div className={styles.projectContext}>
          <VRARPageAppearAnimation>
            <h2 className={`${styles.contentHeaderPrimary} ${styles.center}`}>
              For whom this product is
            </h2>
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation>
            <p>
              Adoric was created for site owners who are looking to increase their
              conversions, but don’t know
              how to do it. This service allows to organize your own marketing campaign.
              Currently Adoric offers
              its services to large enterprises on the market.
              <br />
              <br />
              In the upcoming year, the system will also become available for a wider audience
              and include small
              websites with little traffic.
            </p>
          </VRARPageAppearAnimation>
        </div>
      </div>
    </section>
  );
}

export default Target;
