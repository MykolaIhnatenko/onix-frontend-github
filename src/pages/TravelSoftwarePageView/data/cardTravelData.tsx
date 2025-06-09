import TravelAboutCardBlock1 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock1.webp';
import TravelAboutCardBlock2 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock2.webp';
import TravelAboutCardBlock3 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock3.webp';
import TravelAboutCardBlock4 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock4.webp';
import TravelAboutCardBlock5 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock5.webp';
import TravelAboutCardBlock6 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock6.webp';
import TravelAboutCardBlock7 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock7.webp';
import TravelAboutCardBlock8 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock8.webp';
import TravelAboutCardBlock9 from '../../../assets/images/travelHospitalityPage/aboutCardBlock/img_aboutCardBlock9.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

const cardTravelData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Hotel website development',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock1}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Our specialists develop beautifully striking and high-performing hospitality software solutions that
            boost your business growth, increase customer databases, and satisfy the needs of modern users.`,
            `Our custom hotel website development includes booking status management, cancellation and refund
            management, automated invoice generation, third-party service integration, etc.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Travel mobile app development',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock2}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Our tailor-made and elegantly designed travel mobile apps help you enhance business performance,
            meet your customers' expectations, and increase brand awareness.`,
            `We deliver techno-driven iOS and Android apps with advanced features: navigation and
            maps, in-app payments, search engine, filtering, trip scheduling, booking, reviews and
            recommendations, and many more.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Hotel booking website development',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock3}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `The Onix team assists you in building tailored hotel solutions that digitize and facilitate
            your booking process.`,
            `Our hotel software development services include advanced features such as database management,
            payment system integration, a search engine with filters, and interactive scheduling that help
            you streamline your booking process and drive hospitality business efficiency.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Travel agency software',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock4}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `We make travel agents' work easier, allowing them to manage clients efficiently and ensure
            a superior user experience.`,
            `Our travel software developers build a robust solution with bundles of valuable features,
            including a booking management system, document generation and management, reports, payments,
            email alerts, etc.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'CRM systems for hotels',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock5}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `We have a keen knowledge of building custom CRM software aligned with your hospitality
            business processes.`,
            `Our solution allows you to store customer and prospect contact information, automate sales, and
            effectively manage marketing campaigns — all in one place. Boost productivity and meet client
            needs using our hotel CRMs!`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Property management systems',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock6}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `We build custom solutions that facilitate a hotel's reservation management,
            automate daily operations and administrative tasks, and enhance the guest experience.`,
            `Our PMS custom software includes such features as back-office management, front-desk operations,
            reporting, customer data management, reservation system, etc.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'Travel API integration',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock7}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Travel API integrations provide you with access to various third-party travel offers. It's an
            excellent opportunity to deliver many travel products in one place and let users try them
            without switching apps.`,
            `We offer service integration for tour operators, online travel agencies, business travel
            agencies, airlines, and cruise companies.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 8,
    number: '08',
    title: 'Design for travel and hospitality software',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock8}
        imageAlt="Image"
      >
        <ItemText
          content={[
            'We deliver web and mobile design services that allow your product to stand out from the crowd.',
            `Onix's experts combine years of experience in designing, understanding the UI/UX best practices,
            and attention to each client's requirements and target audience's needs to offer unique and
            highly innovative design solutions.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 9,
    number: '09',
    title: 'Support and maintenance',
    content: (
      <AccordionItemContentWithImg
        image={TravelAboutCardBlock9}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `After the development process is over, our team can help you with the product upgrade based on real
            users' feedback, software performance, and changing needs or requirements. Or you can scale up
            the project if you are ready to go forward.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardTravelData;
