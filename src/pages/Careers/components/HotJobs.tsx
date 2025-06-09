import React, { useState } from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import HotJobLine from './HotJobLine';
import PageContainer from '../../../components/PageContainer/PageContainer';
import IHotJobs from '../interfaces/IHotJobs';
import OnlyUkraine from 'components/OnlyUkraine/OnlyUkraine';

import styles from '../sass/HotJobs.module.scss';

function HotJobs({
  departmentList, chosenDepartment, setChosenDepartment, careerList,
}: IHotJobs) {
  const [indexNext, setIndexNext] = useState(-1);

  const setNextIndex = (index: number) => {
    let newIndex = -1;
    if (index + 1 <= careerList.length - 1 && index !== -1) {
      newIndex = index + 1;
    }
    setIndexNext(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.emptyBlock} />
      <PageContainer className={styles.career}>
        <div className={styles.titleBox}>
          <MainTitle className={styles.title} tag="h2">Our Directions</MainTitle>
          <OnlyUkraine />
        </div>
        <div className={styles.buttonsContainer}>
          {departmentList.map((currentDepartment, index) => (
            <button
              key={[currentDepartment.value.replace(/ /g, '_'), index].join('_')}
              className={`
                ${styles.departmentButton} 
                ${chosenDepartment.value === currentDepartment.value ? styles.active : ''}`}
              type="button"
              onClick={() => setChosenDepartment(currentDepartment)}
            >
              {currentDepartment.label}
            </button>
          ))}
        </div>
      </PageContainer>
      <div className={styles.jobsContainer}>
        {careerList.map(({ attributes: { name, departmentType, url } }, index) => (
          <HotJobLine
            key={[name.replace(/ /g, '_'), index].join('_')}
            numberString={index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
            jobName={name}
            jobTag={departmentType?.data?.attributes?.name || ''}
            link={`careers/${url}`}
            setNextIndex={setNextIndex}
            indexItem={index}
            indexNext={indexNext}
          />
        ))}
      </div>
    </div>
  );
}

export default HotJobs;
