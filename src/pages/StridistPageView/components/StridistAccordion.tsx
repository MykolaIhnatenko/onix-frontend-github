import { useState } from 'react';

import designSolutionAccordionContent from '../data/designSolutionAccordionContent';

import styles from '../sass/stridistAccordion.module.scss';

function StridistAccordion() {
  const [activeItemId, setActiveItemId] = useState(1);

  const toggleAccordionItem = (id: number) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  return (
    <ul className={styles.accordion}>
      {designSolutionAccordionContent.map(({ id, question, answer }) => (
        <li
          className={`${styles.item} ${activeItemId === id ? styles.active : ''}`}
          key={id}
        >
          <div
            className={styles.question}
            onClick={() => toggleAccordionItem(id)}
            onKeyDown={() => toggleAccordionItem(id)}
            role="button"
            tabIndex={-1}
          >
            <h3>
              {question}
            </h3>
            <span className={`${styles.arrow} ${activeItemId === id ? styles.rotate : ''}`} />
          </div>
          <div className={styles.answer}>
            <div className={styles.answerInner}>
              {answer}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StridistAccordion;
