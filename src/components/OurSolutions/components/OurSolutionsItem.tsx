import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import VRARContent from '../../VRARContent/VRARContent';
import IOurSolutionsItem from '../interfaces/IOurSolutionsItem';
import OurSolutionAnimation from './OurSolutionAnimation';
import ItemText from 'components/ItemText/ItemText';

import styles from '../sass/ourSolutionsItem.module.scss';

function OurSolutionsItem({
  title, text, img, animationUrl, type, desktopViewOnXL, classes,
}: IOurSolutionsItem) {
  return (
    <div className={`
        flex gap-[70px] min-xl:even:flex-row-reverse screen-xl:gap-[30px]
        screen-xl:flex-col-reverse group
        ${desktopViewOnXL ? 'min-lg:even:flex-row-reverse min-lg:flex-row min-lg:!gap-[70px]' : ''}
        ${classes?.item || ''}
      `}
    >
      <div className={`
        max-w-[820px] min-xxxl:max-w-[830px] min-xl:group-odd:pl-[70px]
        min-xl:group-even:pr-[70px] flex-[36.626%]
        min-xxxl:group-odd:pl-[80px] min-xxxl:group-even:pr-[80px] min-xl:min-w-[450px]
        screen-xl:px-[30px] screen-md:px-[15px] screen-xl:max-w-full
        ${desktopViewOnXL ? `min-lg:group-odd:p-[0_0_0_70px] min-lg:group-even:p-[0_70px_0_0]
          min-lg:min-w-[450px]` : ''}
        ${classes?.itemContent || ''}
        `}
      >
        {title && (
          <VRARContent>
            <MainTitle
              tag="h3"
              className={`
                !text-[30px]/[40px] mb-[30px] screen-md:mb-[20px] screen-md:!text-[20px]/[28px]
                ${classes?.itemTitle || ''}
              `}
            >
              {title}
            </MainTitle>
          </VRARContent>
        )}
        {typeof text === 'string' || Array.isArray(text) ? (
          <ItemText content={text} marginBottomAbsent withAnimate />
        ) : text}
      </div>
      {!animationUrl ? (
        <VRARContent className={`max-w-[1020px] flex-[60%] screen-xl:max-w-full ${classes?.itemImageContainer || ''}`}>
          <ImageComponent
            src={img}
            alt="background"
            sizes="100vw"
            quality={98}
            className={`
              w-full h-full max-h-[912px] screen-lg:max-h-[760px] object-cover
              ${classes?.itemImage || ''}
            `}
          />
        </VRARContent>
      ) : (
        <VRARContent className={`
          max-w-[1020px] flex-[60%] h-[760px] min-xxxl:h-[912px] screen-lg:max-w-full
          screen-lg:h-[686px] screen-md:h-[321px]
          ${styles.containerAnimationImage}
          `}
        >
          <OurSolutionAnimation
            url={animationUrl}
            type={type}
          />
        </VRARContent>
      )}
    </div>
  );
}

export default OurSolutionsItem;
