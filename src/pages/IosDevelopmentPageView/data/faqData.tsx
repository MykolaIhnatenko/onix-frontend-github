import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import PageLinks from '../../../constants/PageLinks';
import { textLink, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'How much does it cost to create an iOS app?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The cost of creating an IOS app can vary greatly. Generally speaking, developing a basic IOS app
          costs anywhere from $5,000 to $30,000. Factors that can increase costs include features (such as
          3D / AR integration), complexity, and extra development time required due to unforeseen issues.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How big is the offshore iOS development team I need to create an app?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Offshore iOS development teams can vary in size depending on the scope of your project. Generally,
          you would need a team of anywhere from 4 to 10 developers working full-time, plus any additional
          UX/UI designers and testers needed.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What are your cases in offshore iOS development?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Onix has extensive experience in iOS app development, having created numerous apps ranging
          from fitness trackers to mobile games. Our skilled and experienced developers are adept at
          creating customized apps that meet exact customer requirements. We also provide ongoing maintenance
          and bug-fixing services to ensure your app continues to run smoothly and efficiently over time.
          Check out our case studies
          {' '}
          <LinkComponent
            href={PageLinks.CASE_STUDIES}
            className={textLink}
          >
            here
          </LinkComponent>
          .
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
