import JakartaText from 'components/JakartaText/JakartaText';
import Icon from '../../../../assets/icon';

function LeftCard() {
  const listStyle = 'flex gap-[10px] text-[16px]/[1.5] screen-md:text-[14px]/[1.5]'
  + ' tracking-[-0.16px] screen-md:tracking-[-0.14px]';
  const markerStyle = 'mt-[10px] screen-md:mt-[8px] flex-shrink-0';
  return (
    <div className="max-w-[76%] min-xxxl:max-w-[82%] screen-xl:max-w-[70%] screen-lg:max-w-[100%]">
      <JakartaText
        tag="h3"
        className="pb-[30px] text-[34px]/[1.2] screen-lg:text-[28px]/[1.3]
          screen-md:text-[24px]/[1.3] screen-md:pb-[20px]
          tracking-[-0.34px] screen-lg:tracking-[-0.28px] screen-md:tracking-[-0.24px]"
      >
        Facing a failing product?
      </JakartaText>
      <JakartaText
        className="pb-[30px] text-[24px]/[1.3] screen-lg:text-[20px]/[1.4]
          screen-md:text-[18px]/[1.4] screen-md:pb-[20px]
          tracking-[-0.24px] screen-lg:tracking-[-0.2px] screen-md:tracking-[-0.18px]"
      >
        Your software project is months behind schedule.
        Critical features are broken or missing. Customers and investors are losing trust.
      </JakartaText>
      <JakartaText
        className="pb-[20px] text-[20px]/[1.4] !font-bold
          screen-md:text-[16px]/[1.5] screen-md:pb-[15px]
          tracking-[-0.2px] screen-md:tracking-[-0.16px]"
      >
        It’s a nightmare scenario:
      </JakartaText>
      <ul>
        <li>
          <JakartaText
            className={`${listStyle} pb-[10px]`}
          >
            <Icon.IconListMarker className={markerStyle} />
            The product you banked on is letting the business down.
          </JakartaText>
        </li>
        <li>
          <JakartaText
            className={listStyle}
          >
            <Icon.IconListMarker className={markerStyle} />
            You ask yourself, should I rebuild my software product?
          </JakartaText>
        </li>
      </ul>
    </div>
  );
}

export default LeftCard;
