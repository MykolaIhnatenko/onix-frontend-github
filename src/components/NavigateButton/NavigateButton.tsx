import { useEffect, useState } from 'react';

import useScrollDirection from '../../hook/useScrollDirection';
import Icon from '../../assets/icon/index';
import INavigateButton from './interfaces/INavigateButton';

function NavigateButton({ smoothScroll = false }: INavigateButton) {
  const [display, setDisplay] = useState(false);
  const [buttonUp, setButtonUp] = useState(false);
  const { isScrollingUp, isScrollingDown, isScrolling } = useScrollDirection();

  const PAGE_BOTTOM = 200;
  const PAGE_TOP = 200;

  const scrollToPosition = (top: number) => window.scrollTo({
    top,
    behavior: smoothScroll ? 'smooth' : undefined,
  });

  const handleClick = () => {
    scrollToPosition(buttonUp ? 0 : document.body.scrollHeight);
  };

  useEffect(() => {
    const atTop = (gap: number) => window.scrollY > gap;
    const atBottom = (gap: number) => window.innerHeight + window.scrollY + gap > document.body.offsetHeight;

    if (atBottom(PAGE_BOTTOM) && !buttonUp) {
      setButtonUp(true);
    } else if (isScrollingDown && !atBottom(250)) {
      setButtonUp(false);
    } else if (isScrollingUp && atTop(250)) {
      setButtonUp(true);
    }

    setDisplay(atTop(PAGE_TOP));
  }, [isScrolling]);

  return (
    <div
      className={`fixed z-[99] right-0 ${
        display ? 'block' : 'hidden'
      } top-[48%]  mr-5 screen-md:top-[400px]`}
    >
      <div
        onClick={handleClick}
        role="presentation"
        aria-label="navigate"
        className={`w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center ${
          buttonUp ? 'rotate-0' : 'rotate-180'
        } hover:bg-[rgba(137,143,154,0.37)] screen-lg::cursor-default
         cursor-pointer focus:outline-none focus:border-none`}
      >
        <Icon.NavigateArrow width={48} height={48} />
      </div>
    </div>
  );
}

export default NavigateButton;
