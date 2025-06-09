import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'Can AR/VR solutions enhance customer engagement & sales?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, AR/VR solutions can enhance customer engagement and sales by providing immersive product visualization,
          personalized shopping experiences, virtual try-ons, and interactive product demonstrations.
          These features can increase customer satisfaction and encourage them to make a purchase.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What is the range of expertise of your VR/AR development company?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Our Virtual Reality and Augmented Reality development team’s expertise include interactive
          environments in an educational format, visualization tools for designers, virtual interior
          design, real estate business representation, brands in the business, video games,
          industrial visualization, media and entertainment, maps, image recognition.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How much does it cost to build a VR/AR application?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          AR/VR software development costs can be higher compared to mobile development,
          for example. However, user engagement and results can be obtained in fewer steps.
          Therefore, we often practice creating PoC, MVPs that don&apos;t imply fully-fledged development
          but cover the essential functionality.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How to choose an AR/VR software development company?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          To make the right choice and hire experienced augmented and virtual reality experts,
          it&apos;s better to pay attention to important factors such as portfolio, relevant expertise,
          experience, location, previous clients feedback, etc.
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'How long does it take to develop an AR or VR solution?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          To accurately answer this question, we need to know your app idea, its complexity,
          the number of required features, developers’ expertise, and team size. Moreover,
          keep in mind that development time can depend on user feedback. After each stage of development,
          we conduct testing in order to collect user feedback and improve the product accordingly.
          Thus, the client and our developers influence the development vector of the application.
        </ContentText>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What challenges can you face in AR/VR development?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Some challenges in AR/VR development include hardware limitations,
          user experience design difficulties, and the need for specialized technical skills.
          Additionally, the technology is still relatively new and rapidly evolving,
          which can create uncertainty around best practices and standards.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
