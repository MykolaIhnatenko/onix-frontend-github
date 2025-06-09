import { useSelector } from 'react-redux';

import Brand from './components/Brand';
import BrandsSlider from './components/BrandsSlider';
import projectList, { whiteProjectList } from './projectList';
import { IBrandsBlock } from './interfaces/IBrandsBlock';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';

function BrandsBlock({
  classes, brandsBlockBlack = false, slider = false,
}: IBrandsBlock) {
  const {
    screenSizes: {
      isXSDevice,
      isSMDevice,
    },
  } = useSelector<IStore, IApp>((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;

  const list = brandsBlockBlack ? whiteProjectList : projectList;

  return (
    <div
      className={`bg-white flex justify-around items-center flex-wrap
        gap-y-[40px] gap-x-[20px] h-auto p-[0px_0px_80px]
        min-md:flex" ${classes?.projectBlock || ''}
        ${slider
        ? 'relative block p-[0px_0px_80px] '
        + 'min-md:absolute min-md:flex min-md:z-[1] min-md:bottom-0 '
        + 'min-md:left-0 min-md:p-[0px_30px_80px] min-xxl:p-[0px_80px_80px] '
        + 'min-xxxl:p-[0px_280px_80px]'
        : ''}
        `}
    >
      {isMobile ? (
        <BrandsSlider
          projectList={list}
          classes={classes}
        />
      ) : list.flat().map((Item, index) => (
        <Brand key={['icon_', index].join()} index={index} Item={Item} classes={classes?.brand} />
      ))}
    </div>
  );
}

export default BrandsBlock;
