export default interface IInteractiveProgress {
  variant: string;
  duration: string | number;
  disabled?: boolean;
}

export interface IParallaxProperty {
  startValue: number;
  endValue: number;
  property: string;
}

export interface IParallaxObject {
  start: string;
  duration: number | string;
  properties: IParallaxProperty[];
}
