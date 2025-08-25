import Image from 'next/image';

import IGetInTouchButton from './interfaces/IGetInTouchButton';
import Icons from '../../assets/icon';

import CircleText from '@/images/img_CircleText.webp';

function GetInTouchButton({ onClickBtn, isContactModalBtn }: IGetInTouchButton) {
  return (
    <button
      onClick={onClickBtn}
      className={`w-[225px] h-[225px] bg-transparent border-none rounded-full
                flex justify-center items-center cursor-pointer rotate-[-45deg] relative
                screen-lg:w-[140px] screen-lg:h-[140px] screen-lg:cursor-default
                screen-md:w-[90px] screen-md:h-[90px] ${isContactModalBtn ? 'btnContactModal' : ''}`}
      type="button"
    >
      <Icons.IconArrowWhite1
        className="h-[60px] w-[60px] rotate-45 mx-auto relative
            screen-lg:h-[37px] screen-lg:w-[37px]
            screen-md:h-[24px] screen-md:w-[24px]"
      />
      <span
        className="absolute w-[225px] h-[225px] rounded-full
            screen-lg:w-[140px] screen-lg:h-[140px]
            screen-md:w-[90px] screen-md:h-[90px] animate-rotate"
      >
        <Image
          src={CircleText}
          alt="CircleText"
          priority
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'fill',
          }}
        />
      </span>
    </button>
  );
}

export default GetInTouchButton;
