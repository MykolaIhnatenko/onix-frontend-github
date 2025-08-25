import ImageComponent from '../../../components/Image/Image';
import ICollageSection from '../interfaces/ICollageSection';

import Image1 from '@/images/faynoMarket/collageThird/img_collage3-1.webp';
import Image2 from '@/images/faynoMarket/collageThird/img_collage3-2.webp';
import Image3 from '@/images/faynoMarket/collageThird/img_collage3-3.webp';
import Image4 from '@/images/faynoMarket/collageThird/img_collage3-4.webp';
import Image5 from '@/images/faynoMarket/collageThird/img_collage3-5.webp';
import Image6 from '@/images/faynoMarket/collageThird/img_collage3-6.webp';
import Image1Tablet from '@/images/faynoMarket/collageThird/img_collage3-1Tablet.webp';
import Image2Tablet from '@/images/faynoMarket/collageThird/img_collage3-2Tablet.webp';
import Image3Tablet from '@/images/faynoMarket/collageThird/img_collage3-3Tablet.webp';
import Image4Tablet from '@/images/faynoMarket/collageThird/img_collage3-4Tablet.webp';
import Image5Tablet from '@/images/faynoMarket/collageThird/img_collage3-5Tablet.webp';
import Image6Tablet from '@/images/faynoMarket/collageThird/img_collage3-6Tablet.webp';
import Image1Mobile from '@/images/faynoMarket/collageThird/img_collage3-1Mobile.webp';
import Image2Mobile from '@/images/faynoMarket/collageThird/img_collage3-2Mobile.webp';
import Image3Mobile from '@/images/faynoMarket/collageThird/img_collage3-3Mobile.webp';
import Image4Mobile from '@/images/faynoMarket/collageThird/img_collage3-4Mobile.webp';
import Image5Mobile from '@/images/faynoMarket/collageThird/img_collage3-5Mobile.webp';
import Image6Mobile from '@/images/faynoMarket/collageThird/img_collage3-6Mobile.webp';
import styles from '../sass/CollageSectionThird.module.scss';

function CollageSectionThird({ isXSDevice, isSMDevice, isMDDevice }: ICollageSection) {
  const getImage = () => {
    const bg = {
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
    };

    if (isMDDevice) {
      bg.Image1 = Image1Tablet;
      bg.Image2 = Image2Tablet;
      bg.Image3 = Image3Tablet;
      bg.Image4 = Image4Tablet;
      bg.Image5 = Image5Tablet;
      bg.Image6 = Image6Tablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Image1 = Image1Mobile;
      bg.Image2 = Image2Mobile;
      bg.Image3 = Image3Mobile;
      bg.Image4 = Image4Mobile;
      bg.Image5 = Image5Mobile;
      bg.Image6 = Image6Mobile;
    }

    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <ImageComponent
          src={getImage().Image1}
          alt="CollageImage1"
          sizes="100vw"
          quality={70}
          className={styles.image}
        />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.wrapperImagesFirst}>
          <ImageComponent
            src={getImage().Image2}
            alt="CollageImage2"
            sizes="100vw"
            quality={70}
            className={styles.image}
          />
          <ImageComponent
            src={getImage().Image3}
            alt="CollageImage3"
            sizes="100vw"
            quality={70}
            className={styles.image}
          />
          <ImageComponent
            src={getImage().Image4}
            alt="CollageImage4"
            sizes="100vw"
            quality={70}
            className={styles.image}
          />
        </div>
        <div className={styles.wrapperImagesSecond}>
          <ImageComponent
            src={getImage().Image5}
            alt="CollageImage5"
            sizes="100vw"
            quality={70}
            className={styles.image}
          />
          <ImageComponent
            src={getImage().Image6}
            alt="CollageImage6"
            sizes="100vw"
            quality={70}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default CollageSectionThird;
