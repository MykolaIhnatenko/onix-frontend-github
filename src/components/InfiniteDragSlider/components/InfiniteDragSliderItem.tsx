import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import { IInfiniteDragSliderItem } from '../interfaces/IInfiniteDragSlider';

function InfiniteDragSliderItem({
  number, text, title,
}: IInfiniteDragSliderItem) {
  return (
    <div
      className={`mx-auto bg-[white] w-[582px] h-[582px] p-[40px_80px_40px_40px] relative
      screen-md:w-[330px] screen-md:h-[330px] screen-md:p-[20px_50px_20px_20px]`}
    >
      <div className="relative">
        <div>
          <MainTitleWithoutSize
            tag="h3"
            className={`text-[36px] leading-[46px] pb-[30px]
            screen-md:text-[20px] screen-md:leading-[26px] screen-md:pb-[17px]`}
          >
            {title}
          </MainTitleWithoutSize>
          {text}
        </div>
      </div>
      <MainTitleWithoutSize
        tag="p"
        className={`absolute bottom-[30px] left-[30px] text-[40px] leading-[56px] font-medium
        screen-md:bottom-[20px] screen-md:left-[20px] screen-md:text-[22px] screen-md:leading-[32px]`}
      >
        {number}
      </MainTitleWithoutSize>
    </div>
  );
}

export default InfiniteDragSliderItem;
