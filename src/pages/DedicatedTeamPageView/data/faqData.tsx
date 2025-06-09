import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'Can your dedicated team work with my existing in-house team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Absolutely! Our dedicated team is highly experienced in working collaboratively with in-house teams,
          whether on new projects or ongoing initiatives. We are happy to work closely with your team to ensure
          that your project&apos;s goals, deadlines, and budgets are met.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How do you ensure the quality of work delivered by your dedicated team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Our dedicated team is trained to the highest standards, and quality is monitored throughout the
          development process. We use rigorous testing methods and follow a strict set of guidelines to ensure
          that the work we deliver meets our high standards.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How to choose a proper dedicated software development team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Factors to consider include qualifications and experience, communication skills, quality of previous work,
          cost-effectiveness, and customer service. You should also consider your specific technical requirements
          and budget constraints when making this decision.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Why is Ukraine an exceptional location to hire a dedicated team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Ukraine is a great location to hire a dedicated software development team for many reasons. It has
          a large pool of skilled developers with diverse backgrounds, so you can find the right developer for
          your project quickly and cost-effectively. Its IT infrastructure is modern and reliable, so you don&apos;t
          have to worry about downtime. Ukraine also offers competitive salaries for software developers and
          attractive tax incentives for businesses. These benefits make it an ideal location to hire a dedicated
          development team.
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What is the best way to manage a dedicated development team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The best way to manage a dedicated development team is to establish clear goals and expectations from
          the outset. It&apos;s essential to clearly define roles and responsibilities, create an effective
          communication plan, provide resources and support, and establish mutually agreed-upon timelines.
          Additionally, setting meaningful metrics for success will help ensure that the team remains focused on
          meeting its goals. Finally, it&apos;s important to remember that building relationships with your team
          is critical - regular check-ins, feedback, and recognition will go a long way in helping maintain morale
          and keep things running smoothly.
        </ContentText>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What are the minimum and maximum dedicated team size you can provide?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Our team sizes are tailored to fit the needs of your project, so you can rest assured that our developers
          will have all the appropriate resources to deliver results of exceptional quality.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
