import IHelpItem from '../interfaces/IHelpItem';

import styles from '../sass/ProductDiscoveryHelpsYouSection.module.scss';

function HelpItem({ number, text }: IHelpItem) {
  return (
    <div className={styles.benefitItem}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.text}>{text}</h3>
    </div>
  );
}

export default HelpItem;
