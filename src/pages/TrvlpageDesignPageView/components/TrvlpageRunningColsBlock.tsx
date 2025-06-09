import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import RunningColsBlock from '../../../components/RunningColsBlock/RunningColsBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';
import trvlpagePhonesData from '../data/trvlpagePhonesData';

import styles from '../sass/trvlpageRunningColsBlock.module.scss';

function TrvlpageRunningColsBlock() {
  return (
    <>
      <PageContainer className={styles.runningColsTitleContainer}>
        <VRARContent>
          <MainTitle className={styles.runningColsTitle}>
            Design solutions we provide
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <VRARContent>
        <RunningColsBlock
          runningCols={trvlpagePhonesData}
          classes={{ section: 'bg-[#105B57]' }}
        />
      </VRARContent>
    </>
  );
}
export default TrvlpageRunningColsBlock;
