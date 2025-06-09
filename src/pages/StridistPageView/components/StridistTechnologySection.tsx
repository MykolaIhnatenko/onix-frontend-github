import StridistTechnologiesBlock from './StridistTechnologiesBlock';

import styles from '../sass/stridistTechnologySection.module.scss';

function StridistTechnologySection() {
  return (
    <section className={styles.technologySection}>
      <div className={`${styles.container} stridistContainer`}>
        <StridistTechnologiesBlock />
      </div>
    </section>
  );
}

export default StridistTechnologySection;
