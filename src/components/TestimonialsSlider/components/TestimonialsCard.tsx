import JakartaText from 'components/JakartaText/JakartaText';
import ITestimonialsCard from 'components/TestimonialsSlider/interfaces/ITestimonialsCard';

function TestimonialsCard({
  text, logo, name, position,
}: ITestimonialsCard) {
  return (
    <div
      className="bg-[#F9F9F9] p-[40px_30px] w-[520px] h-[390px] flex flex-col justify-between
      screen-lg:mr-[30px] screen-md:mr-[15px] screen-lg:w-[540px]
      screen-md:p-[30px_20px] screen-md:w-[330px] screen-md:h-[401px]"
    >
      <div>
        <JakartaText
          className="text-[20px]/[1.4] screen-md:text-[16px]/[1.5]
          tracking-[-0.2px] screen-md:tracking-[-0.16px]"
        >
          &quot;
          {text}
          &quot;
        </JakartaText>
      </div>
      <div
        className="flex items-center justify-between gap-[20px] screen-md:flex-col screen-md:gap-[10px]
        screen-md:items-start"
      >
        <div>
          {logo}
        </div>
        <div>
          <JakartaText
            className="text-right text-[18px]/[1.4] !font-bold screen-md:text-[14px]/[1.5] pb-[5px]
            tracking-[-0.18px] screen-md:tracking-[-0.14px] screen-md:text-left"
          >
            {name}
          </JakartaText>
          <JakartaText
            className="text-right text-[16px]/[1.5] font-bold screen-md:text-[14px]/[1.5]
            tracking-[-0.16px] screen-md:tracking-[-0.14px] screen-md:text-left"
          >
            {position}
          </JakartaText>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
