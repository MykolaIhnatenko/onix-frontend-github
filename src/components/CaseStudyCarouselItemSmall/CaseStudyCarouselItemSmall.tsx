import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

import ImageComponent from '../Image/Image';
import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import RightItem from './components/RightItem';
import ICaseStudyCarouselItem from './interfaces/ICaseStudyCarouselItem';
import EyeButton from './components/EyeButton';
import JakartaText from '../JakartaText/JakartaText';

function CaseStudyCarouselItem({
  id,
  img,
  qualityImg = 100,
  title,
  result,
  url,
  icon,
  logoSizes,
  data,
  solution,
  eyeBlackStyle,
  eyeBlackStyleMobile,
  cucumberVariant = false,
  headerVariant = false,
}: ICaseStudyCarouselItem) {
  const [active, setActive] = useState<boolean>(false);
  const {
    isSMDevice,
    isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const getBackground = () => {
    if (isSMDevice || isXSDevice) {
      return img.sm;
    }

    return img.md;
  };

  const eyeBtnClickHandler = () => setActive(!active);

  const getLogoSize = () => {
    const isSmallDevice = isSMDevice || isXSDevice;
    const defaultSize = { logoWidth: isSmallDevice ? 214 : 320, logoHeight: isSmallDevice ? 55 : 60 };

    if (!logoSizes) return defaultSize;

    const selectedSize = isSmallDevice ? logoSizes.sm : logoSizes.lg;

    return {
      logoWidth: selectedSize?.width ?? defaultSize.logoWidth,
      logoHeight: selectedSize?.height ?? defaultSize.logoHeight,
    };
  };

  return (
    <div className={`group relative 
      h-[650px] w-[490px] mr-[40px] screen-lg:mr-[30px] screen-lg:w-[580px] screen-lg:h-[768px] 
      screen-md:h-[560px] screen-md:w-[300px] screen-md:mr-[15px]`}
    >
      <div
        className={`flex relative
        h-[650px] w-[490px] transition-transform [transform-style:preserve-3d] 
        screen-lg:w-[580px] screen-lg:h-[768px] 
        duration-[1000ms] screen-md:h-[560px] screen-md:w-[300px]
        ${active ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <Link
          id={id}
          href={url}
          className="absolute w-full h-full [backface-visibility:hidden]"
        >
          <div className="pointer-events-none relative h-full overflow-hidden">
            <ImageComponent
              alt="case study background"
              className="transition-all duration-[400ms] min-lg:group-hover:scale-[1.1]
              ease-linear pointer-events-none h-full w-full object-cover"
              sizes="100vw"
              src={getBackground()}
              quality={qualityImg}
            />
            <div
              className={`pointer-events-none absolute
               top-0 left-0 w-full p-[30px] screen-lg:p-[40px] screen-md:p-[20px]`}
            >
              <div className="pointer-events-none pb-[15px] flex items-center">
                <ImageComponent
                  src={icon}
                  alt="icon"
                  width={getLogoSize().logoWidth}
                  height={getLogoSize().logoHeight}
                />
              </div>
              <div
                className={`pointer-events-none flex flex-wrap gap-[10px] ${headerVariant ? 'max-w-[none]' : ''}`}
              >
                {data && (
                  data.map((item) => (
                    <JakartaText
                      key={item}
                      className={`pointer-events-none text-white font-medium tracking-[-0.01em]
                        text-[16px]/[1.5] p-[10px_20px] rounded-[23px] bg-[rgba(255,255,255,0.24)] 
                        screen-md:text-[14px] screen-md:leading-[20px] screen-md:p-[7px_15px]
                        ${cucumberVariant ? '!bg-[rgba(0,0,0,0.3)]' : ''}`}
                    >
                      {item}
                    </JakartaText>
                  ))
                )}
              </div>
            </div>
          </div>
        </Link>
        <RightItem
          title={title}
          result={result || ''}
          url={url}
          solution={solution}
        />
      </div>
      <EyeButton
        active={active}
        onClick={eyeBtnClickHandler}
        eyeBlackStyle={eyeBlackStyle}
        eyeBlackStyleMobile={eyeBlackStyleMobile}
      />
    </div>
  );
}

export default CaseStudyCarouselItem;
