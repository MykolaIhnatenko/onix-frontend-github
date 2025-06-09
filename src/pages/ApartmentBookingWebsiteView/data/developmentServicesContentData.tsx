import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { IDevelopmentServicesItemData } from 'components/DevelopmentServicesTemplate/interfaces/IDevelopmentServicesTemplate';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const developmentServicesContentData: IDevelopmentServicesItemData[] = [
  {
    id: 1,
    number: '01',
    title: 'A homepage to impress',
    content: [
      `Kozystay’s homepage offers an intuitive search function for travelers to enter the desired
      check-in and check-out dates, guests, and preferred location.`,
      `It also features professional photos of recommended apartments, enticing travelers to explore
      the best options. Testimonials help build trust.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Enticing listing pages',
    content: [
      `Kozystay provides travelers with detailed information about each property so they can explore,
      evaluate, and reserve accommodations hassle-free.`,
      `Each listing page offers a comprehensive overview, including detailed descriptions, prices, photos,
      reviews, a map, and booking date selection. It took some time to select ready-made icons to visualize
      all possible amenities that can be available at apartments and houses or, for example, the distance to
      specific locations.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'User account',
    content: (
      <>
        <ItemText
          content={[
            `This personalized dashboard was designed to enhance travelers’ control and flexibility
            in managing their accommodation preferences.`,
          ]}
          withAnimate
        />
        <ItemList
          listTitle="On this page, travelers can:"
          list={[
            'easily update their personal information',
            'customize notification preferences',
            'review details of past reservations for reference',
            'access a list of favorite properties for future stays',
          ]}
          marginBottomAbsent
          withAnimate
        />
      </>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Trust-building pages',
    content: (
      <>
        <ItemText
          content={[
            `We developed several pages to instill trust and confidence in travelers and enhance
            the overall customer experience:`,
          ]}
          withAnimate
        />
        <VRARContent>
          <ContentText marginAbsent>
            About Us: This section informs visitors about the platform’s background, values,
            and unwavering commitment to providing exceptional accommodation experiences.
          </ContentText>
          <ContentText marginAbsent>
            Articles and News: Offering engaging content, such as travel tips, destination guides,
            and industry insights, this section assists with travel planning and enriches guests’ stays.
          </ContentText>
          <ContentText marginAbsent>
            Contact Us: Providing multiple communication channels, this page ensures customers can
            easily access support or information.
          </ContentText>
        </VRARContent>
      </>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Color coding & typography',
    content: [
      `Onix’s designers suggested yellow as the primary color because it evokes the sun’s comforting warmth,
      the sweetness of honey, and a sense of cozy tranquility. They skillfully used shades of yellow and blue
      against soft beige backgrounds to highlight the website’s brand and functional elements, such as buttons.
      Blue, reminiscent of the sea surrounding Indonesia, complements and balances yellow, creating visual harmony.`,
      `The website’s font needed to look perfect on all screens and warmly welcome every visitor, capturing
      Kozystay’s essence. Onix’s designers selected Rota, a font with pleasantly rounded shapes and sharp corners,
      achieving a seamless blend of sophistication and comfort – a professional look infused with inviting warmth.`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Logo and brand identity design',
    content: (
      <>
        <ItemText
          content={[
            `The client had envisioned a logotype that would encapsulate their service’s simplicity
            and invite guests to “Unlock Comfort” and discover cozy apartments.`,
          ]}
          withAnimate
        />
        <ItemList
          listTitle={
            `Our designers experimented with various symbols until the client approved a minimalistic
            design combining three elements:`
          }
          list={[
            `Location Pin: Familiar to all who have searched locations on digital maps, its shape also
            references the domes of mosques.`,
            'Door: Representing the essence of accommodation, hospitality, and discovery.',
            `Digit 1: Created by the opening door, it represents the commitment to providing first-rate
            apartments as a market leader.`,
          ]}
          withAnimate
        />
        <ItemText
          content={[
            `This logo blends the notions of hospitality and excellence, promising exceptionally comfortable
            accommodations and exemplary customer experiences.`,
          ]}
          marginBottomAbsent
          withAnimate
        />
      </>
    ),
  },
];

export default developmentServicesContentData;
