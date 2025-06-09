import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProductCard.module.scss';

function ProductCard({ src, content }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div className={styles.productCardIcon}>
          <ImageComponent
            src={src}
            width={32}
            height={32}
            alt="icon"
          />
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProductCard;
