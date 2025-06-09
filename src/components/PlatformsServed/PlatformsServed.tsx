import ImageComponent from '../Image/Image';
import PageContainer from '../PageContainer/PageContainer';
import { IPlatformsServedProps } from './interfaces/IPlatformsServed';
import MainTitle from 'components/MainTitle/MainTitle';
import { useAppSelector } from 'hook/reduxToolkit';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

function PlatformsServed({
  title, text, content, background, blackTheme, classes,
}: IPlatformsServedProps) {
  const { isSMDevice, isXSDevice } = useAppSelector((state) => state.app.screenSizes);

  const isMobile = isSMDevice || isXSDevice;

  return (
    <section className={`relative ${blackTheme ? 'bg-color-black text-color-white' : ''}`}>
      {background && (
        <div className={`
            absolute top-0 left-0 w-full h-[464px] screen-lg:h-[424px] screen-md:h-[361px]
            after:content-[""] after:h-[80px] after:w-full after:absolute after:bottom-0
            after:bg-gradient-to-t after:from-[#000] after:to-transparent
            ${classes?.background || ''}
          `}
        >
          <ImageComponent
            src={background}
            alt="background image"
            sizes="100vw"
            fill
            quality={96}
            className={`w-full h-full object-cover object-left-top ${classes?.backgroundImg || ''}`}
          />
        </div>
      )}
      <PageContainer
        className={`
          py-[80px] screen-lg:pb-[40px] screen-md:pt-[40px] relative
          ${classes?.container || ''}
        `}
      >
        <MainTitle className={`mb-[20px] ${classes?.title || ''}`}>
          {title}
        </MainTitle>
        <ContentTextNew
          text={text}
          className={`
            max-w-[1080px] mb-[56px] screen-lg:mb-[36px] screen-md:mb-[20px]
            ${classes?.text || ''}
          `}
        />
        {content.map((item) => (
          <div
            key={item.id}
            className={`
              flex justify-between pt-[22px] border-t-2 border-solid border-color-black
              screen-xl:flex-col screen-md:pt-0
              ${blackTheme ? '!border-color-white' : ''}
              ${classes?.content || ''}
            `}
          >
            <MainTitle className={`
                !text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
                py-[24px] min-xl:min-w-[300px]
                ${classes?.contentTitle || ''}
              `}
            >
              {item.itemTitle}
            </MainTitle>
            <div className={`
                grid grid-cols-3 gap-y-[22px] w-full max-w-[856px] screen-md:grid-cols-1 screen-md:gap-y-[10px]
                ${classes?.itemContent || ''}
              `}
            >
              {item.itemContent.map((itemIcon) => (
                <div
                  key={itemIcon.id}
                  className={`
                    flex flex-col items-center text-center min-md:min-w-[230px] w-full p-[31px_0_22px]
                    screen-md:flex-row-reverse screen-md:justify-end screen-md:gap-[8px] screen-md:p-0
                    ${classes?.itemIcon || ''}
                  `}
                >
                  <ContentTextNew
                    text={itemIcon.itemIconTitle}
                    className={`
                      min-md:text-[20px]/[28px] mb-[29px] screen-md:mb-0
                      ${classes?.itemIconTitle || ''}
                    `}
                  />
                  <div className={`
                      screen-md:w-[50px] screen-md:h-[50px] flex justify-center items-center
                      ${classes?.icon || ''}
                    `}
                  >
                    {isMobile && itemIcon.iconMobile ? itemIcon.iconMobile : itemIcon.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </PageContainer>
    </section>
  );
}

export default PlatformsServed;
