import PropTypes from 'prop-types';

import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRListItem.module.scss';

function InnerVRListItem({ item }) {
  return (
    <VRARPageAppearAnimation classes={styles.item} tag="li">
      <span className={styles.circle} />
      { item }
    </VRARPageAppearAnimation>
  );
}

InnerVRListItem.propTypes = {
  item: PropTypes.node.isRequired,
};

export default InnerVRListItem;
