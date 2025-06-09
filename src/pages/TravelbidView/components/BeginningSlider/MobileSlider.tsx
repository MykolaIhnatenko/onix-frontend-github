import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

import FirstSlideImage from './FirstSlideImage';
import SecondSlideImage from './SecondSlideImage';
import ThirdSlideImage from './ThirdSlideImage';
import sliderContent from '../../data/sliderContent.json';
import SlideDescription from './SlideDescription';

import styles from '../../sass/BeginningSlider/Slider.module.scss';

function MobileSlider({ displayType }: { displayType: string }) {
  const [sliderItems, setSliderItems] = useState(sliderContent);

  let heightSum = 0;
  const transitions = useTransition(sliderItems.map((item, index) => {
    let itemHeight = index === 0 ? item.activeHeight : item.height;
    if (displayType === 'mobile') {
      itemHeight = index === 0 ? item.activeMobileHeight : item.mobileHeight;
    }
    heightSum += itemHeight;
    const y = heightSum - itemHeight;
    return { ...item, y };
  }), {
    keys: (item) => item.id,
    from: { height: 0, opacity: 0 },
    leave: { height: 0, opacity: 0 },
    enter: ({
      y, height, mobileHeight, activeHeight, activeMobileHeight,
    }) => {
      let itemHeight = y === 0 ? activeHeight : height;
      if (displayType === 'mobile') {
        itemHeight = y === 0 ? activeMobileHeight : mobileHeight;
      }
      return { y, opacity: 1, height: itemHeight };
    },
    update: ({
      y, height, activeHeight, activeMobileHeight, mobileHeight,
    }) => {
      let itemHeight = y === 0 ? activeHeight : height;
      if (displayType === 'mobile') {
        itemHeight = y === 0 ? activeMobileHeight : mobileHeight;
      }
      return { y, height: itemHeight };
    },
    delay: 200,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      const newSliderItems = [...sliderItems];
      const lastSlide = newSliderItems[2];
      const slides = newSliderItems.slice(0, 2);
      newSliderItems[0] = lastSlide;
      setSliderItems([lastSlide, ...slides]);
    }, 60000);

    return () => clearInterval(id);
  }, [sliderItems]);

  const scrollToSliderTopBorder = (event: MouseEvent) => {
    event.preventDefault();
    const offset = document?.getElementById('beginningSlider')?.offsetTop;
    window.scrollTo({
      top: offset || 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleSelectSlide = (slideNumber: number, event: MouseEvent) => {
    scrollToSliderTopBorder(event);
    const newSliderItems = [...sliderItems];
    [newSliderItems[0], newSliderItems[slideNumber]] = [newSliderItems[slideNumber], newSliderItems[0]];
    setSliderItems(newSliderItems);
  };

  return (
    <div className={styles.mobileSlider} style={{ height: heightSum + (displayType === 'mobile' ? 32 : 56) }}>
      {transitions((style, item, state, index) => (
        <animated.div
          style={{
            zIndex: sliderItems.length - index,
            ...style,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <SlideDescription
            type={item.type}
            header={item.header}
            content={item.content}
            selectSlide={(event) => handleSelectSlide(index, event)}
            isActive={sliderItems[0].id === item.id}
          />
          {(sliderItems[0].id === 0 && item.id === 0)
          && <FirstSlideImage currentSlide={sliderItems[0].id} displayType={displayType} />}
          {(sliderItems[0].id === 1 && item.id === 1)
          && <SecondSlideImage currentSlide={sliderItems[0].id} displayType={displayType} />}
          {(sliderItems[0].id === 2 && item.id === 2)
          && <ThirdSlideImage currentSlide={sliderItems[0].id} displayType={displayType} />}
        </animated.div>
      ))}
    </div>
  );
}

export default MobileSlider;
