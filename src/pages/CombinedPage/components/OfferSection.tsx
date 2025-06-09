import VRARContent from '../../../components/VRARContent/VRARContent';
import CardMicroCase from '../../../components/CardMicroCase/CardMicroCase';
import IOfferSection from '../interfaces/IOfferSection';

import styles from '../sass/CombinedPage.module.scss';

function OfferSection({
  title, cards, shadowColor, circleColor,
}: IOfferSection) {
  return (
    <div className={styles.offerSection}>
      <div className={styles.container}>
        <VRARContent>
          <h2 className={styles.regularH2}>{title}</h2>
        </VRARContent>
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

export default OfferSection;
