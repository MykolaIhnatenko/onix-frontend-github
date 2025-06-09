import { useSelector } from 'react-redux';

import ImageComponent from '../Image/Image';
import ISoftwareProductBlock from './interfaces/ISoftwareProductBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import DoubleAccordion from 'components/DoubleAccordion/DoubleAccordion';

function SoftwareProductBlock({
  data, title, mainText, firstNoteText, secondNoteText,
  background, withoutAccordion,
}: ISoftwareProductBlock) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <div className="screen-lg:pb-[60px] bg-white">
      <div className="pb-0 pt-[80px] pl-[80px] pr-[80px] relative
        bg-bottom bg-cover bg-no-repeat
        screen-xxl:pl-[70px] screen-xxl:pr-[70px]
        screen-lg:pl-[30px] screen-lg:pr-[30px] screen-lg:pb-[40px]
        screen-md:pl-[15px] screen-md:pr-[15px]"
      >
        {background && (
          <div className="hidden screen-md:block absolute top-0 left-0 w-full h-full">
            <ImageComponent
              src={background}
              alt="Tech geeks background left mobile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative">
          {title}
          {mainText}
          <div className="flex flex-col max-w-[1480px] screen-lg:max-w-[1300px]">
            {firstNoteText}
            <div className="flex justify-end screen-lg:block">
              {secondNoteText}
            </div>
          </div>
        </div>
      </div>
      <DoubleAccordion
        data={data}
        isMobileOrTablet={isMobile}
        activeFirst={isMobile && !withoutAccordion}
        withoutAccordion={withoutAccordion}
      />
    </div>
  );
}

export default SoftwareProductBlock;
