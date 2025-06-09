import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import utilizeData from '../data/utilizeData';
import useBackground from '../../../hook/useBackground';
import DedicatedTeamMan from '@/images/dedicatedTeamPage/img_man@2x.webp';
import DedicatedTeamUtilize from '@/images/dedicatedTeamPage/img_utilize@2x.webp';
import DedicatedTeamUtilizeTablet from '@/images/dedicatedTeamPage/img_utilize_tablet@2x.webp';
import DedicatedTeamUtilizeMobile from '@/images/dedicatedTeamPage/img_utilize_mobile@2x.webp';

import styles from '../sass/dedicatedTeamUtilizeSecion.module.scss';

function DedicatedTeamUtilizeSection() {
  const background = useBackground(
    DedicatedTeamUtilize,
    DedicatedTeamUtilizeTablet,
    DedicatedTeamUtilizeMobile,
  );

  return (
    <section className={styles.utilizeSection}>
      <div className={styles.background}>
        {background && (
          <ImageComponent
            src={background}
            fill
            alt="utilize-background"
            sizes="100vw"
          />
        )}
      </div>
      <div className={styles.man}>
        <ImageComponent
          src={DedicatedTeamMan}
          fill
          sizes="100vw"
          alt="man"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          When to utilize a dedicated development team
        </MainTitle>
        <ul className={styles.itemsBlock}>
          {utilizeData.map(({ id, content }) => (
            <li key={id} className={styles.item}>
              <MainTitle tag="span" className={styles.itemTitle}>
                {id}
              </MainTitle>
              {content}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamUtilizeSection;
