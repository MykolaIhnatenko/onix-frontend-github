import ContentText from '../../ContentText/ContentText';
import MainTitle from '../../MainTitle/MainTitle';

import styles from '../sass/subtitleReferral.module.scss';

function SubtitleReferral() {
  return (
    <div className={styles.wrapper}>
      <ContentText tag="p" className={styles.text} marginAbsent>
        Recommend Onix to your friends or business partners, and enjoy rewards for every new client you refer!
      </ContentText>
      <MainTitle tag="p" className={styles.title}>
        Fill in the details of yourself and your referral:
      </MainTitle>
    </div>
  );
}

export default SubtitleReferral;
