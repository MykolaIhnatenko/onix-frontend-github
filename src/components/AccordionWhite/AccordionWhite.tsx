import React from 'react';

import AccordionTemplate from 'components/AccordionTemplate/AccordionTemplate';
import IAccordionWhite from './interfaces/IAccordionWhite';

function AccordionWhite({
  data,
  activeFirst,
  withScroll,
  withoutAccordion,
  openByHover = false,
  accordionStyleTypes,
  borderTopFirst,
  borderBottomLast,
  smallerTitleText,
  classes,
}: IAccordionWhite) {
  return (
    <AccordionTemplate
      data={data}
      activeFirst={activeFirst}
      withScroll={withScroll}
      withoutAccordion={withoutAccordion}
      openByHover={openByHover}
      accordionStyleTypes={accordionStyleTypes}
      borderTopFirst={borderTopFirst}
      borderBottomLast={borderBottomLast}
      smallerTitleText={smallerTitleText}
      classes={classes}
    />
  );
}

export default AccordionWhite;
