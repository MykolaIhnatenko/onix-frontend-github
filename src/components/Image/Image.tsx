import Image from 'next/image';
import { useState } from 'react';

import IImage from './interfaces/IImage';
import Diamond from '../../assets/images/img_diamond@2x.webp';

function ImageComponent({
  src,
  alt = 'Onix',
  width,
  height,
  fill = false,
  sizes = `(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw`,
  priority = false,
  quality = 100,
  className,
  style,
  loading,
  fetchPriority = 'low',
}: IImage) {
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
      src={getSrc()}
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
      fetchPriority={priority ? undefined : fetchPriority}
    />
  );
}

export default ImageComponent;
