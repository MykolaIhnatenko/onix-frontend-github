import JSAPageContainer from './JSAPageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { backTechnologies, frontTechnologies } from '../data/technologies';
import JSAText from './JSAText';
import BlueSpan from './BlueSpan';

import styles from '../sass/JSAStackSection.module.scss';

function JSAStackSection() {
  return (
    <JSAPageContainer className={styles.stackSection}>
      <VRARContent>
        <JSAText tag="h2" variant="fs64">
          Core
          <BlueSpan> Technology Stack </BlueSpan>
          We Used
        </JSAText>
      </VRARContent>
      <div className={styles.technologiesWrapper}>
        <VRARContent>
          <JSAText tag="p" variant="fs20" className={styles.listTitle}>
            <BlueSpan>Front-end technologies</BlueSpan>
          </JSAText>
          <ul className={styles.front}>
            {frontTechnologies.map((item) => <li key={item}><p>{item}</p></li>)}
          </ul>
        </VRARContent>
        <VRARContent>
          <JSAText tag="p" variant="fs20" className={styles.listTitle}>
            <BlueSpan>Back-end technologies</BlueSpan>
          </JSAText>
          <ul className={styles.back}>
            {backTechnologies.map((item) => <li key={item}><p>{item}</p></li>)}
          </ul>
        </VRARContent>
      </div>
    </JSAPageContainer>
  );
}

export default JSAStackSection;
