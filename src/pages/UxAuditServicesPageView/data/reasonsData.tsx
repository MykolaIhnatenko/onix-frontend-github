import Icons from '../../../assets/icon';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';

import IosSliderBgMobile2 from '@/images/iosPage/img_bg_slider_item_mobile2.webp';
import IosSliderBgMobile3 from '@/images/iosPage/img_bg_slider_item_mobile3.webp';
import IosSliderBgMobile4 from '@/images/iosPage/img_bg_slider_item_mobile4.webp';
import IosSliderBgMobile5 from '@/images/iosPage/img_bg_slider_item_mobile5.webp';
import IosSliderBg1 from '@/images/iosPage/img_bg_slider_item1.webp';
import IosSliderBg2 from '@/images/iosPage/img_bg_slider_item2.webp';
import IosSliderBg3 from '@/images/iosPage/img_bg_slider_item3.webp';
import IosSliderBg4 from '@/images/iosPage/img_bg_slider_item4.webp';
import IosSliderBg5 from '@/images/iosPage/img_bg_slider_item5.webp';
import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const reasonsData = [
  {
    id: 1,
    content: (
      <TransparentCard
        bgMobile={IosSliderBg1}
        bg={IosSliderBg1}
        text="We are a user experience audit company with years of experience in the industry and a deep
        understanding of design principles, user psychology, and technology trends. We have a proven track
        record of delivering exceptional designs that drive results."
        icon={<Icons.ExpertiseIcon className={styles.icon} />}
        title="Expertise"
      />),
  },
  {
    id: 2,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile2}
        bg={IosSliderBg2}
        text="We take a user-centric approach to design, prioritizing the needs and preferences of your target
          audience to create designs that resonate with them and deliver an exceptional user experience."
        icon={<Icons.UserCentricAproachIcon className={styles.icon} />}
        title="User-centric approach"
      />),
  },
  {
    id: 3,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile3}
        bg={IosSliderBg3}
        text="We believe in working closely with our clients throughout the design process, ensuring that their
          vision and goals are incorporated into the design and that they are involved in the decision-making process."
        icon={<Icons.CollaborationIcon className={styles.icon} />}
        title="Collaboration"
      />),
  },
  {
    id: 4,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile4}
        bg={IosSliderBg4}
        text="We take a holistic approach to design, considering every aspect of the user journey, from initial
          impressions to final conversions. We also develop design systems that ensure consistency and efficiency
          across your digital products."
        icon={<Icons.HolisticApproachIcon className={styles.icon} />}
        title="Holistic approach"
      />),
  },
  {
    id: 5,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile5}
        bg={IosSliderBg5}
        text="We prioritize accessibility in all our designs, ensuring that all users, including those with
          disabilities, can access and use your product with ease."
        icon={<Icons.AccessibilityIcon className={styles.icon} />}
        title="Accessibility"
      />),
  },
  {
    id: 6,
    content: (
      <TransparentCard
        bgMobile={IosSliderBgMobile3}
        bg={IosSliderBg3}
        text="We are transparent in our processes and pricing, providing our clients with regular updates
          and clear communication throughout the project."
        icon={<Icons.TransparencyIcon className={styles.icon} />}
        title="Transparency"
      />),
  },
];

export default reasonsData;
