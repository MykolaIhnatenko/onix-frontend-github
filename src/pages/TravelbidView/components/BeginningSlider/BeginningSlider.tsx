import { useEffect, useState } from 'react';

import { LG_DEVICE, MD_DEVICE } from '../../../../constants/constants';
import MobileSlider from './MobileSlider';
import DesktopSlider from './DesktopSlider';
import { useAppSelector } from 'hook/reduxToolkit';

function BeginningSlider() {
  const { windowWidth } = useAppSelector((state) => state.app);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayType, setDisplayType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    if (windowWidth <= LG_DEVICE && windowWidth >= MD_DEVICE) {
      setDisplayType('tablet');
    } else if (windowWidth < MD_DEVICE) {
      setDisplayType('mobile');
    } else {
      setDisplayType('desktop');
    }
  }, [windowWidth]);

  return (
    displayType === 'desktop'
      ? (
        <DesktopSlider
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      )
      : (
        <MobileSlider
          displayType={displayType}
        />
      )
  );
}

export default BeginningSlider;
