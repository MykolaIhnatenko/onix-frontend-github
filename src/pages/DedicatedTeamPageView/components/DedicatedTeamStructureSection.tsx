import { Fragment } from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import structureData from '../data/structureData';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

import styles from '../sass/dedicatedTeamStructureSection.module.scss';

function DedicatedTeamStructureSection({ isMobileOrTablet }: { isMobileOrTablet: boolean }) {
  const accordionStyleType = isMobileOrTablet ? AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT : undefined;

  return (
    <section className={styles.structureSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Dedicated team structure: whom can you hire?
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          The composition of your dedicated web development team depends directly on your business needs
          and&nbsp;project requirements. Your dedicated team may consist of the following specialists:
        </ContentText>
      </PageContainer>
      {structureData.map(({
        id, title, data,
      }, index) => (
        <Fragment key={[id, index].join('_')}>
          <PageContainer className={styles.accordionContainer}>
            <MainTitle tag="p" className={styles.subtitle}>
              {title}
            </MainTitle>
            <AccordionWhite
              data={data}
              activeFirst
              accordionStyleTypes={accordionStyleType}
              smallerTitleText
            />
          </PageContainer>
        </Fragment>
      ))}
    </section>
  );
}

export default DedicatedTeamStructureSection;
