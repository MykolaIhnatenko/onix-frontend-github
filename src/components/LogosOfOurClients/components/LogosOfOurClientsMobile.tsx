import { useSelector } from 'react-redux';

import BrandsSlider from 'components/BrandsBlock/components/BrandsSlider';
import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import logosList from 'components/LogosOfOurClients/data/logosList';
import logosListMobile from 'components/LogosOfOurClients/data/logosListMobile';
import VRARContent from 'components/VRARContent/VRARContent';

function LogosOfOurClientsMobile() {
  const {
    screenSizes: {
      isXSDevice,
      isSMDevice,
    },
  } = useSelector<IStore, IApp>((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div
      className={`min-xxl:hidden flex items-center gap-[40px_75px] flex-wrap justify-center
      screen-lg:gap-[30px_5.3vw] screen-lg:justify-between`}
    >
      {isMobile ? (
        <BrandsSlider
          projectList={logosListMobile}
          classes={{
            slider: '!h-[278px]',
            sliderCard: '!gap-[20px_30px] !h-[250px] !content-start !justify-between',
            brand: '!w-[145px] !h-[70px] !flex-[unset]',
          }}
        />
      ) : logosList.flat().map((Logo, index) => (
        <VRARContent key={[index, 'logo'].join('_')} className="flex items-center">
          {Logo}
        </VRARContent>
      ))}
    </div>
  );
}

export default LogosOfOurClientsMobile;
