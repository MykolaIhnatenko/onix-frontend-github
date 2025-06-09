import { getFooterAddresses } from '../../layout/Footer/data/getFooterData';

function LocationsBlock() {
  return (
    <div className="flex flex-wrap gap-x-[42px] gap-y-0 min-md:gap-0 min-md:justify-between">
      {getFooterAddresses.map(({ flagCircle, title, address }, index) => {
        const isSecondOrFourth = index === 1 || index === 3;
        const isFirstOrSecond = index === 0 || index === 1;

        return (
          <div
            key={title}
            className={`
            pt-[30px] flex-[0_1_calc((100%_-_42px)_/_2)]
            min-md:pt-[60px] min-md:flex-[0_1_50%]
            min-lg:pt-[40px]
            ${isFirstOrSecond ? 'min-md:border-b-2 min-md:border-white' : ''}
            ${isSecondOrFourth ? 'min-md:pl-[40px] min-xxl:pl-[140px]' : ''}
      `}
          >
            <div className="flex items-center gap-[8px] min-md:gap-[10px] min-xl:gap-[20px]">
              <span
                className="inline-block w-[16px] h-[16px]
              min-md:w-[40px] min-md:h-[40px]
              min-xl:w-[60px] min-xl:h-[60px]"
              >
                {flagCircle}
              </span>
              <h3 className="font-jetBrains font-medium text-[16px]/[22px] tracking-[0.02rem] text-white uppercase
                           min-md:text-[60px]/[82px] min-md:font-normal min-md:normal-case
                             min-xl:!text-[96px] min-xl:!leading-[132px]"
              >
                {title}
              </h3>
            </div>
            <p className="text-white font-generalSans font-normal text-[14px]/[20px] pt-[15px]
                        min-md:pt-[9px] min-md:pb-[30px]
                        min-xl:font-ibmPlexMono min-xl:text-[18px]/[26px] min-xl:pt-[10px] min-xl:pb-[40px]"
            >
              {address}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default LocationsBlock;
