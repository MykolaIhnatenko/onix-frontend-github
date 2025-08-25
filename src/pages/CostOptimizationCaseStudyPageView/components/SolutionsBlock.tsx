import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import costDevelopmentServicesData from '../data/costDevelopmentServicesData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import DevelopmentServicesWhite from 'components/DevelopmentServicesWhite/DevelopmentServicesWhite';

import BottomImage from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_bottomImage@2x.webp';
import BottomImageTablet from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_bottomImageTablet@2x.webp';
import BottomImageMobile from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_bottomImageMobile@2x.webp';
import SolutionsBlockBg from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockBg@2x.webp';
import SolutionsBlockTabletBg from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockTabletBg@2x.webp';
import SolutionsBlockMobileBg from '@/images/costOptimizationCaseStudyPageView/solutionsBlock/img_solutionsBlockMobileBg@2x.webp';
import styles from '../sass/solutionsBlock.module.scss';

function SolutionsBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      bottomImage: BottomImage,
      background: SolutionsBlockBg,
    };
    if (isMDDevice) {
      bg.bottomImage = BottomImageTablet;
      bg.background = SolutionsBlockTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.bottomImage = BottomImageMobile;
      bg.background = SolutionsBlockMobileBg;
    }
    return bg;
  };

  return (
    <div className={styles.blockContainer}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.blockContent}>
        <DevelopmentServicesWhite
          title={costDevelopmentServicesData.pageTitle}
          description={costDevelopmentServicesData.pageText}
          data={costDevelopmentServicesData.data}
          classes={{
            titleBlock: {
              desc: '!max-w-[630px] min-xxxl:!max-w-[710px] screen-lg:!max-w-[708px] screen-md:!mb-[30px]',
            },
          }}
          withoutBackground
        />
        <VRARContent className={styles.bottomImage}>
          <ImageComponent
            src={getBackground().bottomImage}
            alt="image"
            sizes="100vw"
          />
        </VRARContent>
        <VRARContent className={styles.bottomTextContainer}>
          <ContentText className={styles.bottomText} tag="p">
            The new project infrastructure built&nbsp;by&nbsp;the Onix DevOps&nbsp;team
          </ContentText>
        </VRARContent>
      </div>
    </div>
  );
}

export default SolutionsBlock;
