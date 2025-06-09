import dynamic from 'next/dynamic';

import ICarouselAutomatic from './interfaces/ICarouselAutomatic';

const LazyCarouselAutomatic = dynamic(() => import('./CarouselAutomaticComponent'), {
  ssr: false,
});

function CarouselAutomatic({
  data, classes, industriesCarousel,
}:ICarouselAutomatic) {
  return (
    <LazyCarouselAutomatic data={data} classes={classes} industriesCarousel={industriesCarousel} />
  );
}

export default CarouselAutomatic;
