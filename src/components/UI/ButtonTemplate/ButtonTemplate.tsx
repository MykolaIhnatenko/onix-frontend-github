import { motion } from 'framer-motion';

import Arrow from '../Arrow/Arrow';
import defaultStyles from '../defaultStyles';
import IButtonTemplate from '../interfaces/IButtonTemplate';

function ButtonTemplate({
  text, styleContainer, hasArrow = true, id,
  onClick, disabled, arrowVariant,
  fontSizeSmallOnMobile, classes,
  typeButton = 'button', isJakarta = false,
}: IButtonTemplate) {
  return (
    <motion.button
      id={id}
      className={`
        ${defaultStyles.container}
        ${classes?.customContainer || ''}
        ${styleContainer || ''}
        ${disabled ? defaultStyles.disabled : ''}
        
        ${classes?.container || ''}
      `}
      onClick={onClick}
      type={typeButton}
      disabled={disabled}
    >
      <span className={`
          ${defaultStyles.content}
          ${classes?.customContent || ''}
          ${classes?.content || ''}
          ${disabled ? defaultStyles.disabledText : ''}
        `}
      >
        <span className={`
            ${defaultStyles.text}
            ${fontSizeSmallOnMobile ? defaultStyles.fontSizeSmallOnMobile : ''}
            ${isJakarta ? '!font-jakartaSans normal-case' : ''}
            ${classes?.textContainer || ''}
          `}
        >
          {text}
        </span>
        {hasArrow && <Arrow arrowVariant={arrowVariant} classes={classes} />}
      </span>
    </motion.button>
  );
}

export default ButtonTemplate;
