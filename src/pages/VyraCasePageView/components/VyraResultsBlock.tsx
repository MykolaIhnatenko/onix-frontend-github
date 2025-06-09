import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import BDNumberBlock from '../../BrandingDesignPageView/components/BDNumberBlock';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { businessContextDataSecond } from '../data/businessContextData';
import bdNumbersData from '../data/numberData';
import { NumbersBlockDataVariant } from '../../../constants/enums';
import Bg from '../../../assets/images/vyraCasePage/vyraResultsBlock/img_results_bg.webp';
import BgTablet from '../../../assets/images/vyraCasePage/vyraResultsBlock/img_results_bg_tablet.webp';
import BgMobile from '../../../assets/images/vyraCasePage/vyraResultsBlock/img_results_bg_mobile.webp';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import styles from '../sass/vyraResultsBlock.module.scss';

function VyraResultsBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    if (isXSDevice) {
      return BgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return BgTablet;
    }
    return Bg;
  };

  return (
    <div className={styles.container}>
      <ImageComponent
        src={getBackground()}
        alt="background"
        className={styles.bg}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        fill
      />
      <BusinessContext
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        subText={businessContextDataSecond.bottomText}
        classes={{
          section: 'pb-[80px] screen-lg:pb-[60px] screen-md:pb-[40px]',
          subText: '!text-[24px]/[36px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[32px]',
        }}
      />
      <VRARContent>
        <PageContainer>
          <BDNumberBlock variant={NumbersBlockDataVariant.VYRA} data={bdNumbersData} />
        </PageContainer>
      </VRARContent>
    </div>
  );
}

export default VyraResultsBlock;
