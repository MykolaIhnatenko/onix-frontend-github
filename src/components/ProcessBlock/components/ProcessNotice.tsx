import { useState } from 'react';

import IProcessNotice from '../interfaces/IProcessNotice';
import { I } from '../../../constants/constants';
import { useAppSelector } from '../../../hook/reduxToolkit';

export default function ProcessNotice({ notice }: IProcessNotice) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const [isNoticeVisible, setNoticeVisible] = useState<boolean>(false);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  const iconClick = () => {
    if (isMobile) {
      setNoticeVisible(!isNoticeVisible);
    }
  };

  const popupClick = () => {
    if (isMobile && isNoticeVisible) {
      setNoticeVisible(false);
    }
  };

  return (
    <div
      className="absolute inset-0 w-full h-full z-[3]"
      onClick={popupClick}
      aria-hidden
    >
      <div
        className={`group absolute bottom-5 right-5 h-[54px] w-[54px] rounded-full
          bg-black text-white flex items-center justify-center text-[21px] z-[4] font-generalSans
          min-lg:cursor-pointer
          min-lg:hover:bottom-0 min-lg:hover:right-0 min-lg:hover:w-full min-lg:hover:rounded-none 
          min-lg:hover:text-[14px] min-lg:hover:leading-[20px] min-lg:hover:px-[20px]
           min-lg:hover:py-[22.5px] min-lg:hover:bg-black/50 min-lg:hover:h-auto
            ${isNoticeVisible ? '!bottom-0 !right-0 w-full rounded-none !text-[14px] !leading-[20px]'
          + ' !px-[20px] !py-[22.5px] bg-black/50 h-auto' : ''}`}
        onClick={() => iconClick()}
        aria-hidden
      >
        <div className={`block group-min-lg:hover:!hidden ${isNoticeVisible ? '!hidden' : ''}`}>
          {I}
        </div>
        <div className={`hidden group-min-lg:hover:!block ${isNoticeVisible ? '!block' : ''}`}>
          {notice}
        </div>
      </div>
    </div>
  );
}
