import PropTypes from 'prop-types';

import { IBracketologyChallengeItem } from '../interfaces/IBracketologyChallengeItem';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyChallengeItem.module.scss';

function BracketologyChallengeItem({ id, content }: IBracketologyChallengeItem) {
  return (
    <div className={styles.item}>
      <BracketologyText variant="number">{id}</BracketologyText>
      <BracketologyText tag="p" variant="text">{content}</BracketologyText>
    </div>
  );
}

BracketologyChallengeItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BracketologyChallengeItem;
