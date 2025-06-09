import { useSwiper } from 'swiper/react';

import Icons from '../../../assets/icon';
import { IArrowButton } from '../interfaces/IArrowButton';

import 'swiper/css';

function ArrowButton({ isDesktop, className, isNext = false }: IArrowButton) {
  const swiper = useSwiper();

  return (
    <div
      className={className || ''}
      onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
      onKeyDown={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
      role="button"
      tabIndex={0}
      aria-label="button"
    >
      {isNext ? (
        <Icons.IconBracketologyRightArrow
          width={isDesktop ? 72 : 48}
          height={isDesktop ? 72 : 48}
        />
      ) : (
        <Icons.IconBracketologyLeftArrow
          width={isDesktop ? 72 : 48}
          height={isDesktop ? 72 : 48}
        />
      )}
    </div>
  );
}
export default ArrowButton;
