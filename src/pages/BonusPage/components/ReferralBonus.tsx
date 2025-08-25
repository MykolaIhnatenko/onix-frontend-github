import { useDispatch, useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';
import referralBonusData from '../data/referralBonusData';
import { setShowContactForm } from 'store/app/contactForm/slice';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import ImageBackground from '@/images/bonus/referralBlock/img_referralBg@2x.webp';
import ImageBackgroundTablet from '@/images/bonus/referralBlock/img_referralTabletBg@2x.webp';
import ImageBackgroundMobile from '@/images/bonus/referralBlock/img_referralMobileBg@2x.webp';
import styles from '../sass/bonusReferral.module.scss';

function ReferralBonus() {
  const dispatch = useDispatch();
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      referralBonus: ImageBackground,
    };
    if (isMDDevice || isSMDevice) {
      bg.referralBonus = ImageBackgroundTablet;
    } else if (isXSDevice) {
      bg.referralBonus = ImageBackgroundMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().referralBonus}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.contentContiner}>
        <MainTitle className={styles.title}>
          How to get a referral bonus
        </MainTitle>
        <MainTitle tag="p" className={styles.subTitle}>
          Easy as 1-2-3
        </MainTitle>
        <div className={styles.cardContainer}>
          {referralBonusData.map(({
            id, icon, title, text,
          }, index) => (
            <div key={[id, index].join('_')} className={styles.card}>
              <div className={styles.cardIconContainer}>
                {icon}
                <MainTitle tag="span" className={styles.cardId}>{id}</MainTitle>
              </div>
              <MainTitle tag="h3" className={styles.cardTitle}>{title}</MainTitle>
              <ContentText tag="p" className={styles.cardText}>{text}</ContentText>
            </div>
          ))}
        </div>
        <ButtonLight
          styleContainer={styles.btn}
          text="Refer clients now"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        />
      </PageContainer>
    </section>
  );
}

export default ReferralBonus;
