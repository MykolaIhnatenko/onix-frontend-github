import ContentText from '../../../../components/ContentText/ContentText';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ProgressSectionBg from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg@2x.webp';
import ProgressSectionBgTablet from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg-tablet@2x.webp';
import ProgressSectionBgMobile from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg-mobile@2x.webp';

import styles from '../../../../components/CasesComponents/ProgressSection/sass/ProgressSection.module.scss';

const productScopeContent = {
  title: '[ Product scope ]',
  subtitle: 'A few years ago, Onix created a similar web project for the same client.',
  textBlock: (
    <>
      <VRARContent>
        <ContentText className={styles.text}>
          But the previous codebase and design were outdated, so we had to develop an infrastructure for
          multiple branded apps, build the apps from scratch, and reinvent UX.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={`${styles.text} ${styles.lastText}`}>
          A professional team of Onix specialists followed the fine-tuned development process to create a first-class
          platform for patient self-care:
        </ContentText>
      </VRARContent>
    </>
  ),
  progressBlockContent: (
    <>
      <VRARContent>
        <ContentText className={styles.text}>
          Collect requirements to define the main product features and meet business goals.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          Set up a transparent and fine-tuned development process.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          Conduct the discovery phase to reinvent the UX and develop the specification so that the developers
          can start the work as soon as possible.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          Ensure a holistic solution consisting of mobile apps (iOS and Android) and a web app of different
          functionality and role within the product.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          Implement reliable and advanced technologies to ensure high software operation and proper functioning.
        </ContentText>
      </VRARContent>
    </>
  ),
  bg: ProgressSectionBg,
  bgTablet: ProgressSectionBgTablet,
  bgMobile: ProgressSectionBgMobile,
};

export default productScopeContent;
