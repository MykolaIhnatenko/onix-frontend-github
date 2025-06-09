import { StaticImageData } from 'next/image';

import { useAppSelector } from 'hook/reduxToolkit';
import ContentText from '../ContentText/ContentText';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import VRARContent from '../VRARContent/VRARContent';
import OurSolutionsItem from './components/OurSolutionsItem';
import IOurSolutions from './interfaces/IOurSolutions';

function OurSolutions({
  upTitle, title, firstText, secondText, data, desktopViewOnXL, classes,
}: IOurSolutions) {
  const {
    screenSizes: {
      isXSDevice,
      isSMDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = (img: StaticImageData, imgTablet: StaticImageData, imgMobile: StaticImageData) => {
    if (isMDDevice) {
      return imgTablet;
    }

    if (isXSDevice || isSMDevice) {
      return imgMobile;
    }

    return img;
  };

  return (
    <div className={`py-[120px] screen-lg:py-[80px] ${classes?.section || ''}`}>
      {(upTitle || title || firstText || secondText) && (
        <PageContainer className={`pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px] ${classes?.titleContainer || ''}`}>
          {upTitle && (
            <VRARContent>
              <ContentText tag="p" marginAbsent className={`!mb-[20px] screen-md:!mb-[15px] ${classes?.upTitle || ''}`}>
                {upTitle}
              </ContentText>
            </VRARContent>
          )}
          {title && (
            <VRARContent>
              <MainTitle className={`max-w-[1080px] min-xxxl:max-w-[1480px] ${classes?.title || ''}`}>
                {title}
              </MainTitle>
            </VRARContent>
          )}
          {(firstText || secondText) && (
            <div
              className={`
                mt-[40px] screen-md:mt-[30px] max-w-[1300px] min-xxxl:max-w-[1480px]
                flex flex-col gap-[40px] screen-lg:gap-[30px] screen-md:gap-[20px]
                ${classes?.textBlock || ''}
              `}
            >
              {firstText && (
                <VRARContent>
                  <ContentText
                    tag="p"
                    marginAbsent
                    className={`max-w-[630px] min-xxxl:max-w-[710px] ${classes?.firstText || ''}`}
                  >
                    {firstText}
                  </ContentText>
                </VRARContent>
              )}
              {secondText && (
                <VRARContent>
                  <ContentText
                    tag="p"
                    marginAbsent
                    className={`
                      max-w-[630px] min-xxxl:max-w-[710px] !ml-auto screen-lg:!ml-0
                      ${classes?.secondText || ''}
                    `}
                  >
                    {secondText}
                  </ContentText>
                </VRARContent>
              )}
            </div>
          )}
        </PageContainer>
      )}
      <div className={`
          flex flex-col gap-[70px] screen-xl:gap-[60px] screen-md:gap-[30px]
          ${desktopViewOnXL ? 'min-lg:gap-[70px]' : ''}
          ${classes?.content || ''}
        `}
      >
        {data.map(({
          id, title: itemTitle, text, img, imgTablet, imgMobile, animationUrl, type,
        }) => (
          <OurSolutionsItem
            key={id}
            title={itemTitle}
            text={text}
            img={getBackground(img, imgTablet, imgMobile)}
            animationUrl={animationUrl}
            type={type}
            desktopViewOnXL={desktopViewOnXL}
            classes={classes}
          />
        ))}
      </div>
    </div>
  );
}

export default OurSolutions;
