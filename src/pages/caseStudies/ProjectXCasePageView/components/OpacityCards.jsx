import PropTypes from 'prop-types';

import OpacityAnimation from './OpacityAnimation';
import { opacityCards } from '../data/ProjectXData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/OpacityCards.module.scss';

function OpacityCards({ cardClass }) {
  return (
    <>
      {opacityCards.map(({
        id, src, width, height,
      }) => {
        const cardStyle = `${cardClass}${id}`;

        return (
          <OpacityAnimation key={id} classes={styles[cardStyle]} offset={0}>
            <ImageComponent
              src={src}
              width={width}
              height={height}
              className={cardClass === 'aboutCardContainer' ? styles.img : ''}
              alt="card"
              quality={100}
            />
          </OpacityAnimation>
        );
      })}
    </>
  );
}

OpacityCards.propTypes = {
  cardClass: PropTypes.string.isRequired,
};

export default OpacityCards;
