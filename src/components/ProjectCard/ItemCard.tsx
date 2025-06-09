import { StaticImageData } from 'next/image';

import Icons from '../../assets/icon';
import ImageComponent from '../Image/Image';
import { cutText } from '../../utils/helpers';
import { IItemCard } from './interfaces/IProjectCard';

function ItemCard({
  image, isTablet, isMobile, header, cutTextLengthTitle, description, cutTextSym,
}: IItemCard) {
  const getSrc = (src: string | StaticImageData) => {
    if (typeof src === 'object') {
      return src;
    }
    return `${process.env.NEXT_PUBLIC_BACKEND || ''}${src}`;
  };

  return (
    <>
      <div className="w-full absolute screen-lg:hidden">
        <div className="w-full h-[calc(33.33vw-96px)] max-h-[380px] relative">
          <ImageComponent
            className="object-cover"
            src={getSrc(image)}
            alt="imageCard"
            quality={100}
            fill
          />
        </div>
      </div>
      <div className={`flex flex-col items-center justify-between w-full h-full
        opacity-0 bg-[#00000099] z-[2] overflow-hidden 
        screen-lg:h-full screen-lg:bg-transparent screen-lg:justify-start screen-lg:opacity-100
        transition-opacity duration-[600ms] ease-in-out
        min-lg:group-hover:opacity-100`}
      >
        <div className={`flex items-center justify-end w-full text-white p-[0_20px] mt-[15px] 
          screen-lg:p-0 screen-lg:mt-0`}
        >
          {!isTablet && !isMobile
          && <Icons.IconWhiteArrow width={24} height={24} />}
          <div className={`hidden relative w-full h-[calc(33.33vw-60px)] max-h-[258px] screen-lg:inline-block
            screen-sm:h-[calc(100vw-90px)] screen-sm:max-h-[600px] screen-sm:min-h-[218px]`}
          >
            <div>
              <ImageComponent
                className="object-cover"
                src={getSrc(image)}
                alt="imageCard"
                quality={100}
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex items-start flex-col w-full">
          <span className="text-[24px] font-semibold leading-[34px] font-generalSans
          text-white w-full mb-[15px] px-[20px] overflow-x-hidden
            screen-lg:text-[16px] screen-lg:leading-[22px] screen-lg:text-black
            screen-lg:p-0 screen-lg:overflow-y-hidden screen-lg:text-ellipsis screen-lg:mt-[15px]"
          >
            {cutText(header, cutTextLengthTitle)}
          </span>
          <span className="text-[18px] font-normal leading-[26px] w-full max-w-full mb-[15px] mt-0 px-[20px]
            overflow-hidden text-clip font-ibmPlexMono text-white screen-lg:text-black
            screen-lg:text-[12px] screen-lg:leading-[16px] screen-lg:p-0 screen-lg:whitespace-normal screen-lg:mb-0
            screen-md:text-[14px] screen-md:leading-[16px]"
          >
            {cutText(description, cutTextSym)}
          </span>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
