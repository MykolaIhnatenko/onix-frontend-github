import PropTypes from 'prop-types';

import ImageComponent from '../../../../../../components/Image/Image';

import styles from '../../../sass/DevelopmentProcessStory.module.scss';

function Card({ card, index }) {
  return (
    <div className={styles.card} key={card.imgSrc}>
      <ImageComponent
        src={card.imgSrc}
        srcSet={`${card.imgSrc} 1x, ${card.imgSrc2x} 2x`}
        alt="Task schedule"
        width={card.width}
        height={card.height}
      />
      <p>
        <span className={styles.cardNumber}>
          {index + 1}
          .
        </span>
        {card.text}
      </p>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    imgSrc2x: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
