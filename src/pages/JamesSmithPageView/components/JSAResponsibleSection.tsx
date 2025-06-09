import responsibilities from '../data/responsibilities';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAPageContainer from './JSAPageContainer';
import BlueSpan from './BlueSpan';
import JSAText from './JSAText';

import styles from '../sass/JSAResponsibleSection.module.scss';

function JSAResponsibleSection() {
  return (
    <JSAPageContainer className={styles.responsibleSection}>
      <VRARContent>
        <JSAText tag="h2" variant="fs64">
          The&nbsp;
          <BlueSpan>
            Onix team
            <br />
            was responsible&nbsp;
          </BlueSpan>
          for:
        </JSAText>
      </VRARContent>
      <VRARContent className={styles.responsibilities}>
        {responsibilities.map(({ id, value }) => (
          <div key={id} className={styles.responsibilityItem}>
            <JSAText>
              {value}
            </JSAText>
          </div>
        ))}
      </VRARContent>
    </JSAPageContainer>
  );
}

export default JSAResponsibleSection;
