import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';
import accordionData from '../data/accordionData';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/apartmentBookingAccordionBlock.module.scss';

function ApartmentBookingAccordionBlock() {
  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.mainTitle}>
            Software development phases
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <AccordionBlack
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

export default ApartmentBookingAccordionBlock;
