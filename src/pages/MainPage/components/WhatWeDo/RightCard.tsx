import JakartaText from 'components/JakartaText/JakartaText';
import iconsData from 'pages/MainPage/data/iconsData';
import Icon from '../../../../assets/icon';

function RightCard() {
  return (
    <div>
      <JakartaText
        tag="h3"
        className="text-[34px]/[1.2] pb-[30px] screen-lg:text-[28px]/[1.3]
        screen-md:text-[24px]/[1.3] screen-md:pb-[20px]
        tracking-[-0.34px] screen-lg:tracking-[-0.28px] screen-md:tracking-[-0.24px]"
      >
        We’ve been there and fixed that
      </JakartaText>
      <JakartaText
        className="text-[24px]/[1.3] pb-[30px] screen-lg:text-[20px]/[1.4]
        screen-md:text-[18px]/[1.4] screen-md:pb-[20px]
        tracking-[-0.24px] screen-lg:tracking-[-0.2px] screen-md:tracking-[-0.18px]"
      >
        When your company faces a stalled or underperforming digital product, Onix comes in with a professional
        {' '}
        <span className="font-bold relative">
          Recovery&nbsp;A-Team
          <Icon.IconLine className="absolute w-full left-0 bottom-[-7px]" />
        </span>
        {' '}
        and a battle-tested software development process.
      </JakartaText>
      <div className="flex justify-between items-center gap-[15px] screen-sm:items-start">
        <div
          className="flex items-center gap-[5px_15px] flex-wrap
          screen-sm:w-[min-content] screen-sm:justify-center"
        >
          <div className="flex w-[fit-content]">
            {iconsData.map((item, index) => (
              <div
                key={['RightCard', index].join('_')}
                className={`border-[2px] border-black border-solid rounded-full
                  ${index === 1 ? 'ml-[-12px]' : ''}
                  ${index === 2 ? 'ml-[-12px]' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <JakartaText
            className="text-[16px]/[1.5] screen-md:text-[14px]/[1.5]
            tracking-[-0.16px] screen-md:tracking-[-0.14px]"
          >
            Onix Experts
          </JakartaText>
        </div>
        <Icon.IconLogoSmall className="w-[128px] h-[32px] screen-md:w-[96px] screen-md:h-[24px]" />
      </div>
    </div>
  );
}

export default RightCard;
