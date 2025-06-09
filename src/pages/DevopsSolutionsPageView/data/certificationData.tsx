import Icon from '../../../assets/icon';

import styles from '../sass/certificationBlock.module.scss';

const certificationData = [
  {
    id: 101,
    icon: <Icon.IconEitci className={styles.icon} />,
    title: 'EITCI Institute',
  },
  {
    id: 102,
    icon: <Icon.IconKubernetes className={styles.icon} />,
    title: 'Kubernetes',
  },
  {
    id: 103,
    icon: <Icon.IconAmazonWebServices className={styles.icon} />,
    title: 'Amazon Web Services',
  },
  {
    id: 104,
    icon: <Icon.IconCloudGuru className={styles.icon} />,
    title: 'Cloud Guru',
  },
];

export default certificationData;
