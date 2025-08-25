import { useDispatch } from 'react-redux';

import { SM_DEVICE } from '../../constants/constants';
import useBackground from '../../hook/useBackground';
import ImageComponent from '../Image/Image';
import PageContainer from '../PageContainer/PageContainer';
import TapAccordion from '../TapAccordion/TapAccordion';
import IIosMainSection from './interfaces/IIosMainSection';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import { ButtonType } from '../../constants/enums';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import IosMainBg from '@/images/iosPage/img_main_bg@2x.webp';
import IosMainBgTablet from '@/images/iosPage/img_main_bg_tablet@2x.webp';
import IosMainBgMobile from '@/images/iosPage/img_main_bg_mobile@2x.webp';

function IosMainSection({
  sectionTitle, firstText, secondText, btnText, data,
}: IIosMainSection) {
  const background = useBackground(IosMainBg, IosMainBgTablet, IosMainBgMobile, SM_DEVICE);
  const dispatch = useDispatch();

  return (
    <section className="relative min-lg:min-h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-[1000px] min-lg:h-full
            screen-lg:max-h-[900px]
            screen-md:h-[53%]
            screen-sm-100:h-[900px]"
      >
        {
          background && (
            <ImageComponent
              src={background}
              alt="MainBackground"
              fill
              className="object-cover object-[center_top] min-md:object-center"
              priority
              quality={95}
              sizes="100vw"
            />
          )
        }
      </div>
      <PageContainer className="relative z-[1] !pt-[134px] !pb-0 !px-0
            min-md:!pt-[154px] min-md:!pb-0
            min-lg:flex min-lg:gap-[70px] min-lg:min-h-screen min-lg:!pt-[154px] min-lg:!px-[70px]
            min-xxxl:px-[80px] min-xxxl:gap-[80px]"
      >
        <div className="px-[15px] pb-[30px]
            min-md:px-[30px] min-md:pb-[80px]
            min-lg:pt-0 min-lg:pr-0 min-lg:pb-[70px] min-lg:pl-0
            min-lg:flex min-lg:flex-col min-lg:justify-start min-lg:flex-[1_1_49.2%]
            min-xxxl:pb-[80px] min-xxxxl:flex-[1_1_48%]"
        >
          {sectionTitle}
          {firstText}
          {secondText}
          <ButtonPrimary
            id={ButtonType.LAND}
            text={btnText}
            classes={{
              container: 'min-md:max-w-[300px] min-lg:max-w-full',
            }}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          />
        </div>
        <div className="relative z-[2] min-lg:block min-lg:pb-[6.7%] min-lg:items-center min-lg:flex-[1_1_50%]">
          <TapAccordion data={data} />
        </div>
      </PageContainer>
    </section>
  );
}

export default IosMainSection;
