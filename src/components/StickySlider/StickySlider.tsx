import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import StickySliderItem from './components/StickySliderItem';
import IStickySlider from './interfaces/IStickySlider';

function StickySlider({
  upTitle, blockTitle, blockText, secondBlockText, data, classes,
}: IStickySlider) {
  return (
    <>
      <PageContainer className={`
        py-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]
        ${classes?.container || ''}
        `}
      >
        {upTitle && (
          <ContentText
            tag="p"
            marginAbsent
            className={`pb-[20px] screen-md:pb-[15px] ${classes?.upTitle || ''}`}
          >
            {upTitle}
          </ContentText>
        )}
        <MainTitle tag="h2" className={`max-w-[678px] ${classes?.blockTitle || ''}`}>
          {blockTitle}
        </MainTitle>
        <div className="max-w-[1300px] min-xxxl:max-w-[1480px]">
          {blockText && (
            <ContentText
              tag="p"
              marginAbsent
              className={`
                w-[630px] pt-[40px] min-xxxl:w-[710px] screen-lg:w-full screen-md:pt-[30px]
                ${classes?.blockText || ''}
              `}
            >
              {blockText}
            </ContentText>
          )}
          {secondBlockText && (
            <ContentText
              tag="p"
              marginAbsent
              className={`
                w-[630px] !ml-auto pt-[40px] min-xxxl:w-[710px] screen-lg:w-full screen-md:pt-[30px] screen-md:!ml-0
                ${classes?.secondBlockText || ''}
              `}
            >
              {secondBlockText}
            </ContentText>
          )}
        </div>
      </PageContainer>
      <div className={`relative ${classes?.content || ''}`}>
        {data.map(({
          id, number, title, text, image,
        }) => (
          <StickySliderItem
            key={id}
            id={id}
            number={number}
            title={title}
            text={text}
            image={image}
            classes={classes}
          />
        ))}
      </div>
    </>
  );
}

export default StickySlider;
