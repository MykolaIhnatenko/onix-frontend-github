import PropTypes from 'prop-types';

import styles from '../sass/InnerVRCard.module.scss';

function InnerVRCard({ children, typeStyle }) {
  return (
    <div className={`${styles.card} ${typeStyle ? styles[typeStyle] : ''}`}>
      {children}
    </div>
  );
}

InnerVRCard.propTypes = {
  children: PropTypes.node.isRequired,
  typeStyle: PropTypes.string,
};

InnerVRCard.defaultProps = {
  typeStyle: '',
};

export default InnerVRCard;
