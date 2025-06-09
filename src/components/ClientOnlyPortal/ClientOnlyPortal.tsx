import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IClientOnlyPortal } from './interfaces/IClientOnlyPortal';

function ClientOnlyPortal({ children, selector }: IClientOnlyPortal) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  if (!mounted || !ref.current || !children) {
    return null;
  }

  return mounted ? createPortal(children, ref.current) : null;
}
export default ClientOnlyPortal;
