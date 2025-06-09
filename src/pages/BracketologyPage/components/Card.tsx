import { ICard } from '../interfaces/ICard';

import styles from '../sass/Card.module.scss';

function Card({ children, cardVariant, wrapperVariant }: ICard) {
  const cardStyles = cardVariant?.split(' ')
    .map((cardStyle) => styles[cardStyle])
    .join(' ');

  return (
    <div className={`${wrapperVariant ? styles[wrapperVariant] : ''}`}>
      <div className={cardStyles}>
        {children}
      </div>
    </div>
  );
}

export default Card;
