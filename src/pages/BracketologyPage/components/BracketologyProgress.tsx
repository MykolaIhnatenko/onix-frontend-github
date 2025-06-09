import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../hook/reduxToolkit';
import { XL_DEVICE } from '../../../constants/constants';

import styles from '../sass/BracketologyProgress.module.scss';

function BracketologyProgress() {
  const { progressValue, progressPosition } = useAppSelector((state) => state.bracketology);
  const [isDesktop, setIsDesktop] = useState(false);

  const updateWindowWidth = () => setIsDesktop(document.body.clientWidth >= XL_DEVICE);

  useEffect(() => {
    const indicator = document.querySelector('#indicator') as HTMLSpanElement;
    indicator.style.height = progressValue;
    indicator.style.top = `${progressPosition}px`;

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    updateWindowWidth();

    const indicator = document.querySelector('#indicator') as HTMLSpanElement;
    const progress = document.querySelector('#progress') as HTMLDivElement;
    const desktopProgressWidth = 1196;
    const progressHeight = progress.clientHeight;
    const top = (progressHeight * +progressPosition) / 100;

    const left = (desktopProgressWidth * +progressPosition) / 100;

    if (isDesktop) {
      indicator.style.width = progressValue;
      indicator.style.left = `${left}px`;
      indicator.style.height = '4px';
      indicator.style.top = '0px';
    } else {
      indicator.style.height = progressValue;
      indicator.style.top = `${top}px`;
      indicator.style.width = '100%';
      indicator.style.left = '0px';
    }
  }, [progressValue, progressPosition, isDesktop]);

  const monthNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.progressBlock}>
      <div id="progress" className={styles.progress}>
        <span id="indicator" className={styles.indicate} />
      </div>
      <div className={styles.numbers}>
        <span>0</span>
        {monthNumbers.map((item) => (
          <div key={item} className={styles.monthGroup}>
            <span className={styles.month}>month </span>
            <span>
              {item}
            </span>
          </div>
        ))}
        <span>7</span>
      </div>
    </div>
  );
}

export default BracketologyProgress;
