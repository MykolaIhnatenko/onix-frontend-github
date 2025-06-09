import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { PageProps } from '../interfaces/IInfiniteDragSlider';

function Page({
  index,
  renderPage,
  x,
  onDragEnd,
}: PageProps) {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      className={`absolute w-[612px] h-[582px] transition-transform duration-[300ms] ease-linear
      screen-lg:max-w-[602px] screen-lg:h-[582px]
      screen-md:w-[345px] screen-md:h-[330px]`}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  );
}

export default Page;
