import PageContainer from '../PageContainer/PageContainer';
import ContentText from '../ContentText/ContentText';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import VRARContent from '../VRARContent/VRARContent';
import ICoreTechnology from './interfaces/ICoreTechnology';

function CoreTechnology({
  data, title = 'Core technology stack we\u00A0used', background, blackTheme = false, classes = {},
}: ICoreTechnology) {
  return (
    <div className={`relative ${blackTheme ? 'bg-color-black text-white' : ''} ${classes.container || ''}`}>
      {background && (
        <div className={`absolute top-0 left-0 w-full max-h-[100%] ${classes.background || ''}`}>
          <ImageComponent
            className="w-full h-full object-cover object-bottom"
            src={background}
            alt="background"
            sizes="100vw"
          />
        </div>
      )}
      <PageContainer className={`py-[120px] relative screen-lg:py-[80px] ${classes.contentContainer || ''}`}>
        <VRARContent>
          <MainTitle className={`pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px] ${classes.title || ''}`}>
            {title}
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <div className={`w-full py-[40px] border-t-2 border-b-2 screen-md:py-[20px] 
               ${blackTheme ? 'border-white' : 'border-black'} ${classes.content || ''}`}
          >
            <div className={`max-w-full flex gap-[30px] justify-start flex-wrap ${classes.contentItem || ''}`}>
              {data.map((item, index) => (
                <VRARContent key={[data, index].join('_')}>
                  <ContentText
                    marginAbsent
                    tag="p"
                    className={`!text-[20px] !leading-7 screen-md:!text-[16px] screen-md:!leading-[24px]
                    ${classes.itemText || ''}`}
                  >
                    {item}
                    {index !== data.length - 1 ? ',' : ''}
                  </ContentText>
                </VRARContent>
              ))}
            </div>
          </div>
        </VRARContent>
      </PageContainer>
    </div>
  );
}

export default CoreTechnology;
