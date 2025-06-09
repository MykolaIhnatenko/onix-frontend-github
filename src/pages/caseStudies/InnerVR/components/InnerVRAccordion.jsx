import { useState, useRef } from 'react';

import Arrow from '../../../../../public/static/images/Pages/InnerVR/worldsSection/ic_arrow.svg';
import InnerVRBorderedBlock from './InnerVRBorderedBlock';
import { worldsContent } from '../data/InnerVRData';

import styles from '../sass/InnerVRAccordion.module.scss';

function InnerVRAccordion() {
  const [activeItemId, setActiveItemId] = useState(1);
  const [hoverItemId, setHoverItemId] = useState(0);

  const ref = useRef();

  const toggleAccordionItem = (id) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  const getClassName = (id) => {
    if (hoverItemId === 0) {
      return id === activeItemId ? styles.answerActive : '';
    }
    return id === hoverItemId ? styles.answerActive : '';
  };

  const getRef = (id) => {
    if (hoverItemId === 0) {
      return id === activeItemId ? ref : null;
    }
    return id === hoverItemId ? ref : null;
  };

  const onMouseMoveHandler = (id) => {
    setHoverItemId(id);
  };

  return (
    <ul className={styles.accordion}>
      {worldsContent.map(({
        id, title, text, img,
      }) => (
        <li
          className={
          `${styles.item} 
          ${activeItemId === id ? styles.active : ''} 
          ${hoverItemId === id ? styles.hoverItem : ''}`
        }
          key={id}
        >
          <div
            className={styles.question}
            onMouseEnter={() => onMouseMoveHandler(id)}
            onMouseLeave={() => onMouseMoveHandler(0)}
            onClick={() => toggleAccordionItem(id)}
            onKeyDown={() => toggleAccordionItem(id)}
            role="button"
            tabIndex="-1"
          >
            <div className={styles.titleGroup}>
              <h3 className={styles.title}>
                {title}
              </h3>
              <Arrow className={activeItemId === id ? styles.activeArrow : styles.arrow} />
            </div>
          </div>
          <div
            className={`${styles.answer} ${getClassName(id)}`}
            ref={getRef(id)}
          >
            <InnerVRBorderedBlock
              src={img}
              width={480}
              height={385}
              alt="world"
              variant="worlds"
            >
              <div className={styles.text}>{text}</div>
            </InnerVRBorderedBlock>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default InnerVRAccordion;
