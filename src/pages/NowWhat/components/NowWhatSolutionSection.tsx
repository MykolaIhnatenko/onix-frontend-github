import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TabsBlock from '../../../components/TabsBlock/TabsBlock';
import solutionsContent from '../data/solutionContent';

import styles from '../sass/NowWhatSolutionSection.module.scss';

function NowWhatSolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <PageContainer className={`${styles.container}`}>
        <VRARContent>
          <ContentText className={styles.title} tag="p">
            [ Solutions we provide ]
          </ContentText>
        </VRARContent>
        <VRARContent>
          <MainTitle className={styles.subtitle}>
            On the part of the Onix team, highly-skilled experts were committed to working on this&nbsp;project.
          </MainTitle>
        </VRARContent>
        <div className={styles.textBlock}>
          <VRARContent className={styles.textContainer}>
            <ContentText className={styles.text} tag="p">
              The top-level requirement was building an informative website on WordPress where users could
              add and find medical articles and develop a private portal to find friends and chat with them.
            </ContentText>
          </VRARContent>
          <VRARContent className={styles.textContainer}>
            <ContentText className={styles.text} tag="p">
              To build a high-performing website aligned with our client&apos;s goals and budget,
              the Onix team offered the following solutions:
            </ContentText>
          </VRARContent>
        </div>
      </PageContainer>
      <TabsBlock
        content={solutionsContent}
        classes={{
          tab: 'screen-md:gap-[30px]',
        }}
      />
    </section>
  );
}
export default NowWhatSolutionSection;
