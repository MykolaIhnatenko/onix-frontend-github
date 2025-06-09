import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

const data: IAccordionData[] = [
  {
    id: 11,
    number: '01',
    title: 'Dynamic Redesign',
    content: (
      <>
        <ItemText
          content={[
            'We redesigned the online bank for kids to enhance the app\'s usability.',
          ]}
        />
        <ItemList
          listTitle={
            `The new dynamic interface aesthetic captures users' attention.
            A bold color palette creates a visually stimulating experience.`
          }
          list={[
            'Orange buttons add a playful and energetic touch, encouraging interaction.',
            `Dark blue and yellow accents in the menu and interface enhance visual appeal
            and differentiate functionalities.`,
          ]}
        />
        <ItemText
          content={[
            'Vibrant colors make navigation user-friendly and the app visually appealing.',
          ]}
        />
      </>
    ),
  },
  {
    id: 12,
    number: '02',
    title: 'Identity Verification',
    content: (
      <ItemText
        content={[
          `KYC (Know Your Customer) procedures ensure the security of user
          accounts and transactions and compliance with regulatory requirements.`,
          `Users input personal details like name, birth date, address, and contacts during registration.
          Our KYC process involves additional steps, such as document verification. Users upload government
          IDs like passports or driver's licenses, which are cross-checked with databases to prevent fraud.`,
        ]}
      />
    ),
  },
  {
    id: 13,
    number: '03',
    title: 'Payment Integration',
    content: (
      <>
        <ItemList
          listTitle={'Our approach ensures smooth integration of payment functionalities into the kids\' banking app.'}
          list={[
            'We analyzed the payment processor\'s capabilities and our app\'s infrastructure.',
            'We prioritized integration for account linking and balance inquiries.',
            'We added transaction processing for bills and online purchases.',
          ]}
        />
        <ItemText
          content={[
            `Iterative approach helps control the integration process, foresee challenges,
            and deliver a reliable payment solution for online banking for`,
          ]}
        />
      </>
    ),
  },
  {
    id: 14,
    number: '04',
    title: 'Parental Dashboard',
    content: (
      <ItemText
        content={[
          `We built a comprehensive and intuitive interface for parents to monitor their expenses and
          their children's in the banking application. This feature offers transparency and control over
          family finances, empowering parents to oversee their children's spending habits and guide them
          toward responsible financial management.`,
        ]}
      />
    ),
  },
  {
    id: 15,
    number: '05',
    title: 'Savings',
    content: (
      <ItemList
        listTitle={
          `Saving Spots makes saving fun and develops healthy financial habits.
          Kids allocate funds for specific goals and learn the value of money management.
          With the app they can:`
        }
        list={[
          'Create multiple accounts for different savings goals.',
          'Personalize each account with unique names.',
          'Allocate funds from the main account to savings goals.',
          'Track progress visually to stay motivated.',
          'Withdraw funds upon reaching savings goals.',
          'Learn financial skills through hands-on saving.',
        ]}
      />
    ),
  },
  {
    id: 16,
    number: '06',
    title: 'Admin Tool',
    content: (
      <ItemText
        content={[
          `We provided our client with a powerful tool to manage and oversee the
          operations of the banking solution. This feature allows administrators to
          handle various tasks efficiently, including addressing user issues, managing
          accounts, and administering bonuses and rewards.`,
        ]}
      />
    ),
  },
];

export default data;
