import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { shallowEqual } from 'react-redux';
import { useRouter } from 'next/router';

import ErrorComponent from './ErrorComponent';
import ITextField from '../interfaces/ITextField';
import { ErrorVariant, TextFieldVariant } from '../../../constants/enums';
import { useAppSelector } from '../../../hook/reduxToolkit';

import styles from '../sass/textField.module.scss';

function TextField({
  label,
  name,
  onChange,
  onBlurInput,
  onBlurTextArea,
  classVariant,
  value = '',
  className = '',
  error = '',
  isAsterisk,
  tag: Tag = 'input',
  errorVariant,
  spanTop = false,
  focusOnName = false,
  id = 'focus',
}: ITextField) {
  const { isShowContactForm } = useAppSelector((state) => state?.contactForm, shallowEqual);

  const getErrorComponentVariant = () => {
    let variant;
    if (name === 'description') {
      variant = ErrorVariant.DESCRIPTION_ERROR;
    }
    if (errorVariant) {
      variant = errorVariant;
    }
    if (classVariant === TextFieldVariant.LEAVING_FORM) {
      variant = ErrorVariant.LEAVING_FORM;
    }

    return variant;
  };
  const { route } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const shouldFocusUrl = route === '/contact-us';
    if ((inputRef.current && isShowContactForm) || shouldFocusUrl || focusOnName) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [focusOnName, isShowContactForm]);

  return (
    <motion.div
      className={
        `d-flex d-col 
        ${styles.inputBox} 
        ${error ? styles.inputBoxError : ''} 
        ${className}
        ${Tag === 'input' ? styles.inputBlockHeight : ''}
        ${classVariant ? styles[classVariant] : ''}
        `
      }
    >
      {Tag === 'input' ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          required
          onBlur={onBlurInput}
          ref={(id === 'focus' && name === 'name') ? inputRef : null}
        />
      ) : (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlurTextArea}
          required
        />
      )}
      <motion.span className={`${styles.label} ${spanTop ? styles.spanTop : ''}`}>
        {label}
        {isAsterisk && (<span className={styles.asterisk}>*</span>)}
      </motion.span>
      {error && (
      <ErrorComponent
        error={error}
        variant={getErrorComponentVariant()}
      />
      )}
    </motion.div>
  );
}

export default TextField;
