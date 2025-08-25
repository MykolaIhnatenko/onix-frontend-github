import { StaticImageData } from 'next/image';

import ImageComponent from 'components/Image/Image';
import PageContainer from 'components/PageContainer/PageContainer';
import { useAppSelector } from 'hook/reduxToolkit';
import Bg from '../../../../assets/images/mainPage/whatWeDo/bg@2x.webp';
import BgTablet from '../../../../assets/images/mainPage/whatWeDo/bgTablet@2x.webp';
import BgMobile from '../../../../assets/images/mainPage/whatWeDo/bgMobile@2x.webp';
import JakartaTitle from 'components/JakartaTitle/JakartaTitle';
import VRARContent from 'components/VRARContent/VRARContent';
import LeftCard from 'pages/MainPage/components/WhatWeDo/LeftCard';
import RightCard from 'pages/MainPage/components/WhatWeDo/RightCard';
import JakartaText from 'components/JakartaText/JakartaText';
import AIAugmentedData from 'pages/MainPage/data/AIAugmentedData';
import Icon from '../../../../assets/icon';

function WhatWeDo() {
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: Bg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = BgTablet;
    } else if (isXSDevice) {
      bg.background = BgMobile;
    }
    return bg;
  };
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[auto]
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-[140px]
          after:bg-gradient-to-b after:from-[rgba(256,256,256,0)_0%] after:to-white"
      >
        <ImageComponent
          src={getBackground().background}
          className="object-cover object-center w-full h-full"
          alt="What we do background"
        />
      </div>
      <div className="relative pt-[100px] screen-lg:pt-[80px] screen-md:pt-[60px]">
        <PageContainer>
          <JakartaTitle
            className="pb-[60px] screen-lg:pb-[40px] screen-md:pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]"
          >
            From stalled to scalable
            {' '}
            <span className="inline-block">– get</span>
            {' '}
            your project back
            {' '}
            <span className="inline-block">on track</span>
          </JakartaTitle>
        </PageContainer>
        <PageContainer
          className="relative flex justify-between mb-[60px] screen-lg:mb-[40px] screen-lg:flex-col
          screen-md:p-0 screen-md:mb-[30px]"
        >
          <VRARContent
            translate="translateX"
            duration={0.5}
            offset={-40}
            className="w-full max-w-[calc(50%_+_130px)]
            bg-white border-[2px] border-black border-solid p-[80px_30px_43px]
            screen-lg:max-w-full screen-lg:p-[30px_40px_105px]
            screen-md:p-[30px_15px_90px] screen-md:border-l-0 screen-md:border-r-0"
            withoutAnimateMobile
          >
            <LeftCard />
          </VRARContent>
          <div
            className="absolute right-[70px] top-1/2 translate-y-[-50%] w-full max-w-[calc(50%_-_40px)] flex-1
            screen-lg:relative screen-lg:max-w-[calc(100%_-_80px)] screen-lg:mx-[auto] screen-lg:top-[unset]
            screen-lg:translate-y-0 screen-lg:right-0 screen-lg:mt-[-75px] screen-md:mt-[-65px]
            screen-md:max-w-[calc(100%_-_30px)] screen-md:mx-[15px]"
          >
            <VRARContent
              translate="translateX"
              rootMarginBottom={-35}
              duration={0.5}
              offset={40}
              className="bg-[#B6EDEE] p-[40px_30px] screen-lg:p-[30px_40px] screen-md:p-[30px_15px]"
              withoutAnimateMobile
            >
              <RightCard />
            </VRARContent>
          </div>
        </PageContainer>
        <PageContainer>
          <VRARContent>
            <JakartaText
              className="text-[24px]/[1.3] pb-[40px]
              screen-lg:text-[20px]/[1.4] screen-lg:pb-[30px]
              screen-md:text-[18px]/[1.4] screen-md:pb-[20px]
              tracking-[-0.24px] screen-lg:tracking-[-0.2px] screen-md:tracking-[-0.18px]"
            >
              With our AI-augmented recovery process model, you get:
            </JakartaText>
          </VRARContent>
          <div className="flex gap-[40px] screen-lg:gap-[30px] screen-md:flex-wrap screen-md:gap-[20px]">
            {AIAugmentedData.map((item, index) => (
              <VRARContent
                key={['AI Augmented', index].join('_')}
                className="w-full max-w-[calc(25%_-_20px)] screen-md:max-w-[calc(50%_-_10px)]"
              >
                <div className="pb-[20px] screen-md:pb-[15px]">
                  <Icon.IconCheckMark
                    className="w-[48px] h-[48px] screen-lg:w-[40px] screen-lg:h-[40px]
                    screen-md:w-[34px] screen-md:h-[34px]"
                  />
                </div>
                <JakartaText
                  className="text-[18px]/[1.4] screen-lg:text-[16px]/[1.5]
                  tracking-[-0.18px] screen-lg:tracking-[-0.16px]"
                >
                  {item}
                </JakartaText>
              </VRARContent>
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  );
}

export default WhatWeDo;
