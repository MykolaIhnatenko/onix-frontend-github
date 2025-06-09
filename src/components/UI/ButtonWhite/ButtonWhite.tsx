import IButton from '../interfaces/IButton';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

function ButtonWhite({
  text, styleContainer, hasArrow, id,
  onClick, disabled, arrowVariant, fontSizeSmallOnMobile,
  classes, typeButton,
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
        customContainer: `
          text-color-black bg-transparent before:bg-color-white border-[2px] border-color-black !border-solid
          ${disabled ? 'border-transparent' : ''}
        `,
      }}
    />
  );
}

export default ButtonWhite;
