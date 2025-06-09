import React, { useState } from 'react';

const useDragTextX = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const target = event.currentTarget as HTMLElement;
    const x = event.pageX - target.offsetLeft;
    const walk = (x - startX) * 1.5;
    target.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    setTimeout(() => {
      setIsDragging(true);
    }, 150);
    setStartX(event.pageX - target.offsetLeft);
    setScrollLeft(target.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    isDragging,
  };
};

export default useDragTextX;
