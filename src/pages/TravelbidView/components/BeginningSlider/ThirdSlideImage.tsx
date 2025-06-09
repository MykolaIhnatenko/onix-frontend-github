import ISlideImage from '../../interfaces/ISlideImage';
import ImageThirdLeft from '@/images/travelbid/beginningSection/img_third-picture-left.webp';
import ImageThirdRight from '@/images/travelbid/beginningSection/img_third-picture-right.webp';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../../sass/BeginningSlider/ThirdSlideImage.module.scss';
import commonStyles from '../../sass/BeginningSlider/common/commonStyles.module.scss';

function ThirdSlideImage({ currentSlide, displayType = 'desktop' }: ISlideImage) {
  return (
    <div className={`
        ${styles[`${displayType}`]}
        ${commonStyles.animationOptions}
        ${(currentSlide === 2 && displayType === 'desktop') ? commonStyles.fadeOut : ''}
        ${(currentSlide === 0 && displayType === 'desktop') ? commonStyles.fadeIn : ''}
      `}
    >
      <div className={`
          ${styles.imageWrapper}
          ${commonStyles.animationOptions}
          ${currentSlide === 2 ? styles[`${displayType}AnimateThirdSlide`] : ''}
        `}
      >
        <ImageComponent
          src={ImageThirdLeft}
          sizes="100vw"
          width={displayType === 'mobile' ? 304 : 618}
          height={displayType === 'mobile' ? 300 : 609}
          alt="TravelBid Case"
          quality={100}
        />
        <ImageComponent
          src={ImageThirdRight}
          sizes="100vw"
          width={displayType === 'mobile' ? 282 : 573}
          height={displayType === 'mobile' ? 300 : 609}
          alt="TravelBid Case"
          quality={100}
        />
      </div>
    </div>
  );
}

export default ThirdSlideImage;
