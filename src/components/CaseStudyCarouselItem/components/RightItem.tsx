import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ContentText from '../../ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import { RightItemType } from '../interfaces/IRightItem';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';
import { useAppSelector } from 'hook/reduxToolkit';

function RightItem({
  title, text, subTitle, url,
}: RightItemType) {
  const router = useRouter();
  const [btnText, setBtnText] = useState('More about project');
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
    windowWidth,
  } = useAppSelector((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;
  const textStyle = `!m-0 pb-[40px] !text-[18px] !leading-[26px]
  screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:pb-[30px]`;

  useEffect(() => {
    const updateBtnText = () => {
      if (isMobile) {
        setBtnText('about project');
      } else {
        setBtnText('More about project');
      }
    };

    updateBtnText();
  }, [windowWidth]);

  return (
    <div className="hidden absolute w-full h-full [transform:rotateY(180deg)]
      [backface-visibility:hidden] screen-lg:block"
    >
      <div className="h-full bg-white text-black p-[40px] screen-md:p-[40px_15px_15px_15px]
        screen-md:flex screen-md:flex-col screen-md:justify-between"
      >
        <div>
          <MainTitleWithoutSize
            tag="h3"
            className="pb-[30px] text-[30px] leading-[40px] screen-md:pb-[15px]
            screen-md:text-[25px] screen-md:leading-[35px]"
          >
            {title}
          </MainTitleWithoutSize>
          <ContentText
            tag="p"
            className={textStyle}
          >
            {subTitle}
          </ContentText>
          <MainTitleWithoutSize
            tag="h4"
            className="text-[18px] leading-[24px] font-medium uppercase pb-[15px]
            !font-ibmPlexMono screen-md:tracking-[0.36px]"
          >
            Services provided:
          </MainTitleWithoutSize>
          <ContentText
            tag="p"
            className={`${textStyle} screen-md:pb-0`}
          >
            {text}
          </ContentText>
        </div>
        <div className="screen-md:max-w-[206px]">
          <ButtonPrimary
            text={btnText}
            onClick={() => router.push(`${url}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default RightItem;
