import JakartaText from 'components/JakartaText/JakartaText';
import JakartaTitle from 'components/JakartaTitle/JakartaTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import whyOnixBeatsData from 'pages/MainPage/data/whyOnixBeatsData';
import Icon from '../../../../assets/icon';
import WhyOnixBeatsItem from 'pages/MainPage/components/WhyOnixBeats/WhyOnixBeatsItem';

function WhyOnixBeats() {
  return (
    <PageContainer
      className="bg-transparent text-white pt-[100px] pb-[130px]
      screen-lg:pt-[80px] screen-lg:pb-[105px] screen-md:py-[60px]"
    >
      <VRARContent>
        <JakartaTitle
          className="pb-[40px] screen-lg:pb-[30px] screen-md:pb-[20px] screen-lg:max-w-[580px]
          screen-md:max-w-[unset]"
        >
          Why Onix beats generalist
          {' '}
          <span className="inline-block">outsourcing firms</span>
        </JakartaTitle>
      </VRARContent>
      <VRARContent>
        <JakartaText
          className="text-[16px]/[1.5] screen-md:text-[14px]/[1.5] max-w-[1080px] min-xxxl:max-w-[1480px]
          tracking-[-0.16px] screen-md:tracking-[-0.14px] pb-[90px] screen-lg:pb-[65px] screen-md:pb-[30px]"
        >
          Not all software teams are equal. Unlike a generalist software development company,
          we’re a purpose-built
          {' '}
          <span className="font-bold">software solutions provider</span>
          {' '}
          offering tailored custom software
          development services to meet urgent rescue needs.
        </JakartaText>
      </VRARContent>
      <VRARContent className="flex gap-[20px] justify-start pb-[30px] min-md:hidden">
        <div className="flex items-center gap-[10px]">
          <Icon.IconBlueBgCheck />
          <div>
            <Icon.IconLogoBeats className="w-[56px] h-[14px]" />
            <JakartaText
              className="text-[12px]/[1.5] tracking-[-0.12px]"
            >
              Onix rescue experts
            </JakartaText>
          </div>
        </div>
        <JakartaText
          className="block text-[18px]/[1.4] !font-bold tracking-[-0.18px] h-[24px]
          relative top-[6px]"
        >
          VS
        </JakartaText>
        <div className="flex items-center gap-[10px]">
          <Icon.IconGreyClose className="w-[24px] h-[24px]" />
          <div>
            <JakartaText
              className="text-[12px]/[1.5] tracking-[-0.12px]"
            >
              Generalist
            </JakartaText>
            <JakartaText
              className="text-[12px]/[1.5] tracking-[-0.12px]"
            >
              outsourcers
            </JakartaText>
          </div>
        </div>
      </VRARContent>
      <div className="flex flex-col gap-0 screen-md:gap-[20px]">
        {whyOnixBeatsData.map(({ leftContent, rightContent }, index) => (
          <WhyOnixBeatsItem
            key={[leftContent.title, rightContent.title, index].join('_')}
            leftContent={leftContent}
            rightContent={rightContent}
            index={index}
            whyOnixBeatsDataLength={whyOnixBeatsData.length - 1}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default WhyOnixBeats;
