import { ReactNode } from 'react';

export default interface IFitnessCoachingPlatform {
  blockTitle: string;
  data: IFitnessCoachingPlatformData[]
}

export interface IFitnessCoachingPlatformData {
  title: string;
  content: ReactNode;
  id: string;
}
