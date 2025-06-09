import ICaseStudyCarouselItem from './ICaseStudyCarouselItem';

type Keys =
  'title' |
  'text' |
  'subTitle' |
  'url';

export type RightItemType = Pick<ICaseStudyCarouselItem, Keys>;
