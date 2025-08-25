import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import IAchievementsCarouselRow from '../interfaces/IAchievementsCarouselRow';
import ImageComponent from '../../Image/Image';

export default function AchievementsCarouselRow({
  items,
  itemClassName,
  reverse = false,
  speedPxPerSec = 45,
}: IAchievementsCarouselRow) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!rowRef.current) return;
    const totalWidth = rowRef.current.scrollWidth / 2;
    setDistance(totalWidth);
    setDuration(totalWidth / speedPxPerSec);
  }, [items, speedPxPerSec]);

  return (
    <div
      ref={rowRef}
      className={`flex ${reverse ? 'ticker-reverse' : 'ticker'}`}
      style={{
        '--distance': `${distance}px`,
        '--duration': `${duration}s`,
      } as React.CSSProperties}
    >
      {[...items, ...items].map(({ id, url, image }, i) => (
        <div key={[i, id].join('_')} className={itemClassName}>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComponent
              src={image}
              className="w-[348px] h-[348px] screen-md:w-[200px] screen-md:h-[200px]"
              width={348}
              height={348}
              alt="icon"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
