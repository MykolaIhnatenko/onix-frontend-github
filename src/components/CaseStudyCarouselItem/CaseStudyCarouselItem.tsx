import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

import ImageComponent from '../Image/Image';
import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import RightItem from './components/RightItem';
import ContentText from 'components/ContentText/ContentText';
import ICaseStudyCarouselItem from './interfaces/ICaseStudyCarouselItem';
import EyeButton from './components/EyeButton';

function CaseStudyCarouselItem({
  id,
  img,
  qualityImg = 96,
  title,
  text,
  url,
  icon,
  logoSizes,
  data,
  subTitle,
  description,
  eyeBlackStyle,
  eyeBlackStyleMobile,
  cucumberVariant = false,
  headerVariant = false,
}: ICaseStudyCarouselItem) {
  const [active, setActive] = useState<boolean>(false);
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const getBackground = () => {
    if (isMDDevice) {
      return img.md;
    }

    if (isSMDevice || isXSDevice) {
      return img.sm;
    }

    return img.lg;
  };

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

  const eyeBtnClickHandler = () => setActive(!active);

  return (
    <div className={`group relative h-[680px] w-[1160px] mr-[40px] 
      screen-lg:h-[768px] screen-lg:w-[580px] screen-lg:mr-[30px] 
      screen-md:h-[560px] screen-md:w-[300px] screen-md:mr-[15px]`}
    >
      <div
        className={`flex relative h-[680px] w-[1160px] 
        screen-lg:h-[768px] screen-lg:w-[580px] screen-lg:transition-transform screen-lg:[transform-style:preserve-3d] 
        screen-lg:duration-[1000ms] screen-md:h-[560px] screen-md:w-[300px]
        ${active ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <Link
          id={id}
          href={url}
          className={`w-full screen-lg:absolute screen-lg:w-full screen-lg:h-full
            screen-lg:[backface-visibility:hidden]`}
        >
          <div className="pointer-events-none relative h-full overflow-hidden">
            <ImageComponent
              className="transition-all duration-[400ms] min-lg:group-hover:scale-[1.1]
              ease-linear pointer-events-none h-full w-full object-cover"
              src={getBackground()}
              sizes="100vw"
              quality={qualityImg}
            />
            <div
              className={`pointer-events-none absolute top-0 left-0 w-full p-[60px] 
              screen-lg:p-[40px] screen-md:p-[20px]`}
            >
              <div className="pointer-events-none pb-[15px] flex items-center">
                <ImageComponent
                  src={icon}
                  width={getLogoSize().logoWidth}
                  height={getLogoSize().logoHeight}
                />
              </div>
              <div
                className={`pointer-events-none flex flex-wrap gap-[10px]
                ${headerVariant ? 'max-w-[320px] screen-lg:max-w-[none]' : ''}`}
              >
                {data && (
                  data.map((item) => (
                    <p
                      key={item}
                      className={`pointer-events-none text-white font-ibmPlexMono
                        text-[18px] leading-[26px] p-[10px_20px] rounded-[23px] bg-[rgba(255,255,255,0.24)] 
                        screen-md:text-[14px] screen-md:leading-[20px] screen-md:p-[7px_15px]
                        ${cucumberVariant ? '!bg-[rgba(0,0,0,0.3)]' : ''}`}
                    >
                      {item}
                    </p>
                  ))
                )}
              </div>
              <ContentText
                tag="p"
                className={`pointer-events-none text-white text-[18px] leading-[26px]
                  mt-[40px] screen-lg:hidden`}
              >
                {description}
              </ContentText>
            </div>
          </div>
        </Link>
        <RightItem
          title={title}
          text={text || ''}
          url={url}
          subTitle={subTitle}
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
