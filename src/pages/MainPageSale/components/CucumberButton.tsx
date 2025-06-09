import { useEffect, useRef } from 'react';

import ICucumberButton from '../interfaces/ICucumberButton';

import styles from '../sass/cucumberButton.module.scss';

function CucumberButton({
  designTag, typeFilterHandle, name, setButtonWidth,
}: ICucumberButton) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = ref?.current?.getBoundingClientRect().width;
    const GAP = 10;
    if (setButtonWidth && width) {
      setButtonWidth((prevState: number) => prevState + width + GAP);
    }
  }, [setButtonWidth]);

  return (
    <button
      className={designTag === name ? styles.activeButton : styles.button}
      onClick={() => typeFilterHandle(name)}
      type="button"
    >
      <span className={styles.textButton}>{name}</span>
    </button>
  );
}

export default CucumberButton;
