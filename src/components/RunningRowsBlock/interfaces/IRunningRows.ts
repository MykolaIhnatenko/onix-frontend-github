import { StaticImageData } from 'next/image';

export interface IRunningRowsProps {
  background?:StaticImageData;
  runningRows:{
    row1:StaticImageData[];
    row2:StaticImageData[];
  }
  rowMotionCoefficient?: number;
  classes?: { [key: string]: string };
}
