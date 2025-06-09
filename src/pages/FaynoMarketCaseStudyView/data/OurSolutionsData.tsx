import OurSolutionsImg1 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImg5 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions5.webp';
import OurSolutionsImg6 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions6.webp';
import OurSolutionsImg7 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions7.webp';
import OurSolutionsImg8 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions8.webp';
import OurSolutionsImg9 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions9.webp';
import OurSolutionsImg10 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutions10.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgTablet5 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet5.webp';
import OurSolutionsImgTablet6 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet6.webp';
import OurSolutionsImgTablet7 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet7.webp';
import OurSolutionsImgTablet8 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet8.webp';
import OurSolutionsImgTablet9 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet9.webp';
import OurSolutionsImgTablet10 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsTablet10.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile4.webp';
import OurSolutionsImgMobile5 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile5.webp';
import OurSolutionsImgMobile6 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile6.webp';
import OurSolutionsImgMobile7 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile7.webp';
import OurSolutionsImgMobile8 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile8.webp';
import OurSolutionsImgMobile9 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile9.webp';
import OurSolutionsImgMobile10 from '../../../assets/images/faynoMarket/ourSolutions/img_ourSolutionsMobile10.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemList from 'components/ItemList/ItemList';
import ItemText from 'components/ItemText/ItemText';

const OurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Three loyalty programs',
    text: (
      <>
        <ItemList
          listTitle="Fayno Market offers loyalty programs for three categories of patrons:"
          list={[
            'Bonus program for all customers',
            'Senior citizen program',
            'Employee program',
          ]}
          withAnimate
        />
        <ItemText
          content={`Employees and Senior citizens are eligible for 20% and 10% discounts, respectively. If their
            monthly expenditures exceed ₴3,000, these discounts cease, and the general Bonus loyalty program
            activates automatically.`}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Five loyalty program levels',
    text: (
      <ItemList
        listTitle={`Fayno Market’s loyalty programs have 5 levels, moving through which customers receive
          extra bonuses and unlock new benefits:`}
        list={[
          (
            <span className="black">
              <span className="font-semibold">Fine Neighbor.</span>
              {' '}
              Customers can pay with accumulated digital change and support charitable projects.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Friendly Neighbor.</span>
              {' '}
              Customers can access the Bonus Account and receive personalized offers.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Master of Neighborliness.</span>
              {' '}
              Customers can access the Bonus Account, receive personalized offers, earn extra bonuses
              for surveys, and benefit from Partnership Programs. + 150 bonuses
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Loyal Neighbor.</span>
              {' '}
              Customers can access the Bonus Account, receive personalized offers, earn extra
              bonuses for surveys, and benefit from Partnership Programs. + 150 bonuses
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Doctor of Neighborliness.</span>
              {' '}
              The benefits of Master of Neighborliness. + 200 bonuses
            </span>
          ),
        ]}
        withAnimate
        marginBottomAbsent
      />
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Faynyi Dvir (“Fine Community”)',
    text: (
      <>
        <ItemList
          listTitle={`Aiming to create an online outlet for the neighbors’ goodwill and support nationwide
            and local charitable initiatives, Fayno Market included this feature in the app update
            in 2024. Now, the mobile app allows customers to donate accumulated bonuses to aid:`}
          list={[
            'The Armed Forces of Ukraine',
            'Clinically ill or disadvantaged children',
            'Animal shelters',
          ]}
          withAnimate
        />
        <ItemText
          content={[
            'The app makes donations effortless for customers and tracks Current crowdfunding projects’ statuses.',
            `The ‘Past projects’ tab displays Fayno Market’s completed projects, where customers
            can also access reports.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Personalized offers & discounts ',
    text: (
      <>
        <ItemList
          listTitle={`One of the biggest challenges was to generate appropriate special offers and
            discounts for customers, taking into account multiple parameters:`}
          list={[
            'User`s city of residence',
            'User’s favorite grocery',
            'Purchase history',
            'Personal information, e.g., their kids’ ages, pets, etc.',
            'Other customers’ preferences',
            'In-app activity, etc.',
          ]}
          withAnimate
        />
        <ItemText
          content={`The system uses statistical samples from Fayno Market’s CRM, which tracks
            the history of a customer’s interactions with the company.`}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Partnership programs',
    text: [
      `This feature enables app users to access offers from Fayno Market’s partners, such
      as cinemas and taxi services.`,
      'Customers can get discounts on rides, movie tickets, and shopping at partner stores using promo codes.',
    ],
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    id: 6,
    title: 'Gift cards',
    text: [
      `Customers can purchase single and multiple virtual gift cards in the app and send them to persons on
      their contacts list in WhatsApp, Viber, Telegram, or via email.`,
      `In addition to gift cards for ₴50, ₴100, ₴200, ₴300, ₴500, and ₴1,000, users can create custom
      gift cards of any value.`,
    ],
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
  {
    id: 7,
    title: 'News',
    text: `The mobile app is integrated with Fayno Market’s website to update customers on the latest
      developments, events, and charitable activities.`,
    img: OurSolutionsImg7,
    imgTablet: OurSolutionsImgTablet7,
    imgMobile: OurSolutionsImgMobile7,
  },
  {
    id: 8,
    title: 'Flexible surveys',
    text: [
      `This tool enables Fayno Market administrators and marketers to poll the customers on the grocery stores’
      service and mobile app experience to generate valuable insights and build productive customer relationships.`,
      `Several events in the mobile app trigger surveys to pop up: login, personalized offers view, user’s transactions,
      etc. Fayno Market rewards customers with bonuses for completing them.`,
    ],
    img: OurSolutionsImg8,
    imgTablet: OurSolutionsImgTablet8,
    imgMobile: OurSolutionsImgMobile8,
  },
  {
    id: 9,
    title: 'Database',
    text: [
      `Fayno Market’s database stores information about millions of receipts; it has to process requests fast. It
      took significant effort to build a DB management system in such a way as to speed up the request-response flow.`,
      `The indexes in the database were built for each request that was slowing down the processing. We also adjusted
      the requests several times to improve performance. For example, we set up complex conditions, such as verifying
      dates and other items not at once but selecting a limited dataset first and only then processing the data in
      bulk. We run the table analyzer periodically to improve search by indexes.`,
      `As the client didn’t want to use an admin panel, we built a tool enabling Fayno Market to administer
      the database themselves.`,
      'The DB is set up on the client’s server.',
    ],
    img: OurSolutionsImg9,
    imgTablet: OurSolutionsImgTablet9,
    imgMobile: OurSolutionsImgMobile9,
  },
  {
    id: 10,
    title: 'Integration with Diia',
    text: `The updated Employee’s personal account is integrated with the Diia e-governance portal.
      This integration enables Fayno Market employees to sign and share documents from the company.`,
    img: OurSolutionsImg10,
    imgTablet: OurSolutionsImgTablet10,
    imgMobile: OurSolutionsImgMobile10,
  },
];

export default OurSolutionsData;
