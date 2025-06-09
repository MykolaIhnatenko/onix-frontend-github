import MainTitle from '../../../components/MainTitle/MainTitle';
import Counter from './Counter';
import IStepOne from '../interfaces/IStepOne';

import styles from '../sass/DTCCalculator.module.scss';

function StepOne({ specialists, changeSpecialistValue }: IStepOne) {
  return (
    <section className={`${styles.steps} ${styles.stepOne}`}>
      <MainTitle tag="h3" className={styles.sectionTitle}>
        1. Select the number of&nbsp;specialists you need
      </MainTitle>
      <ul className={styles.specialists}>
        {
          Object.keys(specialists).map((specialist, index) => (
            <li className={styles.specialists_worker} key={[index, specialist].join('_')}>
              <Counter
                increment={() => changeSpecialistValue(false, specialist as keyof typeof specialists)}
                decrement={() => changeSpecialistValue(true, specialist as keyof typeof specialists)}
                value={specialists[specialist as keyof typeof specialists]}
              />
              <p className={styles.technology}>
                {specialist}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default StepOne;
