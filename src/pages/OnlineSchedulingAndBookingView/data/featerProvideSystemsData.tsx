import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

const featerProvideSystems: IAccordionData[] = [
  {
    id: 10,
    number: '01',
    title: 'Online booking 24/7',
    content: (
      <ItemText
        content={[
          `Enable online booking and get new appointments 24/7. Let your customers book their own appointments
          around the clock for any open time slot. Thanks to automated bookings, you can bring more clients with
          less busywork while focusing on things that really matter!`,
        ]}
      />
    ),
  },
  {
    id: 40,
    number: '04',
    title: 'Team management',
    content: (
      <ItemText
        content={[
          `Now it's easier than ever to manage employees' availability, sick day, breaks, and holidays.
          Control your team's workload to optimize its performance, provide quality service, and scale
          your business organically.`,
        ]}
      />
    ),
  },
  {
    id: 20,
    number: '02',
    title: 'Appointment scheduling',
    content: (
      <ItemText
        content={[
          `Keep your appointments under control: see the new appointments as soon as they appear, edit,
          and update your schedules in real time. Your customers, in their turn, can see your real-time
          schedules and book appointments easily.`,
        ]}
      />
    ),
  },
  {
    id: 50,
    number: '05',
    title: 'Payments',
    content: (
      <ItemText
        content={[
          `We ensure a payment option that is easy to use and highly secure. To implement the payment feature,
          we can integrate a secure payment gateway using a payment platform like Stripe or PayPal.`,
        ]}
      />
    ),
  },
  {
    id: 30,
    number: '03',
    title: 'Customer database',
    content: (
      <ItemText
        content={[
          `All information is in one place. The database contains detailed information about each customer,
          such as personal information, booking history, appointment records, and no-shows.
          Having quick access to this data enables you to easily manage customers' data and reduce operational
          tasks.`,
        ]}
      />
    ),
  },
  {
    id: 60,
    number: '06',
    title: 'Messaging',
    content: (
      <ItemText
        content={[
          `Instant messages can inform users about their reservation confirmation, rate changes, exclusive deals,
          etc., remind them about scheduled activities, provide personalized tips and advice while increasing
          user engagement and winning customer loyalty.`,
        ]}
      />
    ),
  },
];

export default featerProvideSystems;

export const titleInsightBooking = (
  <>
    Our insights into developing
    <br className="screen-md:hidden" />
    {' '}
    online scheduling & booking systems
  </>
);
