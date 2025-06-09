import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/TagItem.module.scss';

function TagItem({ icon, text }) {
  return (
    <div className={styles.tagContainer}>
      <ImageComponent
        src={icon}
        alt="icon"
        width={28}
        height={28}
      />
      <div>{text}</div>
    </div>
  );
}

TagItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TagItem;
