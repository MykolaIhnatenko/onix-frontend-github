import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import accordionData from '../data/accordionData';

import styles from '../sass/accordionBlock.module.scss';

function WordpressAccordionBlock() {
  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.mainTitle}>
            Issues we solved
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <AccordionWhite
            activeFirst
            data={accordionData}
            classes={{
              accordion: 'max-w-[630px] min-xxxl:max-w-[850px] screen-lg:max-w-full',
              accordionItemTitle: '!px-0 screen-md:!px-[15px]',
              accordionItemContent: '!px-0 screen-md:!px-[15px]',
            }}
          />
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default WordpressAccordionBlock;
