import { useAppSelector } from 'hook/reduxToolkit';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import PDHowItWorksBG from '@/images/productDiscovery/img_how_the_product_work.webp';
import PDHowItWorksTabletBG from '@/images/productDiscovery/img_how_the_product_work_tablet.webp';
import PDHowItWorksMobileBG from '@/images/productDiscovery/img_how_the_product_work_mobile.webp';
import ImageComponent from '../../../components/Image/Image';
import tableData from '../data/howItWorksTableData.json';
import StagesItem from './StagesItem';
import ProcessDiscoveryHowItWorksStage from './ProcessDiscoveryHowItWorksStage';

import styles from '../sass/ProcessDiscoveryHowItWorks.module.scss';

export default function ProcessDiscoveryHowItWorks() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: PDHowItWorksBG,
    };

    if (isMDDevice) {
      bg.background = PDHowItWorksTabletBG;
    } else if (isXSDevice || isSMDevice) {
      bg.background = PDHowItWorksMobileBG;
    }
    return bg;
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          fill
          alt="How_it_works"
          quality={100}
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.sectionTitle}>
          How the product discovery services work
        </MainTitle>
        <ContentText tag="p" className={styles.sectionDescription}>
          During the software product discovery phase, a team of experts
          prepares project documentation and provides the deliverables
          needed to start the implementation stage.
        </ContentText>
        <div className={styles.table}>
          <h3 className={styles.table_header}>
            Custom software development
          </h3>
          <div className={styles.table_content}>
            {tableData.map((part, index) => (
              <ProcessDiscoveryHowItWorksStage
                key={[part.conclusion, index].join('_')}
                stages={part.stages}
                advantages={part.advantages}
                conclusion={part.conclusion}
              />
            ))}
            <div className={`${styles.part} ${styles.lastPart}`}>
              <div className={styles.stages}>
                <StagesItem number="05" text="Handover" />
              </div>
              <div className={styles.advantages}>
                <p className={styles.advantages_title}>Knowledge transfer</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
