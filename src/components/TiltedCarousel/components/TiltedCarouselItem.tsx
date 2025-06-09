import ImageComponent from '../../Image/Image';
import ITiltedCarouselItem from '../interfaces/ITiltedCarouselItem';

function TiltedCarouselItem({ data }: ITiltedCarouselItem) {
  return (
    <div className="flex">
      {data.map(({ key, img }) => (
        <div key={key} className="pr-[10px] last:pr-0">
          <ImageComponent
            className="w-[360px] h-[268px] screen-lg:w-[248px] screen-lg:h-[185px]
             screen-md:w-[230px] screen-md:h-[175px] min-xxxl:w-[385px] min-xxxl:h-[290px]"
            src={img}
            alt="image"
            priority
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
        </div>
      ))}
    </div>
  );
}

export default TiltedCarouselItem;
