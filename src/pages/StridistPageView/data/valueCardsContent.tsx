import Icon from '../../../assets/icon';

import styles from '../sass/stridistValueCard.module.scss';

const valueCardsContent = [
  {
    id: 1,
    icon: <Icon.IconStridist1 className={styles.icon} />,
    content: (
      <p>Fast growing, systemized coaching business </p>
    ),
  },
  {
    id: 2,
    icon: <Icon.IconStridist2 className={styles.icon} />,
    content: (
      <p>One digital solution to replace all the other software </p>
    ),
  },
  {
    id: 3,
    icon: <Icon.IconStridist3 className={styles.icon} />,
    content: (
      <p>Streamlined business operations </p>
    ),
  },
  {
    id: 4,
    icon: <Icon.IconStridist4 className={styles.icon} />,
    content: (
      <p>
        Automated
        <br />
        routine tasks
      </p>
    ),
  },
  {
    id: 5,
    icon: <Icon.IconStridist5 className={styles.icon} />,
    content: (
      <p>Effortless clients data management</p>
    ),
  },
  {
    id: 6,
    icon: <Icon.IconStridist6 className={styles.icon} />,
    content: (
      <p>Highly motivated and engaged clients</p>
    ),
  },
];

export default valueCardsContent;
