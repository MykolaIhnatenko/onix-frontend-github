import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import IIndustryBanner from './interfaces/IndustryBanner';
import ImageComponent from '../Image/Image';
import GetInTouchButton from '../GetInTouchButton/GetInTouchButton';
import { setShowContactForm } from '../../store/app/contactForm/slice';

function IndustryBanner({
  isBannerHidden, desc, imageBanner, title, colorActive, classesVariant,
}: IIndustryBanner) {
  const dispatch = useDispatch();
  const [showArrow, setShowArrow] = useState(<> </>);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(
        <GetInTouchButton
          onClickBtn={() => dispatch(setShowContactForm({ showContactForm: true }))}
          isContactModalBtn
        />,
      );
    }, 3000);
  }, [dispatch]);

  return (
    <div className={`w-full bg-white ${classesVariant?.bannerBlock || ''}`}>
      {!isBannerHidden && (
        <h1
          className={`fixed top-[194px] mb-[80px] px-[70px] max-w-full text-white z-[1]
          text-[84px] font-medium leading-[113.4px] font-generalSans
          screen-lg:text-[45px] screen-lg:leading-[60.75px] screen-lg:mb-[60px]
          screen-lg:px-[30px] screen-lg:pt-[174px] screen-lg:top-0
          screen-md:text-[30px] screen-md:leading-[40.5px] screen-md:mb-[40px] screen-md:px-[15px] screen-md:pt-[149px] 
          min-xxxl:px-[80px] ${colorActive ? 'mix-blend-difference' : ''} 
          ${classesVariant?.titleBanner || ''}`}
        >
          {title}
          <br />
          {desc}
        </h1>
      )}
      <div
        className={`
          pt-[501px] max-1032:pt-[614px] screen-lg:pt-[355px] screen-md:pt-[270px] ${classesVariant?.emptyBlock || ''}
        `}
      />
      <div
        className={`
          relative w-full h-[829px] screen-lg:h-[432px] screen-md:h-[291px] ${classesVariant?.imageBanner || ''}
        `}
      >
        <ImageComponent
          className="object-cover"
          src={imageBanner}
          priority
          alt="imageBanner"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          fill
        />
        <div
          className={`absolute right-[30px] bottom-[30px] w-[225px] h-[225px] overflow-hidden rounded-full
          screen-lg:w-[140px] screen-lg:h-[140px] screen-md:w-[90px] screen-md:h-[90px]
          ${classesVariant?.buttonBlock || ''}`}
        >
          {showArrow}
        </div>
      </div>
    </div>
  );
}

export default IndustryBanner;
