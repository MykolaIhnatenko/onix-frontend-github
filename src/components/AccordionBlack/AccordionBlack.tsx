import React from 'react';

import AccordionTemplate from 'components/AccordionTemplate/AccordionTemplate';
import IAccordionBlack from './interfaces/IAccordionBlack';

function AccordionBlack({
  data,
  activeFirst,
  withScroll,
  withoutAccordion,
  faq,
  openByHover = false,
  accordionStyleTypes,
  borderTopFirst,
  borderBottomLast,
  smallerTitleText,
  classes,
  borderTop,
}: IAccordionBlack) {
  return (
    <AccordionTemplate
      data={data}
      activeFirst={activeFirst}
      withScroll={withScroll}
      withoutAccordion={withoutAccordion}
      faq={faq}
      openByHover={openByHover}
      isAccordionBlack
      accordionStyleTypes={accordionStyleTypes}
      borderTopFirst={borderTopFirst}
      borderTop={borderTop}
      borderBottomLast={borderBottomLast}
      smallerTitleText={smallerTitleText}
      classes={classes}
    />
  );
}

export default AccordionBlack;
