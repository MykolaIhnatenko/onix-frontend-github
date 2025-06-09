import Image from 'next/image';
import { useState } from 'react';

import IImage from './interfaces/IImage';
import Diamond from '../../assets/images/img_diamond@2x.webp';

function ImageComponent({
  src, alt, width, height,
  fill, sizes, priority, quality,
  className, style, loading,
}:IImage) {
  const [error, setError] = useState(false);

  const getSrc = () => {
    let result = src;
    if (!src || error) {
      result = Diamond;
    }
    return result;
  };

  return (
    <Image
      src={getSrc() || Diamond}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      onError={() => setError(true)}
      draggable="false"
      loading={loading}
      style={style || { userSelect: 'none' }}
    />
  );
}

ImageComponent.defaultProps = {
  alt: 'Onix',
  fill: false,
  priority: false,
  sizes: `(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw`,
  quality: 100,
  className: undefined,
};

export default ImageComponent;
