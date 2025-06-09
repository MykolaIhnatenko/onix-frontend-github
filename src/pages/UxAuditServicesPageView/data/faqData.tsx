import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What is a UX audit?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          A UX audit is a comprehensive evaluation of a website or application&apos;s
          user experience, including its usability, accessibility, and overall engagement.
          The goal is to identify areas of improvement and provide recommendations for enhancing
          the site&apos;s user experience.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Why do I need UX/UI design review services?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          A design audit can help improve your website&apos;s user experience and drive better results,
          such as increased customer satisfaction, higher conversion rates, and improved engagement
          metrics. By identifying pain points a-nd making changes based on expert recommendations,
          you can enhance your site&apos;s usability and overall success.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How long does a UX audit take?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The length of a UX audit can vary depending on the size and complexity of the site being evaluated.
          However, most audits can be completed within a few weeks to a few months, depending on the scope of
          the project.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Can you help implement the recommendations from the UX audit?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, we are a user experience audit agency that offers implementation support to ensure the successful
          execution of our recommended enhancements. We can even assist with design and development if needed,
          to ensure that your site&apos;s user experience is optimized for success.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
