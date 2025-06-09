export interface IParallax {
  start: number,
  duration: number,
  easing: string,
  properties: [
    {
      startValue: number,
      endValue: number,
      property: string,
    },
  ],
}
