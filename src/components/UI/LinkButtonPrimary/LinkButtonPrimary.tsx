import ILinkButton from '../interfaces/ILinkButton';
import LinkButtonTemplate from '../LinkButtonTemplate/LinkButtonTemplate';

function LinkButtonPrimary({
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
        customContainer: 'text-color-white bg-[#E7E7E7] before:bg-color-black block',
        customContent: 'mix-blend-difference group-hover/button:text-color-white',
      }}
    />
  );
}

export default LinkButtonPrimary;
