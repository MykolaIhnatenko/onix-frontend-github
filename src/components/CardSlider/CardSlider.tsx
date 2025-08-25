import { ICardSliderItem } from './interfaces/ICardSlider';

function CardSlider({
  id, title, text, height,
}: ICardSliderItem) {
  return (
    <div
      key={id}
      style={{ height: height ? `${height}px` : 'fit-content' }}
      className="max-w-full flex p-[30px_30px_40px] bg-white
        screen-md:flex-wrap screen-md:items-start screen-md:content-start screen-md:p-[20px_15px]"
    >
      <div
        className={`min-w-[76px] pr-[40px] text-[30px] leading-[40px] font-[500] font-generalSans not-italic 
          screen-xl:min-w-[56px] screen-xl:pr-[20px] screen-lg:min-w-[76px] screen-lg:pr-[40px] 
          screen-md:min-w-[84px] screen-md:text-[20px] screen-md:leading-[28px] screen-md:pr-0 screen-md:pb-[10px]`}
      >
        {id}
      </div>
      <div>
        {title}
        {text}
      </div>
    </div>
  );
}

export default CardSlider;
