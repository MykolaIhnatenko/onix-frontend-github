import { ReactNode } from 'react';

export default interface IThreeStepsBlockAnimationItem {
  id?: string;
  title?: ReactNode;
  content: React.ReactNode;
  setActiveImage: (id: string) => void;
}
