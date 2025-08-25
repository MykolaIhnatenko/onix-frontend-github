import PageLinks from '../../../constants/PageLinks';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

import UiUxOurExpertiseFirstImg1 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg1.webp';
import UiUxOurExpertiseFirstImg2 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg2.webp';
import UiUxOurExpertiseFirstImg3 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg3.webp';
import UiUxOurExpertiseFirstImg4 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg4.gif';
import UiUxOurExpertiseFirstImg5 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg5.webp';
import UiUxOurExpertiseFirstImg6 from '@/images/uiUxPage/ourExpertiseSectionFirst/img_iuUxOurExpertiseFirstImg6.webp';

const uiUxSecondOurExpertiseSectionContentData = (isMobile: boolean): IAccordionData[] => ([
  {
    id: 1,
    number: '01',
    title: 'Brand Identity',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg1}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.BRANDING_DESIGN,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `We aim at helping businesses establish a strong and recognizable brand presence online.
            We work with clients to create custom brand identities that accurately reflect their
            business values, personality, and target audience.`,
            `Our team of experienced designers will create a unique logo, select appropriate typography
            and color schemes, and develop a comprehensive brand style guide to ensure consistency
            across all platforms.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Audit',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg2}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.UX_AUDIT,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Our UX audit service at Onix is designed to help businesses identify and address
            usability issues with their existing digital products.`,
            `Our team of experienced UX designers will conduct a thorough analysis of the user
            experience and provide actionable recommendations to improve usability and enhance
            overall user satisfaction.`,
            `We evaluate everything from the product's functionality and navigation to its
            visual design and content.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Digital Product Design',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg3}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.DIGITAL_PRODUCT_DESIGN_SERVICES,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Our digital product design service at Onix is aimed at helping businesses develop
            innovative and user-friendly digital products.`,
            `We combine user-centered design principles with cutting-edge technology to create digital
            products that meet the needs of our clients and their customers. Our UI and UX design
            services include everything from product ideation and prototyping to final design and development.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Motion Design',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg4}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.MOTION_DESIGN,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            'We focus on creating dynamic and engaging visual experiences through animation and video production.',
            `Our motion designers work collaboratively to deliver customized solutions that effectively
            communicate our clients' message and brand identity.`,
            `We combine creative direction, design, and animation to create engaging motion graphics,
            explainer videos, product demos, and other forms of visual storytelling.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Cross-Platform Compatibility',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg5}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.CROSS_PLATFORM,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `Our team of designers and developers follows best practices and guidelines to ensure
            that our clients' products are optimized for all operating systems, browsers, and screen sizes.`,
            `We conduct extensive testing to identify and resolve any compatibility issues, and we work
            closely with our clients to ensure that their digital products are accessible to all users.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Creative landing pages on the Webflow platform',
    content: (
      <AccordionItemContentWithImg
        image={UiUxOurExpertiseFirstImg6}
        imageAlt="expertise-image"
        button={{
          path: PageLinks.WEBFLOW_DESIGN_AND_DEVELOPMENT_SERVICES,
        }}
        staticImageHeight
        contentReverse={isMobile}
      >
        <ItemText
          content={[
            `At Onix, we specialize in creating stunning and effective landing page designs
            using the Webflow platform.`,
            `Our teams of experienced designers and developers work closely with clients to create unique,
            customized landing pages that capture their brand's personality and effectively communicate their
            message to potential customers.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
]);

export default uiUxSecondOurExpertiseSectionContentData;
