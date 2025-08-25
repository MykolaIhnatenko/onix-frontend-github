import { benefitsClasses } from 'constants/tailwindStyle';
import { IBenefitsData } from '../../BrandingDesignPageView/interfaces/IBenefitsSection';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

const cardClasses = `screen-md:!pb-0 screen-md:!pr-[15px] screen-md:!pl-[15px] screen-md:!mr-[15px]
screen-md:!ml-[15px] !bg-black !border-b-[2px] !border-white screen-md:!border-b-[2px] screen-md:!border-white`;
const textMode = '!max-w-[519px] screen-lg:!max-w-[648px] !border-b-0';
const textClasses = '!max-w-[565px] screen-lg:!max-w-[648px] !border-b-0';

const travelBenefitsSectionData:IBenefitsData[] = [
  {
    id: 1,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="p">01</MainTitleWithoutSize>
        <MainTitleWithoutSize className={`${benefitsClasses.text} ${textMode}`} tag="h3">
          Automate day-to-day tasks and enhance business efficiency
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="p">02</MainTitleWithoutSize>
        <MainTitleWithoutSize className={`${benefitsClasses.text} ${textClasses}`} tag="h3">
          Increase customer satisfaction by offering an enhanced travel experience
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="p">03</MainTitleWithoutSize>
        <MainTitleWithoutSize className={`${benefitsClasses.text} ${textMode}`} tag="h3">
          Keep your business open 24/7 and reach customers anytime, anywhere
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="p">04</MainTitleWithoutSize>
        <MainTitleWithoutSize className={`${benefitsClasses.text} ${textClasses}`} tag="h3">
          Gain valuable insights on guest behavior and offer more personalized offerings
        </MainTitleWithoutSize>
      </div>
    ),
  },
];

export default travelBenefitsSectionData;
