import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import QATrustUsBlock from './components/QATrustUsBlock';
import NumbersBlock from '../../components/NumbersBlock/NumbersBlock';
import QAIconBlock from './components/QAIconBlock';
import QAIndustrySection from './components/QAIndustrySection';
import TechnologiesBlock from '../../components/TechnologiesBlock/TechnologiesBlock';
import QAMainSection from './components/QAMainSection';
import FAQBlock from '../../components/FAQBlock/FAQBlock';
import AchievementsBlock from '../../components/AchievementBlock/AchievementsBlock';
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock';
import OurInsights from '../../components/OurInsightsSection/OurInsights';
import quotesList from './data/quotesList';
import faqData from './data/faqData';
import numbersData from './data/numbersData';
import qaIndustrySectionData from './data/qaIndustrySectionData';
import { technologiesBlocksData, technologiesBlocksNames } from './data/technologiesBlocksData';
import {
  ButtonType,
} from '../../constants/enums';
import getTechnologies from '../../utils/getTechnologies';
import QACallTopTablet from '@/images/qaServicesPage/callToAction/img_qa_call_top_tb.webp';
import QACallTopMobile from '@/images/qaServicesPage/callToAction/img_qa_call_top_mb.webp';
import QACallCenterDesktop from '@/images/qaServicesPage/callToAction/img_qa_call_center_desktop.webp';
import QACallCenterTablet from '@/images/qaServicesPage/callToAction/img_qa_call_center_tablet.webp';
import QACallCenterMobile from '@/images/qaServicesPage/callToAction/img_qa_call_center_mobile.webp';
import QACallTopDesktop from '@/images/qaServicesPage/callToAction/img_qa_call_top_dt.webp';
import BDCallBottomDesktop from '@/images/brandingDesign/img_bd_call_bottom_desktop.webp';
import BDCallBottomTablet from '@/images/img_tell_us_about_md@2x.webp';
import BDCallBottomMobile from '@/images/img_tell_us_about_sm@2x.webp';
import ButtonTypes from '../../constants/ButtonTypes';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { IPageBlogs } from '../../interfaces/IPages';
import QATypesOfTesting from './components/QATypesOfTesting';
import StickySlider from '../../components/StickySlider/StickySlider';
import StickySliderData from './data/qaStickySliderData';
import CooperateBlock from 'components/CooperateBlock/CooperateBlock';
import qaCooperateList from './data/qaCooperateList';

