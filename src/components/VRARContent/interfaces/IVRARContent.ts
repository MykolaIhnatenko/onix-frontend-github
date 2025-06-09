import { ReactNode } from 'react';

interface IVRARContent {
  children: ReactNode;
  offset?: number;
  delay?: number;
  withoutAnimateMobile?: boolean;
  withoutAnimate?: boolean;
  className?: string;
  translate?: 'translateX' | 'translateY';
  triggerOnce?: boolean;
  rootMarginBottom?: number;
  duration?: number;
}

export default IVRARContent;
