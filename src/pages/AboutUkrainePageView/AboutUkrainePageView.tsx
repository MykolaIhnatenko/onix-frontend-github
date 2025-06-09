import { useAppSelector } from '../../hook/reduxToolkit';
import WorkDuringWartime from './components/WorkDuringWartime';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import PublicHolidays from './components/PublicHolidays';
import OurExpertiseSection from '../../components/OurExpertiseSection/OurExpertiseSection';
import ITIndustry from './components/ITIndustry';
import AboutUkraineMainBlock from './components/AboutUkraineMainBlock';
import aboutUkraineOurExpertiseSectionData from './data/aboutUkraineOurExpertiseSectionData';
import ButtonTypes from '../../constants/ButtonTypes';
import { ButtonType } from '../../constants/enums';
import IosContactUsBg3 from '../../assets/images/iosPage/img_contact_us_bg3@2x.webp';
import IosContactUsBgMobile3 from '../../assets/images/iosPage/img_contact_us_bg3_mobile@2x.webp';
import IosContactUsBgTablet3 from '../../assets/images/iosPage/img_contact_us_bg3_tablet@2x.webp';

function AboutUkrainePageView() {
  const { screenSizes: { isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg = { tellUs: IosContactUsBg3 };
    if (isSMDevice) {
      bg.tellUs = IosContactUsBgTablet3;
    } else if (isXSDevice) {
      bg.tellUs = IosContactUsBgMobile3;
    }
    return bg;
  };

  return (
    <>
      <AboutUkraineMainBlock />
      <ITIndustry />
      <OurExpertiseSection
        title={aboutUkraineOurExpertiseSectionData.title}
        firstText={aboutUkraineOurExpertiseSectionData.firstText}
        data={aboutUkraineOurExpertiseSectionData.data}
        classes={{
          section: 'bg-black text-white',
          container: 'screen-lg:pb-[40px] screen-md:pt-[80px]',
          textContainer: 'pb-[80px] screen-lg:pb-0',
          text: '!p-[40px_0px_0px] !w-[670px] !max-w-[670px] m-0 screen-lg:!w-auto screen-lg:!max-w-full '
            + 'screen-md:text-[16px] screen-md:leading-[24px]',
          accordionContainer: 'screen-lg:px-[0px]',
        }}
        blackBlock
      />
      <PublicHolidays />
      <WorkDuringWartime />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().tellUs}
        withButton
        title="Tell us about your product idea and let the&nbsp;magic&nbsp;unfold."
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
    </>
  );
}

export default AboutUkrainePageView;
