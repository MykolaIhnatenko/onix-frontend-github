import { StaticImageData } from 'next/image';

import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import { ButtonType } from 'constants/enums';
import { useAppSelector } from 'hook/reduxToolkit';
import ThreeStepsBlockAnimation from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsBlockAnimation';
import ThreeStepsBlockTextBlock from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsBlockTextBlock';
import threeStepsData from 'pages/MainPage/data/threeStepsData';
import ButtonTypes from 'constants/ButtonTypes';
import ImageBg from '../../../../assets/images/mainPage/img_ctaFirstBg@2x.webp';
import ImageTabletBg from '../../../../assets/images/mainPage/img_ctaFirstBgTablet@2x.webp';
import ImageMobileBg from '../../../../assets/images/mainPage/img_ctaFirstBgMobile@2x.webp';
import VRARCallToActionComponent from 'components/VRARCallToActionBlock/VRARCallToActionComponent';

function ThreeStepsBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      cta: ImageBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.cta = ImageTabletBg;
    } else if (isXSDevice) {
      bg.cta = ImageMobileBg;
    }
    return bg;
  };

  const isAccordion = screenWidth <= 1439;

  return (
    <div className="bg-white">
      <ThreeStepsBlockTextBlock />
      {isAccordion ? (
        <AccordionWhite
          data={threeStepsData}
          activeFirst
          multiOpen
          classes={{
            accordionItemTitle: '!px-[70px] screen-lg:!px-[30px] screen-md:!px-[15px] '
            + '!text-[28px]/[1.3] screen-md:!text-[20px]/[1.4] !font-jakartaSans',
            accordionNumber: '!text-[28px]/[1.3] screen-md:!text-[20px]/[1.4] !font-jakartaSans '
            + '!mr-[20px] screen-md:!mr-[15px] screen-md:w-[30px] tracking-[-0.28px] screen-md:tracking-[-0.2px]',
            accordionTitle: '!text-[28px]/[1.3] screen-md:!text-[20px]/[1.4] !font-jakartaSans '
            + 'tracking-[-0.28px] screen-md:tracking-[-0.2px]',
          }}
        />
      ) : (
        <ThreeStepsBlockAnimation />
      )}
      <VRARCallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().cta}
        withButton
        classes={{
          cta: '!bg-white !py-[100px] screen-lg:!py-[80px] screen-md:!py-[60px]',
          background: 'after:content-[""] after:absolute after:top-0 after:left-0 '
          + 'after:w-full after:h-[80px] after:bg-gradient-to-t from-transparent to-white',
          title: '!text-black !font-jakartaSans !text-[38px]/[1.2] screen-lg:!text-[34px]/[1.2] '
          + 'screen-md:!text-[24px]/[1.3] !max-w-[950px] '
          + 'tracking-[-0.38px] screen-lg:tracking-[-0.34px] screen-md:tracking-[-0.24px]',
        }}
        title={(
          <>
            Get your project back on track with custom software development solutions designed for performance
            {' '}
            <span className="inline-block">and stability.</span>
          </>
        )}
        buttonType={ButtonTypes.PRIMARY}
        btnText="Book a free rescue audit"
        isJakarta
      />
    </div>
  );
}

export default ThreeStepsBlock;
