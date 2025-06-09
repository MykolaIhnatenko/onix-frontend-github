import StridistValueCard from './StridistValueCard';
import valueCardsContent from '../data/valueCardsContent';

import styles from '../sass/stridistValueSection.module.scss';

function StridistValueSection() {
  return (
    <section className={styles.valueSection}>
      <div className={`${styles.container} stridistContainer`}>
        <h2 className="valueTitle">Value delivered</h2>
        <ul>
          {valueCardsContent.map(({ id, icon, content }) => (
            <StridistValueCard key={id} icon={icon} content={content} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StridistValueSection;
