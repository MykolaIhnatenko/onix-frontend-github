import Icons from '../../../assets/icon';
import { IProductDiscoveryItem } from '../interfaces/IProductDiscoveryItem';

import styles from '../sass/iosProductDiscoveryCard.module.scss';

const productDiscoveryData: IProductDiscoveryItem[] = [
  {
    id: 1,
    icon: <Icons.IconDiscovery1 className={styles.icon} />,
    text: 'Clear goals of the project and defined direction of the development process',
  },
  {
    id: 2,
    icon: <Icons.IconDiscovery2 className={styles.icon} />,
    text: 'Solutions, architecture, and user experience tailored to unique business objectives',
  },
  {
    id: 3,
    icon: <Icons.IconDiscovery3 className={styles.icon} />,
    text: 'Thorough understanding of the product concept, intended market, and target audience',
  },
  {
    id: 4,
    icon: <Icons.IconDiscovery4 className={styles.icon} />,
    text: 'Understanding of potential risks and preparedness to tackle them',
  },
  {
    id: 5,
    icon: <Icons.IconDiscovery5 className={styles.icon} />,
    text: 'Optimized resource management and development costs',
  },
  {
    id: 6,
    icon: <Icons.IconDiscovery6 className={styles.icon} />,
    text: 'Increased credibility with investors and possibilities for extra funding',
  },
];

export default productDiscoveryData;
