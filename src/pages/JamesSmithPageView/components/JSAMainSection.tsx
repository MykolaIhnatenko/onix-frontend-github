import { useMemo } from 'react';

import Ellipse from './Ellipse';
import Ellipses from './Ellipses';
import mainImgSrc2x from '@/images/JamesSmith/mainSection/img_phone@2x.webp';
import mainImgSrcTablet2x from '@/images/JamesSmith/mainSection/img_phoneTablet@2x.webp';
import mainImgSrcMobile2x from '@/images/JamesSmith/mainSection/img_phoneMobile@2x.webp';
import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import specificationData from '../data/specificationData';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAPageContainer from './JSAPageContainer';
import JSAText from './JSAText';
import BlueSpan from './BlueSpan';

import styles from '../sass/JSAMainSection.module.scss';

function JSAMainSection() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const mainSrc2x = useMemo(() => {
    let src2x;

    if (isXSDevice) {
      src2x = mainImgSrcMobile2x;
    } else if (isMDDevice || isSMDevice) {
      src2x = mainImgSrcTablet2x;
    } else {
      src2x = mainImgSrc2x;
    }
    return src2x;
  }, [isSMDevice, isMDDevice, isXSDevice]);

  return (
    <section className={styles.mainSection}>
      <Ellipses isMobile={isXSDevice} isTablet={isMDDevice || isSMDevice} />
      <JSAPageContainer className={styles.mainSectionContent}>
        <JSAText tag="h1" variant="mainTitle">
          Sports & Fitness App
          <br />
          For
          <BlueSpan> Tailored Training </BlueSpan>
          Programs
          <br />
          and Nutrition Plans
        </JSAText>
        <JSAText className={styles.description}>
          How Onix developed a sports & fitness app to help users get the proper personal training and nutrition plans
          to achieve their goals
        </JSAText>
        <div className={styles.mainImg}>
          <ImageComponent
            src={mainSrc2x}
            width={668}
            height={732}
            sizes="(max-width: 450px) 50vw, 100vw"
            alt="phone"
            priority
          />
        </div>
        <VRARContent className={styles.subDescription}>
          <JSAText tag="h2" className={styles.subTitle} variant="fs38">
            James Smith Academy — is a
            <BlueSpan>
              {' '}
              fitness application
              {' '}
              <br />
              that differs from others.
            </BlueSpan>
          </JSAText>
          <JSAText>
            It’s a personal online trainer that provides users with personalized training and nutrition programs
            tailored to their specific requests.
            <br />
            With JSA, users can also get personal coach support to reach their goals.
          </JSAText>
        </VRARContent>
        <VRARContent className={styles.specification}>
          {specificationData.map(({ id, title, value }) => (
            <div key={id} className={styles.specificationItem}>
              {id === 2 && !isXSDevice && (
              <div className={styles.ellipseInThirdBlock}>
                <Ellipse color="pink" />
              </div>
              )}
              {id === 3 && !isXSDevice && (
              <div className={styles.ellipseInFourthBlock}>
                <Ellipse color="pink" />
              </div>
              )}
              <div>
                <p className={styles.specificationItemTitle}>
                  {title}
                </p>
                <p className={styles.specificationItemValue}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </VRARContent>
      </JSAPageContainer>
    </section>
  );
}

export default JSAMainSection;
