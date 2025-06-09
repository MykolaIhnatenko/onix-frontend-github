import { IGrayCardProps } from '../interfaces/IGraySection';

import styles from '../sass/stridistGrayCard.module.scss';

function StridistGrayCard({ children, type }:IGrayCardProps) {
  const typeStyles = type?.split(' ')
    .map((typeStyle) => styles[typeStyle])
    .join(' ');

  return (
    <div className={`${styles.card} ${typeStyles}`}>
      {children}
    </div>
  );
}

export default StridistGrayCard;
