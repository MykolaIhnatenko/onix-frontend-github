import JakartaText from 'components/JakartaText/JakartaText';
import VRARContent from 'components/VRARContent/VRARContent';
import IWhyOnixBeatsItem from 'pages/MainPage/interfaces/IWhyOnixBeatsItem';
import Icon from '../../../../assets/icon';

function WhyOnixBeatsItem({
  index, leftContent, rightContent, whyOnixBeatsDataLength,
}: IWhyOnixBeatsItem) {
  const titleStyles = 'text-[20px]/[1.4] screen-lg:text-[18px]/[1.4] screen-md:text-[16px]/[1.5] '
    + 'tracking-[-0.2px] screen-lg:tracking-[-0.18px]';
  const textStyles = 'text-[16px]/[1.5] screen-md:text-[14px]/[1.5] tracking-[-0.16px] screen-md:tracking-[-0.14px]';
  const mainTitleStyles = 'text-[34px]/[1.2] screen-lg:text-[28px]/[1.3] '
    + 'tracking-[-0.34px] screen-lg:tracking-[-0.28px]';

  return (
    <div
      className="flex w-[100%] items-stretch screen-md:flex-col"
    >
      <div
        className={`bg-[#0072FF] w-[54.616%] relative screen-xl:w-[50%] screen-md:w-[100%]
          ${index === 0
          ? 'before:content-[""] before:absolute before:h-[30px] before:w-[100%] before:bg-[#0072FF] '
          + 'before:top-[-30px] before:left-0 screen-lg:before:h-[25px] screen-lg:before:top-[-25px] '
          + 'screen-md:before:hidden'
          : ''}
          ${index === whyOnixBeatsDataLength
            ? 'after:content-[""] after:block after:h-[30px] after:w-[100%] after:bg-[#0072FF] '
            + 'screen-lg:after:h-[25px] screen-md:after:hidden'
            : ''}`}
      >
        {index === 0 && (
        <div
          className="absolute top-[44.5px] right-[30px] screen-xl:top-0
          screen-lg:top-0 screen-lg:right-[20px]
          screen-md:top-[20px] screen-md:right-[15px]"
        >
          <Icon.IconLogoBeats
            className="w-[128px] h-[33px] screen-lg:w-[96px] screen-lg:h-[24px]
            screen-md:w-[80px] screen-md:h-[20px]"
          />
        </div>
        )}
        <div
          className={`h-[100%] py-[30px] mx-[30px] border-b-[#D9D9D94D] border-b-[1px]
          screen-lg:py-[25px] screen-lg:mx-[20px]
          screen-md:border-b-0 screen-md:py-[20px] screen-md:mx-[15px]
          ${index === 0 ? 'pt-[40px] screen-lg:pt-[50px] screen-md:pt-[60px]' : ''}
          ${index === whyOnixBeatsDataLength ? '!border-b-[0px]' : ''}`}
        >
          {leftContent.mainTitle && (
          <VRARContent className="pb-[40px] screen-lg:pb-[30px] screen-md:hidden">
            <JakartaText className={mainTitleStyles}>
              {leftContent.mainTitle}
            </JakartaText>
          </VRARContent>
          )}
          <VRARContent className="flex items-start gap-[10px] pb-[20px] screen-lg:pb-[15px]">
            <Icon.IconBlueCheck className="w-[28px] h-[28px] screen-lg:w-[24px] screen-lg:h-[24px]" />
            <JakartaText className={titleStyles}>
              {leftContent.title}
            </JakartaText>
          </VRARContent>
          <VRARContent>
            <JakartaText className={textStyles}>
              {leftContent.text}
            </JakartaText>
          </VRARContent>
        </div>
      </div>
      <div
        className={`bg-[#FFFFFF0D] w-[45.384%] border-r-[1px] border-r-[#D9D9D94D] screen-xl:w-[50%]
          screen-md:w-[100%] screen-md:border-l-[#D9D9D94D] screen-md:border-l-[1px]
          screen-md:border-b-[#D9D9D94D] screen-md:border-b-[1px]
          ${index === 0 ? 'border-t-[1px] border-t-[#D9D9D94D]' : ''}
          ${index === whyOnixBeatsDataLength ? 'border-b-[1px] border-b-[#D9D9D94D]' : ''}`}
      >
        <div
          className={`h-[100%] py-[30px] mx-[30px] border-b-[#D9D9D94D] border-b-[1px]
            screen-lg:py-[25px] screen-lg:mx-[20px]
            screen-md:border-b-0 screen-md:py-[20px] screen-md:mx-[15px]
            ${index === 0 ? 'pt-[40px] screen-lg:pt-[50px] screen-md:pt-[20px]' : ''}
            ${index === whyOnixBeatsDataLength ? '!border-b-[0px]' : ''}`}
        >
          {rightContent.mainTitle && (
          <VRARContent className="pb-[40px] screen-lg:pb-[30px] screen-md:hidden">
            <JakartaText className={mainTitleStyles}>
              {rightContent.mainTitle}
            </JakartaText>
          </VRARContent>
          )}
          <VRARContent className="flex items-start gap-[10px] pb-[20px] screen-lg:pb-[15px]">
            <Icon.IconGreyClose className="w-[28px] h-[28px] screen-lg:w-[24px] screen-lg:h-[24px]" />
            <JakartaText className={titleStyles}>
              {rightContent.title}
            </JakartaText>
          </VRARContent>
          <VRARContent>
            <JakartaText className={textStyles}>
              {rightContent.text}
            </JakartaText>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default WhyOnixBeatsItem;
