import ILinkButton from '../interfaces/ILinkButton';
import LinkButtonTemplate from '../LinkButtonTemplate/LinkButtonTemplate';

function LinkButtonWhite({
  text, styleContainer, hasArrow, id,
  arrowVariant, fontSizeSmallOnMobile, classes, path,
}: ILinkButton) {
  return (
    <LinkButtonTemplate
      id={id}
      text={text}
      path={path}
      styleContainer={styleContainer}
      hasArrow={hasArrow}
      arrowVariant={arrowVariant}
      fontSizeSmallOnMobile={fontSizeSmallOnMobile}
      classes={{
        ...classes,
        customContainer: `
          text-color-black bg-transparent before:bg-color-white border-[2px] border-color-black !border-solid
        `,
      }}
    />
  );
}

export default LinkButtonWhite;
