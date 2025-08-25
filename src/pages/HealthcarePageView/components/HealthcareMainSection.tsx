import { useDispatch } from 'react-redux';

import useBackground from 'hook/useBackground';
import PageContainer from 'components/PageContainer/PageContainer';
import TapAccordion from 'components/TapAccordion/TapAccordion';
import IIosMainSection from '../interfaces/IHealthcareMainSection';
import { setShowContactForm } from 'store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';
import ImageComponent from 'components/Image/Image';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';
import { SM_DEVICE } from '../../../constants/constants';

import IosMainBgMobile from '@/images/healthcare/mainSection/img_main_bg_mobile@2x.webp';
import IosMainBgTablet from '@/images/iosPage/img_main_bg_tablet@2x.webp';
import IosMainBg from '@/images/iosPage/img_main_bg@2x.webp';
import styles from '../sass/healthcareMainSection.module.scss';

function HealthcareMainSection({
  sectionTitle, firstText, secondText, btnText, data,
}: IIosMainSection) {
  const healthcareBg = useBackground(IosMainBg, IosMainBgTablet, IosMainBgMobile, SM_DEVICE);
  const dispatch = useDispatch();

  return (
    <section className={styles.mainSection}>
      <div className={styles.bgContainer}>
        {healthcareBg && (
          <ImageComponent
            src={healthcareBg}
            alt="MainBackground"
            fill
            priority
            quality={95}
            sizes="100vw"
          />
        )}
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <div className={styles.contentTop}>
            {sectionTitle}
            {firstText}
          </div>
          <div className={styles.contentBottom}>
            {secondText}
            <ButtonPrimary
              id={ButtonType.LAND}
              text={btnText}
              styleContainer={styles.contactBtn}
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            />
          </div>
        </div>
        <div className={styles.accordionBlock}>
          <TapAccordion
            data={data}
            classes={{
              item: '!border-b-2 border-color-black screen-md:bg-color-white',
              active: 'h-[250px] flex-1 screen-xxl:h-[270px] screen-xl:h-[340px] '
              + 'screen-lg:h-[230px] screen-md:h-[200px] screen-sm:h-[250px]',
            }}
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default HealthcareMainSection;
