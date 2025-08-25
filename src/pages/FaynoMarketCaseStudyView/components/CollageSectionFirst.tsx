import ImageComponent from '../../../components/Image/Image';
import ICollageSection from '../interfaces/ICollageSection';

import Image1 from '@/images/faynoMarket/collageFirst/img_collage1-1.webp';
import Image2 from '@/images/faynoMarket/collageFirst/img_collage1-2.webp';
import Image3 from '@/images/faynoMarket/collageFirst/img_collage1-3.webp';
import Image1Tablet from '@/images/faynoMarket/collageFirst/img_collage1-1Tablet.webp';
import Image2Tablet from '@/images/faynoMarket/collageFirst/img_collage1-2Tablet.webp';
import Image3Tablet from '@/images/faynoMarket/collageFirst/img_collage1-3Tablet.webp';
import Image1Mobile from '@/images/faynoMarket/collageFirst/img_collage1-1Mobile.webp';
import Image2Mobile from '@/images/faynoMarket/collageFirst/img_collage1-2Mobile.webp';
import Image3Mobile from '@/images/faynoMarket/collageFirst/img_collage1-3Mobile.webp';
import styles from '../sass/CollageSectionFirst.module.scss';

function CollageSectionFirst({ isXSDevice, isSMDevice, isMDDevice }: ICollageSection) {
  const getImage = () => {
    const bg = {
      Image1,
      Image2,
      Image3,
    };

    if (isMDDevice) {
      bg.Image1 = Image1Tablet;
      bg.Image2 = Image2Tablet;
      bg.Image3 = Image3Tablet;
    } else if (isXSDevice || isSMDevice) {
      bg.Image1 = Image1Mobile;
      bg.Image2 = Image2Mobile;
      bg.Image3 = Image3Mobile;
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
      />
      <div className={styles.containerImages}>
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
      </div>
    </div>
  );
}

export default CollageSectionFirst;
