import ImageComponent from 'components/Image/Image';
import IBusinessContextTemplate from './interfaces/IBusinessContextTemplate';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContentText from 'components/VRARContentText/VRARContentText';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARMainTitleWithoutSize from 'components/VRARMainTitleWithoutSize/VRARMainTitleWithoutSize';

function BusinessContextTemplate({
  upTitle, title, subTitle, subText, children, blackTheme, background, classes,
}: IBusinessContextTemplate) {
  return (
    <PageContainer
      tag="section"
      className={`
        overflow-hidden relative py-[120px] screen-lg:py-[80px]
        ${blackTheme ? 'bg-color-black text-white' : ''}
        ${classes?.section || ''}
      `}
    >
      {background && (
        <div className={`
          absolute overflow-hidden left-0 top-0 w-full h-[464px] screen-lg:h-[424px] screen-md:h-[361px]
          after:absolute after:bottom-0 after:w-full after:h-[70px]
          after:bg-gradient-to-t after:from-color-white after:to-transparent after:content-['']
          ${classes?.bgContainer || ''}
        `}
        >
          <ImageComponent
            src={background}
            fill
            alt="background"
            sizes="100vw"
            quality={93}
            className={`w-full h-full object-cover object-left-top ${classes?.bgImage || ''}`}
          />
        </div>
      )}
      {upTitle && (
        <VRARContentText
          text={upTitle}
          smallFontSizeOnMobile
          classes={{ text: `mb-[20px] screen-md:mb-[15px] ${classes?.upTitle || ''}` }}
        />
      )}
      <VRARMainTitle
        title={title}
        classes={{
          title: `
            mb-[40px] screen-md:mb-[30px] max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full
            ${classes?.title || ''}
          `,
        }}
      />
      {subTitle && (
        <VRARMainTitleWithoutSize
          title={subTitle}
          tag="p"
          classes={{
            title: `
              mb-[40px] screen-md:mb-[30px] max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full
              text-[24px]/[34px] screen-md:text-[20px]/[28px]
              ${classes?.subTitle || ''}
            `,
          }}
        />
      )}
      {children}
      {subText && (
        <VRARMainTitleWithoutSize
          title={subText}
          tag="p"
          classes={{
            title: `
              mt-[40px] screen-md:mt-[30px] max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full
              text-[24px]/[34px] screen-md:text-[20px]/[28px]
              ${classes?.subText || ''}
            `,
          }}
        />
      )}
    </PageContainer>
  );
}

export default BusinessContextTemplate;
