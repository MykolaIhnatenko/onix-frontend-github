import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import MainBlockBg from '../../../assets/images/nestbDesignCaseStudy/mainBlock/img_nestbDesignBg@2x.webp';
import MainBlockTabletBg from '../../../assets/images/nestbDesignCaseStudy/mainBlock/img_nestbDesignTabletBg@2x.webp';
import MainBlockMobileBg from '../../../assets/images/nestbDesignCaseStudy/mainBlock/img_nestbDesignMobileBg@2x.webp';

import styles from '../sass/nestbDesignMainBlock.module.scss';

function NestbDesignMainBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainBlock: MainBlockBg,
    };
    if (isMDDevice) {
      bg.mainBlock = MainBlockTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.mainBlock = MainBlockMobileBg;
    }
    return bg;
  };
  return (
    <PageContainer className={styles.container}>
      <div className={styles.image}>
        <ImageComponent
          src={getBackground().mainBlock}
          alt="background"
          priority
          sizes="100vw"
        />
      </div>
      <MainTitle tag="h1" className={styles.title}>
        Crafting a cohesive brand identity and&nbsp;homepage for&nbsp;Nestb
      </MainTitle>
    </PageContainer>
  );
}

export default NestbDesignMainBlock;
