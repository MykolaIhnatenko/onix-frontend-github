import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Icons from '../../../assets/icon';
import {
  setItems, setPrevItemIndex, setProgressPosition, setProgressValue,
} from '../../../store/app/bracketology/slice';
import { IBracketologyAccordion } from '../interfaces/IBracketologyAccordion';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyAccordion.module.scss';

function BracketologyAccordion({
  accordionContent, answerClass, plusStyle, itemClass, variant, setIsShowItem = () => {},
}: IBracketologyAccordion) {
  const dispatch = useDispatch();
  const [activeItemId, setActiveItemId] = useState(0);

  const toggleAccordionItem = (id: number) => {
    if (id !== activeItemId) {
      setActiveItemId(id);
    }
  };

  const onAccordionClick = (id: number, index: number, position = '', value = '') => {
    if (variant === 'functionalityAccordion') {
      toggleAccordionItem(id);
      if (id !== activeItemId) {
        setIsShowItem(id);
        dispatch(setItems({ index }));
        dispatch(setPrevItemIndex(index));
      }
    } else if (variant === 'developmentAccordion') {
      toggleAccordionItem(id);
      dispatch(setProgressValue(value));
      dispatch(setProgressPosition(position));
    } else {
      toggleAccordionItem(id);
    }
  };

  return (
    <ul
      id={variant === 'developmentAccordion' ? 'development' : undefined}
      className={`${styles.accordion} ${variant ? styles[variant] : ''}`}
    >
      {accordionContent.map(({
        id, question, answer, secondAnswer, number, position, value,
      }, index) => (
        <li
          className={`${styles.item} ${itemClass ? styles[itemClass] : ''} ${activeItemId === id ? styles.active : ''}`}
          key={id}
          id={variant === 'developmentAccordion' ? `${question}` : undefined}
        >
          <div
            className={styles.question}
            onClick={() => onAccordionClick(id, index, position, value)}
            onKeyDown={() => onAccordionClick(id, index, position, value)}
            role="button"
            tabIndex={-1}
          >
            <div className={styles.titleGroup}>
              <span>{number}</span>
              <BracketologyText tag="h3" variant="fs_30">
                {question}
              </BracketologyText>
            </div>
            <span className={`${styles.plus} ${plusStyle ? styles[plusStyle] : ''}`} />
            {plusStyle === 'bachelorPlus' && (
            <span className={styles.arrow}>
              <Icons.IconBracketologyAccordionArrow
                className={activeItemId === id ? styles.activeArrow : styles.whiteArrow}
              />
            </span>
            )}
          </div>
          <div className={`${styles.answer} ${answerClass ? styles[answerClass] : ''}`}>
            <div className={styles.answerInner}>
              <BracketologyText tag="h4" variant="fs_18">{question}</BracketologyText>
              <BracketologyText tag="p" variant="text">{answer}</BracketologyText>
              {secondAnswer && <BracketologyText tag="p" variant="text">{secondAnswer}</BracketologyText>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BracketologyAccordion;
