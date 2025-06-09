import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import IRunningColsBlockWithTitle from '../interfaces/IRunningColsBlockWithTitle';

import styles from '../sass/RunningColsBlockWithTitle.module.scss';

function RunningColsBlockWithTitle({
  title, data, background,
}: IRunningColsBlockWithTitle) {
  return (
    <>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.title}>
            {title}
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <RunningColsBlock
        bg={background}
        runningCols={data}
        imagesQuality={70}
      />
    </>
  );
}

export default RunningColsBlockWithTitle;
