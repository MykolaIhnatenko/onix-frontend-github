import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ShellChairChallengesBg from '../../../assets/images/shellChair/challengesSection/img_challenges@2x.webp';
import ShellChairChallengesBgTablet from '../../../assets/images/shellChair/challengesSection/img_challenges_tablet@2x.webp';
import ShellChairChallengesBgMobile from '../../../assets/images/shellChair/challengesSection/img_challenges_mobile@2x.webp';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import challengesData from '../data/challengesData';
import ShellChairChallengesCard from './ShellChairChallengesCard';

import styles from '../sass/shellChairChallengesSection.module.scss';

function ShellChairChallengesSection() {
  const bg = useBackground(ShellChairChallengesBg, ShellChairChallengesBgTablet, ShellChairChallengesBgMobile);

  return (
    <section className={styles.challengesSection}>
      <div className={styles.bg}>
        {bg && (
        <ImageComponent
          src={bg}
          fill
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          alt="figures"
        />
        )}
      </div>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.title}>
            The Onix team faced the following challenges:
          </MainTitle>
          <div className={styles.cardsBlock}>
            {challengesData.map(({ id, title, text }) => (
              <ShellChairChallengesCard key={id} title={title} id={id} text={text} />
            ))}
          </div>
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default ShellChairChallengesSection;
