import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../components/Image/Image';
import MainTitle from '../../components/MainTitle/MainTitle';
import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import { generalSans } from '../../fonts/MainFonts';
import PrivacyPolicyBg from '@/images/privacyPolicyPage/mainBlock/img_privacy_policy_bg@2x.webp';
import PrivacyPolicyMobileBg from '@/images/privacyPolicyPage/mainBlock/img_privacy_policy_mobile_bg@2x.webp';
import PrivacyPolicyTabletBg from '@/images/privacyPolicyPage/mainBlock/img_privacy_policy_tablet_bg@2x.webp';
import PrivacyPolicyCTABg from '@/images/privacyPolicyPage/img_CTABg@2x.webp';
import PrivacyPolicyCTATabletBg from '@/images/privacyPolicyPage/img_CTATabletBg@2x.webp';
import PrivacyPolicyCTAMobileBg from '@/images/privacyPolicyPage/img_CTAMobileBg@2x.webp';
import { IPrivacyPolicyView } from './interfaces/IPrivacyPolicyView';

import styles from './sass/privacyPolicyView.module.scss';

function PrivacyPolicyView({ data, pageTitle, saleUrl }: IPrivacyPolicyView) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBg: PrivacyPolicyBg,
      tellUs: PrivacyPolicyCTABg,
    };
    if (isMDDevice) {
      bg.mainBg = PrivacyPolicyTabletBg;
      bg.tellUs = PrivacyPolicyCTATabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBg = PrivacyPolicyMobileBg;
      bg.tellUs = PrivacyPolicyCTAMobileBg;
    }
    return bg;
  };

  return (
    <section className={`${styles.section} ${generalSans.variable}`}>
      <div className={styles.mainBlock}>
        <div className={styles.background}>
          <ImageComponent
            src={getBackground().mainBg}
            alt="background"
            sizes="100vw"
            priority
            fill
          />
        </div>
        <MainTitle tag="h1" className={styles.mainTitle}>
          {pageTitle}
        </MainTitle>
      </div>
      <div className={styles.content}>
        {data.map(({ title, content }) => (
          <div key={title} className={styles.contentItem}>
            <MainTitle tag="h3" className={styles.contentTitle}>
              {title}
            </MainTitle>
            {content}
          </div>
        ))}
      </div>
      {!saleUrl && (
        <CallToActionComponent
          background={getBackground().tellUs}
          withButton
          title="Tell us about your product idea
          and let the magic unfold."
          btnText="Speak to Our Expert"
        />
      )}
    </section>
  );
}

export default PrivacyPolicyView;
