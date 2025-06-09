import { IJSAOtherProjectsSection } from '../interfaces/IJSAOtherProjectsSection';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAPageContainer from './JSAPageContainer';
import JSAText from './JSAText';
import BlueSpan from './BlueSpan';
import OtherProjects from '../../../components/OtherProjects/OtherProjects';

import styles from '../sass/JSAOtherProjectsSection.module.scss';

function JSAOtherProjectsSection({ projects }: IJSAOtherProjectsSection) {
  return (
    <JSAPageContainer className={styles.otherProjectsSection}>
      <VRARContent className={styles.otherProjectsTitle}>
        <JSAText tag="h2" variant="middleTitle">
          More
          <BlueSpan> Sports & Fitness </BlueSpan>
          Projects
        </JSAText>
      </VRARContent>
      <OtherProjects projects={projects} />
    </JSAPageContainer>
  );
}

export default JSAOtherProjectsSection;
