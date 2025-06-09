import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import runningRowsBlockData from '../data/runningRowsBlockData';
import RunningRowsBlock from '../../../components/RunningRowsBlock/RunningRowsBlock';

import styles from '../sass/noisyNeighborRunningRowsBlock.module.scss';

function NoisyNeighborRunningRowsBlock({ background }:{ background:StaticImageData }) {
  return (
    <>
      <MainTitle className={styles.title}>
        Our design solutions
      </MainTitle>
      <RunningRowsBlock
        background={background}
        runningRows={runningRowsBlockData}
        classes={{
          imgContainer: 'py-[4px] px-[4px] border-2 rounded-[20px] border-lightBorder '
          + 'bg-lightBG shadow-[10px_30px_40px_0_rgba(28,29,33,0.40)] '
          + 'screen-lg:py-[5px] screen-lg:px-[5px] '
          + 'screen-md:py-[3px] screen-md:px-[3px] screen-md:rounded-[8px] '
          + 'shadow-[0_15px_15px_0_rgba(28,29,33,0.40)]',
          img: '!relative rounded-[14px] screen-md:rounded-[4px]',
        }}
      />
    </>
  );
}

export default NoisyNeighborRunningRowsBlock;
