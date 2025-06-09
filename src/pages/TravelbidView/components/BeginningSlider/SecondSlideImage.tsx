import ISlideImage from '../../interfaces/ISlideImage';
import ImageComponent from 'components/Image/Image';
import ImageSecondBig from '@/images/travelbid/beginningSection/img_second-picture-big.webp';
import ImageSecondSmall from '@/images/travelbid/beginningSection/img_second-picture-small.webp';
import ImageSecondSmall2 from '@/images/travelbid/beginningSection/img_second-picture-small2.webp';

import styles from '../../sass/BeginningSlider/SecondSlideImage.module.scss';
import commonStyles from '../../sass/BeginningSlider/common/commonStyles.module.scss';

function SecondSlideImage({ currentSlide, displayType = 'desktop' }: ISlideImage) {
  return (
    <div className={`
        ${styles[`${displayType}`]}
        ${commonStyles.animationOptions}
        ${(currentSlide === 1 && displayType === 'desktop') ? commonStyles.fadeOut : ''}
        ${(currentSlide === 0 && displayType === 'desktop') ? commonStyles.fadeIn : ''}
      `}
    >
      <div className={`
          ${styles.bigPictureWrapper} 
          ${commonStyles.animationOptions} 
          ${currentSlide === 1 ? styles[`${displayType}AnimateBigPicture`] : ''}
        `}
      >
        <ImageComponent
          src={ImageSecondBig}
          sizes="100vw"
          width={586}
          height={584}
          alt="TravelBid Case"
          quality={100}
        />
      </div>
      <div className={`
          ${styles.smallPictureWrapper} 
          ${commonStyles.animationOptions} 
          ${currentSlide === 1 ? styles[`${displayType}AnimateSmallPicture`] : ''}
        `}
      >
        <ImageComponent
          src={displayType === 'desktop' ? ImageSecondSmall : ImageSecondSmall2}
          width={displayType === 'desktop' ? 220 : 243}
          height={displayType === 'desktop' ? 375 : 527}
          alt="TravelBid Case"
          quality={100}
        />
      </div>
    </div>
  );
}

export default SecondSlideImage;
