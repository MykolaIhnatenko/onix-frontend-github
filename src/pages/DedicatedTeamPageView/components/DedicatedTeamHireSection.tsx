import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import hireData from '../data/hireData.json';
import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';

import DedicatedTeamHireBg from '@/images/dedicatedTeamPage/img_hire@2x.webp';
import DedicatedTeamHireBgTablet from '@/images/dedicatedTeamPage/img_hire_tablet@2x.webp';
import DedicatedTeamHireBgMobile from '@/images/dedicatedTeamPage/img_hire_mobile@2x.webp';
import styles from '../sass/dedicatedTeamHireSecion.module.scss';

function DedicatedTeamHireSection() {
  const background = useBackground(
    DedicatedTeamHireBg,
    DedicatedTeamHireBgTablet,
    DedicatedTeamHireBgMobile,
  );

  return (
    <section className={styles.hireSection}>
      <div className={styles.background}>
        {
          background && (
            <ImageComponent
              src={background}
              fill
              alt="hire-background"
              sizes="100vw"
            />
          )
        }
      </div>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          How to hire a dedicated software development team: set-up process
        </MainTitle>
        <ul className={styles.itemsBlock}>
          {hireData.map(({ id, text }) => (
            <li key={id} className={styles.item}>
              <MainTitle tag="h3" className={styles.itemTitle}>
                <span>{id}</span>
                {text}
              </MainTitle>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamHireSection;
