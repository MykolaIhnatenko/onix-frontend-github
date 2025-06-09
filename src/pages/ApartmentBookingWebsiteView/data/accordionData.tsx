import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemList from 'components/ItemList/ItemList';
import ItemText from 'components/ItemText/ItemText';

const accordionData: IAccordionData[] = [
  {
    id: 1,
    title: 'User functionalities coding',
    content: (
      <ItemList
        listTitle="Onix’s web developers programmed the following features and functionalities for the website users:"
        list={[
          'search function',
          'search result pages',
          'booking system',
          'payments',
          'data collection',
          'live chat',
        ]}
      />
    ),
  },
  {
    id: 2,
    title: 'Admin dashboard',
    content: (
      <ItemList
        listTitle="For Kozystay’s administrators, Onix’s software developers implemented the abilities to:"
        list={[
          'manage the finances, occupancy, customer profiles, etc.',
          'add promo codes',
          'manage blogs and other content',
          'chat with users',
          `manage automatic emails sent to customers, e.g., immediately
          after a successful booking, before check-in, etc.`,
        ]}
      />
    ),
  },
  {
    id: 3,
    title: 'Third-party integrations',
    content: (
      <>
        <ItemText
          content={[
            `Listings were created outside the admin dashboard, in a vacation rental
            software and management system, and then synchronized with Kozystay.`,
          ]}
        />
        <ItemList
          listTitle="Onix’s programmers integrated the platform with several other third-party services:"
          list={[
            'a channel management system',
            'a digital concierge',
            'a payment system',
            'live chat',
          ]}
          marginBottomAbsent
        />
      </>
    ),
  },
];

export default accordionData;
