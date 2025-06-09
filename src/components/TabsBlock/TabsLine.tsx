import React from 'react';
import { motion } from 'framer-motion';

import MainTitle from 'components/MainTitle/MainTitle';
import { ITabsLine } from './interfaces/ITabsLine';

function TabsLine({
  content, constraintsRef, tabsRef, isDragListen, selectedTab, setSelectedTab, classes,
}: ITabsLine) {
  return (
    <motion.div
      ref={constraintsRef}
      className={`
        w-full relative flex overflow-hidden
        ${!isDragListen ? 'justify-center' : ''}
        ${classes?.tabsBlockWrapper || ''}
      `}
    >
      <motion.div
        key={isDragListen ? 'drag-enabled' : 'drag-disabled'}
        ref={tabsRef}
        drag="x"
        dragMomentum={false}
        dragElastic={0.1}
        dragListener={isDragListen}
        dragConstraints={constraintsRef}
        role="presentation"
        className={`
          flex flex-row px-[70px] min-xxxl:px-[80px] screen-lg:px-[30px] screen-md:px-[15px]
          after:content-[''] after:absolute after:h-[2px] after:bg-[#E0E0E0]
          after:bottom-0 after:left-[70px] after:right-[70px] screen-lg:after:left-[30px]
          screen-lg:after:right-[30px] screen-md:after:left-[15px] screen-md:after:right-[15px]
          min-xxxl:after:left-[80px] min-xxxl:after:right-[80px]
          ${isDragListen ? 'relative' : ''}
          ${classes?.tabsBlock || ''}
        `}
      >
        {content.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedTab(item)}
            role="presentation"
            className={`relative cursor-pointer select-none screen-lg:cursor-default ${classes?.tabTitle || ''}`}
          >
            <MainTitle
              tag="h3"
              className={`
                whitespace-nowrap text-[#999] !text-[20px]/[40px] py-[8px] px-[40px]
                screen-lg:px-[30px] screen-md:px-[20px] screen-md:!text-[16px]/[24px]

                after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0
                after:bg-color-black after:z-10 after:transition-width after:duration-200 after:ease-in
                ${item.id === selectedTab.id ? '!text-color-black after:!w-full' : ''}
                ${classes?.tabTitleText || ''}
              `}
            >
              {item.title}
            </MainTitle>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TabsLine;
