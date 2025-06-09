import ILinkButton from '../interfaces/ILinkButton';
import LinkButtonTemplate from '../LinkButtonTemplate/LinkButtonTemplate';

function LinkButtonLight({
  text, styleContainer, hasArrow = true, id,
  path, arrowVariant, fontSizeSmallOnMobile, classes,
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
        customContainer: 'text-[#0072FF] bg-[#e7e7e7] before:bg-color-white block',
      }}
    />
  );
}

export default LinkButtonLight;
