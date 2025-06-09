import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageSection from '../../../components/ImageSection/ImageSection';
import { responsiveImageMan } from '../data/childrenImageSection';

function ResultsInNumbersBlock() {
  return (
    <section className="relative bg-color-black flex items-center pt-[80px] screen-lg:flex-col ">
      <PageContainer className="text-color-white !pr-[63px] min-w-[733px] min-xl:!m-0
      screen-xl:min-w-[580px] screen-lg:!mb-[60px] screen-lg:!pr-[30px] screen-lg:min-w-[100%]
      screen-md:!mb-[40px] screen-md:min-w-0"
      >
        <MainTitle className="mb-[40px] screen-md:mb-[30px]
          screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]"
        >
          Results in Numbers
        </MainTitle>
        <ContentText marginAbsent tag="p" className="max-w-[600px] screen-lg:max-w-full">
          <span className="flex mb-[20px] screen-xl:mb-[15px] screen-md:mb-[10px]">
            <span className="mr-[10px]">﹂</span>
            <span>
              <b className="font-medium text-[24px]/[26px] screen-md:text-[20px]/[24px]">350+</b>
              {' '}
              new users in the first 1.5 months post-launch
            </span>
          </span>
          <span className="flex mb-[20px] screen-xl:mb-[15px] screen-md:mb-[10px]">
            <span className="mr-[10px]">﹂</span>
            <span>
              <b className="font-medium text-[24px]/[26px] screen-md:mb-[10px] screen-md:text-[20px]/[24px]">
                Thousands
              </b>
              {' '}
              of successful virtual workout sessions conducted
            </span>
          </span>
          <span className="flex">
            <span className="mr-[10px]">﹂</span>
            <span>
              <b className="font-medium text-[24px]/[26px] screen-md:text-[20px]/[24px]">
                Continued platform enhancements
              </b>
              {' '}
              based on user feedback and market trends
            </span>
          </span>
        </ContentText>
      </PageContainer>
      <div className="ml-auto screen-lg:pl-[30px] screen-md:pl-[15px] screen-lg:w-full">
        <ImageSection data={responsiveImageMan} />
      </div>
    </section>
  );
}

export default ResultsInNumbersBlock;
