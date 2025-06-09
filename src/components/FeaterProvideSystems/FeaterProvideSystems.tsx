import IFeaterProvideSystems from './interfaces/IFeaterProvideSystems';
import DoubleAccordion from 'components/DoubleAccordion/DoubleAccordion';

function FeaterProvideSystems({ list, title, isMobileOrTablet }: IFeaterProvideSystems) {
  return (
    <div className="w-full bg-white p-[60px_0] screen-lg:p-[80px_0_0] screen-md:pt-[40px]">
      <h2 className="block font-medium font-generalSans text-[50px] leading-[64px] px-[70px] mb-[40px]
            min-xxxl:px-[80px]
            screen-lg:w-full screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:px-[30px]
            screen-md:text-[25px] screen-md:leading-[35px] screen-md:px-[15px] screen-md:mb-[30px]"
      >
        {title}
      </h2>
      <DoubleAccordion
        data={list}
        activeFirst={isMobileOrTablet}
        isMobileOrTablet={isMobileOrTablet}
      />
    </div>
  );
}

export default FeaterProvideSystems;
