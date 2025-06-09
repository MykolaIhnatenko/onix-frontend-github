import ContentText from '../../../../components/ContentText/ContentText';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import digitalHealthcareTechnologies from '../data/digitalHealthcareTechnologies';

import styles from '../sass/gatherGroupTechnologiesSection.module.scss';

function GatherGroupTechnologiesSection() {
  return (
    <section className={styles.technologiesSection}>
      <div className={`${styles.container}`}>
        <VRARContent>
          <MainTitle className={styles.subtitle}>
            Core technology stack we&nbsp;used
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <ul className={styles.technologies}>
            {digitalHealthcareTechnologies.map((item) => (
              <li key={item} className={styles.technology}>
                <ContentText className={styles.technologyText} tag="p">{item}</ContentText>
              </li>
            ))}
          </ul>
        </VRARContent>
      </div>
    </section>
  );
}
export default GatherGroupTechnologiesSection;
