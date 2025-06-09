import { IPartnerSliderData } from '../../../components/PartnerSection/interfaces/IPartnerSection';
import Icons from '../../../assets/icon';
import WebflowPartnerSectionItemMobileBg2 from '@/images/webflowPage/img_webflow_partner_sectionItem_mobile_bg_2.webp';
import MachineSliderBgMobile1 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile1.webp';
import MachineSliderBgMobile2 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile2.webp';
import MachineSliderBgMobile3 from '@/images/machineLearning/partnerSlider/img_bg_slider_item_mobile3.webp';
import MachineSliderBg1 from '@/images/machineLearning/partnerSlider/img_bg_slider_item1.webp';
import MachineSliderBg2 from '@/images/machineLearning/partnerSlider/img_bg_slider_item2.webp';
import MachineSliderBg3 from '@/images/machineLearning/partnerSlider/img_bg_slider_item3.webp';
import MachineSliderBg4 from '@/images/machineLearning/partnerSlider/img_bg_slider_item4.webp';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';

import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const webflowPartnerSliderData: IPartnerSliderData[] = [
  {
    id: 1,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile1}
        bg={MachineSliderBg1}
        text="Create a stunning and unique landing page with our custom Webflow web design services.
         Our designers create visually appealing websites that perfectly align with your brand
         identity and business objectives."
        icon={<Icons.IconWebflowPartnerSection1 className={styles.icon} />}
        title="Custom landing page design"
      />
    ),
  },
  {
    id: 2,
    content: (
      <TransparentCard
        bgMobile={WebflowPartnerSectionItemMobileBg2}
        bg={MachineSliderBg4}
        text="Whether you're a startup or small business, we are committed to delivering websites that
         inspire, engage, and drive results. Let's create a website that not only reflects your brand
         but also sets you on the path to digital success."
        icon={<Icons.IconWebflowPartnerSection4 className={styles.icon} />}
        title="Webflow website development"
      />
    ),
  },
  {
    id: 3,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile2}
        bg={MachineSliderBg2}
        text="From subtle micro-interactions to complex animated sequences, we can design and implement
         custom animations that add an extra layer of creativity and interactivity to your website."
        icon={<Icons.IconWebflowPartnerSection2 className={styles.icon} />}
        title="Creative animations"
      />
    ),
  },
  {
    id: 4,
    content: (
      <TransparentCard
        bgMobile={MachineSliderBgMobile3}
        bg={MachineSliderBg3}
        text="We specialize in crafting engaging and seamless interactions that captivate your audience
         and elevate your website to the next level. We bring your website to life with stunning
         interactions, leaving a lasting impression on your visitors."
        icon={<Icons.IconWebflowPartnerSection3 className={styles.icon} />}
        title="Engaging and seamless interactions"
      />
    ),
  },
];

export default webflowPartnerSliderData;
