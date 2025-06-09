import { useSelector } from 'react-redux';

import IAdoricBrands from './interfaces/IAdoricBrands';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import BrandsSlider from '../BrandsBlock/components/BrandsSlider';
import Brand from '../BrandsBlock/components/Brand';
import VRARContentText from 'components/VRARContentText/VRARContentText';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';

function AdoricBrands({
  titleBlock,
  title,
  brandsList,
  brandListSlider,
}: IAdoricBrands) {
  const {
    screenSizes: { isXSDevice, isSMDevice },
  } = useSelector<IStore, IApp>((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div
      className={` w-full bg-white flex flex-col p-[120px_0]
        screen-lg:p-[80px_30px] screen-md:p-[80px_15px]
      `}
    >
      <div
        className={` flex flex-col p-[0_70px] min-xxxl:p-[0_80px]
          screen-lg:p-0 screen-md:p-0
        `}
      >
        {titleBlock && (
          <VRARContentText text={titleBlock} smallFontSizeOnMobile />
        )}
        <div
          className={`
            max-w-[1080px] mt-[16px] mb-[40px] min-xxxl:max-w-[1480px]
            screen-lg:max-w-full screen-lg:mt-[20px]
            screen-md:mt-[15px] screen-md:mb-[30px]
          `}
        >
          <VRARMainTitle title={title} />
        </div>
      </div>

      <div
        className={`
          bg-white flex justify-around items-center flex-wrap
          gap-[40px_20px] h-auto min-md:flex
        `}
      >
        {isMobile && brandsList ? (
          <BrandsSlider
            projectList={brandListSlider || brandsList}
            typeSlider={[0, 1]}
          />
        ) : (
          brandsList?.flat().map((Item, index) => (
            <Brand
              key={['icon_', index].join()}
              index={index}
              Item={Item}
              classes={`flex justify-center 
                !flex-[0_1_calc((100%_-_20px)_/_2)] 
                min-md:!flex-[0_1_calc((100%_-_70px_*_3)_/_4)] 
                min-lg:!flex-[0_1_calc((100%_-_80px_*_4)_/_5)]`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AdoricBrands;
