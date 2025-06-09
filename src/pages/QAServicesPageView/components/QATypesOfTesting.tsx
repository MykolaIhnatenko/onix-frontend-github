import MainTitle from '../../../components/MainTitle/MainTitle';
import { firstData, secondData, thirdData } from '../data/qaTypesOfTestingData';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import PageContainer from 'components/PageContainer/PageContainer';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

import styles from '../sass/qaTypesOfTesting.module.scss';

function QATypesOfTesting({ isMobileOrTablet } : { isMobileOrTablet: boolean }) {
  const accordionStyleType = isMobileOrTablet ? AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT : undefined;

  return (
    <PageContainer tag="section" className={styles.section}>
      <MainTitle className={styles.mainTitle}>
        Types of testing we perform
      </MainTitle>
      <MainTitle tag="p" className={styles.title}>
        Functional testing:
      </MainTitle>
      <AccordionWhite
        data={firstData}
        activeFirst
        accordionStyleTypes={accordionStyleType}
        smallerTitleText
      />
      <MainTitle tag="p" className={styles.title}>
        Non-functional testing:
      </MainTitle>
      <AccordionWhite
        data={secondData}
        activeFirst
        accordionStyleTypes={accordionStyleType}
        smallerTitleText
      />
      <MainTitle tag="p" className={styles.title}>
        Change-related testing:
      </MainTitle>
      <AccordionWhite
        data={thirdData}
        activeFirst
        accordionStyleTypes={accordionStyleType}
        smallerTitleText
        classes={{ accordion: 'pb-[80px] screen-lg:pb-0' }}
      />
    </PageContainer>
  );
}

export default QATypesOfTesting;
