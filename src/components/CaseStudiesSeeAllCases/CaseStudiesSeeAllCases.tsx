import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ContentText from '../ContentText/ContentText';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import { firstColun, secondColun } from './data/CaseStudiesSeeAllCasesData';
import PageLinks from '../../constants/PageLinks';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import IPageStatus from 'interfaces/IPageStatus';
import LinkButtonPrimary from 'components/UI/LinkButtonPrimary/LinkButtonPrimary';

import ImageBg from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBg@2x.webp';
import ImageBgTablet from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBgTablet@2x.webp';
import ImageBgMobile from '@/images/caseStudies/seAllCases/img_caseStudiesSeeAllCasesBgMobile@2x.webp';

function CaseStudiesSeeAllCases({ saleUrl }: IPageStatus) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBg,
    };
    if (isMDDevice) {
      bg.background = ImageBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ImageBgMobile;
    }
    return bg;
  };

  const imageColumStyles = `flex flex-col gap-[15px] relative screen-lg:flex-row screen-md:gap-[8px]
            [&:first-of-type]:top-[-103px] screen-lg:[&:first-of-type]:top-0
            screen-lg:[&:first-of-type]:left-[-210px] screen-md:[&:first-of-type]:left-[-135px]
            [&:nth-of-type(2)]:top-[-10px] screen-lg:[&:nth-of-type(2)]:top-0
            screen-lg:[&:nth-of-type(2)]:left-[-50px] screen-md:[&:nth-of-type(2)]:left-[-40px]`;
  const imageStyles = 'min-w-[320px] min-h-[187px] max-w-full screen-md:min-w-[180px] screen-md:min-h-[105px]';

  return (
    <div
      className="relative w-[1162px] h-[680px] overflow-hidden mr-[40px] screen-lg:w-[580px]
      screen-lg:h-[768px] screen-lg:mr-[30px] screen-md:w-[300px] screen-md:h-[560px] screen-md:mr-[15px]"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <ImageComponent
          src={getBackground().background}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full relative flex gap-[70px] screen-lg:flex-col screen-lg:gap-[80px] screen-md:gap-[0px]">
        <div
          className="flex flex-col my-auto pl-[60px] w-[480px] text-black screen-lg:pl-0
          screen-lg:w-full screen-lg:h-auto screen-lg:pt-[80px] screen-lg:m-0 screen-md:h-auto
          screen-md:p-[40px_15px] screen-md:my-auto"
        >
          <MainTitle
            tag="h3"
            className="pb-[40px] screen-lg:pb-[30px] screen-lg:ml-[30px] screen-md:pb-[20px] screen-md:ml-0"
          >
            Explore our works
          </MainTitle>
          <ContentText
            tag="p"
            className="!m-0 pb-[40px] max-w-[410px] !text-[20px] !leading-[28px] screen-lg:pb-[40px]
              screen-lg:max-w-[514px] screen-lg:!ml-[30px] screen-md:!text-[16px] screen-md:!leading-[24px]
              screen-md:pb-[30px] screen-md:!ml-0"
          >
            Click here to immerse yourself in a world of exceptional web design. Our portfolio
            awaits, showcasing our finest works.
          </ContentText>
          <LinkButtonPrimary
            text="View case studies"
            path={saleUrl ? '/' : PageLinks.CASE_STUDIES}
            styleContainer="max-w-[420px] m-0 screen-lg:max-w-[520px] screen-lg:ml-[30px]
            screen-md:max-w-[270px] screen-md:ml-0"
          />
        </div>
        <div className="flex gap-[15px] w-1/2 screen-lg:flex-col screen-lg:w-full screen-md:gap-[8px]">
          <div
            className={imageColumStyles}
          >
            {firstColun && firstColun.map((item, index) => (
              <div
                key={[item, index].join('_')}
              >
                <ImageComponent
                  src={item}
                  alt="image"
                  sizes="100vw"
                  quality={80}
                  className={imageStyles}
                />
              </div>
            ))}
          </div>
          <div
            className={imageColumStyles}
          >
            {secondColun && secondColun.map((item, index) => (
              <div
                key={[item, index].join('_')}
              >
                <ImageComponent
                  src={item}
                  alt="image"
                  sizes="100vw"
                  quality={80}
                  className={imageStyles}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesSeeAllCases;
