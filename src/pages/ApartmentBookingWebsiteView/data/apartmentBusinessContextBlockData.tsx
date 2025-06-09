import Link from 'next/link';

import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/businessContextBlock.module.scss';

const apartmentBusinessContextBlockData = {
  upTitle: '[ Business goals and context ]',
  title: (
    <>
      <Link href="https://www.kozystay.com" className={styles.link}>
        Kozystay
      </Link>
      {' '}
      is an Indonesian property management start-up that facilitates short- and long-term rentals.
    </>
  ),
  subTitle: `The service targets primarily middle- to upper-income tourists or business travelers and offers
    premium apartments and houses in the best locations of Jakarta and Bali. Kozystay aims to redefine
    the guests’ experience of Indonesia by ensuring exceptional comfort and a feeling
    of\u00A0home.`,
  firstText: (
    <ContentText tag="p" marginAbsent>
      <span className={styles.spanWithMargin}>
        <span className={styles.spanWithMargin}>
          Looking to decrease reliance on third-party platforms like Airbnb and Booking.com, Kozystay began
          to consider its own online apartment booking system development.
        </span>
        {' '}
        The objectives were:
      </span>
      {' '}
      ﹂To enable guests to book directly on the Kozystay website, ensuring an efficient, seamless process.
    </ContentText>
  ),
  secondText: (
    <ContentText tag="p" marginAbsent>
      <span className={styles.spanWithMargin}>
        ﹂To integrate the website with Kozystay’s existing channel management software for the management
        of&nbsp;reservations, availability, and pricing.
      </span>
      ﹂To design a platform that can accommodate an expanding property portfolio and geography without compromising
      the&nbsp;ease of management.
    </ContentText>
  ),
  subText: `Kozystay’s management started looking for a creative web design and development team capable of building
    the minimum viable product (MVP) for them. When they approached Onix, they already had a vision of the
    future website’s look and functionality. They also had some web page wireframes prepared but still
    wanted recommendations on improving the wireframes and\u00A0their\u00A0branding.`,
};

export default apartmentBusinessContextBlockData;
