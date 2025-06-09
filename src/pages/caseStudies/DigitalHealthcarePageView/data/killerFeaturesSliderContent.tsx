import ContentText from '../../../../components/ContentText/ContentText';
import MainTitle from '../../../../components/MainTitle/MainTitle';
import PhoneImage1 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/killerFeaturesBlock/img_phone1@2x.webp';
import PhoneImage2 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/killerFeaturesBlock/img_phone2@2x.webp';
import PhoneImage3 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/killerFeaturesBlock/img_phone3@2x.webp';
import PhoneImage4 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/killerFeaturesBlock/img_phone4@2x.webp';
import PhoneImage5 from '../../../../assets/images/caseStudiesPage/DigitalHealthcareCaseStudy/killerFeaturesBlock/img_phone5@2x.webp';

import styles from '../sass/gatherGroupKillerFeaturesBlock.module.scss';

const killerFeaturesSliderContent = [
  {
    id: 1,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Care management
      </MainTitle>),
    img: PhoneImage1,
    text: (
      <ContentText className={styles.text} tag="p">
        At the time of signup, a screening process for customized supportive care needs is conducted
        to determine any risk factors and create a personalized supportive care plan.
      </ContentText>),
  },
  {
    id: 2,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Daily living
      </MainTitle>),
    img: PhoneImage2,
    text: (
      <ContentText className={styles.text} tag="p">
        There is an easy-to-use &quot;roster&quot; highlighting the care tasks to be taken on by personal networks,
        stemming from care needs previously identified in the care plan.
      </ContentText>),
  },
  {
    id: 3,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Remote monitoring
      </MainTitle>),
    img: PhoneImage3,
    text: (
      <ContentText className={styles.text} tag="p">
        Risk assessments (PROMs) provide insight into the patient&apos;s status to inform personal networks
        and trigger educational advice and guidance from clinical experts to meet any changing needs at home.
      </ContentText>),
  },
  {
    id: 4,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Targeted education
      </MainTitle>),
    img: PhoneImage4,
    text: (
      <ContentText className={styles.text} tag="p">
        This education feature is tailored to the patient&apos;s needs and allows for enhancing the competency
        and confidence of personal networks in providing quality care.
      </ContentText>),
  },
  {
    id: 5,
    title: (
      <MainTitle className={styles.titleCard} tag="h3">
        Clinical guidance
      </MainTitle>),
    img: PhoneImage5,
    text: (
      <ContentText className={styles.text} tag="p">
        Real-time data will enable customers to proactively respond to the patient&apos;s needs by initiating
        direct communication and providing guidance to personal networks through their dashboards.
      </ContentText>),
  },
];

export default killerFeaturesSliderContent;
