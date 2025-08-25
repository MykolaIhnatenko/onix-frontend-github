import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import IOurExpertiseSection from './interfaces/IOurExpertiseSection';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';

function OurExpertiseSection({
  upTitle, title, firstText, secondText, data, borderBottomLast = false,
  borderTopFirst = true, blackBlock, classes = {},
}: IOurExpertiseSection) {
  return (
    <section className={`${classes?.section || ''}`}>
      <PageContainer className={`pt-0 min-md:pt-[80px] min-lg:pt-[120px] ${classes?.container || ''}`}>
        {upTitle && (
          <ContentText className={`m-0 pb-[16px] screen-lg:pb-[20px] screen-md:text-[14px] screen-md:leading-[20px]
           ${classes?.upTitle || ''}`}
          >
            {upTitle}
          </ContentText>
        )}
        {title && (
          <MainTitle tag="h2" className={`${classes?.title || ''}`}>
            {title}
          </MainTitle>
        )}
        {firstText && (
          <div className={`min-xl:flex min-xl:gap-[3%] min-xl:pb-[80px] ${classes?.textContainer || ''}`}>
            <ContentText
              tag="p"
              className={`!m-0 min-xl:flex-[0_1_53%] pt-10 pb-[60px] 
                          min-md:pb-10 min-md:max-w-[551px]
                          min-lg:pb-[34px]
                          min-xl:max-w-full min-xl:pr-[100px]
             ${classes?.text || ''} ${classes?.firstText || ''}`}
            >
              {firstText}
            </ContentText>
            {secondText && (
              <ContentText
                tag="p"
                className={`!m-0 pb-10  
                min-md:max-w-[540px] min-md:!ml-auto
                min-lg:pb-[80px] min-lg:max-w-[551px]
                min-xl:pt-[146px] min-xl:pb-0 min-xl:max-w-full min-xl:ml-0 min-xl:pr-[100px]
              
              ${classes?.text || ''} ${classes?.secondText || ''}`}
              >
                {secondText}
              </ContentText>
            )}
          </div>
        )}
      </PageContainer>
      <div className={`min-md:pb-[80px] min-lg:px-[70px] min-xxxl:px-[80px] ${classes?.accordionContainer || ''}`}>
        {!blackBlock ? (
          <AccordionWhite
            data={data}
            activeFirst
            borderTopFirst={borderTopFirst}
            borderBottomLast={borderBottomLast}
            classes={{ accordionItemContent: 'min-lg:px-0' }}
          />
        ) : (
          <AccordionBlack
            data={data}
            activeFirst
            borderTopFirst={borderTopFirst}
            borderBottomLast={borderBottomLast}
            classes={{ accordionItemContent: 'min-lg:px-0' }}
          />
        )}
      </div>
    </section>
  );
}

export default OurExpertiseSection;
