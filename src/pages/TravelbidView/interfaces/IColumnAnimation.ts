interface IColumnAnimation {
  start: string,
  duration: number,
  endOffset: number,
  properties: [
    {
      startValue: number,
      endValue: number,
      property: string,
    },
  ],
}

export default IColumnAnimation;
