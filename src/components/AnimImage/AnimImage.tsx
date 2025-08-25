import IAnimImage from './interfaces/IAnimImage';
import ImageComponent from '../Image/Image';

function AnimImage({ image }: IAnimImage) {
  return (
    <div className="relative w-full">
      <ImageComponent
        src={image}
        alt="MainBackground"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default AnimImage;
