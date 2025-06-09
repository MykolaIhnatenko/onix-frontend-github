import MainTitle from 'components/MainTitle/MainTitle';
import switchData from '../data/switchData.json';
import IMainSection from '../interfaces/IMainSection';

import styles from '../sass/mainSection.module.scss';

function MainSection({ active, onClickHandler }: IMainSection) {
  return (
    <div className={styles.container}>
      <MainTitle tag="h1" className={styles.title}>See What Projects We Do</MainTitle>
      <div className={styles.switchButtons}>
        {switchData.map(({ title }, index) => (
          <div
            key={[title, index].join('_')}
            className={`${styles.switchButton} ${active === index ? styles.active : ''}`}
            onClick={() => onClickHandler(index)}
            onKeyDown={() => onClickHandler(index)}
            aria-hidden="true"
          >
            <span className={styles.btnText}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
