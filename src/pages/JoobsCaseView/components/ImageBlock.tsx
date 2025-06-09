import { StaticImageData } from 'next/image';

import ImageComponent from 'components/Image/Image';

function ImageBlock({ image }: { image: StaticImageData }) {
  return (
    <div className="w-full h-auto">
      <ImageComponent
        src={image}
        quality={92}
        alt="Joobs"
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
}

export default ImageBlock;
