import ContentText from '../../../components/ContentText/ContentText';
import PageLinks from '../../../constants/PageLinks';
import LinkComponent from '../../../components/Link/Link';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { btnStyle, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const webDesignFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What are the advantages of the offshore web development model?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The main benefit of hiring an offshore web development company is the global talent pool, deep
          technical expertise, rational use of resources, team scalability depending on your needs, streamlined
          development process, and faster time-to-market. The offshore web development team takes care of all
          the project management hassle and ensures an effective and transparent development process while you
          focus on your business growth.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How to choose an outsource web development company?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          To make the right choice and hire an experienced offshore web development agency, it&apos;s better to
          pay attention to important factors such as portfolio, relevant expertise, experience, location,
          previous clients&apos; feedback, etc. Moreover, to choose the right company you can talk openly with
          its specialists and ensure they understand your problem and know how to solve it with modern
          and reliable technologies.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How to develop a custom web app?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          To develop a custom web app, you&apos;ll need to conduct deep research and business analysis that involves
          project requirements elicitation and planning of the project development. After defining the main
          functionality, you and your tech partner select the required tech stack. Then you can start the
          UX/UI design and development process.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How much does it cost to build a custom website?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Offshore custom website development costs may vary on various factors. To accurately answer this question,
          we need to know your product idea, its complexity, the number of required features, developers&apos;
          expertise, and team size. You can share your web app idea with us, and our experts will
          {' '}
          <LinkComponent href={PageLinks.DEDICATED_TEAM_CALCULATOR} className={btnStyle}>
            calculate your development costs
          </LinkComponent>
          .
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'How can I hire Android app developers from Onix?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The cost of offshore web development can vary depending on a number of factors, including the complexity
          of the project, the location and size of the offshore development team, and the experience and skill
          level of the developers. Generally speaking, offshore web development can be significantly less expensive
          than hiring a domestic development team, particularly if you are based in a high-cost area like the
          United States or Europe. Hourly rates for offshore developers can range from as low as $10 to $150
          or more, depending on the location and expertise of the team. However, it&apos;s important to keep in
          mind that cost should not be the only factor in your decision to work with an offshore development
          team. Quality, reliability, and communication are also important considerations.
        </ContentText>
      </div>
    ),
  },
];

export default webDesignFaqData;
