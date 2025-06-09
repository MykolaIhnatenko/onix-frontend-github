import { ReactNode } from 'react';

export default interface ITranslateRightAnimation {
  children: ReactNode | string,
  classes?: string,
  offset?: number,
  delay?: number,
  triggerOnce?: boolean,
}
