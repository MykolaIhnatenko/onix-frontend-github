import PageContainer from 'components/PageContainer/PageContainer';
import AccordionHorizontal from '../AccordionHorizontal/AccordionHorizontal';
import ImageComponent from '../Image/Image';
import { ICooperateBlock } from './interfaces/ICooperateBlock';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';

function CooperateBlock({
  whiteTheme, data, title, subtitle, background, classes,
}: ICooperateBlock) {
  return (
    <section className={`
        relative p-[80px_0_120px] screen-xl:p-[80px_30px] screen-md:p-[80px_15px]
        ${whiteTheme ? 'bg-color-white text-color-black' : 'bg-color-black text-color-white'}
        ${classes?.section || ''}
      `}
    >
      {background && (
        <div className={`
            absolute top-0 left-0 w-full h-[296px] screen-xl:h-[296px] screen-lg:h-[246px]
            screen-md:h-[287px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full
            before:h-[80px] before:bg-gradient-to-b before:from-transparent before:to-black
            ${classes?.background || ''}
          `}
        >
          <ImageComponent
            src={background}
            alt="page background"
            sizes="100vw"
            style={{ userSelect: 'none' }}
            className={`w-full h-full object-cover object-top ${classes?.sectionImage || ''}`}
          />
        </div>
      )}
      {(title || subtitle) && (
        <PageContainer className="relative screen-xl:!p-0">
          {title && (
            <MainTitle className={`mb-[40px] ${classes?.title || ''}`}>
              {title}
            </MainTitle>
          )}
          {subtitle && (
            <ContentText
              tag="p"
              marginAbsent
              className={`max-w-[810px] screen-md:max-w-full ${classes?.subTitle || ''}`}
            >
              {subtitle}
            </ContentText>
          )}
        </PageContainer>
      )}
      <AccordionHorizontal
        data={data}
        whiteTheme={whiteTheme}
        classes={classes}
      />
    </section>
  );
}

export default CooperateBlock;
