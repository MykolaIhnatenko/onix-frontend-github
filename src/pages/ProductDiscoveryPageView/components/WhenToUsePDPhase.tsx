import React from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import WhenToUsePDPhaseData from '../data/WhenToUsePDPhaseData';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/WhenToUsePDPhase.module.scss';

export default function WhenToUsePDPhase() {
  return (
    <div className={styles.container}>
      <MainTitle className={styles.title}>
        When to use discovery phase
      </MainTitle>
      <AccordionBlack
        activeFirst
        data={WhenToUsePDPhaseData}
        classes={{
          accordionItem: 'relative z-[1]',
          accordionItemTitle:
            `relative cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-[5%]
            before:w-[90%] before:h-0 before:bg-white before:transition-all before:duration-[.3s] before:ease-in-out
            hover:before:h-[104%] hover:before:w-full hover:before:left-0 hover:before:bottom-[-2px] group`,
          accordionItemTitleOpen: 'hover:before:hidden',
          titleContainer: 'group-hover:mix-blend-difference',
          iconContainer: 'group-hover:mix-blend-difference',
          accordionItemContent: 'md:pl-0 md:pr-[70px]',
        }}
        borderTopFirst
        borderBottomLast
      />
    </div>
  );
}
