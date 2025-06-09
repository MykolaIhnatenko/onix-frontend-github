import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { firstColumnData, secondColumnData } from '../data/choicesBlockData';
import Bg from '@/images/vrMedicalTrainingCasePage/choicesBlock/img_choices_bg.webp';
import BgTablet from '@/images/vrMedicalTrainingCasePage/choicesBlock/img_choices_bg_tablet.webp';
import BgMobile from '@/images/vrMedicalTrainingCasePage/choicesBlock/img_choices_bg_mobile.webp';

import styles from '../sass/choicesBlock.module.scss';

function ChoicesBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: Bg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = BgTablet;
    } else if (isXSDevice) {
      bg.background = BgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer>
        <VRARContent>
          <MainTitle className={styles.title}>
            Choices & solutions
          </MainTitle>
        </VRARContent>
        <div className={styles.table}>
          <div className={styles.colum}>
            {firstColumnData.map(({ id, title, content }) => (
              <div key={id}>
                {title}
                {content}
              </div>
            ))}
          </div>
          <div className={styles.colum}>
            {secondColumnData.map(({ id, title, content }) => (
              <div key={id}>
                {title}
                {content}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ChoicesBlock;
