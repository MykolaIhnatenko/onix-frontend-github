import { useState, useEffect } from 'react';

import { SEARCH_INPUT_DEFAULT_DELAY } from '../constants/constants';

function useDebounce(value: string, delay: number = SEARCH_INPUT_DEFAULT_DELAY) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );

  return debouncedValue;
}

export default useDebounce;
