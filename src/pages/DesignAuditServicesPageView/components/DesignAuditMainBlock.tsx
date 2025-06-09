import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ModelsSection from '../../../components/ModelsSection/ModelsSection';
import ImageComponent from '../../../components/Image/Image';
import TiltedCarousel from '../../../components/TiltedCarousel/TiltedCarousel';
import { ButtonType, TransparentCardVariant } from '../../../constants/enums';
import designAuditModelsData from '../data/designAuditModelsData.json';
import DesignAuditMainBlockBotMobileBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_bot_mobile_bg@2x.webp';
import DesignAuditMainBlockBotTabletBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_bot_tablet_bg@2x.webp';
import DesignAuditMainBlockBotBigBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_bot_big_bg@2x.webp';
import DesignAuditMainBlockBotBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_bot_bg@2x.webp';
import DesignAuditMainBlockTopMobileBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_top_mobile_bg@2x.webp';
import DesignAuditMainBlockTopTabletBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_top_tablet_bg@2x.webp';
import DesignAuditMainBlockTopBigBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_top_bg_big@2x.webp';
import DesignAuditMainBlockTopBg from '@/images/designAuditServicesPage/mainBlock/img_design_main_top_bg@2x.webp';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';

import styles from '../sass/designAuditMainBlock.module.scss';

function DesignAuditMainBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      topBg: DesignAuditMainBlockTopBg,
      botBg: DesignAuditMainBlockBotBg,
    };
    if (isXXXLDevice) {
      bg.topBg = DesignAuditMainBlockTopBigBg;
      bg.botBg = DesignAuditMainBlockBotBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.topBg = DesignAuditMainBlockTopTabletBg;
      bg.botBg = DesignAuditMainBlockBotTabletBg;
    } else if (isXSDevice) {
      bg.topBg = DesignAuditMainBlockTopMobileBg;
      bg.botBg = DesignAuditMainBlockBotMobileBg;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBg}>
        <ImageComponent
          src={getBackground().topBg}
          alt="MainBackground"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleContainerAbsol}>
          <MainTitle tag="span" className={styles.leftTitle}>
            Digital Product
          </MainTitle>
          <MainTitle tag="span" className={styles.rightTitle}>
            Design Services
          </MainTitle>
        </h1>
      </div>
      <TiltedCarousel />
      <div className={styles.ctaContent}>
        <div className={styles.botBg}>
          <ImageComponent
            src={getBackground().botBg}
            alt="Main block top Bg"
            sizes="100vw"
          />
        </div>
        <div className={styles.ctaContentContainer}>
          <CallToActionComponent
            id={ButtonType.LAND}
            title="We are a digital product design company that understands the
            unique challenges and opportunities of the product design&nbsp;process."
            content="Whether it's a sleek mobile app, a dynamic website, or an intuitive
            user interface, we have the expertise to bring your vision to&nbsp;life."
            withButton
            btnText="Talk to our expert"
            tag="h2"
            classes={{
              cta: `!p-[100px_70px_80px] !bg-transparent min-xxxl:!px-[80px]
                screen-lg:!p-[126px_30px_115px] screen-md:!p-[80px_30px_40px]
                screen-sm:!p-[80px_15px_40px]`,
              background: 'after:!hidden',
              title: `!max-w-[1010px] !text-[40px] !leading-[56px] screen-lg:!max-w-[708px]
                screen-md:!text-[25px] screen-md:!leading-[35px]`,
              content: `!pb-[40px] !text-white !max-w-[838px] screen-lg:!max-w-[666px]
                screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:!max-w-none`,
            }}
          />
          <ModelsSection
            data={designAuditModelsData}
            variant={TransparentCardVariant.DESIGN_AUDIT}
            classes={{
              section: 'bg-transparent',
              card: 'screen-md:p-[30px]',
              cardTitle: '!text-[50px]/[64px] screen-lg:!text-[36px]/[46px] screen-md:!text-[25px]/[35px]',
              cardText: '!text-[20px]/[28px] screen-md:!text-[16px]/[24px]',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignAuditMainBlock;
