import IScrollTextAnimation from './interfaces/IScrollTextAnimation';
import ScrollTextAnimationItem from './components/ScrollTextAnimationItem';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';
import { ScrollTextAnimationTitle } from 'constants/titleEnums';

function ScrollTextAnimation({
  title = ScrollTextAnimationTitle.TITLE, textList, description,
  scaleIndex, scaleIndexTablet, themeBlack, scaleIndexMobile, classes,
}: IScrollTextAnimation) {
  return (
    <PageContainer
      className={`
        w-full flex flex-col overflow-hidden py-[120px] screen-lg:py-[80px]
        ${themeBlack ? 'bg-color-black' : 'bg-color-white'}
        ${classes?.container || ''}
      `}
    >
      <MainTitle className={`
        font-generalSans font-medium text-[50px]/[64px] mb-[40px] max-w-[1080px]
        screen-lg:text-[40px]/[56px] screen-md:text-[25px]/[35px] min-xxxl:max-w-[1480px]
        ${themeBlack ? 'text-color-white' : 'text-color-black'}
        ${classes?.title || ''}
        `}
      >
        {title}
      </MainTitle>
      {description && (
        <ContentText
          tag="p"
          marginAbsent
          className={`
            !text-[20px]/[28px] mb-[40px] max-w-[660px] screen-lg:!text-[18px]/[26px]
            screen-lg:max-w-[85%] screen-md:!text-[16px]/[24px] screen-md:max-w-full
            ${themeBlack ? 'text-color-white' : 'text-color-black'}
            ${classes?.description || ''}
          `}
        >
          {description}
        </ContentText>
      )}
      <div
        className={`flex flex-col items-center w-full ${classes?.contentContainer || ''}`}
      >
        {textList.map((item, index) => (
          <ScrollTextAnimationItem
            key={[item, index].join()}
            item={item}
            scaleIndex={scaleIndex}
            scaleIndexTablet={scaleIndexTablet}
            scaleIndexMobile={scaleIndexMobile}
            themeBlack={themeBlack}
            stylesText={classes?.itemText || ''}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default ScrollTextAnimation;
