import { useSelector } from 'react-redux';

import ContentText from '../ContentText/ContentText';
import { IIconsContent } from './interfaces/IIconsContent';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';

function IconsContent({ data, classes }: IIconsContent) {
  const {
    screenSizes: {
      isSMDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const isTablet = isMDDevice || isSMDevice;

  return (
    <div
      className={`
        flex justify-between max-w-[1440px] mx-auto
        p-[80px_70px_120px]
        min-xxxl:p-[80px_80px_120px]
        screen-xl:p-[40px_15px_80px]
        screen-lg:p-[60px_0_80px] screen-lg:flex-wrap screen-lg:gap-[40px_110px]
        screen-md:p-[60px_0] screen-md:gap-y-[40px] screen-md:gap-x-0
        ${classes?.container || ''}
      `}
    >
      {data.map(({
        id, title, icon, lessIcon,
      }) => (
        <div
          key={id}
          className={`
            screen-md:w-1/2
            ${classes?.containerItemWrapper || ''}
          `}
        >
          <div
            className={`
              min-w-[158px] max-w-[158px] mx-auto
              ${classes?.containerItem || ''}
            `}
          >
            <div
              className={`
                text-center flex justify-center
                ${classes?.iconContainer || ''}
              `}
            >
              {isTablet && lessIcon ? lessIcon : icon}
            </div>
            <ContentText
              tag="p"
              className={`
                !mt-[20px] !text-center !font-[500] !text-[20px] !leading-[28px] !font-generalSans !mb-0
                ${classes?.title || ''}
              `}
            >
              {title}
            </ContentText>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconsContent;
