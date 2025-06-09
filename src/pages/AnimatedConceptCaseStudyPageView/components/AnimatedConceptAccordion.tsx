import VRARContent from '../../../components/VRARContent/VRARContent';
import animationChallengesBlockList from '../data/animationChallengesBlockList.json';
import animationChallengesBlockData from '../data/animationChallengesBlockData';
import ContentText from 'components/ContentText/ContentText';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import OurSolutionsAccordion from 'components/OurSolutionsAccordion/OurSolutionsAccordion';

import styles from '../sass/animatedConceptAccordion.module.scss';

function AnimatedConceptAccordion() {
  return (
    <>
      <PageContainer className={styles.container}>
        <VRARContent>
          <ContentText className={styles.upTitle} tag="p">
            [ Our solutions ]
          </ContentText>
        </VRARContent>
        <VRARContent>
          <MainTitle className={styles.title}>
            In tackling the unique challenges faced during this motion design case study, the Onix
            Design Team applied innovative solutions to ensure a seamless and engaging user experience.
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <ContentText className={styles.subTitle} tag="p">
            Each challenge was met with thoughtful strategies, from animations to typography and colors,
            resulting in a compelling and user-friendly digital solution.
          </ContentText>
        </VRARContent>
      </PageContainer>
      <VRARContent>
        <OurSolutionsAccordion
          accordionData={animationChallengesBlockData}
          list={animationChallengesBlockList}
          stylesVariant="!bg-white !p-[0_70px_80px] min-xxxl:!p-[0_80px_80px] screen-lg:!p-[0]"
          iconBlack
        />
      </VRARContent>
    </>
  );
}

export default AnimatedConceptAccordion;
