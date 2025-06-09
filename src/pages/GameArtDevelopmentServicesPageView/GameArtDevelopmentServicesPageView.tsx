import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import TellUsAboutMD from '@/images/img_lastCtaTablet@2x.webp';
import TellUsAboutSM from '@/images/img_lastCtaMobile@2x.webp';
import GameArtCTAFirstBg from '@/images/gameArt/callToAction/img_gameArtCTSFirstBg@2x.webp';
import GameArtCTAFirstTabletBg from '@/images/gameArt/callToAction/img_gameArtCTSFirstTabletBg@2x.webp';
import GameArtCTAFirstMobileBg from '@/images/gameArt/callToAction/img_gameArtCTSFirstMobileBg@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import TrustUsBlock from '../MainPage/components/TrustUsBlock';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import GameArtHowBuild from './components/GameArtHowBuild';
import gameArtNumbersData from './data/gameArtNumbersData';
import gameArtQuotesList from './data/gameArtQuotesList';
import gameArtFaqData from './data/gameArtFaqData';
import gameArtMainScreenData from './data/gameArtMainScreenData';
import { gameArtTechnologiesBlocksData, gameArtTechnologiesBlocksNames } from './data/gameArtTechnologiesData';
import gameArtTrustUsCardsData from './data/gameArtTrustUsCardsData.json';
import getTechnologies from '../../utils/getTechnologies';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import {
  ButtonType,
  CardBlockVariant,
} from '../../constants/enums';
import GameArtOutsourcing from './components/GameArtOutsourcing';
import GameArtMainScreen from './components/GameArtMainScreen';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';
import CaseStudiesBgIndustriesDesk from '@/images/industriesPage/img_bg_case_studies_industries@2x.webp';
import GameArtOutsourcingBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing@2x.webp';
import GameArtOutsourcingBigBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_big@2x.webp';
import GameArtOutsourcingTabletBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_tablet@2x.webp';
import GameArtOutsourcingMobileBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_mobile@2x.webp';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';

