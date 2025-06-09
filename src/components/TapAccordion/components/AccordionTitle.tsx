import { motion } from 'framer-motion';

import { IAccordionTitleProps } from '../interfaces/ITapAccordionData';

function AccordionTitle({
  icon, title, isActive, classes, onTap, isMobile,
}: IAccordionTitleProps) {
  return (
    <motion.div
      className={`w-full relative outline-none py-5 px-[15px] 
        flex items-center z-[1] gap-[20px] text-color-black
        min-md:py-[30px] min-md:px-[30px] min-md:gap-[30px]
        min-lg:cursor-pointer min-lg:my-0 min-lg:mx-0
        ${classes ? classes.accordionTitle : ''}`}
      onTap={onTap}
      onHoverStart={isMobile ? undefined : onTap}
      role="presentation"
      tabIndex={-1}
    >
      <div className={`w-[40px] h-[40px] min-md:w-[60px] min-md:h-[60px]
        ${isActive ? 'text-color-white' : ''}
        ${classes ? classes.icon : ''}`}
      >
        {icon}
      </div>
      <h2 className={`font-generalSans font-medium text-[25px] leading-[35px]
        min-md:text-[30px] min-md:leading-[40px]
        ${isActive ? 'text-color-white' : ''}
        ${classes ? classes.title : ''}`}
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default AccordionTitle;
