import IRadioButton from '../interfaces/IRadioButton';

import styles from '../sass/RadioButton.module.scss';

function RadioButton({
  setValue, title, currentValue, htmlId,
}:IRadioButton) {
  return (
    <div
      className={styles.radio}
    >
      <label
        htmlFor={htmlId}
        onClick={() => setValue(title)}
        aria-hidden="true"
      >
        <input type="radio" name="business" id={htmlId} />
        <span className={`
          ${styles.radioLabel}
          ${title === currentValue ? styles.active : ''}
        `}
        />
        {title}
      </label>
    </div>
  );
}

export default RadioButton;
