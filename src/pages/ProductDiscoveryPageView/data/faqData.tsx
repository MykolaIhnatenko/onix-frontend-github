import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What happens if we skip the product discovery phase and move on?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          It&apos;s possible if you gathered requirements beforehand and have ready-made documentation
          and project architecture. Otherwise, without the Product Discovery phase, you may find
          that your software development or product upgrade process is suboptimal and incomplete.
          This could lead to costly mistakes or project delays as certain aspects may be overlooked.
          It&apos;s highly recommended to go through the Product Discovery phase to ensure a smooth
          transition to the software development stages.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How long does the product discovery phase usually take?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Discovery services for software development usually take from two to five weeks depending on
          your needs. During this time, a dedicated team will collect all the artifacts necessary for
          the project, and produce any deliverables required for transitioning to the implementation stage.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: (
      `
        How often should product discovery
        be conducted in software development projects?
      `
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          You should conduct a product discovery phase at the beginning of your project when you have only an
          idea that needs to be transformed into specific requirements and tasks for developers.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: (
      'Can product discovery be done in-house or is it better to hire offshore experts?'
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          It depends on your unique situation and needs. In-house product discovery can be excellent for small
          projects, or when fast turnaround time is a priority. However, offshore experts are often the better
          option due to their cost savings and access to greater resources.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
