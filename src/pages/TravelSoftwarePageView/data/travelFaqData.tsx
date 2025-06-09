import { textLink, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';
import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';
import PageLinks from '../../../constants/PageLinks';

const travelFaqData = [
  {
    id: 1,
    title: (
      `
        How many years of experience in travel
        & tourism software development does your team have?
      `
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Onix is a travel software development company with 20+ years of experience designing and developing
          apps for travel industry businesses. Our mission is to deliver value and tech support to businesses.
          Our goal is to build trusting relationships with our clients. Our responsibility is to choose the
          best technology solutions for your projects.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How much does it cost to build a travel app from scratch?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Travel app development costs may vary on various factors. To accurately answer this question, we
          need to know your product idea, its complexity, the number of required features, developers’
          expertise, and team size. You can share your travel or hospitality app idea with us, and our
          experts will
          {' '}
          <LinkComponent
            href={PageLinks.DEDICATED_TEAM_CALCULATOR}
            prefetch={false}
            className={textLink}
          >
            calculate your development costs.
          </LinkComponent>
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What travel & hospitality app development services can you offer?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          We provide custom travel software development company, hotel booking development, travel app
          development, travel agency software development, travel API integration, property management
          system, business operations prevention, and other connected services.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Can you set up a dedicated travel software development team for my project?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes! We form a dedicated travel software development team that helps you deliver a high-quality
          travel product and produce excellent results. You focus on your business growth while our
          specialists take care of all the project management hassle and guarantee a smooth and
          transparent development process. So, if you are looking for an experienced team to support
          you on the road to a successful travel or hospitality solution, we’d be happy to provide you with our
          {' '}
          <LinkComponent
            href={PageLinks.DEDICATED_TEAM}
            prefetch={false}
            className={textLink}
          >
            dedicated development team.
          </LinkComponent>
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Can you complete my travel app with proper features?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Sure! We offer a wide range of travel software development services, including development from
          scratch, upgrading or renovating your website or mobile app with the required functionality.
        </ContentText>
      </div>
    ),
  },
  {
    id: 6,
    title: (
      `
        Can you share your travel & hospitality
        software solutions created by the Onix team?
      `
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes. For example, we&apos;ve created a booking platform that allows gay travelers worldwide to
          rent desired apartments comfortably and safely by utilizing proven and latest technologies.
          Travelers can search these accommodations in 200 countries, book apartments online, and
          view and leave a review.
        </ContentText>
      </div>
    ),
  },
];

export default travelFaqData;
