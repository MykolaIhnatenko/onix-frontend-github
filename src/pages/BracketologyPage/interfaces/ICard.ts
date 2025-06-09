export interface ICard {
  children: React.ReactNode;
  cardVariant?: string;
  wrapperVariant?: 'storyWrapper' | 'servicesWrapper' | 'challengeWrapper' |
  'resultWrapper' | 'resultAposWrapper';
}
