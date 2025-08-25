import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

import WebflowExpertise1 from '@/images/webflowPage/expertise/img_expertise_1@2x.webp';
import WebflowExpertise2 from '@/images/webflowPage/expertise/img_expertise_2@2x.webp';
import WebflowExpertise3 from '@/images/webflowPage/expertise/img_expertise_3@2x.webp';
import WebflowExpertise4 from '@/images/webflowPage/expertise/img_expertise_4@2x.webp';
import WebflowExpertise5 from '@/images/webflowPage/expertise/img_expertise_5@2x.webp';
import WebflowExpertise6 from '@/images/webflowPage/expertise/img_expertise_6@2x.webp';
import WebflowExpertise7 from '@/images/webflowPage/expertise/img_expertise_7@2x.webp';
import WebflowExpertise8 from '@/images/webflowPage/expertise/img_expertise_8@2x.webp';

const webflowOurExpertiseSectionContentData = (isMobile: boolean): IAccordionData[] => ([
  {
    id: 1,
    number: '01',
    title: 'Discovery phase',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise1}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `We start by understanding your business goals, target audience, and project requirements.
            We conduct thorough research and gather all the necessary information to shape the design strategy.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Planning and wireframing',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise2}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Next, we create a solid plan and outline the structure of your website. We develop
            wireframes to establish the layout, content placement, and user flow. This helps
            us visualize the website's architecture and ensure optimal user experience.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Visual design',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise3}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Once the wireframes are approved, our talented experts create visually stunning designs.
            As a Webflow website design company, we focus on crafting a unique and engaging visual
            identity that aligns with your brand and resonates with your target audience.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Webflow development',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise4}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `With the designs finalized, our skilled designers bring them to life using the Webflow
            platform. They meticulously implement the necessary elements, ensuring pixel-perfect
            precision and seamless functionality.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Content integration',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise5}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `We integrate your content into the website, including text, images, videos, and other
            media. This ensures that your message is effectively conveyed and your brand story is
            compellingly presented.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Responsive design',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise6}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `We optimize your website for various devices, ensuring a seamless and consistent
            experience across desktops, tablets, and mobile devices.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 7,
    number: '07',
    title: 'Quality assurance',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise7}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `We conduct rigorous testing to identify and fix any issues or bugs. Onix is a Webflow
            design company that strives for a flawless user experience.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 8,
    number: '08',
    title: 'Launch and deployment',
    content: (
      <AccordionItemContentWithImg
        image={WebflowExpertise8}
        imageAlt="expertise-image"
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Once everything is thoroughly tested and approved, we will launch your website. We
            handle the deployment process seamlessly, ensuring your website is live and
            accessible to your audience.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
]);

export default webflowOurExpertiseSectionContentData;
