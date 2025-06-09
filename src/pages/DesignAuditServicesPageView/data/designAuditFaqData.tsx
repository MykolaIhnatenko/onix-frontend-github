import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';

const designAuditFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'Why choose Onix for digital product design?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Choose Onix for digital product design because of our expertise, creativity, and commitment to
          delivering exceptional designs that exceed your expectations. We understand user needs, innovate,
          and create captivating experiences that set your brand apart.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How long does digital design take?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          The timeline for digital design can vary depending on the project&apos;s complexity, scope of work, and
          collaboration with stakeholders. We work efficiently without compromising quality, ensuring the
          timely delivery of your digital design project.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How do you assess the quality of a digital product design?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          We assess the quality of a digital product design based on several factors. These include user
          experience, intuitive interfaces, visual aesthetics, alignment with brand identity, adherence
          to design principles, usability testing, and user feedback. We aim to create engaging, user-friendly
          designs aligned with your objectives.
        </ContentText>
      </div>
    ),
  },
];

export default designAuditFaqData;
