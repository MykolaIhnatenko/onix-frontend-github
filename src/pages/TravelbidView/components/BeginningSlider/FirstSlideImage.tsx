import ISlideImage from '../../interfaces/ISlideImage';
import ImageComponent from 'components/Image/Image';

import ImageTopRight from '@/images/travelbid/beginningSection/img_first-picture-top-right.webp';
import ImageTopLeft from '@/images/travelbid/beginningSection/img_first-picture-top-left.webp';
import ImageBottomRight from '@/images/travelbid/beginningSection/img_first-picture-bottom-right.webp';
import ImageBottomLeft from '@/images/travelbid/beginningSection/img_first-picture-bottom-left.webp';
import styles from '../../sass/BeginningSlider/FirstSlideImage.module.scss';
import commonStyles from '../../sass/BeginningSlider/common/commonStyles.module.scss';

function FirstSlideImage({ currentSlide, displayType = 'desktop' }: ISlideImage) {
  return (
    <div className={`
        ${styles[`${displayType}`]}
        ${commonStyles.animationOptions} 
        ${(currentSlide === 0 && displayType === 'desktop') ? commonStyles.fadeOut : ''}
        ${(currentSlide === 2 && displayType === 'desktop') ? commonStyles.fadeIn : ''}
      `}
    >
      <div className={`
          ${styles.left} 
          ${commonStyles.animationOptions} 
          ${currentSlide === 0 ? styles[`${displayType}AnimateLeftBlock`] : ''}
        `}
      >
        <ImageComponent
          src={ImageTopLeft}
          width={377}
          height={280}
          alt="TravelBid Case"
          quality={97}
          sizes="100vw"
        />
        <ImageComponent
          src={ImageBottomLeft}
          width={377}
          height={280}
          alt="TravelBid Case"
          quality={97}
          sizes="100vw"
        />
      </div>
      <div className={`
          ${styles.right} 
          ${commonStyles.animationOptions} 
          ${currentSlide === 0 ? styles[`${displayType}AnimateRightBlock`] : ''}
        `}
      >
        <ImageComponent
          src={ImageTopRight}
          width={377}
          height={280}
          alt="TravelBid Case"
          quality={97}
          sizes="100vw"
        />
        <ImageComponent
          src={ImageBottomRight}
          width={377}
          height={280}
          alt="TravelBid Case"
          quality={97}
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default FirstSlideImage;
