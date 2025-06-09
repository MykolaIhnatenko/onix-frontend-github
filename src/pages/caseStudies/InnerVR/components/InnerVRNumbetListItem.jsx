import PropTypes from 'prop-types';

import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRNumberListItem.module.scss';

function InnerVRNumberListItem({ id, title, text }) {
  return (
    <VRARPageAppearAnimation tag="li" classes={styles.item}>
      <div className={`${styles.itemTitle} itemTitle whiteTitleColor`}>
        <span>{id}</span>
        <h3 className="unsetText">{title}</h3>
      </div>
      <p className={`${styles.text} text`}>
        {text}
      </p>
    </VRARPageAppearAnimation>
  );
}

InnerVRNumberListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InnerVRNumberListItem;
