export interface IFlowCarousel {
  isDesktop: boolean;
  isBigDesktop: boolean;
  flowCarouselItems: {
    id: number;
    title: string;
    content: string;
    className: string;
  }[];
}
