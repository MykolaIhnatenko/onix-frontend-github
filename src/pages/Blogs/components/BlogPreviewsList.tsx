import { useSelector } from 'react-redux';

import IBlogPreviewsCarousel from '../interfaces/IBlogPreviewsCarousel';
import BlogPreview from './BlogPreview';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import { BlogPreviewsCarouselVariant } from '../../../constants/enums';
import 'swiper/css';

import styles from '../sass/blogPreviewList.module.scss';

function BlogPreviewsList({
  blogs, variant, mainTitleTag, generalSubcategory = false, categoryUrl,
}: IBlogPreviewsCarousel) {
  const {
    screenSizes: {
      isXSDevice, isSMDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;

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
                mainTitleTag={mainTitleTag}
                generalSubcategory={generalSubcategory}
                categoryUrl={categoryUrl}
              />
            ))}
          </div>
        ) : (
          <div
            className={styles.innerCarousel}
          >
            {blogs?.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.slideContainer} ${variant ? styles[variant] : ''}`}
              >
                <BlogPreview
                  item={item}
                  variant={variant}
                  priority={variant === BlogPreviewsCarouselVariant.BIG_PREVIEWS && index < 2}
                  mainTitleTag={mainTitleTag}
                  generalSubcategory={generalSubcategory}
                  categoryUrl={categoryUrl}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPreviewsList;
