import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ITopic } from '../interfaces/ITopics';
import { useAppSelector } from '../../../hook/reduxToolkit';
import { setIsSubscribeFormSubmitted } from '../../../store/app/subscribeForm/slice';

import styles from '../sass/topic.module.scss';

function Topic({
  title, onChangeHandler, id, topicItems, setTopicItems, isChecked,
}: ITopic) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { isSubscribeFormSubmitted } = useAppSelector((state) => state?.subscribeForm);

  useEffect(() => {
    if (isSubscribeFormSubmitted) {
      const changedTopicItems = topicItems?.map((item) => ({ ...item, isChecked: false }));
      setTopicItems(changedTopicItems);
      dispatch(setIsSubscribeFormSubmitted({ isSubscribeFormSubmitted: false }));
    }
  }, [isSubscribeFormSubmitted, dispatch, setTopicItems, topicItems]);

  return (
    <motion.div
      className={isChecked ? `${styles.topic} ${styles.checked}` : styles.topic}
      onClick={() => inputRef?.current?.click()}
    >
      <span className={styles.box}>
        <span className={styles.innerBox} />
      </span>
      <input
        ref={inputRef}
        type="checkbox"
        checked={isChecked}
        name={title}
        onChange={() => {
          const changedTopicItems = topicItems?.map((
            item,
          ) => (item.id === id ? { ...item, isChecked: !isChecked } : { ...item }));
          setTopicItems(changedTopicItems);
          onChangeHandler(title);
        }}
      />
      {title}
    </motion.div>
  );
}

export default Topic;
