import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../Image/Image';
import { firstColun, secondColun } from './data/CaseStudiesSeeAllCasesData';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import LinkButtonPrimary from 'components/UI/LinkButtonPrimary/LinkButtonPrimary';
import PageLinks from '../../constants/PageLinks';
import JakartaText from '../JakartaText/JakartaText';
import JakartaTitle from '../JakartaTitle/JakartaTitle';

import ImageBg from '@/images/caseStudies/seAllCases/img_SeeAllSmallCasesBg.webp';
import ImageBgMobile from '@/images/caseStudies/seAllCases/img_SeeAllSmallCasesMobileBg.webp';

function CaseStudiesSeeAllCasesSmall() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBg,
    };
    if (isXSDevice || isSMDevice) {
      bg.background = ImageBgMobile;
    }
    return bg;
  };

  const imageColumStyles = `flex gap-[10px] relative flex-row screen-md:gap-[8px]
            [&:first-of-type]:top-0
            [&:first-of-type]:left-[-155px] screen-lg:[&:first-of-type]:left-[-210px]
            screen-md:[&:first-of-type]:left-[-135px]
            [&:nth-of-type(2)]:top-0
            [&:nth-of-type(2)]:left-[-40px] screen-lg:[&:nth-of-type(2)]:left-[-50px]
            screen-md:[&:nth-of-type(2)]:left-[-40px]`;
  const imageStyles = `min-w-[230px] min-h-[135px] max-w-full screen-md:min-w-[180px] screen-md:min-h-[105px]
    screen-lg:min-w-[320px] screen-lg:min-h-[187px]`;

  return (
    <div
      className="relative overflow-hidden h-[650px] w-[490px] bg-color-white screen-lg:w-[580px] screen-lg:h-[768px]
       mr-[30px] screen-md:w-[300px] screen-md:h-[560px] screen-md:mr-[15px]"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <ImageComponent
          src={getBackground().background}
          alt="background"
          className="w-full h-[396px] object-cover screen-md:h-[338px]"
        />
      </div>
      <div className="h-full relative flex flex-col gap-[60px] screen-md:gap-[0px]">
        <div
          className="flex flex-col my-auto text-black pl-0
          w-full h-auto pt-[60px] m-0 screen-md:h-auto
          screen-md:p-[40px_15px] screen-md:my-auto"
        >
          <JakartaTitle
            tag="h3"
            className="pb-[30px] ml-[30px] screen-lg:!text-[50px]
             screen-md:!text-[28px] screen-md:pb-[20px] screen-md:ml-0"
          >
            Explore our works
          </JakartaTitle>
          <JakartaText
            tag="p"
            className="font-jakartaSans font-medium text-[18px]/[1.4] pb-[40px]
              mx-[30px] screen-md:!text-[16px] screen-md:!leading-[24px]
              screen-md:pb-[30px] screen-md:!ml-0"
          >
            Explore how we’ve solved challenges similar to&nbsp;yours.
          </JakartaText>
          <LinkButtonPrimary
            text="View case studies"
            styleContainer="mx-[30px] max-w-[430px] screen-lg:max-w-[520px]
            screen-md:max-w-[270px] screen-md:ml-0"
            classes={{
              textContainer: '!font-jakartaSans !font-medium normal-case !text-[18px]/[1.4]',
            }}
            path={PageLinks.CASE_STUDIES}
          />
        </div>
        <div className="flex gap-[10px] flex-col w-full screen-md:gap-[8px]">
          <div className={imageColumStyles}>
            {firstColun && firstColun.map((item, index) => (
              <div key={[item, index].join('_')}>
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
          <div className={imageColumStyles}>
            {secondColun && secondColun.map((item, index) => (
              <div key={[item, index].join('_')}>
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

export default CaseStudiesSeeAllCasesSmall;
