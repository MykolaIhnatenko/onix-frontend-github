import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IBadge from '../interfaces/IBadge';
import IStore from '../../../store/interfaces/IStore';
import { IContactForm } from '../../../store/app/contactForm/interfaces/IContactForm';
import { setIsFormSubmitted } from '../../../store/app/contactForm/slice';

import styles from '../sass/badge.module.scss';

function Badge({
  text, name, onChangeHandler,
}: IBadge) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { isFormSubmitted } = useSelector<IStore, IContactForm>((state) => state?.contactForm);

  useEffect(() => {
    if (isFormSubmitted) {
      setIsChecked(false);
      dispatch(setIsFormSubmitted({ isFormSubmitted: false }));
    }
  }, [isFormSubmitted, dispatch]);

  return (
    <motion.div
      className={isChecked ? `${styles.badge} ${styles.checked}` : styles.badge}
      onClick={() => inputRef?.current?.click()}
    >
      <input
        ref={inputRef}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={() => {
          setIsChecked(!isChecked);
          onChangeHandler(name);
        }}
      />
      {text}
    </motion.div>
  );
}

export default Badge;
