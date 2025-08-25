import Icons from '../../../assets/icon';
import { ITapAccordionItem } from '../../../components/TapAccordion/interfaces/ITapAccordionData';

import HealthcareTapAccordionBgItem3 from '@/images/healthcare/tapAccordion/img_card_bg3@2x.webp';
import IosTapAccordionBgItem1 from '@/images/iosPage/img_card_bg1@2x.webp';
import IosTapAccordionBgItem2 from '@/images/iosPage/img_card_bg2@2x.webp';

const healthcareTapAccordionData: ITapAccordionItem[] = [
  {
    id: 1,
    icon: <Icons.IconEfficiency />,
    title: '45% better efficiency',
    text: 'Healthcare software solutions can improve operational efficiency by up to 45%, reducing '
      + 'administrative burden and allowing more time for patient care.',
    src: IosTapAccordionBgItem1,
  },
  {
    id: 2,
    icon: <Icons.IconExpensive />,
    title: '30% less expensive',
    text: 'Healthcare organizations that adopt advanced software solutions can experience cost savings '
    + 'of up to 30% through streamlined processes and optimized resource allocation.',
    src: IosTapAccordionBgItem2,
  },
  {
    id: 3,
    icon: <Icons.IconSavings />,
    title: '$30B of cost savings',
    text: 'Seamless integration and interoperability among different healthcare systems can significantly '
    + 'reduce medical errors, estimated to save up to 80,000 lives and $30 billion/year.',
    src: HealthcareTapAccordionBgItem3,
  },
];

export default healthcareTapAccordionData;
