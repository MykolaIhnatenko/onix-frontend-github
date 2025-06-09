import DesignAuditOurExpertiseSectionImg1 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg1@2x.webp';
import DesignAuditOurExpertiseSectionImg2 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg2@2x.webp';
import DesignAuditOurExpertiseSectionImg3 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg3@2x.webp';
import DesignAuditOurExpertiseSectionImg4 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg4@2x.webp';
import DesignAuditOurExpertiseSectionImg5 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg5@2x.webp';
import DesignAuditOurExpertiseSectionImg6 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg6@2x.webp';
import DesignAuditOurExpertiseSectionImg7 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg7@2x.webp';
import DesignAuditOurExpertiseSectionImg8 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg8@2x.webp';
import DesignAuditOurExpertiseSectionImg9 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg9@2x.webp';
import DesignAuditOurExpertiseSectionImg10 from '../../../assets/images/designAuditServicesPage/ourExpertiseSection/img_ourExpertiseSectionImg10@2x.webp';
import { IStickySliderData } from 'components/StickySlider/interfaces/IStickySliderItem';
import ItemText from 'components/ItemText/ItemText';

const StickySliderData: IStickySliderData[] = [
  {
    id: 1,
    number: '01',
    title: 'User research and analysis',
    text: (
      <ItemText
        content={[
          `We conduct thorough user research to understand the needs,
          preferences, and behaviors of your target audience.`,
          `Our team uses various methods, including surveys, interviews,
          and usability testing, to gather valuable insights.`,
        ]}
        marginBottomAbsent
      />
    ),
    image: DesignAuditOurExpertiseSectionImg1,
  },
  {
    id: 2,
    number: '02',
    title: 'Information architecture',
    text: 'We create a clear and intuitive structure for your website or app, organizing '
      + 'content and features in a way that makes sense to users and facilitates easy navigation.',
    image: DesignAuditOurExpertiseSectionImg2,
  },
  {
    id: 3,
    number: '03',
    title: 'Wireframing',
    text: 'We develop low-fidelity wireframes and high-fidelity prototypes to test and refine'
      + 'design concepts, ensuring that your product meets your business goals and user needs.',
    image: DesignAuditOurExpertiseSectionImg3,
  },
  {
    id: 4,
    number: '04',
    title: 'Visual design',
    text: 'We craft visually appealing interfaces that align with your brand identity, using color, '
      + 'typography, imagery, and other design elements to create a cohesive and memorable user experience.',
    image: DesignAuditOurExpertiseSectionImg4,
  },
  {
    id: 5,
    number: '05',
    title: 'Responsive design',
    text: 'We ensure your design is optimized for all devices and screen sizes, delivering a '
      + 'consistent and seamless experience across desktop, tablet, and mobile.',
    image: DesignAuditOurExpertiseSectionImg5,
  },
  {
    id: 6,
    number: '06',
    title: 'Interaction design (prototyping)',
    text: 'We create engaging and interactive experiences that encourage user engagement and '
      + 'drive conversions, leveraging animations, micro-interactions, and other techniques.',
    image: DesignAuditOurExpertiseSectionImg6,
  },
  {
    id: 7,
    number: '07',
    title: 'Design systems',
    text: 'We develop scalable and reusable design systems that ensure consistency and efficiency '
      + 'across your digital products, saving you time and resources in the long run.',
    image: DesignAuditOurExpertiseSectionImg7,
  },
  {
    id: 8,
    number: '08',
    title: 'Accessibility',
    text: 'We prioritize accessibility in all our designs, ensuring that all users, including those '
    + 'with disabilities, can easily access and use your product.',
    image: DesignAuditOurExpertiseSectionImg8,
  },
  {
    id: 9,
    number: '09',
    title: 'Tests & Validation',
    text: 'The testing and validation step plays a crucial role in ensuring the success of a '
      + 'product. This step involves evaluating the design solution through various methods '
      + 'to gather feedback, validate assumptions, and refine the product before its final implementation.',
    image: DesignAuditOurExpertiseSectionImg9,
  },
  {
    id: 10,
    number: '10',
    title: 'Execution',
    text: 'As a web and mobile development service provider, Onix will help you put your product design '
      + 'into production and turn it into a fully-functioning product.',
    image: DesignAuditOurExpertiseSectionImg10,
  },
];

export default StickySliderData;
