import { IBorderedTechnologiesBlock } from './interfaces/IBorderedTechnologiesBlock';
import VRARContent from '../VRARContent/VRARContent';
import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';

function BorderedTechnologiesBlock({
  technologies, title, classes,
}: IBorderedTechnologiesBlock) {
  return (
    <PageContainer className={`${classes?.technologiesBlock || ''}`}>
      <div className={`pt-0 screen-md:pt-[80px] ${classes?.container ?? ''}`}>
        <VRARContent className={`${classes?.titleContainer || ''}`}>
          <MainTitle>
            {title}
          </MainTitle>
        </VRARContent>
      </div>
      <div className={`list-none border-t-2 border-b-2 border-color-black flex flex-wrap justify-start 
          mt-10 mb-[120px] gap-x-[30px] gap-y-0 py-10 px-0 
          screen-lg:mt-[60px] screen-lg:mb-[80px] screen-lg:mx-0 
          screen-md:gap-x-[15px] screen-md:gap-y-0 screen-md:py-[15px] screen-md:px-0 
          screen-md:mt-[40px] screen-md:mx-0 screen-md:mb-[80px]
          ${classes?.technologies ?? ''}`}
      >
        {technologies.map((technology, index) => (
          <VRARContent
            className={`px-0 py-0 screen-md:py-[5px] ${classes?.technology ?? ''}`}
            key={technology}
          >
            <ContentText
              className={`!text-color-black !text-[20px] leading-[1.4] !mx-0 !my-0 
              screen-md:!text-[16px] screen-md:!leading-[24px] ${classes?.title ?? ''}`}
              tag="p"
            >
              {technology}
              {index !== technologies.length - 1 ? ',' : ''}
            </ContentText>
          </VRARContent>
        ))}
      </div>
    </PageContainer>
  );
}

export default BorderedTechnologiesBlock;
