import MainTitle from '../../../components/MainTitle/MainTitle';
import { domainsList } from '../data/CalculatorData';
import RadioButton from './RadioButton';
import IStepThree from '../interfaces/IStepThree';

import styles from '../sass/DTCCalculator.module.scss';

function StepThree({ setDomains, currentDomain }: IStepThree) {
  return (
    <section className={styles.steps}>
      <div>
        <MainTitle tag="h3" className={styles.sectionTitle}>
          3. Indicate the most relevant business domain for your project
        </MainTitle>
        <div className={styles.businesses}>
          <ul className={styles.businesses_list}>
            {domainsList.map((domain, index) => (
              <li
                className={styles.businesses_item}
                key={[domain.htmlId, index].join('_')}
              >
                <RadioButton
                  setValue={setDomains}
                  currentValue={currentDomain}
                  title={domain.title}
                  htmlId={domain.htmlId}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StepThree;
