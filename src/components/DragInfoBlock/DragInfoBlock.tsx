import ImageComponent from 'components/Image/Image';
import IDragInfoBlock from './interfaces/IDragInfoBlock';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentText from 'components/ContentText/ContentText';
import DragSlider from 'components/DragSlider/DragSlider';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function DragInfoBlock({
  backgroundImg, name, title, data, classes,
}: IDragInfoBlock) {
  return (
    <div className={`relative bg-black ${classes?.section || ''}`}>
      {backgroundImg && (
        <div className={`w-full h-full ${classes?.bgContainer || ''}`}>
          <ImageComponent
            src={backgroundImg}
            alt="MainBackground"
            fill
            priority
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            className={`object-cover ${classes?.img || ''}`}
          />
        </div>
      )}
      <div className="relative py-[120px] screen-lg:py-[80px]">
        <PageContainer className={`relative m-0 ${classes?.container || ''}`}>
          {name && (
            <VRARContent>
              <ContentText
                className={`text-[18px] font-normal leading-[26px] text-white !m-[0_0_20px] 
                screen-md:!text-[14px] screen-md:!leading-[20px] screen-md:!m-[0_0_15px] ${classes?.name || ''}`}
                tag="p"
              >
                {name}
              </ContentText>
            </VRARContent>
          )}
          {title && (
            <VRARContent>
              <MainTitleWithoutSize
                className={`text-[50px] font-medium leading-[64px] mb-[80px] max-w-[1210px] text-white 
                min-xxxl:max-w-[1480px] 
                screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:mb-[60px] 
                screen-md:text-[25px] screen-md:leading-[35px] screen-md:mb-[40px] ${classes?.titleBlock || ''}`}
              >
                {title}
              </MainTitleWithoutSize>
            </VRARContent>
          )}
        </PageContainer>
        <VRARContent>
          <DragSlider
            data={data}
            withoutDots
          />
        </VRARContent>
      </div>
    </div>
  );
}

export default DragInfoBlock;
