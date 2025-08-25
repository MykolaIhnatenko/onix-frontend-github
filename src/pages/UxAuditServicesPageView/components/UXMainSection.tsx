import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import MainAnimationImage from '../../../assets/images/uxAudit/img_main_animation.png';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import ImageComponent from '../../../components/Image/Image';
import { ButtonType } from 'constants/enums';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import UXMainMobileBG from '@/images/uxAudit/img_bg_main_mobile.webp';
import UXMainTabletBG from '@/images/uxAudit/img_bg_main_tablet.webp';
import UXMainBG from '@/images/uxAudit/img_bg_main.webp';
import styles from '../sass/UXMainSection.module.scss';

function UXMainSection() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: UXMainBG,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = UXMainTabletBG;
    } else if (isXSDevice) {
      bg.background = UXMainMobileBG;
    }

    return bg;
  };
  const dispatch = useDispatch();

  return (
    <section
      className={styles.mainSection}
    >
      <div className={styles.bgContainer}>
        <ImageComponent
          src={getBackground().background}
          alt="MainBackground"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <MainTitle tag="h1" className={styles.title}>
            Design Audit & UX Audit Services
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            <span>
              Revamp your digital presence with Onix design audit & user experience audit services.
            </span>
            <span>
              Our expert team of designers and UX professionals will provide a
              comprehensive analysis of your website or application.
            </span>
          </ContentText>
          <ContentText tag="p" className={styles.text}>
            Elevate your brand&apos;s aesthetic appeal and&nbsp;user experience with our actionable recommendations.
          </ContentText>
          <ButtonPrimary
            id={ButtonType.LAND}
            text="Speak to our expert"
            styleContainer={styles.contactBtn}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          />
        </div>
        <div className={styles.animationBlock}>
          <Image
            width={689}
            height={700}
            className="next-particle"
            alt="animatedImage"
            src={MainAnimationImage.src}
            data-disable-interaction="true"
            data-particle-gap="8"
            data-mouse-force="5"
            data-width="689"
            data-height="700"
            data-particle-size="0.5"
            loading="lazy"
            crossOrigin="anonymous"
            style={{ display: 'none' }}
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default UXMainSection;
