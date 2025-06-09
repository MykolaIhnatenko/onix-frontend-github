import ImageComponent from '../../../components/Image/Image';
import Image1 from '@/images/faynoMarket/collageSecond/img_collage2-1.webp';
import Image2 from '@/images/faynoMarket/collageSecond/img_collage2-2.webp';
import Image1Tablet from '@/images/faynoMarket/collageSecond/img_collage2-1Tablet.webp';
import Image2Tablet from '@/images/faynoMarket/collageSecond/img_collage2-2Tablet.webp';
import Image1Mobile from '@/images/faynoMarket/collageSecond/img_collage2-1Mobile.webp';
import Image2Mobile from '@/images/faynoMarket/collageSecond/img_collage2-2Mobile.webp';
import ICollageSection from '../interfaces/ICollageSection';

import styles from '../sass/CollageSectionSecond.module.scss';

function CollageSectionSecond({ isXSDevice, isSMDevice, isMDDevice }: ICollageSection) {
  const getImage = () => {
    const bg = {
      Image1,
      Image2,
    };

    if (isMDDevice) {
      bg.Image1 = Image1Tablet;
      bg.Image2 = Image2Tablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Image1 = Image1Mobile;
      bg.Image2 = Image2Mobile;
    }

    return bg;
  };

  return (
    <div className={styles.container}>
      <ImageComponent
        src={getImage().Image1}
        alt="CollageImage1"
        sizes="100vw"
        quality={70}
        className={styles.image}
      />
      <ImageComponent
        src={getImage().Image2}
        alt="CollageImage2"
        sizes="100vw"
        quality={70}
        className={styles.image}
      />
    </div>
  );
}

export default CollageSectionSecond;
