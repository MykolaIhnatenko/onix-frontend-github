import ICarouselAutomatic from './interfaces/ICarouselAutomatic';

function CarouselAutomaticComponent({
  data, industriesCarousel, classes = {},
}:ICarouselAutomatic) {
  return (
    <div className={`overflow-hidden ${classes?.container || ''}`}>
      <div className={`flex flex-row justify-between 
          duration-[15s] ease-linear animate-infinite
          ${industriesCarousel ? 'hover:[animation-play-state:paused] ' : ''} 
          ${classes?.animation || ''}
         `}
      >
        {data.map(({
          id,
          content,
        }) => (
          <div key={id} className={`ml-[120px] screen-lg:ml-[100px] screen-md:ml-[15px] ${classes?.item || ''}`}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselAutomaticComponent;
