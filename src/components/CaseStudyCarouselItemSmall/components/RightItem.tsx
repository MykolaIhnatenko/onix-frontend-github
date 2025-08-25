import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { RightItemType } from '../interfaces/IRightItem';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';
import { useAppSelector } from 'hook/reduxToolkit';
import JakartaTitle from '../../JakartaTitle/JakartaTitle';

function RightItem({
  title, result, solution, url,
}: RightItemType) {
  const [btnText, setBtnText] = useState('More about project');
  const router = useRouter();

  const { screenSizes: { isSMDevice, isXSDevice }, windowWidth } = useAppSelector((state) => state.app);

  const isMobile = isXSDevice || isSMDevice;
  const textStyle = `!text-[16px]/[1.5]
  screen-md:!text-[14px]/[1.5]`;

  useEffect(() => {
    const updateBtnText = () => {
      if (isMobile) {
        setBtnText('About project');
      } else {
        setBtnText('More about project');
      }
    };
    updateBtnText();
  }, [windowWidth]);

  return (
    <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] block">
      <div className="h-full bg-white text-black p-[30px] screen-lg:p-[40px] screen-md:p-[40px_15px_15px_15px]
        screen-md:flex screen-md:flex-col screen-md:justify-between"
      >
        <div>
          <JakartaTitle
            tag="h3"
            className="mb-[30px] !text-[34px]/[1.2]
             screen-md:mb-[20px] screen-md:!text-[24px]/[1.3]"
          >
            {title}
          </JakartaTitle>
          <JakartaTitle
            tag="p"
            className="!text-[20px]/[1.4] mb-[15px] screen-md:!text-[18px]/[1.4] screen-md:mb-[10px]"
          >
            Solution:
          </JakartaTitle>
          <JakartaTitle
            tag="p"
            className={textStyle}
          >
            {solution}
          </JakartaTitle>
          <JakartaTitle
            tag="p"
            className="!text-[20px]/[1.4] mt-[30px] mb-[15px] screen-md:!text-[18px]/[1.4] screen-md:mb-[10px]
             screen-md:mt-[20px]"
          >
            Result:
          </JakartaTitle>
          <JakartaTitle
            tag="p"
            className={`${textStyle} mb-[40px] screen-md:mb-0`}
          >
            {result}
          </JakartaTitle>
        </div>
        <div className="screen-md:max-w-[210px]">
          <ButtonPrimary isJakarta text={btnText} onClick={() => router.push(`${url}`)} />
        </div>
      </div>
    </div>
  );
}

export default RightItem;
