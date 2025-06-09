import ContentText from '../../../components/ContentText/ContentText';
import IIndustryBlockWithAnimate from '../../../components/IndustryBlockWithAnimate/interfaces/IIndustryBlockWithAnimate';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import uiUxIndustryBlockWithAnimateContentData from './uiUxIndustryBlockWithAnimateContentData';

const uiUxIndustryBlockWithAnimateData: IIndustryBlockWithAnimate = {
  blockTitle: (
    <MainTitleWithoutSize
      className="text-[50px] leading-[64px] w-[470px]
      screen-lg:w-[509px] screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[40px]
      screen-md:text-[25px] screen-md:leading-[35px] screen-md:max-w-[330px] screen-md:w-full screen-md:mb-[30px]"
    >
      What to Expect From Our UI/UX Design Services
    </MainTitleWithoutSize>
  ),
  blockText: (
    <ContentText tag="p" className="max-w-[382px] screen-md:my-[30px]">
      At our UI/UX services, clients can expect the following benefits:
    </ContentText>
  ),
  data: uiUxIndustryBlockWithAnimateContentData,
};

export default uiUxIndustryBlockWithAnimateData;
