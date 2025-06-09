import Icons from '../../../assets/icon';

import styles from '../sass/bannerBlogInfo.module.scss';

const shareBlockData = [
  {
    id: 1,
    icon: <Icons.IconLinkedinShare className={styles.icon} />,
    iconHover: <Icons.IconLinkedinShare className={styles.iconHover} />,
    href: 'https://www.linkedin.com/shareArticle?url=',
    ariaLabel: 'Share on LinkedIn',
  },
  {
    id: 2,
    icon: <Icons.IconFacebookShare className={styles.icon} />,
    iconHover: <Icons.IconFacebookShare className={`${styles.iconHover} ${styles.facebookIcon}`} />,
    href: 'https://www.facebook.com/sharer/sharer.php?u=',
    ariaLabel: 'Share on Facebook',
  },
  {
    id: 3,
    icon: <Icons.IconTwitterShare className={styles.icon} />,
    iconHover: <Icons.IconTwitterShare className={`${styles.iconHover} ${styles.twitterIcon}`} />,
    href: 'https://twitter.com/share?url=',
    ariaLabel: 'Share on Twitter',
  },
];

export default shareBlockData;
