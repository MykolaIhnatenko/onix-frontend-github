import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

import img_LMS from '@/images/elernings/img_LMS.webp';
import img_LRS from '@/images/elernings/img_LRS.webp';
import img_ElerningPortals from '@/images/elernings/img_ElerningPortals.webp';
import img_VirtualClassrooms from '@/images/elernings/img_VirtualClassrooms.webp';
import img_KMS from '@/images/elernings/img_KMS.webp';
import img_LXP from '@/images/elernings/img_LXP.webp';
import img_MobileLearningApplications from '@/images/elernings/img_MobileLearningApplications.webp';
import img_LMSTablet from '@/images/elernings/img_LMSTablet.webp';
import img_LRSTablet from '@/images/elernings/img_LRSTablet.webp';
import img_ElerningPortalsTablet from '@/images/elernings/img_ElerningPortalsTablet.webp';
import img_VirtualClassroomsTablet from '@/images/elernings/img_VirtualClassroomsTablet.webp';
import img_KMSTablet from '@/images/elernings/img_KMSTablet.webp';
import img_LXPTablet from '@/images/elernings/img_LXPTablet.webp';
import img_MobileLearningApplicationsTablet from '@/images/elernings/img_MobileLearningApplicationsTablet.webp';
import img_LMSMobile from '@/images/elernings/img_LMSMobile.webp';
import img_LRSMobile from '@/images/elernings/img_LRSMobile.webp';
import img_ElerningPortalsMobile from '@/images/elernings/img_ElerningPortalsMobile.webp';
import img_VirtualClassroomsMobile from '@/images/elernings/img_VirtualClassroomsMobile.webp';
import img_KMSMobile from '@/images/elernings/img_KMSMobile.webp';
import img_LXPMobile from '@/images/elernings/img_LXPMobile.webp';
import img_MobileLearningApplicationsMobile from '@/images/elernings/img_MobileLearningApplicationsMobile.webp';

