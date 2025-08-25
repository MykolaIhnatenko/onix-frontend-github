import { useDispatch, useSelector } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import PageLinks from '../../../constants/PageLinks';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import { ButtonType } from '../../../constants/enums';
import LinkButtonPrimary from 'components/UI/LinkButtonPrimary/LinkButtonPrimary';
import ButtonTransparent from 'components/UI/ButtonTransparent/ButtonTransparent';

import ServicesMainBgMobile from '@/images/services/img_main_bg_mobile@2x.webp';
import ServicesMainBgTablet from '@/images/services/img_main_bg_tablet@2x.webp';
import ServicesMainBg from '@/images/services/img_main_bg@2x.webp';
import ServicesMainImage from '@/images/services/img_main@2x.webp';
import styles from '../sass/servicesMainSecion.module.scss';

function ServicesMainSection() {
  const background = useBackground(
    ServicesMainBg,
    ServicesMainBgTablet,
    ServicesMainBgMobile,
  );

  const {
    isMDDevice, isLGDevice, isXLDevice, isXXLDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const isNotMobile = isMDDevice || isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;
  const dispatch = useDispatch();

  return (
    <section className={styles.mainSection}>
      <div className={styles.bgContainer}>
        {background && (
        <ImageComponent
          src={background}
          alt="MainBackground"
          fill
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          priority
        />
        )}
        <div className={styles.imgContainer}>
          <ImageComponent
            src={ServicesMainImage}
            alt="main-man"
            fill
            sizes="100vw"
            priority={isNotMobile}
          />
        </div>
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <div>
            <MainTitle tag="h1" className={styles.title}>
              Custom Software Development Services
            </MainTitle>
            <ContentText tag="p" className={styles.text}>
              Relying on the experience from software development projects for 1,500 businesses in various industries,
              Onix delivers unique software solutions for large and midsize businesses – fast and with the closest
              attention to quality, ROI, and your users.
            </ContentText>
          </div>
          <div className={styles.btnContainer}>
            <LinkButtonPrimary
              text="Get cost estimate"
              styleContainer={styles.contactBtn}
              path={PageLinks.DEDICATED_TEAM_CALCULATOR}
            />
            <ButtonTransparent
              id={ButtonType.LAND}
              text="TALK TO OUR EXPERT"
              styleContainer={styles.contactBtn}
              onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesMainSection;
