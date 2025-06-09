import PropTypes from 'prop-types';

import styles from './sass/PreloaderV2.module.scss';

export default function PreloaderV2({ size, color }) {
  return (
    <div className={styles.spinnerContainer}>
      <div
        className={`
          ${styles.spinner} 
          ${size && styles[size]}
          ${size && styles[color]}
        `}
      />
    </div>
  );
}

PreloaderV2.propTypes = {
  size: PropTypes.oneOf(['tiny', 'normal']),
  color: PropTypes.oneOf(['darkBlue', 'whiteBlue', 'whitePurple']),
};

PreloaderV2.defaultProps = {
  size: 'normal',
  color: 'darkBlue',
};
