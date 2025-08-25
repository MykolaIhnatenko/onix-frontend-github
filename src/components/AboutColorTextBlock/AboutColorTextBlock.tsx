import IAboutColorTextBlock from './interfaces/IAboutColorTextBlock';

function AboutColorTextBlock({
  title, text, textGray, text2, textGray2, textSecondBlock, textGraySecondBlock,
  textGrayThirtyBlock, textThirtyBlock, afterTextGray, classes,
}: IAboutColorTextBlock) {
  const textGrayStyles = `w-full text-[50px] font-medium leading-[64px] text-[#A8A8A8] mb-[60px] font-generalSans
    screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[40px]
    screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[30px]`;
  const textBlackStyles = `w-full text-[50px] font-medium leading-[64px] text-black mb-[60px] font-generalSans
    screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[40px]
    screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[30px]
    last:mb-0 last:mr-0`;

  return (
    <div
      className={`z-[3] w-full relative p-[60px_15px] bg-white flex flex-col
        min-md:p-[80px_30px] min-lg:p-[80px_70px] min-xxxl:p-[80px]
        ${classes?.containerColorBlock || ''}`}
    >
      <p
        className={`w-full text-[20px] font-normal leading-[28px] text-black font-ibmPlexMono mb-[20px]
          screen-lg:text-[18px] screen-lg:leading-[26px] screen-md:text-[14px] screen-md:leading-[28px]
          ${classes?.titleColorBox || ''}`}
      >
        {title}
      </p>
      <div className={`w-full flex flex-col ${classes?.contentBox || ''}`}>
        <p className={`${textBlackStyles} ${classes?.textBlack || ''}`}>
          <span className={`${textGrayStyles} ${classes?.textGray || ''}`}>
            {afterTextGray}
          </span>
          {text}
          <span className={`${textGrayStyles} ${classes?.textGray || ''}`}>
            {textGray}
          </span>
          {text2}
          <span className={`${textGrayStyles} mb-0 mr-0 ${classes?.textGray || ''}`}>
            {textGray2}
          </span>
        </p>
        {textSecondBlock && textGraySecondBlock && (
          <div
            className={`w-full mb-[60px] screen-lg:mb-[40px] screen-md:mb-[30px] [&:last-child]:mb-0
              ${classes?.secondBlock || ''}`}
          >
            <p className={`${textBlackStyles} ${classes?.textBlack || ''}`}>
              {textSecondBlock}
              <span className={`${textGrayStyles} ${classes?.textGray || ''}`}>
                {textGraySecondBlock}
              </span>
            </p>
          </div>
        )}
        {textThirtyBlock && textGrayThirtyBlock && (
          <div
            className={`w-full mb-[60px] screen-lg:mb-[40px] screen-md:mb-[30px] [&:last-child]:mb-0
              ${classes?.secondBlock || ''}`}
          >
            <p className={`${textBlackStyles} ${classes?.textBlack || ''}`}>
              {textThirtyBlock}
              <span className={`${textGrayStyles} ${classes?.textGray || ''}`}>
                {textGrayThirtyBlock}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutColorTextBlock;
