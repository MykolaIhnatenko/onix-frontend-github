import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';

import faqBlockStyles from '../../../components/FAQBlock/sass/faqBlock.module.scss';

const motionGraphicsFaqData = [
  {
    id: 1,
    title: 'How can motion graphics benefit my business?',
    content: (
      <ContentText>
        Motion graphics can benefit your business by capturing attention, enhancing visual appeal,
        conveying complex ideas effectively, increasing engagement, improving brand recognition,
        and enabling storytelling capabilities. They can be used across various platforms to
        communicate your message in a compelling and memorable way.
      </ContentText>
    ),
  },

  {
    id: 2,
    title: 'Can motion graphics be customized to match my brand\'s style?',
    content: (
      <ContentText>
        Yes, motion graphics can be customized to align with your brand&apos;s style and identity.
        Onix is a motion graphics agency that incorporates your brand elements, such as logos, colors,
        typography, and visual guidelines to ensure consistency and reinforce your brand image.
      </ContentText>
    ),
  },
  {
    id: 3,
    title: 'How long does it take to create motion graphics?',
    content: (
      <ContentText>
        The timeline for creating motion graphics depends on the project&apos;s complexity, including a number of
        scenes, level of detail, and revisions required. As a motion design agency, we will work closely
        with you to determine project requirements and provide an estimated timeline based on your specific needs.
      </ContentText>
    ),
  },
  {
    id: 4,
    title: 'What is the process for creating motion graphics?',
    content: (
      <ContentText>
        The process typically involves understanding your objectives, gathering requirements, conceptualizing
        ideas, storyboarding, creating visuals and animations, and revising based on feedback. Our team will
        guide you through each step and ensure the final result meets your expectations.
      </ContentText>
    ),
  },
  {
    id: 5,
    title: 'Can I use motion graphics for social media and online platforms?',
    content: (
      <ContentText>
        Absolutely! Motion graphics are highly versatile and can be optimized for various platforms, including
        social media, websites, online advertisements, presentations, and more. They are an effective way to
        grab attention and engage your audience in the fast-paced digital environment.
      </ContentText>
    ),
  },
  {
    id: 6,
    title: 'How do I get started with Onix motion graphics design services?',
    content: (
      <ContentText>
        To get started with our motion design services, simply reach out to us through our
        {' '}
        <LinkComponent
          href="/contact-us"
          className={faqBlockStyles.iosLink}
        >
          contact form
        </LinkComponent>
        . Our team will be happy to discuss your specific needs, provide a personalized quote, and guide
        you through the process of creating compelling and impactful motion graphics for your business.
      </ContentText>
    ),
  },
];

export default motionGraphicsFaqData;
