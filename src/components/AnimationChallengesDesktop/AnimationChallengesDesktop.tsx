import { useState } from 'react';
import { motion } from 'framer-motion';

import IAnimationChallengesDesktop from './interfaces/IAnimationChallengesDesktop';
import AnimationChallengesDesktopItem from 'components/AnimationChallengesDesktopItem/AnimationChallengesDesktopItem';

function AnimationChallengesDesktop({
  list, iconBlack = false, stylesVariant = {}, Tag = 'p', classesItem = {},
}: IAnimationChallengesDesktop) {
  const [activeBlock, setActiveBlock] = useState(0);

  const setActiveItem = (index: number) => {
    setActiveBlock(index);
  };

  return (
    <motion.div
      className={`w-full flex justify-between z-[1] gap-[110px] screen-lg:hidden min-xxxl:gap-[70px] 
      ${stylesVariant?.contentBox || ''}`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <div className={`w-[47%] flex flex-col min-xxxl:w-1/2 screen-xl:w-[45%] ${stylesVariant?.listContainer || ''}`}>
        {list.map((item, index) => (
          <AnimationChallengesDesktopItem
            key={[item, index].join('_')}
            item={item}
            index={index}
            activeBlock={activeBlock}
            setActiveItem={setActiveItem}
            iconBlack={iconBlack}
            classes={classesItem}
            lastItem={index === list.length - 1}
          />
        ))}
      </div>
      <div className={`w-[53%] flex flex-col min-xxxl:w-[50%] ${stylesVariant?.content || ''}`}>
        {list[activeBlock].subTitle && (
          <p className={`text-color-white mb-[16px] text-[36px]/[40px] font-medium ${stylesVariant?.subTitle || ''}`}>
            {list[activeBlock].subTitle}
          </p>
        )}
        <Tag className={`text-color-black font-ibmPlexMono pt-[30px] text-[18px]/[26px] ${stylesVariant?.desc || ''}`}>
          {list[activeBlock].desc}
        </Tag>
      </div>
    </motion.div>
  );
}

export default AnimationChallengesDesktop;
