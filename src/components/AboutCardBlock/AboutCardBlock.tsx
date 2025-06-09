import IAboutCardBlock from './interfaces/IAboutCardBlock';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from './sass/AboutCardBlock.module.scss';

function AboutCardBlock({ data, whiteBlock, classes }: IAboutCardBlock) {
  return (
    <PageContainer className={`${styles.cardsBox} ${whiteBlock ? styles.whiteBlock : ''} ${classes?.cardsBox || ''}`}>
      {!whiteBlock ? (
        <AccordionBlack
          data={data}
          activeFirst
          borderTopFirst
          borderBottomLast
          classes={{
            accordionItemContent: 'min-lg:px-0',
            accordionTitle: 'screen-md:!text-[20px]/[28px]',
          }}
        />
      ) : (
        <AccordionWhite
          data={data}
          activeFirst
          borderTopFirst
          borderBottomLast
          classes={{
            accordionItemContent: 'min-lg:px-0',
            accordionTitle: 'screen-md:!text-[20px]/[28px]',
          }}
        />
      )}
    </PageContainer>
  );
}

export default AboutCardBlock;
