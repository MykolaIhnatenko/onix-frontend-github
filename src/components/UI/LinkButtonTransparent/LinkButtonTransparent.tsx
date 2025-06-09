import ILinkButton from '../interfaces/ILinkButton';
import LinkButtonTemplate from '../LinkButtonTemplate/LinkButtonTemplate';

function LinkButtonTransparent({
  text, styleContainer, hasArrow, id, path,
  arrowVariant, fontSizeSmallOnMobile, classes,
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
          text-color-black bg-transparent before:bg-transparent border-[2px] border-color-black !border-solid
        `,
      }}
    />
  );
}

export default LinkButtonTransparent;
