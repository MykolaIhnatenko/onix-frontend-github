import ImageComponent from '../Image/Image';
import IAchievementsCarouselItem from './interfaces/IAchievementsCarouselItem';

function AchievementsCarouselItem({ src, alt }:IAchievementsCarouselItem) {
  return (
    <ImageComponent
      className="max-w-none w-[348px] h-[348px] transition-transform duration-300 ease-in-out
         min-lg:hover:scale-110
         screen-md:w-[200px] screen-md:h-[200px]"
      src={src}
      alt={alt}
    />
  );
}

export default AchievementsCarouselItem;
