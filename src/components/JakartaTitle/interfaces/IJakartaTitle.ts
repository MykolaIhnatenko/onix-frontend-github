import { ElementType } from 'react';

export default interface IJakartaTitle {
  tag?: ElementType;
  className?: string;
  children?: string | React.ReactNode;
  capitalize?: boolean;
  id?: string;
}
