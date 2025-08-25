import { ICardSliderVerticalBlockData } from '../../../components/CardSliderVerticalBlock/interfaces/ICardSliderVerticalBlock';
import Icon from '../../../assets/icon';

import WebflowCardSliderItemMobileBg1 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_mobile_bg_1.webp';
import WebflowCardSliderItemMobileBg2 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_mobile_bg_2.webp';
import WebflowCardSliderItemMobileBg3 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_mobile_bg_3.webp';
import WebflowCardSliderItemMobileBg4 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_mobile_bg_4.webp';
import WebflowCardSliderItemTabletBg1 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_tablet_bg_1.webp';
import WebflowCardSliderItemTabletBg2 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_tablet_bg_2.webp';
import WebflowCardSliderItemTabletBg3 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_tablet_bg_3.webp';
import WebflowCardSliderItemTabletBg4 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_tablet_bg_4.webp';
import WebflowCardSliderItemBg1 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_bg_1.webp';
import WebflowCardSliderItemBg2 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_bg_2.webp';
import WebflowCardSliderItemBg3 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_bg_3.webp';
import WebflowCardSliderItemBg4 from '@/images/webflowPage/cardSliderVertical/img_card_slider_Item_bg_4.webp';

const stylesIcon = 'w-[80px] h-[80px] screen-lg:w-[60px] screen-lg:h-[60px]';
const webflowCardSliderVertical: ICardSliderVerticalBlockData = {
  blockTitle: 'Design your sites faster and more efficiently with our Webflow design services',
  data: [
    {
      id: 1,
      title: 'No coding required',
      icon: <Icon.IconWebflowCardSliderItem1 className={stylesIcon} />,
      bg: WebflowCardSliderItemBg1,
      bgTablet: WebflowCardSliderItemTabletBg1,
      bgMobile: WebflowCardSliderItemMobileBg1,
    },
    {
      id: 2,
      title: 'Custom designs and animations',
      icon: <Icon.IconWebflowCardSliderItem2 className={stylesIcon} />,
      bg: WebflowCardSliderItemBg2,
      bgTablet: WebflowCardSliderItemTabletBg2,
      bgMobile: WebflowCardSliderItemMobileBg2,
    },
    {
      id: 3,
      title: 'Responsive and mobile-optimized designs',
      icon: <Icon.IconWebflowCardSliderItem3 className={stylesIcon} />,
      bg: WebflowCardSliderItemBg3,
      bgTablet: WebflowCardSliderItemTabletBg3,
      bgMobile: WebflowCardSliderItemMobileBg3,
    },
    {
      id: 4,
      title: 'Hassle-free deployment',
      icon: <Icon.IconWebflowCardSliderItem4 className={stylesIcon} />,
      bg: WebflowCardSliderItemBg4,
      bgTablet: WebflowCardSliderItemTabletBg4,
      bgMobile: WebflowCardSliderItemMobileBg4,
    },
  ],
};

export default webflowCardSliderVertical;
