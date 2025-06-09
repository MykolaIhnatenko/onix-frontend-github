import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import accordionData from '../data/accordionData';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import PageContainer from 'components/PageContainer/PageContainer';
import accordionClasses from '../tailwind/accordionClasses';

import styles from '../sass/accordionBlock.module.scss';

function ConvertAccordionBlock() {
  return (
    <PageContainer className={styles.section} tag="section">
      <VRARContent>
        <MainTitle className={styles.mainTitle} tag="h2">
          Onix’s approach
          {' '}
          <br />
          to development
        </MainTitle>
      </VRARContent>
      <VRARContent>
        <AccordionWhite
          activeFirst
          data={accordionData}
          classes={accordionClasses}
        />
      </VRARContent>
    </PageContainer>
  );
}

export default ConvertAccordionBlock;
