import MainTitle from '../../../components/MainTitle/MainTitle';
import Counter from './Counter';
import IStepTwo from '../interfaces/IStepTwo';

import styles from '../sass/DTCCalculator.module.scss';

function StepTwo({ technologies, changeTechnologyValue }: IStepTwo) {
  return (
    <section className={`${styles.steps} ${styles.stepTwo}`}>
      <div>
        <MainTitle tag="h3" className={styles.sectionTitle}>
          2. Choose required technology stack
        </MainTitle>
        <div className={styles.technologies}>
          {
            Object.keys(technologies).map((direction, index) => (
              <div className={styles.technologies_list} key={[index, direction].join('_')}>
                <MainTitle tag="h4" className={styles.directionTitle}>
                  {direction}
                </MainTitle>
                <ul>
                  {Object.keys(technologies[direction as keyof typeof technologies])
                    .map((name, i) => (
                      <li key={[i, name].join('_')}>
                        <Counter
                          increment={
                            () => changeTechnologyValue(false, name, direction as keyof typeof technologies)
                          }
                          decrement={
                            () => changeTechnologyValue(true, name, direction as keyof typeof technologies)
                          }
                          value={+technologies[direction as keyof typeof technologies][name]}
                        />
                        <p className={styles.technology}>
                          {name}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default StepTwo;
