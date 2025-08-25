import { Swiper, SwiperSlide } from 'swiper/react';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';

import IBlogPreviewsCarousel from '../interfaces/IBlogPreviewsCarousel';
import BlogPreview from './BlogPreview';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import 'swiper/css';

import styles from '../sass/blogPreviewsCarousel.module.scss';

function BlogPreviewCarousel({
  blogs, variant, generalSubcategory, categoryUrl,
}: IBlogPreviewsCarousel) {
  const {
    screenSizes: {
      isXSDevice, isSMDevice, isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;

  const [spaceBetween, setSpaceBetween] = useState<number>(0);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  const getEnabled = useCallback(() => {
    const slideWidth = ref?.current?.clientWidth;
    if (blogs && blogs.length > 0 && slideWidth) {
      const DISABLED_SCREEN_WIDTH = blogs.length * slideWidth - spaceBetween;
      const { clientWidth } = document.documentElement;
      setIsEnabled(clientWidth < DISABLED_SCREEN_WIDTH);
    }
  }, [blogs, spaceBetween]);

  const getSpaceBetween = useCallback(() => {
    if (isXSDevice || isSMDevice) {
      setSpaceBetween(15);
    } else if (isMDDevice) {
      setSpaceBetween(20);
    } else {
      setSpaceBetween(43);
    }
  }, [isXSDevice, isSMDevice, isMDDevice]);

  useEffect(() => {
    const resizeHandler = () => {
      getEnabled();
      getSpaceBetween();
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [getSpaceBetween, getEnabled]);

  return (
    <div
      className={`${styles.blogPreviews} ${variant ? styles[variant] : ''}`}
    >
      <div className={styles.carousel}>
        {isMobile && variant === BlogPreviewsCarouselVariant.SINGLE_BLOG ? (
          <div className={styles.innerCarousel}>
            {blogs?.map((item) => (
              <BlogPreview
                key={item.id}
                item={item}
                variant={variant}
                priority={false}
                generalSubcategory={generalSubcategory}
                categoryUrl={categoryUrl}
              />
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView={variant === BlogPreviewsCarouselVariant.SINGLE_BLOG ? 2.17 : 1.05}
            spaceBetween={spaceBetween}
            className={styles.innerCarousel}
            allowSlideNext={isEnabled}
            allowSlidePrev={isEnabled}
            allowTouchMove={isEnabled}
            breakpoints={{
              768: { slidesPerView: variant === BlogPreviewsCarouselVariant.SINGLE_BLOG ? 2.17 : 1.4 },
              1200: { slidesPerView: variant === BlogPreviewsCarouselVariant.SINGLE_BLOG ? 3.15 : 2.1 },
              1920: { slidesPerView: variant === BlogPreviewsCarouselVariant.SINGLE_BLOG ? 4 : 3 },
            }}
          >
            {blogs?.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className={`${styles.slideContainer} ${variant ? styles[variant] : ''}`}
              >
                <BlogPreview
                  ref={ref}
                  item={item}
                  variant={variant}
                  priority={variant === BlogPreviewsCarouselVariant.BIG_PREVIEWS && index < 2}
                  generalSubcategory={generalSubcategory}
                  categoryUrl={categoryUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default BlogPreviewCarousel;
