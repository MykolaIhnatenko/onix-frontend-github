import IButton from '../interfaces/IButton';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

function ButtonPrimary({
  text, styleContainer, hasArrow, id,
  onClick, disabled, arrowVariant,
  fontSizeSmallOnMobile, classes, typeButton,
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
      classes={{
        ...classes,
        customContainer: 'text-color-white bg-[#E7E7E7] before:bg-color-black',
        customContent: 'mix-blend-difference group-hover/button:text-color-white',
      }}
    />
  );
}

export default ButtonPrimary;
