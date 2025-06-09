import ShellChairMainSection from './components/ShellChairMainSection';
import ShellChairChallengesSection from './components/ShellChairChallengesSection';
import { ButtonType } from '../../constants/enums';
import useBackground from '../../hook/useBackground';
import ShellChairCallToActionBg from '../../assets/images/shellChair/callToActionBlock/img@2x.webp';
import ShellChairCallToActionBgTablet from '../../assets/images/shellChair/callToActionBlock/img_tablet@2x.webp';
import ShellChairCallToActionBgMobile from '../../assets/images/shellChair/callToActionBlock/img_mobile@2x.webp';
import ShellChairResultsSection from './components/ShellChairResultsSection';
import technologies from './data/technologies';
import BorderedTechnologiesBlock from '../../components/BorderedTechnologiesBlock/BorderedTechnologiesBlock';
import OurSolutionsWithCarouselAndCards
  from '../../components/OurSolutionsWithCarouselAndCards/OurSolutionsWithCarouselAndCards';
import ourSolutionsData from './data/ourSolutionsData';
import carouselData from './data/solutionsCarouselData';
import ShellChairSolutionBg from '../../assets/images/shellChair/solutionsSection/img_solution_bg@2x.webp';
import solutionCardsData from './data/solutionCardsData';
import VRARCallToActionComponent from '../../components/VRARCallToActionBlock/VRARCallToActionComponent';
import IPageStatus from 'interfaces/IPageStatus';
import businessContextBlockData from './data/businessContextBlockData';
import aboutBlockData from './data/aboutBlockData.json';
import AboutProjectSection from '../../components/AboutProject/AboutProject';
import CaseStudiesBlockForCases from 'components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function ShellChairPageView({ saleUrl }: IPageStatus) {
  const bg = useBackground(ShellChairCallToActionBg, ShellChairCallToActionBgTablet, ShellChairCallToActionBgMobile);

  return (
    <>
      <ShellChairMainSection />
      <AboutProjectSection
        content={aboutBlockData.content}
        title={aboutBlockData.title}
        subtitle={aboutBlockData.subtitle}
      />
      <BusinessContext
        title={businessContextBlockData.title}
        subTitle={businessContextBlockData.subTitle}
        leftContent={businessContextBlockData.firstText}
        rightContent={businessContextBlockData.secondText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <ShellChairChallengesSection />
      {!saleUrl && (
        <VRARCallToActionComponent
          id={ButtonType.CASE}
          background={bg}
          withButton
          title="Ready to transform your user engagement by leveraging best-in-class design&nbsp;solutions?"
          btnText="Contact us"
          classes={{
            cta: '!p-[120px_70px] screen-lg:!p-[80px_30px] screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]',
            title: '!max-w-[1078px] screen-lg:!max-w-[708px] screen-lg:!pb-[40px] screen-md:!pb-[30px]',
            btn: 'screen-md:!max-w-[330px]',
          }}
        />
      )}
      <OurSolutionsWithCarouselAndCards
        firstText={ourSolutionsData.firstText}
        secondText={ourSolutionsData.secondText}
        carouselData={carouselData}
        carouselBlockBackground={ShellChairSolutionBg}
        cardsData={solutionCardsData}
      />
      <BorderedTechnologiesBlock
        technologies={technologies}
        title="Core technology stack we&nbsp;used"
        classes={{
          technologiesBlock: '',
          container: '!pt-0 min-lg:my-0 min-lg:mx-0',
          titleContainer: '',
          technologies: '!gap-[30px] min-lg:mt-[80px] min-lg:mb-[120px]',
          technology: '',
          title: '',
        }}
      />
      <ShellChairResultsSection />
      <CaseStudiesBlockForCases
        sliderIds={[62, 63, 56, 1000]}
        saleUrl={saleUrl}
      />
      {!saleUrl && (
        <VRARCallToActionComponent
          background={undefined}
          withButton
          title={(
            <>
              94% Of First Impressions Are Design-Related. Ready To Make A Lasting Impression?
              {' '}
              <br className="screen-lg:hidden" />
              Let&apos;s Craft Your Website&nbsp;Today!
            </>
          )}
          btnText="Contact us"
          classes={{
            cta: '!pt-0 screen-md:!p-[0_30px_80px] screen-sm:!p-[0_15px_80px]',
            title: `!max-w-[1118px] !text-[50px] !leading-[64px] screen-lg:!text-[40px]
            screen-lg:!leading-[56px] screen-md:!text-[25px] screen-md:!leading-[35px]
            screen-md:!max-w-full`,
            content: `!max-w-[741px] screen-lg:!max-w-[558px] screen-lg:!pb-[40px]
            screen-md:!m-0 screen-md:!text-left`,
          }}
        />
      )}
    </>
  );
}

export default ShellChairPageView;
