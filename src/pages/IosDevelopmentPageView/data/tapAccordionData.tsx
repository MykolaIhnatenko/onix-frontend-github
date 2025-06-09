import Icons from '../../../assets/icon';
import IosTapAccordionBgItem1 from '@/images/iosPage/img_card_bg1@2x.webp';
import IosTapAccordionBgItem2 from '@/images/iosPage/img_card_bg2@2x.webp';
import IosTapAccordionBgItem3 from '@/images/iosPage/img_card_bg3@2x.webp';
import IosTapAccordionBgItem4 from '@/images/iosPage/img_card_bg4@2x.webp';
import { ITapAccordionItem } from '../../../components/TapAccordion/interfaces/ITapAccordionData';

const tapAccordionData: ITapAccordionItem[] = [
  {
    id: 1,
    icon: <Icons.IconIpad />,
    title: 'iPad App',
    text: 'iPad app development services are an invaluable resource that helps businesses and organizations '
        + 'create innovative, user-friendly apps that enhance the user experience. With more businesses and '
        + 'consumers relying on iPads for their business needs, having an app tailored to their needs is essential.',
    src: IosTapAccordionBgItem1,
  },
  {
    id: 2,
    icon: <Icons.IconIphone />,
    title: 'iPhone App',
    text: 'Our iPhone app development services allow businesses and organizations to create engaging, '
        + 'user-friendly apps that can help them succeed in the highly competitive smartphone market. Onix '
        + 'developers of iPhone apps specialize in design, functionality, security, coding, usability testing, '
        + 'and more to ensure the app meets all requirements.',
    src: IosTapAccordionBgItem2,
  },
  {
    id: 3,
    icon: <Icons.IconIwatch />,
    title: 'iWatch App',
    text: 'These services allow businesses to craft engaging apps for the Apple Watch platform. They include '
        + 'designing and developing custom apps from scratch, crafting visuals, animations, and other elements with '
        + 'the smaller screen size in mind, coding with frameworks such as Swift or Objective-C, and ensuring '
        + 'compatibility on multiple platforms.',
    src: IosTapAccordionBgItem3,
  },
  {
    id: 4,
    icon: <Icons.IconAppleTV />,
    title: 'Apple TV App',
    text: 'This type of iOS app development includes custom design and development from scratch and optimizing '
        + 'visuals and animations for the Apple TV platform, ensuring compatibility on multiple devices (Apple TVs, '
        + 'iPhones, iPads), usability testing to guarantee optimal performance, and ongoing support post-launch.',
    src: IosTapAccordionBgItem4,
  },
];

export default tapAccordionData;
