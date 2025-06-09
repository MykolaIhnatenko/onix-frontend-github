import CardMicroCase from '../../../components/CardMicroCase/CardMicroCase';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceOfferSectionProps from '../interfaces/ISalesforceOfferSection';

import styles from '../sass/salesforceOfferSection.module.scss';

function SalesforceOfferSection({
  classes = '', cards, shadowColor, circleColor,
}:ISalesforceOfferSectionProps) {
  return (
    <div className={`${styles.offerSection} ${styles[classes]}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <div className={styles.cardsWrapper}>
          {cards.map((card) => (
            <VRARContent key={card.id} className={styles.animationBlock}>
              <CardMicroCase
                className="cardImg"
                shadowColor={shadowColor}
                circleColor={circleColor}
                card={card}
              />
            </VRARContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesforceOfferSection;
