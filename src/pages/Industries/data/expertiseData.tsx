import PageLinks from '../../../constants/PageLinks';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

import IndustriesExpertise2 from '@/images/industriesPage/img_expertise2@2x.webp';
import IndustriesExpertise3 from '@/images/industriesPage/img_expertise3@2x.webp';
import IndustriesExpertise4 from '@/images/industriesPage/img_expertise4@2x.webp';
import IndustriesExpertise5 from '@/images/industriesPage/img_expertise5@2x.webp';
import IndustriesExpertise6 from '@/images/industriesPage/img_expertise6@2x.webp';
import IndustriesExpertise7 from '@/images/industriesPage/img_expertise7@2x.webp';
import IndustriesExpertise1 from '@/images/industriesPage/img_expertise1@2x.webp';

const expertiseData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Education & training',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise1}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.ELEARNING_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `Onix will help you design and develop eLearning apps and websites that provide online training and
            education in a user-friendly and engaging format for employees, students, and other target groups.`,
          ]}
        />
        <ItemList
          list={[
            'Online learning apps',
            'eLearning platforms',
            'Corporate training',
            'Mobile learning',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Travel & hospitality',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise2}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We have keen knowledge of building exceptional custom travel and hospitality software solutions
            to deliver the best possible user experience that modern travelers seek while outpeforming your
            competitors and boosting business efficiency!`,
          ]}
        />
        <ItemList
          list={[
            'Hotel booking website development',
            'Travel mobile app development',
            'Property management systems',
            'CRM systems for hotels',
            'Travel agency software',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Healthcare',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise3}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `The Onix team assists you in solving software development challenges with custom solutions that
            automate business processes, improve treatment outcomes and the patient’s experience, boost productivity,
            and reduce operating costs.`,
          ]}
        />
        <ItemList
          list={[
            'Health monitoring solutions',
            'Medical CRM',
            'Healthcare mobile apps',
            'Medical data management',
            'Patient care management',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Sports & fitness',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise4}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `Our specialists develop software solutions that revolutionize the sports industry and help
            businesses win the hearts of fitness enthusiasts. Our tech experts can help you create a custom
            sports or fitness app tailored to your requirements and business needs.`,
          ]}
        />
        <ItemList
          list={[
            'Wearable apps development',
            'Fitness mobile apps development',
            'Coaching apps',
            'Sports streaming apps',
            'Sports event booking apps',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'LMS software development',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise5}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.LMS_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We create LMS platforms that suit organizational objectives, meet training needs, deliver unique
            learning processes with the best possible user experience, and help attain desired results from
            a short-term perspective.`,
          ]}
        />
        <ItemList
          list={[
            'Custom LMS from scratch',
            'Custom Learning Record Store (LRS) development',
            'Custom LXP development',
            'Mobile learning solution',
            'LMS upgrade and customization',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Booking & online scheduling software development',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise6}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We build comprehensive solutions that make your appointments and bookings work for your business while
            reducing administrative tasks. Our scalable and high-performing online booking solutions will optimize
            business operations and strengthen your market position.`,
          ]}
        />
        <ItemList
          list={[
            'Custom online scheduling and booking systems',
            'Mobile booking solutions',
            'Third-party integrations',
            'Booking system upgrade and customization',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'Fintech software & app development',
    content: (
      <AccordionItemContentWithImg
        image={IndustriesExpertise7}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT,
        }}
        staticImageHeight
      >
        <ItemText
          content={[
            `We turn your innovative business concepts into outstanding fintech solutions. From robust banking
            applications to secure payment gateways and innovative financial management platforms, we create
            innovative solutions that drive cost efficiency and sustainable growth.`,
          ]}
        />
        <ItemList
          list={[
            'Banking & finance software',
            'Payments & digital wallets',
            'Investment management',
            'Trading and exchanges',
            'Lending and alternative finances',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default expertiseData;
