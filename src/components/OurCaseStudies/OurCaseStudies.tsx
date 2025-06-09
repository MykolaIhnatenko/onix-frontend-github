import { useRouter } from 'next/navigation';

import IOurCaseStudies, { IImages } from './interfaces/IOurCaseStudies';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';
import OurCaseStudiesCard from './components/OurCaseStudiesCard';

function OurCaseStudies({
  upTitle, titles, cardList, classes, whiteTheme, isTablet, isMobile,
}: IOurCaseStudies) {
  const router = useRouter();

  const getImage = (images: IImages) => {
    let bg = images.image;
    if (isTablet) {
      bg = images.imageTablet;
    } else if (isMobile) {
      bg = images.imageMobile;
    }
    return bg;
  };

  const goToPage = (url: string) => {
    router.push(url);
  };

  return (
    <PageContainer className={`
        py-[80px] screen-md:p-[60px_15px_40px] bg-color-black
        ${whiteTheme ? 'bg-color-white' : ''}
        ${classes?.section || ''}
      `}
    >
      <div className={`
          text-color-white mb-[40px] screen-md:mb-[30px]
          ${whiteTheme ? '!text-color-black' : ''}
          ${classes?.titleContainer || ''}
        `}
      >
        <ContentText tag="p" marginAbsent className={`!mb-[20px] ${classes?.upTitle || ''}`}>
          {upTitle}
        </ContentText>
        {Array.isArray(titles) ? titles.map((title, index) => (
          <MainTitle
            key={[title, index].join('_')}
            tag="p"
            className={`
              mb-[60px] screen-lg:mb-[40px] screen-md:mb-[20px] last:mb-0
              ${classes?.title || ''}
            `}
          >
            {title}
          </MainTitle>
        )) : (
          <MainTitle tag="p" className={`${classes?.title || ''}`}>
            {titles}
          </MainTitle>
        )}
      </div>
      <div className={`
          flex flex-col gap-[40px] screen-lg:gap-[30px] screen-md:gap-[20px]
          ${classes?.cardsContainer || ''}
        `}
      >
        {cardList.length > 0 && cardList.map((item) => (
          <OurCaseStudiesCard
            key={item.id}
            id={item.id}
            title={item.title}
            descLeft={item.descLeft}
            descRight={item.descRight}
            image={getImage(item.images)}
            goToPage={() => goToPage(item.url || '')}
            whiteTheme={whiteTheme}
            classes={classes}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default OurCaseStudies;
