import Icon from '../../../assets/icon';

import styles from '../sass/technologies.module.scss';

const technologiesItems = [
  {
    id: 1,
    gray: <Icon.IconLiquidGray className={styles.gray} width={71} height={66} />,
    color: <Icon.IconLiquidColor className={styles.color} width={71} height={66} />,
  },
  {
    id: 2,
    gray: <Icon.IconJsGray className={styles.gray} width={45} height={64} />,
    color: <Icon.IconJsColor className={styles.color} width={45} height={64} />,
  },
  {
    id: 3,
    gray: <Icon.IconHtmlGray className={styles.gray} width={45} height={64} />,
    color: <Icon.IconHtmlColor className={styles.color} width={45} height={64} />,
  },
  {
    id: 4,
    gray: <Icon.IconCssGray className={styles.gray} width={45} height={64} />,
    color: <Icon.IconCssColor className={styles.color} width={45} height={64} />,
  },
  {
    id: 5,
    gray: <Icon.IconJqueryGray className={styles.gray} width={62} height={62} />,
    color: <Icon.IconJqueryColor className={styles.color} width={62} height={62} />,
  },
];

export default technologiesItems;
