import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ISliderItem from '../interfaces/ISliderItem';
import ContentText from 'components/ContentText/ContentText';

function SliderItem({ id, title, desc }:ISliderItem) {
  return (
    <div className="w-[560px] h-[416px] flex flex-col justify-between p-[40px] bg-white relative mr-[30px]
            screen-md:w-[300px] screen-md:h-[276px] screen-md:mr-[15px] screen-md:p-[30px_20px_20px]"
    >
      <div className="w-full flex flex-col gap-[30px] screen-md:gap-[20px]">
        <MainTitleWithoutSize
          tag="h3"
          className="text-[30px] font-medium leading-[40px] m-0 screen-md:text-[20px] screen-md:leading-[28px]"
        >
          {title}
        </MainTitleWithoutSize>
        <ContentText
          className="max-w-[510px] !m-0"
          tag="p"
        >
          {desc}
        </ContentText>
      </div>
      <MainTitleWithoutSize
        className="text-[30px] font-medium leading-[40px] m-0 screen-md:text-[20px] screen-md:leading-[28px]"
        tag="span"
      >
        {id}
      </MainTitleWithoutSize>
    </div>
  );
}

export default SliderItem;
