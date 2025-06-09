import React, { useState } from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import HotJobLine from './HotJobLine';
import PageContainer from '../../../components/PageContainer/PageContainer';
import IHotVacantion from '../interfaces/IHotVacantion';
import Icons from '../../../assets/icon';
import OnlyUkraine from 'components/OnlyUkraine/OnlyUkraine';

import styles from '../sass/HotVacantion.module.scss';

function HotVacantion({ hotJobs }: IHotVacantion) {
  const [indexNext, setIndexNext] = useState(-1);

  const setNextIndex = (index: number) => {
    let newIndex = -1;
    if (index + 1 <= hotJobs.length - 1 && index !== -1) {
      newIndex = index + 1;
    }
    setIndexNext(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.emptyBlock} />
      <PageContainer className={styles.career}>
        <div className={styles.titleContainer}>
          <MainTitle className={styles.title} tag="h2">Hot Jobs</MainTitle>
          <Icons.IconFire height={42} width={42} className={styles.iconBox} />
        </div>
        <OnlyUkraine darkMode />
      </PageContainer>
      <div className={styles.jobsContainer}>
        {hotJobs.map(({ attributes: { name, departmentType, url } }, index) => (
          <HotJobLine
            key={[name.replace(/ /g, '_'), index].join('_')}
            numberString={index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
            jobName={name}
            jobTag={departmentType?.data?.attributes?.name || ''}
            link={`careers/${url}`}
            setNextIndex={setNextIndex}
            indexItem={index}
            indexNext={indexNext}
            darkMode
          />
        ))}
      </div>
    </div>
  );
}

export default HotVacantion;
