import { useEffect, useState } from 'react';

type ScrollDirection = 'UP' | 'DOWN' | null;

const getScrollTop = () => (
  window.scrollY
  || document.body.scrollTop
  || (document.documentElement && document.documentElement.scrollTop)
  || 0
);

const isBrowser = () => typeof window === 'object';

interface ScrollDirectionHookResult {
  isScrolling: boolean;
  isScrollingUp: boolean;
  isScrollingDown: boolean;
}

const useScrollDirection = (): ScrollDirectionHookResult => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  const isScrollingUp = scrollDirection === 'UP';
  const isScrollingDown = scrollDirection === 'DOWN';
  const isScrolling = isScrollingUp || isScrollingDown;

  useEffect(() => {
    if (isBrowser()) {
      let scrollTimeout: number;
      let lastScrollTop = getScrollTop();

      const handleScroll = () => {
        // Reset scroll direction when scrolling stops
        window.clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          setScrollDirection(null);
        }, 66);

        // Set vertical direction while scrolling
        const scrollTop = getScrollTop();
        if (scrollTop > lastScrollTop) {
          setScrollDirection('DOWN');
        } else if (scrollTop < lastScrollTop) {
          setScrollDirection('UP');
        }
        lastScrollTop = scrollTop;
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, []);

  return {
    isScrolling,
    isScrollingUp,
    isScrollingDown,
  };
};

export default useScrollDirection;
