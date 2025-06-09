import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function Target() {
  return (
    <div className={`${styles.row} ${styles['for-whom-this-product']} ${styles.ma}`}>
      <div className={styles.itemText}>
        <VRARContent>
          <h2 className={styles.mb15Center}>For whom this product is</h2>
        </VRARContent>
        <VRARContent>
          <p className={styles.padding15}>
            The targeted audience is a VR user that enjoys challenging sea adventures that bring them to a
            <br />
            world much resembling the conditions of the real world.
          </p>
        </VRARContent>
      </div>
    </div>
  );
}

export default Target;
