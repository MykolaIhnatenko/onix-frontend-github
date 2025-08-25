import { useAppSelector } from 'hook/reduxToolkit';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { accordionData, listData } from '../data/accordionData';
import ImageComponent from 'components/Image/Image';
import OurSolutionsAccordion from 'components/OurSolutionsAccordion/OurSolutionsAccordion';

import Image from '@/images/keyBokPage/whereToUse/img_WhereToUse.webp';
import ImageTablet from '@/images/keyBokPage/whereToUse/img_WhereToUseTablet.webp';
import ImageMobile from '@/images/keyBokPage/whereToUse/img_WhereToUseMobile.webp';
import styles from '../sass/accordionBlock.module.scss';

function KeyBokAccordionBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getImage = () => {
    if (isMDDevice || isSMDevice) {
      return ImageTablet;
    }

    if (isXSDevice) {
      return ImageMobile;
    }

    return Image;
  };

  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.title}>
            Where to use Keybok
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <ImageComponent
        src={getImage()}
        alt="KeyBok"
        sizes="100vw"
        quality={89}
        className={styles.image}
      />
      <OurSolutionsAccordion
        accordionData={accordionData}
        list={listData}
        stylesVariant="!bg-white !p-[80px_70px_0] min-xxxl:!p-[80px_80px_0]
        screen-lg:!p-[60px_0_0] screen-md:!p-[40px_0_0]"
        iconBlack
      />
    </section>
  );
}

export default KeyBokAccordionBlock;
