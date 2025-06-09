import { useEffect, useState } from 'react';

const useIsSaleUrl = () => {
  const [isSaleUrl, setIsSaleUrl] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window?.location?.origin) {
      setIsSaleUrl(window?.location?.origin?.includes('sale') ?? false);
    }
  }, []);

  return isSaleUrl;
};

export default useIsSaleUrl;
