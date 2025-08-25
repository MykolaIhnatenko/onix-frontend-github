import React from 'react';

import Icons from '../../../assets/icon';
import IButtonPlay from '../interfaces/IButtonPlay';

function ButtonPlay({
  showButton, handlePlayPause, buttonText, isJakarta,
}:IButtonPlay) {
  if (!showButton) return null;

  return (
    <button
      className="
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
          border-2 border-white rounded-[100px] z-20
          flex items-center gap-[10px]
          px-[25px] py-[14px] bg-[rgba(0,0,0,0.7)]
          cursor-pointer overflow-hidden
          w-[74px] transition-all duration-300 ease-in-out
          max-lg:cursor-default
          min-lg:hover:w-[183px] group"
      type="button"
      onClick={handlePlayPause}
    >
      <Icons.IconPlayVideo className="min-w-[24px] h-[24px] z-[2]" />
      <span
        className={`
          font-ibmPlexMono text-[16px]/[22px] font-medium text-white
          opacity-0 uppercase whitespace-nowrap
          transition-opacity duration-300 ease-in-out
          min-lg:group-hover:opacity-100
          max-lg:!opacity-0
          ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
        `}
      >
        {buttonText}
      </span>
    </button>
  );
}

export default ButtonPlay;
