import Technologies from '../Technologies/Technologies';
import { generalSans, ibmPlexMono } from '../../fonts/MainFonts';
import { ITechnologiesBlock } from '../Technologies/interfaces/ITechnologies';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import VRARContent from '../VRARContent/VRARContent';

function TechnologiesBlock({
  pageTitle,
  subTitle,
  technologies,
  noShowIcon,
  titleBlock,
  titleDesc,
  classes,
  withoutComma = false,
  isJakarta = false,
  animatedText = false,
}: ITechnologiesBlock) {
  return (
    <div
      className={`p-[80px_15px_60px_15px] min-md:p-[80px_30px_40px_30px] min-lg:p-[80px_70px]
        min-lg:mx-auto min-xxxl:p-[80px] mx-auto min-lg:max-w-[1920px]
        ${generalSans.variable} ${ibmPlexMono.variable}
        ${classes?.container || ''}`}
    >
      {pageTitle && (
        <MainTitle
          className={`
            mb-[16px] min-lg:max-w-[1020px] min-lg:mb-[36px] min-lg:text-transform-none min-xxxl:max-w-none
            ${classes?.sectionTitle || ''}
             ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
          `}
        >
          {pageTitle}
        </MainTitle>
      )}
      {subTitle && (
        <ContentText
          tag="p"
          className={`
            !text-[18px] !font-normal !leading-[26px] !max-w-[670px]
            min-md:!mb-[40px] min-lg:!mb-0
            ${classes?.sectionSubTitle || ''}
             ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
          `}
        >
          {subTitle}
        </ContentText>
      )}
      {(titleBlock || titleDesc) && (
        <div className={`w-full flex flex-col ${classes?.blockTitle || ''}`}>
          {titleBlock && (
            <VRARContent>
              <p
                className={`
                mb-[20px] text-[20px] font-normal text-white font-ibmPlexMono
                leading-[28px] screen-md:text-[14px]
                ${classes?.blockTitleText || ''}
                 ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
              `}
              >
                {titleBlock}
              </p>
            </VRARContent>
          )}
          <h2
            className={`w-[80%] inline-block mb-[40px] font-generalSans
            text-[50px] leading-[64px] font-medium text-white 
            screen-lg:w-full screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[30px]
            screen-md:text-[25px] screen-md:leading-[35px] screen-md:mb-[22px]
            ${classes?.blockTitleDesc || ''}
             ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}`}

          >
            {titleDesc}
          </h2>
        </div>
      )}
      <Technologies
        technologies={technologies}
        noShowIcon={noShowIcon}
        withoutComma={withoutComma}
        classes={classes?.technologies}
        isJakarta={isJakarta}
        animatedText={animatedText}
      />
    </div>
  );
}

export default TechnologiesBlock;
