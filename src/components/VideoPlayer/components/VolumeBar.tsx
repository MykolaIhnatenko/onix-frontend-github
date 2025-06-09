import React from 'react';

import IVolumeBar from '../interfaces/IVolumeBar';

function VolumeBar({
  multiPlayer, handleVolumeBarMouseLeave, handleVolumeBarMouseEnter, volumeRange,
  isMuted, changeVolume, isVisibleVolumeBar,
}:IVolumeBar) {
  if (!isVisibleVolumeBar) return null;

  return (
    <div
      className={`absolute z-[999] -rotate-90 left-[-33px] top-[-80px] w-[90px] h-[30px] 
      flex items-center justify-center bg-[#2D2D2DA6]  screen-lg:hidden${multiPlayer ? '!left-[-5px]' : ''} `}
      onMouseLeave={handleVolumeBarMouseLeave}
      onMouseEnter={handleVolumeBarMouseEnter}
      onMouseMove={handleVolumeBarMouseEnter}
    >
      <input
        type="range"
        className="relative w-[70px] h-[20px] appearance-none bg-transparent
                   rounded-[4px] cursor-pointer z-[11] custom-range-thumb"
        min="0"
        max="1"
        step="0.1"
        value={volumeRange}
        onChange={(e) => changeVolume(Number(e.target.value))}
      />
      <div
        className="h-[2px] top-[14px] w-[70px] absolute"
        style={{
          background: `linear-gradient(to right, #0072FF 0%, #0072FF ${
            isMuted ? 0 : volumeRange * 100
          }%, #666 ${isMuted ? 0 : volumeRange * 100}%, #666 100%)`,
        }}
      />
    </div>
  );
}

export default VolumeBar;
