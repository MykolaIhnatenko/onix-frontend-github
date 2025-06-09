import HaasReedMore from './HaasReedMore';
import resultsText from '../data/resultsText';
import HaasText from './HaasText';
import VRARContent from 'components/VRARContent/VRARContent';

import styles from '../sass/HaasResultsSection.module.scss';

function HaasResultsSection() {
  return (
    <section className={styles.results}>
      <div className={styles.content}>
        <HaasText tag="h2" variant="results">Results</HaasText>
        <VRARContent translate="translateX" offset={-24} duration={0.6} rootMarginBottom={-20} withoutAnimateMobile>
          <div className={styles.textBlock}>
            <HaasText tag="p" variant="resultsFS16" className={styles.text}>
              Employing reliable technologies and applying extensive experience in building high-quality software
              products, the Onix team helped to deliver end-to-end service for selling and servicing Haas CNC machines.
            </HaasText>
            <HaasReedMore variant="results" content={resultsText} />
          </div>
        </VRARContent>
      </div>
    </section>
  );
}

export default HaasResultsSection;
