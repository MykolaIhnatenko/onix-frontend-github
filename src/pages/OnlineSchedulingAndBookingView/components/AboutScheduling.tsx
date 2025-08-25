import { ibmPlexMono, generalSans } from '../../../fonts/MainFonts';
import { IAboutScheduling } from '../interfaces/IOnlineSchedulingAndBookingView';

function AboutScheduling({
  title, text, textGray, textGraySecond, textSecond, revertBlock, classes,
}: IAboutScheduling) {
  const stylesTextBlack = `w-full font-medium font-generalSans text-[50px] mb-[60px] leading-[64px]
  text-black screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[40px]
  screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[30px]`;
  const stylesTextGray = `w-full font-medium font-generalSans text-[50px] mb-[60px] leading-[64px]
  text-[#A8A8A8] last:mb-0 last:mr-0 screen-lg:text-[40px] screen-lg:leading-[56px]
  screen-lg:mb-[40px] screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[30px]`;

  return (
    <div
      className={`z-[3] w-full relative bg-white p-[80px_70px]
      screen-lg:p-[80px_30px] screen-md:p-[60px_15px] min-xxxl:p-[80px] ${classes?.aboutOurScheduling || ''}`}
    >
      <div className={`w-full flex flex-col ${classes?.content || ''}`}>
        <p
          className={`w-full font-normal font-ibmPlexMono text-[20px] mb-[20px]
          leading-[26px] screen-lg:text-[18px] screen-md:text-[14px]
          ${classes?.titleAbout || ''} ${ibmPlexMono.variable}`}
        >
          {title}
        </p>
        <div
          className={`w-full flex flex-col ${classes?.contentBox || ''}
          ${revertBlock ? 'flex-col-reverse' : ''} ${generalSans.variable}`}
        >
          <p className={`${stylesTextBlack} ${classes?.textBlack || ''}`}>
            {text}
            <span className={`${stylesTextGray} ${classes?.textGray || ''}`}>
              {textGray}
            </span>
          </p>
          <p
            className={`${stylesTextGray} ${classes?.textGray || ''}
            ${revertBlock ? 'mb-[60px]' : ''} ${classes?.reverseText || ''}`}
          >
            {textGraySecond}
            <span className={`${stylesTextBlack} ${classes?.textBlack || ''} mb-0 mr-0`}>
              {textSecond}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutScheduling;
