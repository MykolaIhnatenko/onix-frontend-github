import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRBorderedBlock.module.scss';

function InnerVRBorderedBlock({
  children, src, width, height, alt,
}) {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <ImageComponent
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="100vw"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

InnerVRBorderedBlock.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

InnerVRBorderedBlock.defaultProps = {
  children: null,
};

export default InnerVRBorderedBlock;
