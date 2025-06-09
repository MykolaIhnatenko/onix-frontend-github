import React, { useState } from 'react';

import IProgressBar from '../interfaces/IProgressBar';
import useFormatTime from '../../../hook/useFormatTime';
import PoppinsFont from '../../../fonts/PoppinsFont';

function ProgressBar({
  duration,
  currentTime,
  onProgressHover,
  onProgressLive,
  onSeekTo,
  hoverPosition,
  hoverTime,
  progressBarClasses = '',
}:IProgressBar) {
  const formatTime = useFormatTime();
  const [isDragging, setIsDragging] = useState(false);
  const [dragTime, setDragTime] = useState(currentTime);

  const getDisplayTime = () => {
    if (hoverTime !== null && hoverPosition !== null) {
      return formatTime(Math.min(Math.max(hoverTime, 0), duration));
    }
    return null;
  };

  const progressPercentage = ((isDragging ? dragTime : currentTime) / duration) * 100;
  const hoverPercentage = hoverPosition || 0;

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    if (isDragging) {
      onSeekTo(dragTime);
      setIsDragging(false);
    }
  };

  const handleMove = (event: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const pos = (clientX - rect.left) / rect.width;
    const newTime = Math.min(Math.max(pos * duration, 0), duration);

    if (isDragging) {
      setDragTime(newTime);
    }
    onProgressHover(event as React.MouseEvent<HTMLInputElement>);
  };

  return (
    <div className={`relative w-full max-w-[500px] ml-[30px] mt-[13px]
                     screen-lg:mt-[9px]
                     screen-md:m-0 screen-md:max-w-full ${progressBarClasses}`}
    >
      <input
        className=" relative top-[7px] w-full h-[18px] appearance-none bg-transparent
                    cursor-pointer outline-none z-[11] custom-range-thumb "
        type="range"
        min="0"
        max={duration}
        step="0.01"
        value={isDragging ? dragTime : currentTime}
        onMouseMove={handleMove}
        onMouseLeave={onProgressLive}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onChange={(e) => setDragTime(Number(e.target.value))}
      />
      <div
        className="h-[2px] top-[15px] w-full absolute"
        style={{
          background: `linear-gradient(to right, 
            #0072FF 0%, #0072FF ${progressPercentage}%, 
            #ccc ${progressPercentage}%, #ccc ${hoverPercentage}%, 
            #666 ${hoverPercentage}%, #666 100%)`,
        }}
      />
      {hoverTime !== null && hoverPosition !== null && (
      <div
        className="absolute -top-[10px] -translate-x-[12px] text-white text-[12px] screen-lg:hidden"
        style={{ left: `${Math.min(Math.max(hoverPosition, 2.5), 98)}%` }}
      >
        {getDisplayTime()}
      </div>
      )}
      <div className={`${PoppinsFont.variable} flex justify-between text-[12px] leading-[1.5] font-normal text-white`}>
        <span className="font-poppins">{formatTime(currentTime)}</span>
        <span className="font-poppins">{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
