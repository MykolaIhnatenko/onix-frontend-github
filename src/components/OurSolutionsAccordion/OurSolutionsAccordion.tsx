import AnimationChallengesDesktop from 'components/AnimationChallengesDesktop/AnimationChallengesDesktop';
import IOurSolutionsAccordion from './interfaces/IOurSolutionsAccordion';
import AccordionTemplate from 'components/AccordionTemplate/AccordionTemplate';
import { AccordionBlackStyleTypes, AccordionWhiteStyleTypes } from 'constants/AccordionStyleTypes';
import { useAppSelector } from '../../hook/reduxToolkit';

function OurSolutionsAccordion({
  accordionData, list, stylesVariant,
  isAccordionBlack = false, iconBlack = false, Tag = 'p', iconStyles = {}, descStyles = {},
}: IOurSolutionsAccordion) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice || isMDDevice;

  const accordionStyle = isAccordionBlack
    ? AccordionBlackStyleTypes.ACTIVE_WHITE_TITLE_AND_CONTENT
    : AccordionWhiteStyleTypes.ACTIVE_BLACK_TITLE_AND_CONTENT;

  return (
    <div className={`w-full relative flex flex-col p-[0_70px_120px] min-xxxl:p-[0_80px_120px]
      screen-lg:p-[0_0_80px] screen-md:p-[0_0_80px] bg-black
      ${stylesVariant || ''}`}
    >
      {isMobile ? (
        <AccordionTemplate
          data={accordionData}
          activeFirst
          isAccordionBlack={isAccordionBlack}
          accordionStyleTypes={accordionStyle}
        />
      ) : (
        <AnimationChallengesDesktop
          list={list}
          iconBlack={iconBlack}
          Tag={Tag}
          classesItem={iconStyles}
          stylesVariant={descStyles}
        />
      )}
    </div>
  );
}

export default OurSolutionsAccordion;
