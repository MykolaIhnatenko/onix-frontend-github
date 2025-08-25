import JakartaText from 'components/JakartaText/JakartaText';
import IThreeStepsItemContent from 'pages/MainPage/interfaces/IThreeStepsItemContent';
import VRARContent from 'components/VRARContent/VRARContent';
import ThreeStepsBlockListItem from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsBlockListItem';
import ImageComponent from 'components/Image/Image';
import ProgressLine from 'pages/MainPage/components/AuditConsultationProcessBlock/ProgressLine';

function ThreeStepsItemContent({
  subTitle, list, timelineTitle, tabelTitle, tableList, text, image,
  isTimelineFirst, isTimelineSecondary, isTimelineThird,
}: IThreeStepsItemContent) {
  const timelineStyle = '!w-[33.33333%] !h-[10px] !bg-[#0072FF] !bg-opacity-30';

  return (
    <div className="pb-[30px] min-xxl:pb-0 screen-md:pb-[20px]">
      {image && (
        <ImageComponent
          src={image}
          alt="Three Steps Item Content Image"
          className="min-xxl:hidden w-full h-[auto] object-cover object-center mb-[30px] block screen-md:mb-[20px]"
        />
      )}
      <div className="pb-[30px] screen-md:pb-[20px]">
        <VRARContent>
          <JakartaText
            className="text-[20px]/[1.4] pb-[20px] screen-md:text-[18px]/[1.4] screen-md:pb-[15px]
            tracking-[-0.2px] screen-md:tracking-[-0.18px]"
          >
            {subTitle}
          </JakartaText>
        </VRARContent>
        <ul>
          {list.map((item, index) => (
            <ThreeStepsBlockListItem
              key={[index, 'ThreeStepsItemContent'].join('')}
              item={item}
            />
          ))}
        </ul>
        {text && (
          <VRARContent>
            {text}
          </VRARContent>
        )}
      </div>
      <VRARContent
        className="p-[30px] screen-md:p-[20px_15px] relative bg-[#F9F9F9]
        before:absolute before:top-0 before:left-0 before:h-full before:w-[2px] before:bg-[#B6EDEE]"
      >
        <div
          className="pb-[30px] screen-md:pb-[20px]"
        >
          <VRARContent>
            <JakartaText
              className="text-[18px]/[1.4] pb-[15px] screen-md:text-[16px]/[1.5] screen-md:pb-[10px]
              tracking-[-0.2px] screen-md:tracking-[-0.18px]"
            >
              Outcome:
            </JakartaText>
          </VRARContent>
          <VRARContent>
            <JakartaText
              className="text-[24px]/[1.3] pb-[20px] screen-md:text-[20px]/[1.4] screen-md:pb-[15px]
              tracking-[-0.2px] screen-md:tracking-[-0.18px]"
            >
              {tabelTitle}
            </JakartaText>
          </VRARContent>
          <ul>
            {tableList.map((item, index) => (
              <ThreeStepsBlockListItem
                key={[index, 'ThreeStepsItemContent'].join('')}
                item={item}
              />
            ))}
          </ul>
        </div>
        <VRARContent>
          <JakartaText
            className="text-[18px]/[1.4] pb-[15px] screen-md:text-[16px]/[1.5] screen-md:pb-[10px]
            tracking-[-0.2px] screen-md:tracking-[-0.18px]"
          >
            Timeline:
          </JakartaText>
          <div className="flex gap-[4px] screen-lg:gap-[3px]">
            <ProgressLine
              classes={{
                container: timelineStyle,
                line: '!bg-[#0072FF]',
              }}
              withoutAnimate={isTimelineSecondary || isTimelineThird}
            />
            <ProgressLine
              classes={{
                container: timelineStyle,
                line: `!bg-[#0072FF] ${isTimelineFirst ? '!bg-transparent' : ''}`,
              }}
              withoutAnimate={isTimelineThird || isTimelineFirst}
            />
            <ProgressLine
              classes={{
                container: timelineStyle,
                line: `!bg-[#0072FF] ${isTimelineSecondary || isTimelineFirst ? '!bg-transparent' : ''}`,
              }}
              withoutAnimate={isTimelineSecondary || isTimelineFirst}
            />
          </div>
          <JakartaText
            className="!font-bold text-[24px]/[1.3] pt-[15px] screen-md:text-[20px]/[1.4] screen-md:pt-[10px]
              tracking-[-0.20px] screen-md:tracking-[-0.18px]"
          >
            {timelineTitle}
          </JakartaText>
        </VRARContent>
      </VRARContent>
    </div>
  );
}

export default ThreeStepsItemContent;
