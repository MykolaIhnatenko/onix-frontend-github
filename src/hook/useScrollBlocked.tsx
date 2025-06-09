import { useEffect } from 'react';

const useScrollBlocked = (isShow: boolean) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (isShow && body) {
      body.style.overflow = 'hidden';
    } else if (!isShow && body) {
      body.style.overflow = 'auto';
    }
  }, [isShow]);
};

export default useScrollBlocked;
