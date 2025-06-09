import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import TechnologiesBlock from '../../../components/TechnologiesBlock/TechnologiesBlock';
import { getTechnologiesBooking } from '../../../utils/getTechnologies';
import { travelTechnologiesBlockDataFirst, travelTechnologiesBlockDataSecond } from '../data/travelTechnologiesBlockData';

import styles from '../sass/travelTechnologiesBlock.module.scss';

function TravelTechnologiesBlock() {
  return (
    <PageContainer className={styles.container}>
      <ContentText tag="p" className={styles.supTitle}>
        [ Technologies we use ]
      </ContentText>
      <MainTitle className={styles.title}>
        To deliver products of the highest quality,
        <span className={styles.greyText}> we use a reliable and top-notch set of technologies.</span>
      </MainTitle>
      <MainTitle tag="h3" className={styles.firstText}>
        Web Development Stack
      </MainTitle>
      <TechnologiesBlock
        technologies={getTechnologiesBooking(travelTechnologiesBlockDataFirst)}
        noShowIcon
        classes={{
          container: '!p-0',
          technologies: {
            technology: '[&:last-child]:!border-b-2 !border-black',
          },
        }}
      />
      <MainTitle tag="h3" className={styles.secondText}>
        Mobile Development Stack
      </MainTitle>
      <TechnologiesBlock
        technologies={getTechnologiesBooking(travelTechnologiesBlockDataSecond)}
        noShowIcon
        classes={{
          container: '!p-0',
          technologies: {
            technology: '[&:last-child]:!border-b-2 !border-black',
          },
        }}
      />
    </PageContainer>
  );
}

export default TravelTechnologiesBlock;
