import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import { ITrustUsBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';
import JakartaTitle from '../../../components/JakartaTitle/JakartaTitle';
import JakartaText from '../../../components/JakartaText/JakartaText';
import VRARContent from '../../../components/VRARContent/VRARContent';

function CardsBlockMain({
  data, dropBlockTitle, dropBlockBtnTitle, classes,
  dropBlockBgVariant, dropBlockVariant, mobileBg, dropBlockText,
  withBtn, withoutDropBlockBg, tabletBg, disableBg,
  withoutAnimate = true, idBtn, animatedGradient = true, isPInDropBlockTitle, hiddenTitleInTablet,
}: ITrustUsBlock) {
  return (
    <div className={`
      max-w-[1920px] pt-[100px] mx-auto relative bg-white screen-lg:pt-[80px] screen-md:pt-[60px]
      `}
    >
      <VRARContent>
        <JakartaTitle
          className={`normal-case mb-[20px] px-[15px] z-[2] relative min-md:px-[30px] max-w-[1080px]
          min-md:mb-[30px] min-lg:mb-[40px] min-lg:px-[70px] min-xxxl:px-[80px] min-xxxl:max-w-[1480px] 
          `}
        >
          Our software development and rescue services that will move you&nbsp;forward
        </JakartaTitle>
      </VRARContent>
      <VRARContent>
        <JakartaText
          className={`normal-case tracking-[-0.01em] max-w-[630px] mb-[30px] mx-[15px] z-[2] relative
           min-xxxl:max-w-[710px]
           screen-lg:max-w-[708px]
           min-md:ml-[30px] min-md:mb-[40px] min-lg:mb-[60px] min-lg:ml-[70px] min-xxxl:ml-[80px]
           screen-md:!text-[14px]/[1.5]
          `}
        >
          Think of Onix as your one-stop rescue shop. We offer a full
          spectrum of software development services geared towards
          {' '}
          <span className="font-bold">
            project recovery and&nbsp;modernization.
          </span>
        </JakartaText>
      </VRARContent>
      <CardsBlock
        isJakarta
        idBtn={idBtn}
        data={data}
        dropBlockTitle={dropBlockTitle}
        dropBlockBtnTitle={dropBlockBtnTitle}
        dropBlockBg={dropBlockBgVariant}
        dropBlockVariant={dropBlockVariant}
        mobileBg={mobileBg}
        dropBlockText={dropBlockText}
        disableBg={disableBg}
        withoutAnimate={withoutAnimate}
        withBtn={withBtn}
        withoutDropBlockBg={withoutDropBlockBg}
        tabletBg={tabletBg}
        classes={classes?.CardsBlockClasses}
        animatedGradient={animatedGradient}
        isPInDropBlockTitle={isPInDropBlockTitle}
        hiddenTitleInTablet={hiddenTitleInTablet}
      />
    </div>
  );
}

export default CardsBlockMain;
