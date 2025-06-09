import { useEffect, useState } from 'react';

import Colors from './data/colors.json';
import VRARContent from '../VRARContent/VRARContent';

function AnimationColorBox() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Colors.squadColors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-[20px] screen-md:flex-wrap">
      {Colors.squadColors.map((color, index) => (
        <VRARContent
          key={[color, index].join('')}
          className={`flex flex-col ${activeIndex === index ? 'animate-shrink-expand' : ''}`}
          delay={0.1 * (index + 1)}
        >
          <div
            className={`w-[155px] h-[155px] bg-[var(--color-black)] 
            min-md:w-[159px] min-md:h-[159px] 
            min-[993px]:w-[132px] min-[993px]:h-[132px] 
            min-xl:w-[150px] min-xl:h-[150px]
            ${Colors.squadColors.length - 1 === index
              ? "relative before:content-[''] before:absolute before:top-[2px] before:left-[2px] "
              + 'before:right-[2px] before:bottom-[2px] before:border-[2px] before:border-white'
              : ''}`}
            style={{ backgroundColor: color }}
          />
          <p className="text-[18px] font-ibmPlexMono font-normal leading-[26px] text-white mt-[10px]
            min-[993px]:text-[18px] min-[993px]:font-normal min-[993px]:leading-[26px]"
          >
            {color}
          </p>
        </VRARContent>
      ))}
    </div>
  );
}

export default AnimationColorBox;
