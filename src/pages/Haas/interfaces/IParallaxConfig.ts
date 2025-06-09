export interface IParallaxConfig {
  start: number;
  startOffset?: number;
  end?: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    unit?: string;
    property: string;
  }[];
}
