import img_DesignLMS from '@/images/LMS/img_DesignLMS.webp';
import img_SupportAndMaintaince from '@/images/LMS/img_SupportAndMaintaince.webp';
import img_DedicatedTeam from '@/images/LMS/img_DedicatedTeam.webp';
import img_LMSIntegration from '@/images/LMS/img_LMSIntegration.webp';
import img_MobileLearning from '@/images/LMS/img_MobileLearning.webp';
import img_CustomLXP from '@/images/LMS/img_CustomLXP.webp';
import img_CustomLearningLRS from '@/images/LMS/img_CustomLearningLRS.webp';
import img_UpgradeLMS from '@/images/LMS/img_UpgradeLMS.webp';
import img_CustomLMS from '@/images/LMS/img_CustomLMS.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

const cardsLMSData: IAccordionData[] = [
  {
    id: 11,
    number: '01',
    title: 'Custom LMS from scratch',
    content: (
      <AccordionItemContentWithImg
        image={img_CustomLMS}
        imageAlt="img_CustomLMS"
      >
        <ItemText
          content={[
            `We offer custom LMS development services to build solutions
            tailored to your unique business goals and needs.`,
            `Our specialists assist you in creating a solid learner-centric
            LMS app from scratch regardless of the project's complexity and scale.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 12,
    number: '02',
    title: 'LMS upgrade and customization',
    content: (
      <AccordionItemContentWithImg
        image={img_UpgradeLMS}
        imageAlt="img_UpgradeLMS"
      >
        <ItemText
          content={[
            `Our LMS experts will gladly assist you if it&apos;s the
            right time to update your LMS and add more useful features.`,
            `We provide a free audit of your current solution, prepare
            a list of improvements, manage your technology needs, conduct
            a UI/UX audit, implement new functionality, and integrate required APIs. We&apos;re here to help!`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 13,
    number: '03',
    title: 'Custom Learning Record Store (LRS) development',
    content: (
      <AccordionItemContentWithImg
        image={img_CustomLearningLRS}
        imageAlt="img_CustomLearningLRS"
      >
        <ItemText
          content={[
            `Our developers have extensive experience building LRS
            software that implies highly optimized and intelligent
            data storage for analyzing all information flows and
            distributing them to different storage cells in the
            form of flexible graphs, reports, and diagrams.`,
            `These analytics and reporting features enhance learning and
            facilitate decision-making for organizations.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 14,
    number: '04',
    title: 'Custom LXP development',
    content: (
      <AccordionItemContentWithImg
        image={img_CustomLXP}
        imageAlt="img_CustomLXP"
      >
        <ItemText
          content={[
            `We have a keen knowledge of building custom LXP aligned with your company&apos;s needs.
            Our LXP development services combine the functions of the systems described above,
            including highly intuitive interfaces, personalized learning experience, extensive
            integration capabilities, contextual learning in the workplace, and many more.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 15,
    number: '05',
    title: 'Mobile learning solution',
    content: (
      <AccordionItemContentWithImg
        image={img_MobileLearning}
        imageAlt="img_MobileLearning"
      >
        <ItemText
          content={[
            `Our tailor-made and elegantly designed m-learning
            apps help you captivate your target audience, solve
            users’ pain points, enhance business performance,
            and increase brand awareness.`,
            `We deliver techno-driven iOS and Android mobile LMS
            apps with advanced features: student management, video,
            courses, admin dashboard, gaming programs, payments,
            and so on.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 16,
    number: '06',
    title: 'LMS Integration',
    content: (
      <AccordionItemContentWithImg
        image={img_LMSIntegration}
        imageAlt="img_LMSIntegration"
      >
        <ItemText
          content={[
            `We provide the best integration solutions for your LMS with
            customized features. It&apos;s an excellent opportunity to deliver
            many products in one place and let users try them without switching apps.`,
            `Thanks to flexible architecture, our experts can integrate your
            LMS with third-party apps and tools such as CRM, Salesforce,
            video libraries, and payment services like Paypal.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 17,
    number: '07',
    title: 'Design for LMS',
    content: (
      <AccordionItemContentWithImg
        image={img_DesignLMS}
        imageAlt="img_DesignLMS"
      >
        <ItemText
          content={[
            `We deliver web and mobile design services that allow your LMS software
            to stand out from the crowd.`,
            `Onix’s experts combine 20+ years of experience in designing,
            understanding the UI/UX best practices, and attention to each client’s
            requirements and target audience’s needs to offer exceptional design solutions.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 18,
    number: '08',
    title: 'Support and maintenance',
    content: (
      <AccordionItemContentWithImg
        image={img_SupportAndMaintaince}
        imageAlt="img_SupportAndMaintaince"
      >
        <ItemText
          content={[
            `After the development process is over, our team can help you
            with the LMS upgrade based on real users’ feedback, software
            performance, and changing needs or requirements.`,
            `Such ongoing project customization and optimization ensure greater
            flexibility and speed in scaling up the project in the future.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 19,
    number: '09',
    title: 'Dedicated team',
    content: (
      <AccordionItemContentWithImg
        image={img_DedicatedTeam}
        imageAlt="img_DedicatedTeam"
      >
        <ItemText
          content={[
            `We form a dedicated software development team that helps
            you deliver high-quality LMS software and produce excellent
            results.`,
            `You focus on your business growth while our specialists
            take care of all the project management hassle and guarantee
            a smooth and transparent development process.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardsLMSData;
