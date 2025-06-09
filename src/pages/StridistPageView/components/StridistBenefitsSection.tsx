import BenefitsCard from './BenefitsCard';
import benefitsCardsContent from '../data/benefitsCardsContent';

import styles from '../sass/stridistBenefitsSection.module.scss';

function StridistBenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={`${styles.container} stridistContainer`}>
        <h2 className="bigTitle h3Big">
          Instant benefits for the client:
        </h2>
        <div className={styles.benefitsCards}>
          {benefitsCardsContent.map(({ id, title, content }) => (
            <BenefitsCard key={id} id={id} content={content} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StridistBenefitsSection;
