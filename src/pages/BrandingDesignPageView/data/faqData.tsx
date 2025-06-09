import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import {
  textListOlLi, textListOl, textListSpan, textStyle,
} from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'Will the branding design you provide be unique?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Absolutely! The brand identity design we provide will be completely unique. Onix is a brand identity
          design company that works closely with each client to understand their brand identity, values, and
          target audience. We take a personalized approach to our branding design services, creating customized
          solutions tailored to each client&apos;s needs. From designing logos and visual elements to developing brand
          messaging and strategy, we make a distinctive and memorable brand image that stands out in the market.
          Our brand identity design services aim to help clients establish a solid and successful brand identity
          that sets them apart from the competition.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can branding help my business?',
    content: (
      <div>
        <ContentText className={textStyle} tag="div">
          <p>
            Branding is one of the most critical aspects of building a successful business.
            It involves creating a unique identity that represents your company and resonates
            with your target audience. There are several ways in which branding can help your business:
          </p>
          <ol className={textListOl}>
            <li className={textListOlLi}>
              <p>
                <span className={textListSpan}>Increases brand recognition. </span>
                Effective branding helps you create a memorable and recognizable
                brand image that stands out in the market. This, in turn,
                helps customers identify and remember your brand.
              </p>
            </li>
            <li className={textListOlLi}>
              <p>
                <span className={textListSpan}> Builds trust and loyalty. </span>
                A strong brand identity builds trust and credibility with your target audience.
                Customers are likelier to do business with a brand they recognize and trust.

              </p>
            </li>
            <li className={textListOlLi}>
              <p>
                <span className={textListSpan}> Promotes customer engagement. </span>
                Effective branding creates an emotional connection with your customers.
                It helps you communicate your brand values and messaging to your target audience,
                encouraging engagement and building brand awareness.
              </p>
            </li>
            <li className={textListOlLi}>
              <p>
                <span className={textListSpan}> Promotes customer engagement. </span>
                Effective branding sets you apart from the competition.
                It helps you establish a unique position in the market and differentiate yourself from other
                businesses offering similar products or services.
              </p>
            </li>
          </ol>
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How long does the brand design process take?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The branding design process can vary in length depending on each business&apos;s specific needs
          and requirements.
          It can take from a few weeks to several months to complete the entire process. The timeline is impacted by
          several factors, including the project&apos;s complexity, the number of revisions required,
          and the client&apos;s
          feedback and response time.
          <br />
          <br />
          As a full-service branding company, we work closely with our clients to establish realistic
          timelines based on their unique needs. Our brand design development process typically involves
          several stages, including research, strategy development, design concepts, revisions, and finalization.
          We strive to ensure that each stage of the process is executed efficiently while maintaining a high level
          of quality to deliver a unique and effective branding solution.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How much does it cost to hire someone for branding?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The cost of hiring someone for branding can vary depending on several factors,
          such as the scope of work, level of expertise, and geographic location of the designer.
          <br />
          <br />
          Generally, branding design services can range from a few hundred to several thousand dollars.
          Small businesses or startups may opt for a more affordable branding package with a logo and
          essential visual elements. In contrast, larger companies may require a more comprehensive branding
          solution involving a more extensive and tailored approach to brand development and strategy.
          <br />
          <br />
          Onix is a brand identity firm offering customized branding solutions tailored to each client&apos;s
          needs and budget. Our pricing is based on various factors, including the scope of work,
          complexity level, and completion timeline. We work closely with our clients to establish
          transparent pricing structures that align with their budgets and needs while ensuring high
          quality and effectiveness in our branding solutions.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
