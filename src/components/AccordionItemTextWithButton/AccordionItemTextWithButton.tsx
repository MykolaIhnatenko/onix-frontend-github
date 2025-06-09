import React from 'react';

import IAccordionItemTextWithButton from './interfaces/IAccordionItemTextWithButton';
import ItemText from 'components/ItemText/ItemText';
import LinkButtonLight from 'components/UI/LinkButtonLight/LinkButtonLight';

function AccordionItemTextWithButton({
  content, path, buttonText = 'view more', classes,
}: IAccordionItemTextWithButton) {
  return (
    <>
      <ItemText
        content={content}
        classes={classes}
      />
      <LinkButtonLight
        text={buttonText}
        path={path}
        styleContainer="!mb-[30px] screen-md:!mb-[20px]"
      />
    </>
  );
}

export default AccordionItemTextWithButton;
