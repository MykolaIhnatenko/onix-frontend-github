import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import { IShellChairChallengesCard } from '../interfaces/IShellChairChallengesCard';

import styles from '../sass/shellChairChallengesCard.module.scss';

function ShellChairChallengesCard({ title, text, id }: IShellChairChallengesCard) {
  return (
    <div className={styles.card}>
      <div className={styles.titleBlock}>
        <MainTitle tag="span" className={styles.number}>{id}</MainTitle>
        <MainTitle tag="h3" className={styles.title}>{title}</MainTitle>
      </div>
      <ContentText tag="p" className={styles.text}>{text}</ContentText>
    </div>
  );
}

export default ShellChairChallengesCard;