const cardElerningsData: IAccordionData[] = [
  {
    id: 10,
    number: '01',
    title: 'Learning management systems (LMS)',
    content: (
      <AccordionItemContentWithImg
        image={img_LMS}
        imageTablet={img_LMSTablet}
        imageMobile={img_LMSMobile}
        imageAlt="img_LMS"
      >
        <ItemText
          content={[
            `We offer custom LMS software development services to build a solution tailored
            to your unique business goals and needs.`,
            `Using our eLearning development services, you can create a solid learner-centric
            LMS app regardless of the project's complexity and scale!`,
          ]}
        />
        <ItemList
          list={[
            'Training sessions scheduling',
            'Centralized content library',
            'Assessment',
            'Communication (live video, instant messaging, file sharing, or VoIP calls)',
            'Automated alerts and notifications',
            'Deep analytics',
            'Remote-ready architecture',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 20,
    number: '02',
    title: 'Learning record store (LRS)',
    content: (
      <AccordionItemContentWithImg
        image={img_LRS}
        imageTablet={img_LRSTablet}
        imageMobile={img_LRSMobile}
        imageAlt="img_LRS"
      >
        <ItemText
          content={[
            `Leveraging robust technology and our deep expertise, we build LRS software that implies
            highly optimized and intelligent data storage for analyzing all information flows and
            distributing them to different storage cells in the form of flexible graphs, reports,
            and diagrams. These analytics and reporting features enhance learning and facilitate decision-making
            for organizations.`,
          ]}
        />
        <ItemList
          list={[
            'Flexible reporting & data tracking',
            'Data collection',
            'Performance reporting',
            'User activity dashboards',
            'Rich analytics',
            'Learning progress',
            'Class management',
            'Administration',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 30,
    number: '03',
    title: 'eLearning portals',
    content: (
      <AccordionItemContentWithImg
        image={img_ElerningPortals}
        imageTablet={img_ElerningPortalsTablet}
        imageMobile={img_ElerningPortalsMobile}
        imageAlt="img_ElerningPortals"
      >
        <ItemText
          content={[
            `Our experts assist you in creating a custom eLearning portal that allows your company to
            meet specific learning goals and streamline the training process.`,
            `We're here to create a feature-rich tailored portal with superior flexibility
            and efficiency that delivers a deeply personalized learning experience.`,
          ]}
        />
        <ItemList
          list={[
            'Administration of learning materials',
            'Content recommendation',
            'Students assessment',
            'Rich analytics',
            'Reporting dashboards',
            'Gamification',
            'Communication and social learning (chats, forums, communities, likes, shares, and comments)',
            'Payments',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 40,
    number: '04',
    title: 'Virtual classrooms',
    content: (
      <AccordionItemContentWithImg
        image={img_VirtualClassrooms}
        imageTablet={img_VirtualClassroomsTablet}
        imageMobile={img_VirtualClassroomsMobile}
        imageAlt="img_VirtualClassrooms"
      >
        <ItemText
          content={[
            'We create top-of-the-line video conferencing software to hold real-time online classes remotely.',
            `Our eLearning software developers will gladly assist you in creating learning
            environments for teachers and students that allow delivering exceptional
            learning experiences without compromising the quality of education.`,
          ]}
        />
        <ItemList
          list={[
            'Audio & video conferencing',
            'Virtual classrooms',
            'Teacher tools',
            'Broadcast video lessons',
            'Screen sharing',
            'Document sharing',
            'Live messaging chat',
            'Interactive digital whiteboards',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 50,
    number: '05',
    title: 'Knowledge management systems (KMS)',
    content: (
      <AccordionItemContentWithImg
        image={img_KMS}
        imageTablet={img_KMSTablet}
        imageMobile={img_KMSMobile}
        imageAlt="img_KMS"
      >
        <ItemText
          content={[
            `Managing educational content is now more straightforward since all data is in one digital place.
            The Onix team builds a robust knowledge management platform that allows your organization to have
            single access to your knowledge base.`,
            `Using our KMS, you can effortlessly create, publish, store and structure required information
            in the form of articles, FAQs, or step-by-step guides.`,
          ]}
        />
        <ItemList
          list={[
            'Content management (creation, storing, editing)',
            'Cross-device accessibility',
            'Multi-language support',
            'Third-party integrations',
            'eLearning content analytics',
            'Collaborative authoring',
            'Content repositories',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 60,
    number: '06',
    title: 'Learning experience platforms (LXP)',
    content: (
      <AccordionItemContentWithImg
        image={img_LXP}
        imageTablet={img_LXPTablet}
        imageMobile={img_LXPMobile}
        imageAlt="img_LXP"
      >
        <ItemText
          content={[
            `We have a keen knowledge of building custom LXP aligned with your company's needs,
            users' preferences, and previous learning choices.`,
            `Our eLearning software developers build centralized digital systems that empower your
            organization to combine various learning assets in one place to optimize and accelerate
            the training process.`,
          ]}
        />
        <ItemList
          list={[
            'Highly intuitive interfaces',
            'Personalized learning experience',
            'Extensive integration capabilities',
            'Video streaming eLearning solutions',
            'Contextual learning in the workplace',
            'Multimedia library',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 70,
    number: '07',
    title: 'Mobile learning applications',
    content: (
      <AccordionItemContentWithImg
        image={img_MobileLearningApplications}
        imageTablet={img_MobileLearningApplicationsTablet}
        imageMobile={img_MobileLearningApplicationsMobile}
        imageAlt="img_MobileLearningApplications"
      >
        <ItemText
          content={[
            `We deliver eLearning app development services that allow us to build techno-driven
            iOS and Android apps with advanced features to stand out from the crowd.`,
            `Our tailor-made and elegantly designed m-learning apps help you captivate your
            target audience, solve users’ pain points, enhance business performance,
            and increase brand awareness.`,
          ]}
        />
        <ItemList
          list={[
            'Student management',
            'Video',
            'Courses',
            'Admin dashboard',
            'Gaming programs',
            'Payments',
            'Smooth user experience',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardElerningsData;
