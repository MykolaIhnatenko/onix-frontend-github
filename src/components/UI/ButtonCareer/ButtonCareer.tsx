import IButton from '../interfaces/IButton';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

function ButtonCareer({
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
        customContainer: 'text-color-black bg-[#E7E7E7] before:bg-color-white',
      }}
    />
  );
}

export default ButtonCareer;
