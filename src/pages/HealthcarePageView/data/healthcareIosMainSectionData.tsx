import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IIosMainSection from '../../../components/IosMainSection/interfaces/IIosMainSection';
import healthcareTapAccordionData from './healthcareTapAccordionData';

import styles from '../sass/healthcareMainSection.module.scss';

const healthcareIosMainSectionData: IIosMainSection = {
  sectionTitle: (
    <MainTitle tag="h1" className={styles.title}>
      Healthcare Software Development Services
    </MainTitle>
  ),
  firstText: (
    <ContentText tag="p" className={styles.text}>
      Onix is a trusted medical software development company that empowers businesses to harness
      technological innovation for improved efficiency, enhanced customer experiences, and
      optimized medical information management.
    </ContentText>
  ),
  secondText: (
    <ContentText tag="p" className={styles.text}>
      Our team excels in developing secure, regulatory-compliant software solutions that facilitate
      seamless communication between patients, doctors, health insurance companies, pharmaceutical
      suppliers, and medical device vendors. Together, we accelerate establishing a robust
      healthcare ecosystem, enabling greater resilience and agility in the industry.
    </ContentText>
  ),
  btnText: 'Speak to our expert',
  data: healthcareTapAccordionData,
};

export default healthcareIosMainSectionData;
