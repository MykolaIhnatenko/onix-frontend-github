import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import AchievementsCarouselRow from './components/AchievementsCarouselRow';
import mapAchievements from '../../utils/mapAchievements';
import IAchievementsBlock from './interfaces/IAchievementsBlock';
import { useAppSelector } from 'hook/reduxToolkit';
import AchievementsGradientBackground from 'components/AchievementBlock/components/AchievementsGradientBackground';

function AchievementsBlock({ title, classes = {}, achievements }: IAchievementsBlock) {
  const {
    screenSizes: {
      isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isSMDevice || isXSDevice;

  const itemCls = 'ml-[80px] w-[348px] h-[348px] screen-lg:ml-[80px] '
    + 'screen-md:ml-[20px] screen-md:w-[200px] screen-md:h-[200px]';
  const achievementsData = mapAchievements(achievements);
  const half = Math.ceil(achievementsData.length / 2);
  const topData = achievementsData.slice(0, half);
  const botData = achievementsData.slice(half);

  return (
    <div
      className={`bg-black overflow-hidden relative ${classes?.container || ''}
      ${achievements?.length === 0 ? '!hidden' : ''}`}
    >
      <AchievementsGradientBackground />
      {!!title && (
        <PageContainer className="relative bg-black pt-[80px]">
          <MainTitle className={`text-white min-lg:max-w-[1085px] ${classes?.title || ''}`}>
            {title}
          </MainTitle>
        </PageContainer>
      )}

      <div
        className="relative bg-black mix-blend-darken py-[80px] space-y-5
        screen-lg:py-[60px] screen-md:py-[40px]"
      >
        {isMobile ? (
          <AchievementsCarouselRow
            items={achievementsData}
            itemClassName={itemCls}
            reverse
          />
        ) : (
          <>
            <AchievementsCarouselRow
              items={topData}
              itemClassName={itemCls}
              reverse={false}
            />
            <AchievementsCarouselRow
              items={botData}
              itemClassName={itemCls}
              reverse
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AchievementsBlock;
