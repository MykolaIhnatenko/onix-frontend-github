import { motion } from 'framer-motion';

import { IHoverAccordionItem } from '../interfaces/IHoverAccordion';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';

function HoverAccordionItem({
  id, image, number, title, activeItem, setActiveItem, priority, whiteVariant,
}: IHoverAccordionItem) {
  const isActive = activeItem === id;
  return (
    <motion.div
      className={`
        relative h-[688px] w-[13%] bg-transparent transition-[width] duration-[700ms]
        after:content-[''] after:absolute after:top-0 after:left-0 after:h-full
        after:w-full after:border-[2px] after:border-black after:box-border
        after:transition-[border] after:duration-[500ms] after:border-r-0
        last:after:border-r-[2px] min-xxxl:h-[900px]
        ${whiteVariant ? 'after:border-white w-[17%]' : ''}
        ${isActive
        ? 'flex-1 w-[48%] after:border-transparent after:border-l-black '
        + 'after:border-l-[2px] first:after:border-l-transparent'
        : ''}
        ${isActive && whiteVariant
          ? 'flex-1 !w-[49%] after:!border-transparent after:!border-l-white '
          + 'after:border-l-[2px] first:after:!border-l-transparent'
          : ''}
      `}
      onMouseMove={() => setActiveItem(id)}
    >
      <div
        className={`
          absolute left-0 top-0 h-full w-full transition-all duration-[700ms]
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <ImageComponent
          src={image}
          alt="background"
          priority={priority}
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`
          relative flex h-full flex-col justify-between p-[30px_0px_30px_30px]
          ${isActive ? 'text-white' : ''}
          ${whiteVariant ? 'text-white' : ''}
        `}
      >
        <MainTitle
          tag="p"
          className="!text-[36px] !leading-[46px]"
        >
          {number}
        </MainTitle>
        <MainTitle
          tag="h3"
          className="!text-[36px] !leading-[46px] rotate-180 [writing-mode:vertical-rl]"
        >
          {title}
        </MainTitle>
      </div>
    </motion.div>
  );
}

export default HoverAccordionItem;
