import { benefitsClasses } from 'constants/tailwindStyle';
import { IBenefitsData } from '../../BrandingDesignPageView/interfaces/IBenefitsSection';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

const cardClasses = '!h-[266px] screen-md:!h-[230px] !flex !flex-col !justify-between';

const devopsSolutionsBenefitsSectionData:IBenefitsData[] = [
  {
    id: 1,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">01</MainTitleWithoutSize>
        <MainTitleWithoutSize
          className={benefitsClasses.text}
          tag="h3"
        >
          Increased brand recognition
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">02</MainTitleWithoutSize>
        <MainTitleWithoutSize
          className={benefitsClasses.text}
          tag="h3"
        >
          High credibility and trust
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">03</MainTitleWithoutSize>
        <MainTitleWithoutSize
          className={benefitsClasses.text}
          tag="h3"
        >
          Differentiation from competitors
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">04</MainTitleWithoutSize>
        <MainTitleWithoutSize className={benefitsClasses.text} tag="h3">Enhanced customer loyalty</MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">05</MainTitleWithoutSize>
        <MainTitleWithoutSize
          className={benefitsClasses.text}
          tag="h3"
        >
          Brand consistency and cohesion
        </MainTitleWithoutSize>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className={`${benefitsClasses.card} ${cardClasses}`}>
        <MainTitleWithoutSize className={benefitsClasses.number} tag="span">06</MainTitleWithoutSize>
        <MainTitleWithoutSize
          className={`${benefitsClasses.text} screen-md:!border-b-[0px]`}
          tag="h3"
        >
          Expanded market reach
        </MainTitleWithoutSize>
      </div>
    ),
  },
];

export default devopsSolutionsBenefitsSectionData;
