import Carousel from 'nuka-carousel';

import FirstSlideImage from './FirstSlideImage';
import SecondSlideImage from './SecondSlideImage';
import ThirdSlideImage from './ThirdSlideImage';
import sliderContent from '../../data/sliderContent.json';
import IDesktopSlider from 'pages/TravelbidView/interfaces/IDesktopSlider';
import SlideDescription from './SlideDescription';

import styles from '../../sass/BeginningSlider/Slider.module.scss';

function DesktopSlider({ setCurrentSlide, currentSlide }: IDesktopSlider) {
  return (
    <div className={styles.desktopSlider}>
      {sliderContent.map(({
        id, type, header, content,
      }, index) => (
        <SlideDescription
          key={id}
          type={type}
          header={header}
          content={content}
          isActive={index === currentSlide}
        />
      ))}
      <div className={styles.carouselWrapper}>
        <Carousel
          className={styles.nukaContainer}
          withoutControls
          autoplay
          wrapAround
          disableAnimation
          adaptiveHeight
          dragging={false}
          autoplayInterval={6000}
          afterSlide={(index) => setCurrentSlide(index)}
        >
          <FirstSlideImage currentSlide={currentSlide} />
          <SecondSlideImage currentSlide={currentSlide} />
          <ThirdSlideImage currentSlide={currentSlide} />
        </Carousel>
      </div>
    </div>
  );
}

export default DesktopSlider;
