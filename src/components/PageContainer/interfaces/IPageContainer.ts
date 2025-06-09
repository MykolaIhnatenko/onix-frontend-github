import { ElementType } from 'react';

export default interface IPageContainer {
  children: React.ReactNode;
  className?: string;
  tag?: ElementType;
  variant?: 'technologiesContainer' | 'challengeContainer';
}
