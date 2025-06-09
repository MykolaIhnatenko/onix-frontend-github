import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const healthcareFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What healthcare software development services does Onix offer?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Onix offers a comprehensive range of healthcare software development services,
          including electronic health records (EHR) systems, telemedicine solutions,
          mobile health applications, practice management systems, health data analytics, and more.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Is Onix experienced in healthcare industry regulations and compliance?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, Onix has extensive experience in adhering to key global healthcare industry
          regulations, standards, and best practices. We prioritize compliance with GDPR,
          HIPAA, HITECH regulations, and certifications like ISO 9001, ISO 27001, and SOC2.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How does Onix ensure the security of sensitive patient data?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          At Onix, we prioritize data security. We employ strict security measures, including
          encryption protocols, secure storage, and compliance with industry-standard security
          frameworks. Our solutions are designed to keep sensitive patient information and
          clinical data safe and secure.
        </ContentText>
      </div>
    ),
  },
];

export default healthcareFaqData;
