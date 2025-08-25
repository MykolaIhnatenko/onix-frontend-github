import IButton from '../interfaces/IButton';
import { ibmPlexMono } from 'fonts/MainFonts';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

function ButtonLight({
  text, styleContainer, hasArrow, id,
  onClick, disabled, arrowVariant,
  fontSizeSmallOnMobile, classes, typeButton, isJakarta,
}: IButton) {
  return (
    <ButtonTemplate
      id={id}
      text={text}
      styleContainer={styleContainer}
      hasArrow={hasArrow}
      onClick={onClick}
      disabled={disabled}
      arrowVariant={arrowVariant}
      fontSizeSmallOnMobile={fontSizeSmallOnMobile}
      typeButton={typeButton}
      isJakarta={isJakarta}
      classes={{
        ...classes,
        customContainer: `
          text-[#0072FF] bg-[#e7e7e7] before:bg-color-white
          ${ibmPlexMono.variable}
        `,
      }}
    />
  );
}

export default ButtonLight;
