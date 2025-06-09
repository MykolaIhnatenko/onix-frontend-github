import DragSlider from 'components/DragSlider/DragSlider';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import gatherGroupDuringSectionData from '../data/gatherGroupDuringSectionData';

import styles from '../sass/gatherGroupDuringSection.module.scss';

function GatherGroupDuringSection() {
  return (
    <section className={styles.duringSection}>
      <div className={styles.sectionContainer}>
        <VRARContent className={`${styles.container}`}>
          <MainTitle tag="h2" className={styles.subtitle}>
            During the discovery phase, the Onix team:
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <DragSlider
            data={gatherGroupDuringSectionData}
            withoutDots
          />
        </VRARContent>
      </div>
    </section>
  );
}
export default GatherGroupDuringSection;
