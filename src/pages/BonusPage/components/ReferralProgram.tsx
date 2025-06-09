import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ReferralProgramItem from './ReferralProgramItem';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import referralProgramDataMobile from '../data/referralProgramDataMobile.json';
import ImageBackground from '@/images/bonus/referralProgram/img_referralProgramBg@2x.webp';
import ImageBackgroundTablet from '@/images/bonus/referralProgram/img_referralProgramTabletBg@2x.webp';
import ImageBackgroundMobile from '@/images/bonus/referralProgram/img_referralProgramMobileBg@2x.webp';
import ReferralProgramDesk from './ReferralProgramDesk';

import styles from '../sass/bonusReferralProgram.module.scss';

function ReferralProgram() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isSMDevice || isXSDevice || isMDDevice;

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      referralProgram: ImageBackground,
    };
    if (isMDDevice || isSMDevice) {
      bg.referralProgram = ImageBackgroundTablet;
    } else if (isXSDevice) {
      bg.referralProgram = ImageBackgroundMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().referralProgram}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.contentContainer}>
        <MainTitle className={styles.title}>
          How Our Referral Program Works
        </MainTitle>
        <div className={styles.content}>
          {isMobile ? (
            <>
              {referralProgramDataMobile.map((item, index) => (
                <div
                  key={['bonusReferralProgramId', index].join('_')}
                  className={styles.contentItem}
                >
                  {item.map(({ title, content }) => (
                    <ReferralProgramItem
                      id={index}
                      title={title}
                      content={content}
                    />
                  ))}
                </div>
              ))}
            </>
          ) : (
            <ReferralProgramDesk />
          )}

        </div>
      </PageContainer>
    </section>
  );
}

export default ReferralProgram;
