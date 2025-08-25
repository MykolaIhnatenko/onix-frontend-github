import Icon from '../../../assets/icon';

import CardBg1 from '@/images/bonus/achievements/img_bonusCardBg1.webp';
import CardBg2 from '@/images/bonus/achievements/img_bonusCardBg2.webp';
import CardMobileBg1 from '@/images/bonus/achievements/img_bonusCardMobileBg1.webp';
import CardMobileBg2 from '@/images/bonus/achievements/img_bonusCardMobileBg2.webp';
import styles from '../sass/achievements.module.scss';

const currentYear = new Date().getFullYear();

const achievementsData = [
  {
    icon: <Icon.IconBonusAchievements1 className={styles.icon} />,
    title: 'Total referral payouts',
    text: (
      <>
        Total payouts to referrers have surpassed
        {' '}
        <b>$1 million</b>
        {' '}
        since the program began.
      </>
    ),
    background: CardBg1,
    backgroundMobile: CardMobileBg1,
  },
  {
    icon: <Icon.IconBonusAchievements2 className={styles.icon} />,
    title: `Rewards in ${currentYear}`,
    text: (
      <>
        In
        {' '}
        {currentYear}
        {' '}
        alone, we distributed
        {' '}
        <b>over $100,000</b>
        {' '}
        in referral bonuses.
      </>
    ),
    background: CardBg2,
    backgroundMobile: CardMobileBg2,
  },
];

export default achievementsData;
