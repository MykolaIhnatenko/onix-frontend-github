import { useCallback, useEffect, useState } from 'react';

import IRunningStringProps from '../interfaces/IRunningString';

import styles from '../sass/runningString.module.scss';

function RunningString({ title, type }: IRunningStringProps) {
  const [titles, setTitles] = useState<string[]>([]);
  const [number, setNumber] = useState(0);

  const fillTitles = useCallback((titlesNumber: number) => {
    const tempArray = new Array(titlesNumber).fill(title, 0, titlesNumber + 1);
    setTitles(tempArray);
  }, [title]);

  const setTitlesOnResize = useCallback(() => {
    const { clientWidth } = document.body;
    const titleElement = document.querySelector('.title');
    const titleWidth = Math.floor((titleElement as HTMLElement).getBoundingClientRect().width);
    const titlesNumber = Math.floor((clientWidth * 2) / titleWidth);

    if (titlesNumber !== number) {
      setNumber(titlesNumber);
      fillTitles(titlesNumber);
    }
  }, [fillTitles, number]);

  useEffect(() => {
    setTitlesOnResize();

    window.addEventListener('resize', setTitlesOnResize);

    return () => window.removeEventListener('resize', setTitlesOnResize);
  }, [number, setTitlesOnResize]);

  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <h2 className="title">{title}</h2>
      {titles.map((item, index) => (
        <h2 key={[item, index].join('_')}>{item}</h2>
      ))}
    </div>
  );
}

export default RunningString;
