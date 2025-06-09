export default interface IProcessDiscoveryHowItWorksStage {
  stages: {
    number: string,
    text: string,
  }[],
  advantages: {
    title: string,
    list: string[],
  },
  conclusion: string,
}
