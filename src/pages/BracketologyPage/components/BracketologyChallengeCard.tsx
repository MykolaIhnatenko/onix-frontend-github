import Card from './Card';
import { IBracketologyChallengeCard } from '../interfaces/IBracketologyChallengeCard';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyChallengeCard.module.scss';

function BracketologyChallengeCard({ icon, title, content }:IBracketologyChallengeCard) {
  return (
    <div className={styles.container}>
      <Card wrapperVariant="challengeWrapper" cardVariant="challengeCard">
        {icon}
        <BracketologyText tag="h3" variant="challengeCardTitle">{title}</BracketologyText>
        <BracketologyText tag="p" variant="text">{content}</BracketologyText>
      </Card>
    </div>
  );
}

export default BracketologyChallengeCard;