function GameArtDevelopmentServicesPageView({ pageBlogs }: IPageBlogs) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      callToActionFirst: GameArtCTAFirstBg,
      tellUs: TellUsAboutLG,
      mainScreen: IndustriesMainBg,
      outsourcing: GameArtOutsourcingBg,
    };
    if (isXXXLDevice) {
      bg.mainScreen = IndustriesMainBgBigDesc;
      bg.outsourcing = GameArtOutsourcingBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.callToActionFirst = GameArtCTAFirstTabletBg;
      bg.tellUs = TellUsAboutMD;
      bg.mainScreen = IndustriesMainBgTablet;
      bg.outsourcing = GameArtOutsourcingTabletBg;
    } else if (isXSDevice) {
      bg.callToActionFirst = GameArtCTAFirstMobileBg;
      bg.tellUs = TellUsAboutSM;
      bg.mainScreen = IndustriesMainBgMobile;
      bg.outsourcing = GameArtOutsourcingMobileBg;
    }
    return bg;
  };

  return (
    <>
      <GameArtMainScreen
        title={gameArtMainScreenData.title}
        firstText={gameArtMainScreenData.firstText}
        secondText={gameArtMainScreenData.secondText}
        btnText={gameArtMainScreenData.btnText}
        blockBg={getBackground().mainScreen}
        video="/static/video/onix_3d_web_video.mp4"
        classes={{
          container: 'h-full',
          video: 'object-cover',
          videoPlayer: '!aspect-auto',
        }}
      />
      <GameArtOutsourcing />
      <TrustUsBlock
        idBtn={ButtonType.LAND2}
        data={gameArtTrustUsCardsData}
        title="Benefits of Our 3D Art Development Services"
        variant={CardBlockVariant.GAME_ART}
        dropBlockTitle="Our superpower is Smart 3D Art services with a balanced approach to
         implementing non-standard projects."
        dropBlockBtnTitle="Talk to our expert"
        classes={{
          dropBlock: `!p-[30px] !flex-[33.3333%] screen-xxl:!h-[580px] screen-xl:!h-[500px]
          screen-xl:!p-[20px] screen-xl:!flex-[33.3333%] screen-xl:!justify-between screen-lg:!h-[480px]
          screen-md:!h-[430px]`,
          dropBlockBg: '!opacity-0',
          dropBlockTitle: `!text-left !max-w-none screen-lg:!text-start screen-lg:!m-0
          screen-lg:!text-[24px] screen-lg:!leading-[34px] screen-md:!pb-[55px]
          screen-md:!text-[25px] screen-md:!leading-[35px]`,
          buttonWrapper: 'screen-xl:!m-0 screen-xl:!max-w-none',
          cardClasses: {
            card: 'screen-xxl:!h-[580px] screen-xl:!h-[500px] screen-lg:!h-[480px] screen-md:!h-[430px]',
          },
        }}
      />
      <CaseStudiesBlock
        sliderIds={[49, 53, 1000]}
        desc={`Discover the stunning 3D game art we've created for diverse projects and witness
          our exceptional artistry firsthand.`}
        background={CaseStudiesBgIndustriesDesk}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'screen-md:!h-[270px]',
          bgImg: '!object-center',
          title: 'screen-lg:!mb-[30px]',
          desc: `max-w-[780px] min-xxxl:max-w-[770px] screen-lg:max-w-[708px]
            screen-md:max-w-[450px] mb-[40px] screen-lg:!mb-[80px] screen-md:!text-[16px]/[24px]`,
        }}
      />
      <AchievementsBlock
        title="Why Choose Onix for 3D Game Art Outsourcing Development Services"
      />
      <NumbersBlock
        data={gameArtNumbersData}
        classes={{
          table: `!bg-black !mt-0 !p-[24px_70px_80px]
            min-xxxl:!p-[24px_80px_80px]
            screen-lg:!p-[20px_30px_50px]
            screen-md:!p-[10px_15px_50px]`,
          rowClasses: {
            tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
              min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
              not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white
              last:!border-none`,
            title: '!text-white',
            text: '!text-white',
          },
        }}
      />
      <TechnologiesBlock
        pageTitle={gameArtTechnologiesBlocksData.pageTitle}
        subTitle={gameArtTechnologiesBlocksData.subTitle}
        technologies={getTechnologies(gameArtTechnologiesBlocksNames)}
        withoutComma
        classes={{
          container: `!p-[80px_70px] min-xxxl:!p-[80px_80px]
          screen-lg:!p-[80px_30px] screen-md:!p-[80px_15px]`,
          sectionTitle: 'screen-lg:!mb-[40px] screen-md:!mb-[30px]',
          sectionSubTitle: `min-lg:!mb-[40px] !max-w-[783px] screen-md:!mb-[30px] screen-md:!mt-[30px]
          screen-md:!text-[16px] screen-md:!leading-[24px]`,
          technologies: {
            technology: '!flex !flex-col screen-lg:!mt-0 screen-lg:!overflow-hidden',
            keyTitle: `!w-full !border-t-2 !border-black !py-[32px] screen-lg:!m-0
            screen-lg:!py-[32px] screen-md:!py-[15px]`,
            technologiesList: `!flex !flex-wrap !gap-y-[30px] !left-0 !overflow-hidden !p-[30px_0_0]
            screen-lg:!p-[30px_0_0] screen-lg:!gap-y-[30px]
            screen-md:!gap-y-[15px] screen-md:!p-0`,
            item: `!w-[25%] !m-0 !py-[14px] screen-xl:!flex screen-xl:!items-start
            screen-lg:!w-[47%] screen-md:!w-fit screen-md:!mr-[15px] screen-md:!p-0
            screen-md:after:!content-[',']
            screen-md:after:!pr-[10px] last:after:!content-none`,
            itemHover: '!w-fit !relative',
            icon: '!left-[50%]',
            iconTitle: '!pr-[20px] screen-md:!p-[0]',
          },
        }}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().callToActionFirst}
        withButton
        title={(
          <>
            Discuss your project&apos;s unique requirements and learn how our custom 3D game
            art development services can bring your vision to&nbsp;life.
          </>
        )}
        btnText="Speak to Our Expert"
        classes={{
          cta: '!p-[160px_70px] screen-lg:!p-[126px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
          background: 'after:!hidden',
          title: '!pb-[40px] !max-w-[1115px] screen-lg:!max-w-[708px] screen-md:!pb-[20px] screen-md:!max-w-none',
        }}
      />
      <ReviewBlock
        quotesList={gameArtQuotesList}
      />
      <GameArtHowBuild />
      {!!pageBlogs?.length && (
        <OurInsights pageBlogs={pageBlogs} />
      )}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().tellUs}
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        withButton
      />
      <FAQBlock faqData={gameArtFaqData} />
    </>
  );
}

export default GameArtDevelopmentServicesPageView;
