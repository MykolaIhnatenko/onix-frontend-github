import PageContainer from '../../../../components/PageContainer/PageContainer';
import JakartaTitle from '../../../../components/JakartaTitle/JakartaTitle';
import JakartaText from '../../../../components/JakartaText/JakartaText';
import Icon from '../../../../assets/icon';
import ProgressLine from './ProgressLine';
import { useAppSelector } from '../../../../hook/reduxToolkit';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { sections, steps } from '../../data/AuditConsultationProcessBlockData';

function AuditConsultationProcessBlock() {
  const {
    isSMDevice,
    isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isMobile = isSMDevice || isXSDevice;

  return (
    <PageContainer tag="section" className="bg-white pt-[100px] screen-lg:pt-[80px] screen-md:pt-[60px] ">
      <VRARContent>
        <JakartaTitle className="max-w-[1080px] min-xxxl:max-w-[1480px] mb-[40px]
                                 screen-lg:mb-[30px] screen-md:mb-[20px]"
        >
          How to get your audit consultation with&nbsp;Onix
        </JakartaTitle>
      </VRARContent>
      <VRARContent>
        <JakartaText
          tag="p"
          className="leading-[130%] !text-[24px] tracking-[-0.01em] screen-md:!text-[18px]"
        >
          Engaging with the Onix team is designed to be
          {' '}
          <span className="font-bold">fast, transparent, and&nbsp;risk&#8209;free.</span>
        </JakartaText>
      </VRARContent>
      <div
        className="relative mt-[60px] bg-color-cruise p-10 grid grid-cols-3 gap-[40px]
                   screen-lg:px-[30px] screen-lg:mt-10
                   screen-md:grid-cols-1 screen-md:mt-[30px] screen-md:p-[30px_15px] screen-md:gap-[20px]"
      >
        {steps.map(({
          number, title, description, delay,
        }, index) => (
          <div key={number} className="screen-md:flex screen-md:gap-[15px] ">
            <div className="flex items-center screen-md:flex-col">
              <JakartaText
                className="bg-black text-white mr-5 rounded-full min-w-10 min-h-10
            flex items-center justify-center text-[18px]/[1.4]
           screen-md:text-[16px]/[1.4] screen-md:min-w-[30px] screen-md:min-h-[30px] screen-md:mr-0 screen-md:mb-[10px]"
              >
                {number}
              </JakartaText>
              {index < steps.length - 1 ? <ProgressLine delay={delay} vertical={isMobile} /> : null}
            </div>
            <div>
              <VRARContent>
                <JakartaText
                  className="text-[28px]/[1.3] mt-[30px] tracking-[-0.01em] screen-md:text-[20px]/[1.4] screen-md:mt-0"
                  tag="h3"
                >
                  {title}
                </JakartaText>
              </VRARContent>
              <VRARContent>
                <JakartaText
                  className="text-[16px]/[1.5] mt-[20px] tracking-[-0.01em]
                 screen-md:text-[14px]/[1.5] screen-md:mt-[20px]"
                  tag="p"
                >
                  {description}
                </JakartaText>
              </VRARContent>
            </div>
          </div>
        ))}
      </div>
      <VRARContent>
        <JakartaText
          tag="p"
          className="text-[34px]/[1.2] mt-[60px] mb-[40px] max-w-[1080px] min-xxxl:max-w-[1480px]
         screen-lg:text-[28px]/[1.4] screen-lg:!mt-[40px]
         screen-md:text-[20px]/[1.4] screen-md:mb-[20px] screen-md:!mt-[30px]
         tracking-[-0.24px] screen-md:tracking-[-0.18px]"
        >
          After our AI-augmented audit phase, you get a full
          {' '}
          <span className="font-bold relative">
            Rescue&nbsp;Audit&nbsp;Report
            <Icon.IconLineMain className="absolute w-full left-0 bottom-[-7px]" />
          </span>
          {' '}
          packed with actionable insights and&nbsp;next&nbsp;steps:
        </JakartaText>
      </VRARContent>
      {sections.map((section) => (
        <div
          key={section.number}
          className="flex justify-between gap-[70px] border-black border-b-2 py-10 last:border-0 last:!pb-0
           screen-lg:flex-col screen-lg:gap-0 screen-lg:py-[30px] screen-md:py-[20px]"
        >
          <VRARContent className={`flex w-[674px] min-w-[674px] screen-xxxl:w-[400px] screen-xxxl:min-w-[400px]
        screen-lg:w-full screen-lg:min-w-full`}
          >
            <JakartaText
              tag="p"
              className="text-[24px]/[1.3] mr-[40px] screen-lg:mr-[20px]
               screen-md:mr-[15px] screen-md:text-[18px]/[1.4]"
            >
              {section.number}
            </JakartaText>
            <JakartaText
              tag="h3"
              className="text-[24px]/[1.3] tracking-[-0.01em] screen-md:text-[18px]/[1.4]"
            >
              {section.title}
            </JakartaText>
          </VRARContent>
          <VRARContent className="max-w-[850px] w-full screen-xxxl:max-w-[660px]
           screen-lg:max-w-full screen-lg:mt-[20px]
           "
          >
            <ul className="space-y-[10px]">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-[10px]"
                >
                  <Icon.IconListMarker className="mt-[10px] screen-md:mt-[8px] flex-shrink-0" />
                  <JakartaText className="inline tracking-[-0.01em] screen-md:text-[14px]/[1.4]">{item}</JakartaText>
                </li>
              ))}
            </ul>
          </VRARContent>
        </div>
      ))}
    </PageContainer>
  );
}

export default AuditConsultationProcessBlock;
