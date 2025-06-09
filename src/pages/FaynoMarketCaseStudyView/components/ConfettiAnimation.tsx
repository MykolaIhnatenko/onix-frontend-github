import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ImageComponent from '../../../components/Image/Image';
import IConfettiAnimation from '../interfaces/IConfettiAnimation';

import styles from '../sass/ConfettiAnimation.module.scss';

function ConfettiAnimation({ data }: IConfettiAnimation) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseEnter, setMouseEnter] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleMouseMove = (event: MouseEvent) => {
    setTimeout(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({
        x: -event.clientX + centerX,
        y: -event.clientY + centerY,
      });
    }, 40);
  };

  const handleMouseEnter = () => setMouseEnter(true);

  const handleMouseLeave = () => setMouseEnter(false);

  useEffect(() => {
    if (inView) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [inView]);

  return (
    <div ref={ref} className={styles.container}>
      {data.map(({
        id, image, top, left, width, height, offset, rotate,
      }) => {
        const xOffset = mouseEnter ? (mousePosition.x / offset) : 0;
        const yOffset = mouseEnter ? (mousePosition.y / offset) : 0;

        const rotateOffset = mouseEnter ? (mousePosition.x / rotate) : 0;

        return (
          <ImageComponent
            key={id}
            src={image}
            alt="Confetti"
            width={width}
            height={height}
            className={styles.confetti}
            style={{
              top,
              left,
              transform: `translate(${xOffset}px, ${yOffset}px) rotateZ(${rotateOffset}deg)`,
              transitionDuration: !mouseEnter ? '0.5s' : '0.25s',
            }}
          />
        );
      })}
    </div>
  );
}

export default ConfettiAnimation;