interface IBackground {
  first: StaticImageData,
  second: StaticImageData,
  third: StaticImageData,
}
function QAServicesPageView({ pageBlogs }: IPageBlogs) {
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg: IBackground = {
      first: QACallTopDesktop,
      second: QACallCenterDesktop,
      third: BDCallBottomDesktop,
    };
    if (isMDDevice || isSMDevice) {
      bg.first = QACallTopTablet;
      bg.second = QACallCenterTablet;
      bg.third = BDCallBottomTablet;
    } else if (isXSDevice) {
      bg.first = QACallTopMobile;
      bg.second = QACallCenterMobile;
      bg.third = BDCallBottomMobile;
    }
    return bg;
  };

  const isMobileOrTablet = isMDDevice || isSMDevice || isXSDevice;

  return (
    <>
      <QAMainSection />
      <CallToActionComponent
        id={ButtonType.LAND}
        background={getBackground().first}
        withButton
        title={(
          <>
            Want to reach high app performance and&nbsp;its&nbsp;stability?
          </>
        )}
        btnText="Contact our consultant"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[120px_70px] min-xxxl:!p-[160px_80px_153px] screen-lg:!p-[80px_30px]
          screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: `!max-w-[750px] !text-[40px] !leading-[56px] !text-black screen-lg:!max-w-[560px]
          screen-lg:!text-[30px] screen-lg:!leading-[40px] screen-md:!max-w-unset screen-md:!text-[25px]
          screen-md:!leading-[35px] screen-md:!pb-[30px]`,
          btn: '!max-w-[460px] screen-lg:!text-[18px]',
        }}
      />
      <NumbersBlock
        data={numbersData}
        classes={{
          table: `!mt-0 !p-[80px_70px]
            min-xxxl:!p-[80px_80px_0]
            screen-lg:!p-[100px_30px_80px]
            screen-md:!p-[60px_15px]`,
          rowClasses: {
            tableRow: '!pb-[40px] screen-md:!p-[20px_0]',
            text: `!mt-[10px] !mb-0
            screen-lg:!mt-[5px]
            screen-md:!text-[14px] screen-md:!leading-[20px]`,
          },
        }}
      />
      <AchievementsBlock />
      <CooperateBlock
        title="QA and Software Testing Services&nbsp;at&nbsp;Onix"
        subtitle={`We provide a full line of software testing and quality
          assurance services to ensure the highest quality of your product.`}
        data={qaCooperateList}
        classes={{
          accordion: 'min-xl:!h-[582px]',
          title: 'max-w-[701px]',
          subTitle: 'max-w-[511px] !mb-[80px] screen-lg:max-w-[578px] screen-lg:!mb-[60px] screen-md:!mb-[40px]',
          item: `screen-xl:!flex-col-reverse screen-xl:border-b-0
            screen-xl:!pb-0 screen-xl:mb-[100px] screen-md:mb-[60px]`,
          itemTitle: 'min-xl:!text-[36px]/[46px] !font-generalSans !font-medium',
          itemTitleContainer: 'min-xl:!justify-end screen-xl:mb-[30px] screen-md:mb-[20px]',
          itemContent: '!pl-0 !flex-row-reverse gap-[40px] min-xl:!justify-end',
          itemTextContainer: '!max-w-[580px] min-xl:justify-between',
          itemText: '!mb-0',
          itemImage: `max-w-full max-h-full object-cover screen-xl:max-h-[708px]
            screen-xl:mb-[40px] screen-md:mb-[30px] screen-md:max-h-[330px]`,
        }}
      />
      <QATypesOfTesting isMobileOrTablet={isMobileOrTablet} />
      <ReviewBlock quotesList={quotesList} />
      <QAIconBlock />
      <QAIndustrySection title={qaIndustrySectionData.sectionTitle} data={qaIndustrySectionData.data} />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().second}
        withButton
        title={(
          <>
            Want to increase the performance and stability of your&nbsp;software?
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
        classes={{
          cta: `!p-[180px_70px] min-xxxl:!p-[180px_80px] screen-lg:!p-[120px_30px] screen-md:!p-[80px_30px]
          screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: '!max-w-[1014px] screen-lg:!max-w-[708px] screen-md:!max-w-unset screen-md:!pb-[30px]',
        }}
      />
      <StickySlider
        blockTitle="Our quality assurance process"
        blockText="Our software development process is fully transparent and efficient since
         we use the agile approach. While you are concentrating on the different aspects of
         your business, we are behind the scene professionally delivering our QA and
         software testing services."
        data={StickySliderData}
        classes={{
          blockTitle: 'max-w-[912px]',
        }}
      />
      <QATrustUsBlock />
      <TechnologiesBlock
        pageTitle={technologiesBlocksData.pageTitle}
        technologies={getTechnologies(technologiesBlocksNames)}
        withoutComma={isMDDevice || isSMDevice || isXSDevice}
        classes={{
          container: '!p-[80px_70px] min-xxxl:!p-[80px_80px] screen-lg:!p-[80px_30px_20px] screen-md:!p-[80px_15px]',
          sectionTitle: `!m-0 !text-[50px] !pb-[50px] screen-lg:!text-[40px] screen-lg:!leading-[56px]
          screen-lg:!pb-[60px] screen-md:!text-[25px] screen-md:!leading-[35px] screen-md:!pb-[30px]`,
          technologies: {
            technology: `!flex !flex-col !mt-[10px] screen-lg:!mt-0 screen-lg:!overflow-hidden
            [&:not(:last-child)]:!border-t-2 !border-black`,
            keyTitle: `!text-[40px] !leading-[56px] !my-[32px] !p-0 screen-lg:!m-[40px_0_0] screen-lg:!text-[30px]
            screen-lg:!leading-[40px] screen-md:!m-[20px_0_0] screen-md:!text-[20px] screen-md:!leading-[28px]`,
            technologiesList: `!p-[32px_0] !left-0 !flex !flex-wrap !gap-y-[30px] screen-lg:!p-[25px_0_60px]
            screen-lg:!gap-y-[25px] screen-md:!p-[20px_0] screen-md:!gap-y-[15px]`,
            item: `!w-[25%] !m-0 !p-[14px_0] screen-lg:!w-fit screen-lg:!p-0
            screen-lg:!flex screen-lg:after:!content-[','] screen-lg:after:!pr-[20px]
            screen-md:after:!pr-[15px] last:after:!content-none`,
            itemHover: '!w-fit !relative',
            icon: '!left-[calc(50%-10px)]',
            iconTitle: '!pr-[20px] screen-lg:!pr-0 screen-md:!p-0',
          },
        }}
      />
      {pageBlogs?.length !== 0 && <OurInsights pageBlogs={pageBlogs} />}
      <CallToActionComponent
        id={ButtonType.LAND4}
        background={getBackground().third}
        withButton
        title={(
          <>
            Tell us about your product idea and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.LIGHT}
      />
      <FAQBlock faqData={faqData} />
    </>
  );
}

export default QAServicesPageView;
