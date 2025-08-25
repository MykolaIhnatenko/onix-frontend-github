import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import GatherGroupKillerFeaturesBlock from './GatherGroupKillerFeaturesBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';
import digitalHealthcareSecondBusinessData from '../data/digitalHealthcareSecondBusinessData';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';
import killerFeaturesSliderContent from '../data/killerFeaturesSliderContent';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import Background from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/developmentSection/img_bgDesk@2x.webp';
import BackgroundTablet from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/developmentSection/img_bgTablet@2x.webp';
import BackgroundMobile from '@/images/caseStudiesPage/DigitalHealthcareCaseStudy/developmentSection/img_bgMobile@2x.webp';
import styles from '../sass/gatherGroupDevelopmentSection.module.scss';

function GatherGroupDevelopmentSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: Background,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = BackgroundTablet;
    } else if (isXSDevice) {
      bg.background = BackgroundMobile;
    }
    return bg;
  };

  return (
    <section className={styles.developmentSection}>
      <div className={styles.imageBlock}>
        <ImageComponent
          src={getBackground().background}
          fill
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          alt="figures"
        />
      </div>
      <BusinessContext
        upTitle={digitalHealthcareSecondBusinessData.upTitle}
        title={digitalHealthcareSecondBusinessData.title}
        subTitle={digitalHealthcareSecondBusinessData.subTitle}
        leftContent={digitalHealthcareSecondBusinessData.firstText}
        rightContent={digitalHealthcareSecondBusinessData.secondText}
        classes={{
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <VRARContent>
        <GatherGroupKillerFeaturesBlock
          data={killerFeaturesSliderContent}
        />
      </VRARContent>
    </section>
  );
}

export default GatherGroupDevelopmentSection;
