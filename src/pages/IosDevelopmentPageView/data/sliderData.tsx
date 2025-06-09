import Icons from '../../../assets/icon';
import IosSliderBgMobile1 from '@/images/iosPage/img_bg_slider_item_mobile1.webp';
import IosSliderBgMobile2 from '@/images/iosPage/img_bg_slider_item_mobile2.webp';
import IosSliderBgMobile3 from '@/images/iosPage/img_bg_slider_item_mobile3.webp';
import IosSliderBgMobile4 from '@/images/iosPage/img_bg_slider_item_mobile4.webp';
import IosSliderBgMobile5 from '@/images/iosPage/img_bg_slider_item_mobile5.webp';
import IosSliderBg1 from '@/images/iosPage/img_bg_slider_item1.webp';
import IosSliderBg2 from '@/images/iosPage/img_bg_slider_item2.webp';
import IosSliderBg3 from '@/images/iosPage/img_bg_slider_item3.webp';
import IosSliderBg4 from '@/images/iosPage/img_bg_slider_item4.webp';
import IosSliderBg5 from '@/images/iosPage/img_bg_slider_item5.webp';
import { IPartnerSliderData } from '../../../components/PartnerSection/interfaces/IPartnerSection';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';
import { TransparentCardVariant } from 'constants/enums';

import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const partnerSliderData: IPartnerSliderData[] = [
  {
    id: 1,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile1}
        bgTablet={IosSliderBg1}
        bg={IosSliderBg1}
        text="We are passionate about delivering top-notch and dynamic mobile solutions through our best
         structural standards that complement your company’s needs, vision, and budget. What’s more, you
         own the intellectual property we developed for you."
        icon={<Icons.IconPartnerSlider1 className={styles.icon} />}
        title="Fast and cost-effective development"
        variant={TransparentCardVariant.IOS}
      />
    ),
  },
  {
    id: 2,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile2}
        bgTablet={IosSliderBg2}
        bg={IosSliderBg2}
        text="The development process follows a set of adopted standards that guarantee our clients will reach
         the best possible results in their product implementation and get cutting-edge iOS solutions that
         end users will love."
        icon={<Icons.IconPartnerSlider2 className={styles.icon} />}
        title="Industry-Leading Quality"
        variant={TransparentCardVariant.IOS}
      />
    ),
  },
  {
    id: 3,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile3}
        bgTablet={IosSliderBg3}
        bg={IosSliderBg3}
        text="No bureaucracy and hidden procedures. All you need to do is to sign NDA and contract to start working
         with our team. Moreover, our specialists clearly report the work done, including highly detailed invoices
         with the hours spent on each task."
        icon={<Icons.IconPartnerSlider3 className={styles.icon} />}
        title="Openness and transparency"
        variant={TransparentCardVariant.IOS}
      />
    ),
  },
  {
    id: 4,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile4}
        bgTablet={IosSliderBg4}
        bg={IosSliderBg4}
        text="Onix offshore team can work flexible hours, allowing you to manage your project across multiple
         time zones without sacrificing quality or speed."
        icon={<Icons.IconPartnerSlider4 className={styles.icon} />}
        title="Increased Flexibility"
        variant={TransparentCardVariant.IOS}
      />
    ),
  },
  {
    id: 5,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile5}
        bgTablet={IosSliderBg5}
        bg={IosSliderBg5}
        text="By outsourcing some or all of your mobile app development needs, you’ll be able to focus more
         resources on other business areas while avoiding costly overhead expenses associated with additional
         staffers and software licenses."
        icon={<Icons.IconPartnerSlider5 className={styles.icon} />}
        title="Improved Time Management"
        variant={TransparentCardVariant.IOS}
      />
    ),
  },
];

export default partnerSliderData;
