import ContentTextNew from 'components/ContentTextNew/ContentTextNew';
import ImageComponent from '../../Image/Image';
import MainTitle from '../../MainTitle/MainTitle';
import IDragSliderItem from '../interfaces/IDragSliderItem';

function DragSliderItem({ img, text, title }: IDragSliderItem) {
  return (
    <div className="relative min-w-[450px] pr-[30px] screen-md:min-w-[320px] screen-md:pr-[20px]">
      <div className={`relative max-w-[420px] min-w-[420px] h-[420px] screen-md:max-w-[300px]
        screen-md:min-w-[300px] screen-md:h-[300px]`}
      >
        <ImageComponent
          src={img}
          alt="image"
          fill
          quality={98}
          className="object-cover"
        />
      </div>
      <MainTitle
        tag="h3"
        className="mt-[30px] !text-[30px]/[40px] screen-lg:mt-[10px] screen-md:mt-[20px] screen-md:!text-[20px]/[38px]"
      >
        {title}
      </MainTitle>
      <ContentTextNew
        text={text}
        className={`mt-[20px] !text-[18px]/[26px] screen-lg:max-w-[400px] screen-md:mt-[15px]
          screen-md:max-w-[295px] screen-md:!text-[16px]/[24px]`}
      />
    </div>
  );
}

export default DragSliderItem;
