import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import responsibilityData from '../data/responsibilityData';
import TransparentCard from '../../../components/TransparentCard/TransparentCard';
import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import { TransparentCardVariant } from '../../../constants/enums';

import DedicatedTeamResponsibilityBg from '@/images/dedicatedTeamPage/img_responsibility_bg@2x.webp';
import DedicatedTeamResponsibilityBgTablet from '@/images/dedicatedTeamPage/img_responsibility_bg_tablet@2x.webp';
import DedicatedTeamResponsibilityBgMobile from '@/images/dedicatedTeamPage/img_responsibility_bg_mobile@2x.webp';
import styles from '../sass/dedicatedTeamResponsibilitySecion.module.scss';

function DedicatedTeamResponsibilitySection() {
  const background = useBackground(
    DedicatedTeamResponsibilityBg,
    DedicatedTeamResponsibilityBgTablet,
    DedicatedTeamResponsibilityBgMobile,
  );

  return (
    <section
      className={styles.responsibilitySection}
    >
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
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          Areas of responsibility
        </MainTitle>
        <div className={styles.cardsBlock}>
          {responsibilityData.map(({
            id, icon, title, text, bg, bgTablet, bgMobile,
          }) => (
            <TransparentCard
              key={id}
              bg={bg}
              bgMobile={bgMobile}
              bgTablet={bgTablet}
              icon={icon}
              title={title}
              text={text}
              variant={TransparentCardVariant.DEDICATED_TEAM}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamResponsibilitySection;
