import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import { IApproachBlock } from './interfaces/IApproachSection';
import { AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';

function ApproachSection({
  title, text, data, isMobileOrTablet, smallerTitleText, borderTopFirst, classes,
}: IApproachBlock) {
  const accordionStyle = isMobileOrTablet ? AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT : undefined;

  return (
    <div className={`pb-[80px] screen-lg:pb-0 ${classes?.approachSection || ''}`}>
      <PageContainer className={`pt-[80px] pb-[80px] ${classes?.container || ''}`}>
        <MainTitle className={`max-w-[723px] screen-lg:max-w-[600px] screen-md:max-w-[244px] ${classes?.title || ''}`}>
          {title}
        </MainTitle>
        {text && (
          <ContentText
            tag="p"
            className={`
              !m-0 !mt-[30px] max-w-[832px] screen-lg:!mt-[40px] screen-lg:max-w-[539px] screen-md:!mt-[30px]
              ${classes?.text || ''}
            `}
          >
            {text}
          </ContentText>
        )}
      </PageContainer>
      <PageContainer className={`screen-lg:!pl-0 screen-lg:!pr-0 ${classes?.accordionContainer || ''}`}>
        <AccordionWhite
          data={data}
          activeFirst
          accordionStyleTypes={accordionStyle}
          borderTopFirst={borderTopFirst}
          smallerTitleText={smallerTitleText}
        />
      </PageContainer>
    </div>
  );
}

export default ApproachSection;
