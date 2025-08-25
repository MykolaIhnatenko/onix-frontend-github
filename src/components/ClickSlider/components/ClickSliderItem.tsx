import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import ImageComponent from '../../Image/Image';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import { IClickSliderData } from '../interfaces/IClickSlider';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';

function ClickSliderItem({
  img, number, text, title, imgTablet, setActiveSlide, id, activeShadow, classes,
}: IClickSliderData) {
  const {
    isMDDevice, isSMDevice, isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView && setActiveSlide) {
      setActiveSlide(id);
    }
  }, [inView, setActiveSlide, id]);

  return (
    <div
      ref={ref}
      className={`relative h-[100vh] max-h-[764px] min-w-[100vw]
        screen-lg:max-h-[407px] ${classes?.container || ''}`}
    >
      <div className="absolute w-full h-full">
        {activeShadow
          && <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]" />}
        <ImageComponent
          alt="Image"
          src={isMobile ? imgTablet : img}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`h-full relative flex flex-col justify-between text-white p-[80px_0_70px_70px]
          min-xxxl:p-[80px_0_70px_80px] screen-lg:p-[30px_0_30px_30px] screen-md:p-[30px_15px]
          ${classes?.content || ''}`}
      >
        <MainTitleWithoutSize
          className={`text-[50px]/[64px] screen-lg:text-[40px]/[56px] screen-md:text-[20px]/[28px]
            ${classes?.title || ''}`}
        >
          {title}
        </MainTitleWithoutSize>
        <div className={`flex ${classes?.textContainer || ''}`}>
          <MainTitleWithoutSize
            tag="span"
            className={`mr-[30px] text-[36px] leading-[46px]
              screen-lg:text-[24px] screen-lg:leading-[34px]
              screen-md:mr-[15px] screen-md:text-[18px] screen-md:leading-[26px]
              `}
          >
            {number}
          </MainTitleWithoutSize>
          <MainTitleWithoutSize
            tag="h3"
            className={`text-[36px] leading-[46px] screen-lg:text-[24px]
            screen-lg:leading-[34px] screen-md:text-[18px] screen-md:leading-[26px]`}
          >
            {text}
          </MainTitleWithoutSize>
        </div>
      </div>
    </div>
  );
}

export default ClickSliderItem;
