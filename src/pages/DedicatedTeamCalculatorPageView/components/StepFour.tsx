import MainTitle from '../../../components/MainTitle/MainTitle';
import { durationList } from '../data/CalculatorData';
import RadioButton from './RadioButton';
import IStepFour from '../interfaces/IStepFour';

import styles from '../sass/DTCCalculator.module.scss';

function StepFour({ duration, setDuration }: IStepFour) {
  return (
    <section className={styles.steps}>
      <div>
        <MainTitle tag="h3" className={styles.sectionTitle}>
          4. Specify project duration
        </MainTitle>
        <div className={styles.duration}>
          <ul className={styles.duration_list}>
            {
              durationList.map((durationItem, index) => (
                <li
                  key={[durationItem.htmlId, index].join('_')}
                  className={styles.duration_item}
                >
                  <RadioButton
                    setValue={setDuration}
                    currentValue={duration}
                    title={durationItem.title}
                    htmlId={durationItem.htmlId}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StepFour;
