import Icon from '../../../assets/icon';

import styles from '../sass/bonusReferral.module.scss';

const referralBonusData = [
  {
    id: '01',
    icon: <Icon.IconBonus1 className={styles.icon} />,
    title: 'Spread the Word',
    text: 'Share information about Onix with others in your network.',
  },
  {
    id: '02',
    icon: <Icon.IconBonus2 className={styles.icon} />,
    title: 'Convert to Customers',
    text: (
      <>
        Your referrals become Onix&apos; customers by signing
        {' '}
        <span className="inline_block">a contract.</span>
      </>
    ),
  },
  {
    id: '03',
    icon: <Icon.IconBonus3 className={styles.icon} />,
    title: 'Earn Your Bonus',
    text: 'After we receive the first payment, you qualify for a 10% bonus based on the payment amount.',
  },
];

export default referralBonusData;
