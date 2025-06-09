import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { useAppSelector } from '../../../hook/reduxToolkit';
import Bg from '../../../assets/images/spatio/valueProposition/img_bg.webp';
import BgTablet from '../../../assets/images/spatio/valueProposition/img_bg_tablet.webp';
import BgMobile from '../../../assets/images/spatio/valueProposition/img_bg_mobile.webp';
import valuePropositionData from '../data/valuePropositionData';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/valueProposition.module.scss';

function ValueProposition() {
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
      <ImageComponent
        src={getBackground().background}
        alt="background"
        className={styles.background}
        sizes="100vw"
      />
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          Value delivered
        </MainTitle>
        <div className={styles.content}>
          {valuePropositionData.map(({
            id,
            icon,
            text,
          }) => (
            <div key={id} className={styles.item}>
              {icon}
              <ContentText tag="p" marginAbsent className={styles.text}>
                {text}
              </ContentText>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ValueProposition;
