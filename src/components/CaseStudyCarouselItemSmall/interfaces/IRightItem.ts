import ICaseStudyCarouselItem from './ICaseStudyCarouselItem';

type Keys =
  'title' |
  'result' |
  'solution' |
  'url';

export type RightItemType = Pick<ICaseStudyCarouselItem, Keys>;
