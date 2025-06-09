import PageLinks from '../../../constants/PageLinks';
import PDTestingServicesImage from '@/images/productDiscovery/img_testing_services.webp';
import PDDesignAuditServicesImage from '@/images/productDiscovery/img_design_audit_services.webp';
import PDBrandingServicesImage from '@/images/productDiscovery/img_branding.webp';
import PDiOsServicesImage from '@/images/productDiscovery/img_ios_development.webp';
import PDAndroidServicesImage from '@/images/productDiscovery/img_android_development.webp';
import PDDedicatedTeamServicesImage from '@/images/productDiscovery/img_dedicated_team_services.webp';
import PDWebDevelopmentServicesImage from '@/images/productDiscovery/img_web_development_services.webp';
import PDDesignServicesImage from '@/images/productDiscovery/img_ui_ux_services.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

const ourExpertiseSectionContentData: IAccordionData[] = [
  {
    id: 100,
    number: '01',
    title: 'UI/UX design services',
    content: (
      <AccordionItemContentWithImg
        image={PDDesignServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.UI_UX_DESIGN_AND_DEVELOPMENT,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `The Onix’s experts combine years of experience in designing, understanding the UI/UX best practices,
            and attention to each client’s requirements and target audience’s needs to offer unique, highly
            aesthetic, and innovative designs.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 200,
    number: '02',
    title: 'Web development services',
    content: (
      <AccordionItemContentWithImg
        image={PDWebDevelopmentServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.WEB_DESIGN_AND_DEVELOPMENT,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We offer web development services to build stable and reliable web solutions that
            meet your unique goals, boost your business efficiency, and satisfy the needs of modern users.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 300,
    number: '03',
    title: 'Dedicated team services',
    content: (
      <AccordionItemContentWithImg
        image={PDDedicatedTeamServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.DEDICATED_TEAM,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We form a dedicated software development team that helps you deliver a high-quality
            software product and produce excellent results.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 400,
    number: '04',
    title: 'Android development',
    content: (
      <AccordionItemContentWithImg
        image={PDAndroidServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.ANDROID_APPLICATION_DEVELOPMENT,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We build world-class, techno-driven Android apps that complement your company's
            needs, vision, and budget. Our elegantly designed apps help you captivate your
            target audience, solve users' pain points, and enhance business performance.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 500,
    number: '05',
    title: 'iOS development',
    content: (
      <AccordionItemContentWithImg
        image={PDiOsServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.IOS_DEVELOPMENT,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `Whether it’s an app idea or you need help in enhancing your existing iOS app, we are here
            to guide you every step of the way. From concept ideation to design, development, testing,
            and deployment, our agile approach ensures seamless collaboration.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 600,
    number: '06',
    title: 'Branding',
    content: (
      <AccordionItemContentWithImg
        image={PDBrandingServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.BRANDING_DESIGN,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We provide app branding services that ensure your strong brand identity and brand consistency
            across you product (logo design, app icon design, graphic design, brand guidelines, etc.)`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 700,
    number: '07',
    title: 'Design audit',
    content: (
      <AccordionItemContentWithImg
        image={PDDesignAuditServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.DIGITAL_PRODUCT_DESIGN_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We offer specific advice on how to enhance your product's user experience, increase conversions
            and gain an edge over your competition.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 800,
    number: '08',
    title: 'Software testing and QA services',
    content: (
      <AccordionItemContentWithImg
        image={PDTestingServicesImage}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.SOFTWARE_TESTING_QA_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `Onix provides full-spectrum quality assurance and testing services to ship high-quality desktop,
            web, and mobile applications and ensure excellent software performance.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default ourExpertiseSectionContentData;
