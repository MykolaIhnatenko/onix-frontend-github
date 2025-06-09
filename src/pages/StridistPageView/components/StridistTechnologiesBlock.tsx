import { useState } from 'react';

import technologiesList from '../data/technologiesList';

import styles from '../sass/stridistTechnologiesBlock.module.scss';

function StridistTechnologiesBlock() {
  const [active, setActive] = useState(0);

  const onClickHandler = (btnId : number) => setActive(btnId);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        {technologiesList.map(({ name }, index) => (
          <div
            key={[name, index].join('_')}
            className={`${styles.button} ${active === index ? styles.active : ''}`}
            onClick={() => onClickHandler(index)}
            onKeyDown={() => onClickHandler(index)}
            aria-hidden="true"
          >
            {name}
          </div>
        ))}
      </div>
      <div className={`${styles.technologies} ${active === 0 ? styles.backend : styles.frontend}`}>
        {technologiesList[active].content && Object.keys(technologiesList[active].content).map((label, index) => (
          <div className={styles.stackItem} key={[label, index].join('_')}>
            <h3 className="technologiesListTitle">{label}</h3>
            <ul>
              {technologiesList[active].content[label]?.map((element, i) => (
                <li key={[element, i].join('_')}><p>{element}</p></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StridistTechnologiesBlock;
