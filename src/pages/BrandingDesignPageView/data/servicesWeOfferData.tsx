import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import BDLogoDesign from '@/images/brandingDesign/img_logo_design.webp';
import BDBrandGuidelines from '@/images/brandingDesign/img_brand_guidelines.webp';
import BDBrandDesign from '@/images/brandingDesign/img_brand_design.webp';
import styles from '../sass/servicesWeOffer.module.scss';

const cooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    number: '01',
    title: 'Brand design',
    content: (
      <div className={styles.firstContent}>
        <ContentText tag="p" marginAbsent className={styles.text}>
          Our brand design service offers a customized solution for customers
          seeking to build their brand from scratch or those who already have
          existing brand elements but need a fresh perspective and revitalization.
        </ContentText>
        <ul className={styles.list}>
          <li><p>﹂ Branding strategy</p></li>
          <li><p>﹂ Logo design</p></li>
          <li><p>﹂ Visual identity</p></li>
          <li><p>﹂ Brand guidelines</p></li>
        </ul>
      </div>
    ),
    image: BDBrandDesign,
  },
  {
    id: 2,
    number: '02',
    title: 'Logo design',
    content: (
      <div className={styles.secondContent}>
        <ContentText tag="p" marginAbsent className={styles.text}>
          Whether you&apos;re starting from scratch or looking to refresh your existing logo,
          we ensure a creative and strategic approach to deliver a logo that effectively
          represents your brand and makes a lasting impression.
        </ContentText>
        <ul className={styles.list}>
          <li><p>﹂ Discovery</p></li>
          <li><p>﹂ Concept development</p></li>
          <li><p>﹂ Sketching and conceptualization</p></li>
          <li><p>﹂ Design execution</p></li>
          <li><p>﹂ Brand guidelines</p></li>
        </ul>
      </div>
    ),
    image: BDLogoDesign,
  },
  {
    id: 3,
    number: '03',
    title: 'Brand guidelines',
    content: (
      <div className={styles.thirdContent}>
        <ContentText tag="p" marginAbsent className={styles.text}>
          Our brand guidelines service offers a comprehensive document outlining the rules,
          principles, and standards for consistently using a brand&apos;s visual identity across different touchpoints.
        </ContentText>
        <ul className={styles.list}>
          <li><p>﹂ Brand identity definition</p></li>
          <li><p>﹂ Logo usage</p></li>
          <li><p>﹂ Color palette</p></li>
          <li><p>﹂ Typography</p></li>
          <li><p>﹂ Imagery and graphics</p></li>
          <li><p>﹂ Tone of voice</p></li>
          <li><p>﹂ Application examples</p></li>
        </ul>
      </div>
    ),
    image: BDBrandGuidelines,
  },
];

export default cooperateList;
