import IPhasesSectionTablet from '../interfaces/IPhasesSectionTablet';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import { AccordionBlackStyleTypes } from 'constants/AccordionStyleTypes';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/PhasesSectionTablet.module.scss';

function PhasesSectionTablet({ title, data }: IPhasesSectionTablet) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <MainTitle className={styles.title}>{title}</MainTitle>
      </PageContainer>
      <AccordionBlack
        data={data}
        activeFirst
        accordionStyleTypes={AccordionBlackStyleTypes.ACTIVE_WHITE_TITLE_AND_CONTENT}
      />
    </section>
  );
}

export default PhasesSectionTablet;
