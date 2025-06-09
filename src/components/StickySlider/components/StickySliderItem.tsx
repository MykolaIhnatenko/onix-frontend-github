import ContentText from '../../ContentText/ContentText';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import IStickySliderItem from '../interfaces/IStickySliderItem';

function StickySliderItem({
  number, title, text, image, classes,
}: IStickySliderItem) {
  return (
    <div
      className={`
        sticky top-[70px] border-t-[2px] border-color-black bg-color-white
        h-[calc(100vh-170px)] p-[30px_70px] overflow-hidden
        flex flex-col justify-between

        min-xxxl:p-[30px_80px] screen-md:p-[20px_15px] screen-lg:h-auto screen-lg:p-[30px]

        last:border-b-[2px] last:border-color-black screen-md:last:pb-[20px]
        ${classes?.item || ''}
      `}
    >
      <div className={`flex pb-[30px] screen-md:pb-[20px] ${classes?.itemTitleContainer || ''}`}>
        {number && (
          <span
            className={`
              font-generalSans text-3xl/10 font-medium w-[40px] mr-[40px]
              screen-lg:mr-[20px] screen-md:mr-[10px] screen-md:w-[30px] screen-md:text-xl/7
              ${classes?.itemNumber || ''}
            `}
          >
            {number}
          </span>
        )}
        <MainTitle
          tag="h3"
          className={`
            !text-3xl/10 font-medium screen-md:!text-xl/7
            ${classes?.itemTitle || ''}
          `}
        >
          {title}
        </MainTitle>
      </div>
      <div className={`
        grid grid-cols-3 grid-rows-1 gap-x-[70px]
        screen-lg:flex screen-lg:flex-col-reverse screen-lg:flex-1 screen-lg:gap-[40px] screen-lg:overflow-hidden
        screen-md:gap-[20px] screen-md:h-[calc(100vh-240px)]
        ${classes?.itemContent || ''}
        `}
      >
        <ContentText
          className={`
            col-span-1 !m-0 max-w-[440px] self-end
            screen-lg:max-w-full screen-lg:self-auto
            ${classes?.itemText || ''}
          `}
          tag={typeof text === 'string' ? 'p' : 'div'}
        >
          {text}
        </ContentText>
        <div className={`
            h-[calc(100vh-304px)] col-span-2
            screen-lg:h-full screen-lg:w-full screen-lg:max-h-full screen-lg:self-center screen-lg:flex-1
            ${classes?.imageContainer || ''}
          `}
        >
          <ImageComponent
            src={image}
            alt="image"
            sizes="100vw"
            className={`
              w-full h-full object-cover 
              screen-lg:w-full screen-lg:max-w-full
              ${classes?.image || ''}
            `}
          />
        </div>
      </div>
    </div>
  );
}

export default StickySliderItem;
