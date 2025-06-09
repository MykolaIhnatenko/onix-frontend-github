import { motion } from 'framer-motion';

import { rectangleAVariant, rectangleBVariant } from '../../layout/Header/animations/mobileMenuAnimation';
import ICloseButton from './interfaces/ICloseButton';

function CloseButton({
  onClick, type, classes = {},
}: ICloseButton) {
  return (
    <motion.button
      role="button"
      className={
        `d-flex d-col d-justify-center d-item-center 
        w-10 h-10 cursor-pointer outline-none border-none bg-color-black screen-lg:cursor-default
        ${classes?.container || ''}`
      }
      whileTap={{ scale: 0.9 }}
      initial="open"
      onClick={onClick}
      type={type}
    >
      <motion.span
        className={`h-[2px] w-[22px] bg-white block  
        ${classes?.rectangle || ''}`}
        variants={rectangleAVariant}
      />
      <motion.span
        className={`h-[2px] w-[22px] bg-white block  
        ${classes?.rectangle || ''}`}
        variants={rectangleBVariant}
      />
    </motion.button>
  );
}

export default CloseButton;
