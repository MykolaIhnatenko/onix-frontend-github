import TabsBlock from 'components/TabsBlock/TabsBlock';
import ContentText from '../../../../components/ContentText/ContentText';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import solutionsContent from '../data/solutionsContent';

import styles from '../sass/gatherGroupSolutionsSection.module.scss';

function GatherGroupSolutionsSection() {
  return (
    <section className={styles.solutionSection}>
      <div className={`${styles.container}`}>
        <VRARContent>
          <ContentText className={styles.title} tag="p">
            [ Solutions we provide ]
          </ContentText>
        </VRARContent>
        <VRARContent>
          <MainTitle className={styles.subtitle}>
            The Onix team provided development solutions aligned with our client&apos;s goals, budget, and time.
          </MainTitle>
        </VRARContent>
      </div>
      <TabsBlock content={solutionsContent} />
    </section>
  );
}
export default GatherGroupSolutionsSection;
