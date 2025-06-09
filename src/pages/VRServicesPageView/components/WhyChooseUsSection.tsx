import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import techExcellenceData from '../data/techExcellenceData';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/techExcellence.module.scss';

function WhyChooseUsSection() {
  return (
    <section className={styles.approachSection}>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Why Do Clients Choose
          <br />
          Our AR/VR Dev Team
        </MainTitle>
      </PageContainer>
      <div className={styles.accordionContainer}>
        <AccordionBlack
          data={techExcellenceData}
          activeFirst
          smallerTitleText
          classes={{
            accordionItemTitle: '!px-0',
            accordionItemContent: 'screen-lg:px-[49px] screen-md:pr-0 screen-md:pl-[39px]',
          }}
        />
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
