import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import IActiveTitleHeader from './interfaces/IActiveTitleHeader';
import ButtonsPanel from '../../pages/Work/components/ButtonsPanel';
import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import { formTextHandle } from '../../utils/commonWorkPage';

function ActiveTitleHeader({
  title, typeFilter, typeFilterHandle, technologiesList, arrayText,
}:IActiveTitleHeader) {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const {
    isSMDevice, isXSDevice, isLGDevice, isMDDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;
  const isTablet = isMDDevice || isLGDevice;

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTextIndex === -1) {
        setActiveTextIndex((prevState) => (prevState + 2) % arrayText.length);
      } else {
        setActiveTextIndex((prevState) => (prevState + 1) % arrayText.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [arrayText.length]);

  return (
    <div className="w-full mx-auto pb-[40px] pt-[156px] flex flex-col
      screen-lg:pb-[30px] screen-md:pt-[136px]"
    >
      <h1 className="w-full p-[0_70px_60px] screen-xl:p-[0_80px_60px]
        screen-lg:p-[0_30px_60px] screen-md:p-[0_15px_40px]"
      >
        {title && (
        <span className="text-[72px] font-normal leading-[92px] font-generalSans
          screen-lg:leading-[72px] screen-md:text-[36px] screen-md:font-medium screen-md:leading-[46px]"
        >
          {title}
        </span>
        )}
        <span className="flex flex-col relative min-h-[90px] overflow-hidden w-full
          screen-xl:min-h-[180px] screen-lg:min-h-[180px] screen-md:min-h-[100px]"
        >
          {arrayText.map((item, index) => (
            <span
              key={[item, index].join('_')}
              className={`text-[72px] font-semibold leading-[80px] font-generalSans absolute top-[8px] 
                block translate-y-[350%] screen-lg:text-[72px] screen-lg:leading-[80px] 
                screen-md:text-[36px] screen-md:leading-[46px] 
               ${activeTextIndex === index ? '!translate-y-[0%] transition-transform duration-[800ms] ease-in-out' : ''}
               ${activeTextIndex === index + 1
                ? '!translate-y-[-150%] transition-transform duration-[1000ms] ease-in-out'
                : ''}`}
            >
              {isTablet || isMobile ? formTextHandle(item) : `${item}`}
            </span>
          ))}
        </span>
      </h1>
      <ButtonsPanel
        typeFilter={typeFilter}
        typeFilterHandle={typeFilterHandle}
        technologiesList={technologiesList}
      />
      <div className="w-full p-[0_70px] mt-[40px] screen-xl:p-[0_80px]
        screen-lg:p-[0_30px] screen-lg:mt-[30px] screen-md:p-[0_15px]"
      >
        <div className="w-full h-[2px] bg-black" />
      </div>
    </div>
  );
}

export default ActiveTitleHeader;
