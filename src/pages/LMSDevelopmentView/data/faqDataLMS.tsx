import Link from 'next/link';

import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textLink, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqDataLMS: IAccordionData[] = [
  {
    id: 1,
    title: 'How much do LMS development and customization services cost?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          LMS development costs may vary on various factors. To accurately answer this question,
          we need to know your product idea, its complexity, the number of required features,
          developers’ expertise, and team size. Using our calculator, you can specify the number
          of experts and technologies you need and
          {' '}
          <Link href="https://onix-systems.com/dedicated-team-calculator">
            <span className={textLink}> get an approximate development cost for your project!</span>
          </Link>
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Can you integrate my LMS with third-party apps and tools?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, of course. We provide the best integration solutions for your LMS
          with customized features. Thanks to flexible architecture, our experts
          can integrate your LMS with third-party apps and tools such as CRM, Salesforce,
          video libraries, online payment solutions like Paypal, and many more.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Is it worth it to outsource the development of the LMS system?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The main benefit of outsourcing the development of the LMS system is the
          global talent pool, deep technical expertise, rational use of resources,
          team scalability depending on your needs, streamlined development process,
          and faster time-to-market. The outsourcing development team takes care of
          all the project management hassle and ensures an effective and transparent
          development process while you focus on your business growth.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How long does it take to develop an LMS solution from scratch?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          To accurately answer this question, we need to know your product idea,
          its complexity, the number of required features, developers’ expertise,
          and team size. For example, creating a minimum viable product (MVP) for
          digital learning will probably take up to 6-8 months. Using our calculator,
          you can specify the number of experts and technologies you need and
          {' '}
          <Link href="https://onix-systems.com/dedicated-team-calculator">
            <span className={textLink}>get an approximate development time for your project!</span>
          </Link>
        </ContentText>
      </div>
    ),
  },
];

export default faqDataLMS;
