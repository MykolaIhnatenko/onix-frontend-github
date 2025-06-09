import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Plx from 'react-plx';

import IInteractiveProgress, { IParallaxObject } from '../interfaces/IInteractiveProgress';
import IStore from 'store/interfaces/IStore';
import { ITrainingSimulatorSlice } from 'store/interactiveTrainingSimulator/reducer';

import styles from '../sass/InteractiveProgress.module.scss';

function InteractiveProgress({
  variant, duration, disabled,
}: IInteractiveProgress) {
  const { contentHeight } = useSelector<IStore, ITrainingSimulatorSlice>(
    (state) => state.trainingSimulatorSlice,
  );
  const [parallax, setParallax] = useState<IParallaxObject[]>([]);

  useEffect(() => {
    const block = document.querySelector(`.${variant}`);
    if (block) {
      const { height } = block.getBoundingClientRect();
      const parallaxData = [
        {
          start: 'self',
          startOffset: 0,
          duration,
          properties: [
            {
              startValue: 0,
              endValue: height,
              property: 'height',
            },
          ],
        },
      ];

      setParallax(parallaxData);
    }
  }, [contentHeight]);

  return (
    <div className={styles.progress}>
      <span className={styles.progressLine} />
      <Plx parallaxData={parallax} className={styles.indicator} disabled={disabled}>
        <span />
      </Plx>
    </div>
  );
}

export default InteractiveProgress;
