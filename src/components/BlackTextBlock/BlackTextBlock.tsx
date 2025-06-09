import IBlackTextBlock from './interfaces/IBlackTextBlock';

function BlackTextBlock({
  title, blockText, secondBlockText, classes,
}:IBlackTextBlock) {
  return (
    <div
      className={`relative z-[3] w-full bg-black p-[0px_30px_80px]
        min-xxxl:p-[0px_40px_80px] screen-lg:p-[0px_30px_40px]
        screen-md:p-[0px_15px_40px]
        ${classes?.container || ''}`}
    >
      <div
        className={`w-full flex flex-col p-[80px_40px_0px]
          screen-lg:p-[60px_0_0] ${classes?.content || ''}`}
      >
        <p
          className={`w-full text-white mb-[20px] text-[20px] font-ibmPlexMono font-normal leading-[28px]
            screen-lg:text-[18px] screen-lg:leading-[26px] screen-md:text-[14px] screen-md:leading-[26px]
            ${classes?.titleAbout || ''}
          `}
        >
          {title}
        </p>
        <div
          className={`w-full flex flex-col ${classes?.contentBox || ''}`}
        >
          <p
            className={`text-white mb-[60px] w-[95%] text-[50px] font-generalSans font-medium leading-[64px]
              screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[40px] screen-lg:w-full
              screen-md:text-[24px] screen-md:leading-[34px] screen-md:mb-[30px]
              ${classes?.textWhite || ''}
            `}
          >
            {blockText}
          </p>
          <p
            className={`
              text-white w-[95%]
              text-[50px] font-generalSans font-medium leading-[64px]
              screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:w-full
              screen-md:text-[24px] screen-md:leading-[34px]
              ${classes?.textWhite || ''}
            `}
          >
            {secondBlockText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlackTextBlock;
