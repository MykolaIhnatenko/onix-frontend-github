import ContentText from '../../../../components/ContentText/ContentText';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ProgressSectionSecondBg from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg-second@2x.webp';
import ProgressSectionSecondBgTablet from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg-tablet-second@2x.webp';
import ProgressSectionSecondBgMobile from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/progressSection/img_bg-mobile-second@2x.webp';

import styles from '../../../../components/CasesComponents/ProgressSection/sass/ProgressSection.module.scss';

const productDiscoveryContent = {
  title: '[ Product discovery stage ]',
  subtitle: 'Onix started development from the discovery phase.',
  progressBlockContent: (
    <>
      <VRARContent>
        <ContentText className={styles.text}>
          The main goal of the discovery was to define a straightforward app workflow, specify key features,
          reinvent the UX, and develop the specification so the developers could start the work as soon as possible.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          At the beginning of the project, there needed to be more details to provide a precise estimation. So,
          Onix came up with the estimation based not on dev hours but on the devs&apos; quantity needed to
          complete the project by the deadline, which was quite strict.
        </ContentText>
      </VRARContent>
      <VRARContent>
        <ContentText className={styles.text}>
          We discussed with the client the possibility of allocating additional resources to cover timing risks.
          But, we&apos;ve managed to finish the project on time at a lower cost.
        </ContentText>
      </VRARContent>
    </>
  ),
  bg: ProgressSectionSecondBg,
  bgTablet: ProgressSectionSecondBgTablet,
  bgMobile: ProgressSectionSecondBgMobile,
};

export default productDiscoveryContent;
