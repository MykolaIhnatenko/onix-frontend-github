import PageLinks from '../../../constants/PageLinks';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemTextWithButton from 'components/AccordionItemTextWithButton/AccordionItemTextWithButton';

const customSoftwareData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Web development',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Onix provides comprehensive end-to-end web development services, from strategy and architecture
          to design and implementation.`,
          `Our teams build customized websites that meet your specific needs and provide ongoing support
          for each customer. Whether you are looking for a basic one-page website or a more complex e-commerce
          platform, Onix can help get you on the path to success.`,
        ]}
        path={PageLinks.WEB_DESIGN_AND_DEVELOPMENT}
      />
    ),
  },
  {
    id: 8,
    number: '08',
    title: 'Research and tech development',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Onix's R&D provides innovative technologies with the highest quality standards for clients.
          Our experts use industry best practices and advanced analysis techniques to develop high-performance
          solutions that deliver maximum value.`,
          `Onix is committed to staying at the forefront of technology, actively researching new methods and
          trends so that we can provide the most up-to-date R&D solutions available.`,
        ]}
        path={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'iOS development',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Our company specializes in providing custom iOS development services tailored to your specific needs.
          Our team of experienced developers can create innovative and user-friendly applications for the iOS
          platform, ensuring seamless functionality and exceptional design.`,
          `Whether you need a simple app or a complex enterprise solution, we deliver a custom-built
          iOS app that exceeds your expectations.`,
        ]}
        path={PageLinks.IOS_DEVELOPMENT}
      />
    ),
  },
  {
    id: 9,
    number: '09',
    title: 'Prototyping and Proof of Concept',
    content: (
      <AccordionItemTextWithButton
        content={[
          `We offer prototyping and proof of concept (PoC) services to help businesses securely validate
          the feasibility of their product ideas. Our team of professionals is able to develop production-ready
          prototypes with quickly delivered results, always staying within budget.`,
          `Through the use of the latest tools and technologies, we deliver reliable PoC services that meet
          the highest standards of performance and quality.`,
        ]}
        path={PageLinks.UI_UX_DESIGN_AND_DEVELOPMENT}
      />
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Android development',
    content: (
      <AccordionItemTextWithButton
        content={[
          `We can create user-friendly and customized Android applications that cater to your business needs.
          We use the latest technologies and tools to develop high-performance Android apps that are optimized
          for speed and user experience.`,
          `Our team works closely with you to understand your project goals and deliver a reliable and scalable
          application that meets your business objectives.`,
        ]}
        path={PageLinks.ANDROID_APPLICATION_DEVELOPMENT}
      />
    ),
  },
  {
    id: 10,
    number: '10',
    title: 'Project discovery',
    content: (
      <AccordionItemTextWithButton
        content={[
          `This is the first stage of every successful software development project. If you have a great
          business idea but don’t know how to realize it, we conduct Project Discovery to validate your
          business idea early on and investigate your market and competitors in detail.`,
        ]}
        path={PageLinks.PRODUCT_DISCOVERY}
      />
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'AR/VR development',
    content: (
      <AccordionItemTextWithButton
        content={[
          'We provide a full range of AR & VR development services to help your business ideas thrive.',
          `Our team of experts has the experience, knowledge, and creativity required to produce AR/VR
          products that enhance user engagement and deliver powerful results. With Onix, you can create
          innovative and immersive experiences for your customers through our cost-effective AR/VR
          development services.`,
        ]}
        path={PageLinks.VR_AR_VIRTUAL_REALITY_AUGMENTED_REALITY_DEVELOPMENT}
      />
    ),
  },
  {
    id: 11,
    number: '11',
    title: 'Lean Inception',
    content: (
      <AccordionItemTextWithButton
        content={[
          'If you want to optimize and direct your team’s work effectively, we use Lean Inception for that.',
          `It is especially useful when the team needs to develop a Minimum Viable Product and evolve a product
          iteratively and incrementally.`,
        ]}
        path={PageLinks.PRODUCT_DISCOVERY}
      />
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Machine learning',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Onix provides cutting-edge Machine Learning development solutions that enable you to automate complex
          tasks and harness the power of AI.`,
          `Our ML engineers can help you create powerful algorithms and data models that leverage the power
          of predictive analytics to deliver valuable insights for your business. With our flexible solutions
          and personalized service, Onix can help you develop an ML solution tailored to your specific needs.`,
        ]}
        path={PageLinks.MACHINE_LEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 12,
    number: '12',
    title: 'UI/UX audit',
    content: (
      <AccordionItemTextWithButton
        content={[
          `With the help of UI and UX audit, we define the core problems in your product, which, if tackled, can
          increase your product’s conversion rates, improve its usability and address your users’ objections.`,
        ]}
        path={PageLinks.UX_AUDIT}
      />
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Salesforce development',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Onix has the expertise to develop custom Salesforce applications that increase user engagement,
          improve customer satisfaction, and drive sales growth.`,
          `Our experienced development team expertly designs and implements scalable Salesforce solutions
          that empower businesses to maximize their potential in the digital age.`,
        ]}
        path={PageLinks.SALESFORCE_DEV_SERVICES}
      />
    ),
  },
  {
    id: 13,
    number: '13',
    title: 'DevOps',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Our company provides custom DevOps services to help your business streamline your software development
          process and improve your team&apos;s productivity.`,
          `Our experienced DevOps engineers use the latest tools and technologies to design, automate and optimize
          your software development processes. From building automated infrastructure to developing CI/CD pipelines,
          our team can help you get your software releases up and running quickly and efficiently.`,
        ]}
        path={PageLinks.DEVOPS_SERVICES}
      />
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'Software testing and QA services',
    content: (
      <AccordionItemTextWithButton
        content={[
          `Onix provides comprehensive quality assurance services for businesses and development teams ranging
          from general testing to specific application areas.`,
          `Our team of QA experts is experienced in all fields, utilizing the latest technology and methods to
          deliver high-quality results. Onix is committed to ensuring that our clients have the best possible solution
          that meets their needs and expectations.`,
        ]}
        path={PageLinks.SOFTWARE_TESTING_QA_SERVICES}
      />
    ),
  },
  {
    id: 14,
    number: '14',
    title: 'UI/UX design',
    content: (
      <AccordionItemTextWithButton
        content={[
          'We deliver high-practice UI/UX design services with a user-centric approach.',
          `Our experienced team of designers ensures that each solution is configured to suit the specific
          needs and goals of each customer, from creating effective layout designs to optimizing the user experience.
          Whatever your needs may be, Onix can help you make a design that meets both your budget and deadlines.`,
        ]}
        path={PageLinks.UI_UX_DESIGN_AND_DEVELOPMENT}
      />
    ),
  },
];

export default customSoftwareData;
