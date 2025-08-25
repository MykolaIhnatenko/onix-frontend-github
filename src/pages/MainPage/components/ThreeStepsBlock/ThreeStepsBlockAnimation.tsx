import { motion } from 'framer-motion';
import { useState } from 'react';

import ImageComponent from 'components/Image/Image';
import PageContainer from 'components/PageContainer/PageContainer';
import threeStepsData, { threeStepsImagesData } from 'pages/MainPage/data/threeStepsData';
import ThreeStepsBlockAnimationItem from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsBlockAnimationItem';

function ThreeStepsBlockAnimation() {
  const [activeImage, setActiveImage] = useState('01');

  return (
    <PageContainer className="relative bg-white">
      <div
        className="flex justify-between gap-[70px] relative"
      >
        <div className="w-[100%] max-w-[43%] flex flex-col gap-[70px]">
          {threeStepsData.map(({
            number, title, content,
          }, index) => (
            <ThreeStepsBlockAnimationItem
              key={[index, 'ThreeStepsBlockAnimationItem'].join('_')}
              id={number}
              content={content}
              title={title}
              setActiveImage={(n) => setActiveImage(n)}
            />
          ))}
        </div>
        <div className="w-[100%] max-w-[57%] sticky top-[67px] right-0 h-[960px]">
          {threeStepsImagesData.map(({ image, id }, index) => (
            <motion.div
              variants={{
                active: {
                  opacity: 1,
                },
                normal: {
                  opacity: 0,
                },
              }}
              initial="normal"
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
              animate={activeImage === id ? 'active' : 'normal'}
              className="absolute top-0 left-0 w-full h-full"
              key={[index, 'ThreeStepsBlockAnimationImage'].join('_')}
            >
              <ImageComponent
                src={image}
                alt="image for Three Steps Block Animation"
                className="object-cover object-center w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default ThreeStepsBlockAnimation;
