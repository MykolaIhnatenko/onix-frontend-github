import { ElementType } from 'react';

export default interface IJakartaText {
  tag?: ElementType;
  className?: string;
  children?: string | React.ReactNode;
  capitalize?: boolean;
  id?: string;
}
