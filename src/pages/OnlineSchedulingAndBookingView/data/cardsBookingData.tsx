import bookingSystem from '@/images/booking/img_booking-system.webp';
import bookingSolutions from '@/images/booking/img_booking-solutions.webp';
import bookingCustomization from '@/images/booking/img_booking-customization.webp';
import bookingIntegrations from '@/images/booking/img_booking-integrations.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

const cardBookingData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Custom online scheduling and booking systems',
    content: (
      <AccordionItemContentWithImg
        image={bookingSystem}
        imageAlt="bookingSystem"
      >
        <ItemText
          content={[
            `Using state-of-the-art technologies, we build custom booking software tailored
            to your unique business goals and needs.`,
            `Our specialists provide online scheduling and booking system development services
            to create a reliable solution with enhanced features for your specific industry regardless of the
            project's complexity, requirements, and scale.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile booking solutions',
    content: (
      <AccordionItemContentWithImg
        image={bookingSolutions}
        imageAlt="bookingSolutions"
      >
        <ItemText
          content={[
            `We build workable and prosperous mobile apps that offer your business unique opportunities
            to reach out to and serve customers throughout their journey.`,
            `Onix has extensive experience developing techno-driven iOS and
            Android apps with advanced features to engage customers, enhance
            business performance, and provide a convenient user experience.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Third-party integrations',
    content: (
      <AccordionItemContentWithImg
        image={bookingIntegrations}
        imageAlt="bookingIntegrations"
      >
        <ItemText
          content={[
            `It's an excellent opportunity to connect data streams and functionalities
            between different software products in one place and let users try them
            without switching apps.`,
            `We ensure smooth and seamless third-party integration of different types,
            such as ERP, travel booking API, CRM, flight search and booking API, payment
            services like Paypal or Stripe, etc.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Booking system upgrade and customization',
    content: (
      <AccordionItemContentWithImg
        image={bookingCustomization}
        imageAlt="bookingCustomization"
      >
        <ItemText
          content={[
            `Our specialists will gladly assist you in updating your custom online booking software
            and adding more advanced features to meet current market demand and beat competitors.`,
            `We provide a free audit of your current solution, prepare a list of improvements,
            manage your technology needs, conduct a UI/UX audit, implement new functionality,
            and integrate required APIs.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardBookingData;
