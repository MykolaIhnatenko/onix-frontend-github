import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import LeftImg from '@/images/adventurePage/twoImagesBlock/img_left.webp';
import LeftImgTablet from '@/images/adventurePage/twoImagesBlock/img_left_tablet.webp';
import LeftImgMobile from '@/images/adventurePage/twoImagesBlock/img_left_mobile.webp';
import RightImg from '@/images/adventurePage/twoImagesBlock/img_right.webp';
import RightImgTablet from '@/images/adventurePage/twoImagesBlock/img_right_tablet.webp';
import RightImgMobile from '@/images/adventurePage/twoImagesBlock/img_right_mobile.webp';

import styles from '../sass/twoImagesBlock.module.scss';

function TwoImagesBlock() {
  const leftImg = useBackground(LeftImg, LeftImgTablet, LeftImgMobile);
  const rightImg = useBackground(RightImg, RightImgTablet, RightImgMobile);

  return (
    <div className={styles.wrapper}>
      {leftImg && (
      <ImageComponent
        src={leftImg}
        alt="leftImage"
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      )}
      {rightImg
        && (
        <ImageComponent
          src={rightImg}
          alt="rightImage"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
        )}
    </div>
  );
}

export default TwoImagesBlock;
