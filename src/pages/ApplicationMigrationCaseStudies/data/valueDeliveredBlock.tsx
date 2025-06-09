import Icon from '../../../assets/icon';

import styles from '../sass/valueDeliveredBlock.module.scss';

const valueDeliveredBlock = [
  {
    icon: <Icon.IconValueDelivered1 className={styles.icon} />,
    title: 'Enhanced server performance',
  },
  {
    icon: <Icon.IconValueDelivered2 className={styles.icon} />,
    title: (
      <>
        Cost
        {' '}
        <br />
        {' '}
        optimization
      </>
    ),
  },
  {
    icon: <Icon.IconValueDelivered3 className={styles.icon} />,
    title: 'Better control over the infrastructure',
  },
  {
    icon: <Icon.IconValueDelivered4 className={styles.icon} />,
    title: 'Increased environment flexibility',
  },
];

export default valueDeliveredBlock;
