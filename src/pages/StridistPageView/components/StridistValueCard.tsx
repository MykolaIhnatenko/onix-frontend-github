import StridistGrayCard from './StridistGrayCard';
import IValueCard from '../interfaces/IValueCard';

import styles from '../sass/stridistValueCard.module.scss';

function StridistValueCard({ icon, content }: IValueCard) {
  return (
    <li className={styles.card}>
      <StridistGrayCard type="value">
        <span className={styles.iconContainer}>
          {icon}
        </span>
        {content}
      </StridistGrayCard>
    </li>
  );
}

export default StridistValueCard;
