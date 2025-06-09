import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const uiUxFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What kind of UI/UX design services do you offer?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          At Onix, we offer brand identity services, UI and UX design, UX audit, digital
          product design, motion design, and cross-platform compatibility services.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How much do you charge for UI/UX design services?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The cost of UI/UX design services can vary widely depending on a number of factors,
          including the complexity of the project, the level of customization required, the
          expertise and experience of the design team, and the geographic location of the
          company. In general, UI/UX design services can range from a few thousand dollars
          to tens of thousands of dollars, or more, depending on the scope of the project.
          Some may charge an hourly rate, while others may offer fixed-price packages or
          custom pricing based on the specific needs of the client.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What businesses have you had experience with UI/UX services?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Onix is a reputable software development and design company that has provided UI/UX
          services to a diverse range of businesses across various industries. Onix has worked
          with startups, small and medium-sized enterprises, and large corporations to develop
          innovative and user-friendly digital products. Some of the industries that Onix has
          worked with include healthcare, finance, education, e-commerce, and travel.
        </ContentText>
      </div>
    ),
  },
];

export default uiUxFaqData;
