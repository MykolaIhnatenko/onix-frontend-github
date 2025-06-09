import CarouselAutomatic from '../CarouselAutomatic/CarouselAutomatic';
import { IAchievementsBlock } from '../AchievementsCarouselItem/interfaces/IAchievementsCarouselItem';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import achievementsCarouselBotData from '../../pages/MainPage/data/achievementsCarouselBotData';
import achievementsCarouselTopData from '../../pages/MainPage/data/achievementsCarouselTopData';
import ImageComponent from '../Image/Image';
import Background from '../../assets/images/achievements/bg.webp';

function AchievementsBlock({
  title,
  topCarousel = achievementsCarouselTopData,
  classesTop, classesBottom, classes = {},
}: IAchievementsBlock) {
  const topClasses = classesTop || {
    animation: 'animate-achievements-devops '
      + 'screen-md:animate-achievements-devops-mobile ',
    item: 'ml-[80px] w-[348px] h-[348px] screen-lg:ml-[80px] '
      + ' screen-md:ml-[20px] screen-md:w-[200px] screen-md:h-[200px]',
  };
  const bottomClasses = classesBottom || {
    animation: 'animate-achievements-devops-revert '
      + 'screen-md:animate-achievements-devops-revert-mobile ',
    item: 'ml-[80px] w-[348px] h-[348px] screen-lg:ml-[80px] '
      + ' screen-md:ml-[20px] screen-md:w-[200px] screen-md:h-[200px]',
  };

  return (
    <div
      className={`bg-black overflow-hidden relative
      ${classes?.container || ''}`}
    >
      <ImageComponent src={Background} fill />
      {!!title && (
        <PageContainer className="relative bg-black pt-[80px]">
          <MainTitle
            className={`text-white min-lg:max-w-[1085px] ${classes?.title || ''}`}
          >
            {title}
          </MainTitle>
        </PageContainer>
      )}
      <div className="relative bg-black mix-blend-darken py-[60px]">
        <CarouselAutomatic
          data={topCarousel}
          classes={topClasses}
          industriesCarousel
        />
        <div className="h-5" />
        <CarouselAutomatic
          data={achievementsCarouselBotData}
          classes={bottomClasses}
          industriesCarousel
        />
      </div>
    </div>
  );
}

export default AchievementsBlock;
