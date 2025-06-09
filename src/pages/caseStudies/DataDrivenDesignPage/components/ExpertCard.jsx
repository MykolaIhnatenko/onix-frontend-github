import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ExpertCard.module.scss';

function ExpertCard({ image, text }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.expertCardContainer}>
        <ImageComponent
          width={100}
          height={101}
          src={image}
          alt="expertIcon"
        />
        <div className={styles.textContainer}>{text}</div>
      </div>
    </div>
  );
}

ExpertCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExpertCard;
