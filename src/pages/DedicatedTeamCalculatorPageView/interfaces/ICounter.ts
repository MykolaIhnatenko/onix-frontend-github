export default interface ICounter {
  value: number,
  increment: () => void,
  decrement: () => void,
}
