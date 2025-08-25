import { useDispatch } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ContactForm from '../../../components/ContactFormModal/components/ContactForm';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';
import useBackground from '../../../hook/useBackground';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import Modeltype from '../../../constants/Modeltype';
import ImageComponent from '../../../components/Image/Image';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import DedicatedTeamMainBgMobile from '@/images/dedicatedTeamPage/img_main_bg_mobile@2x.webp';
import DedicatedTeamMainBg from '@/images/dedicatedTeamPage/img_main_bg@2x.webp';
import DedicatedTeamMainBgTablet from '@/images/dedicatedTeamPage/img_main_bg_tablet@2x.webp';
import styles from '../sass/dedicatedTeamMainSecion.module.scss';

function DedicatedTeamMainSection() {
  const dispatch = useDispatch();
  const background = useBackground(
    DedicatedTeamMainBg,
    DedicatedTeamMainBgTablet,
    DedicatedTeamMainBgMobile,
  );

  return (
    <section className={styles.mainSection}>
      <div className={styles.bgContainer}>
        {background && (
          <ImageComponent
            src={background}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
          />
        )}
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <div className={styles.content}>
            <MainTitle tag="h1" className={styles.title}>
              Dedicated Development Team Services
            </MainTitle>
            <ContentText tag="p" className={styles.text}>
              We build a 100% dedicated software development team that helps you deliver a high-quality product
              and achieve great results.
            </ContentText>
            <ContentText tag="p" className={styles.text}>
              We take care of all the project management hassle and ensure an effective and transparent development
              process while you can focus on your business growth. Let’s scale your delivery capacity together!
            </ContentText>
          </div>
          <ButtonPrimary
            text="Speak to our expert"
            styleContainer={styles.contactBtn}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          />
        </div>
        <div className={styles.formBlock}>
          <MainTitle className={styles.formTitle}>What technical expertise do you need?</MainTitle>
          <ContactForm
            modeltypeProps={Modeltype.CONTACT_FORM_DEDICATED_TEAM_PAGE}
            salesChannel={PagesToSalesChannels.DEDICATED_TEAM}
            id="unfocused"
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamMainSection;
