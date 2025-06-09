import { useSelector } from 'react-redux';

import { IShellChairChallengesCard } from '../../../pages/ShellChairPageView/interfaces/IShellChairSolutionCard';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import ImageComponent from '../../Image/Image';
import useAdaptiveImage from '../../../hook/useAdaptiveImage';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import VRARContent from '../../VRARContent/VRARContent';

function SolutionCard({
  title, img, imgTablet, imgMobile, text, video,
}: IShellChairChallengesCard) {
  const { bg, properties: { imgWidth, imgHeight } } = useAdaptiveImage({
    imgDesk: img,
    imgTablet,
    imgMobile,
    widthDesk: 850,
    heightDesk: 760,
    widthTablet: 768,
    heightTablet: 460,
    widthMobile: 360,
    heightMobile: 400,
  });

  const {
    isMDDevice, isLGDevice, isXLDevice, isXXLDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const isNotMobile = isMDDevice || isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  return (
    <div className={`
      min-lg:flex min-lg:gap-[70px] min-lg:pt-[70px]
      [&:nth-of-type(odd)]:flex-row-reverse
      min-lg:[&:nth-of-type(odd)]:pl-[70px]
      min-lg:[&:nth-of-type(even)]:pr-[70px]
      min-xxxl:[&:nth-of-type(odd)]:pl-[80px]
      min-xxxl:[&:nth-of-type(even)]:pr-[80px]
    `}
    >
      {bg && (
        <div
          className={`
          min-md:h-[686px] min-lg:h-auto min-lg:!basis-[64%]
          min-xxl:basis-[unset] min-xxl:min-w-[850px] min-xxl:min-h-[760px]
          min-xxxl:basis-[unset] min-xxxl:min-w-[1020px] min-xxxl:min-h-[912px]
        `}
        >
          <ImageComponent
            src={bg}
            width={imgWidth}
            height={imgHeight}
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            alt="image"
            className="block w-full h-full object-cover"
          />
        </div>
      )}
      {video && isNotMobile && (
        <div
          className={`
            hidden min-md:flex min-md:relative min-md:items-center
            min-md:justify-center min-md:w-full min-md:h-[686px]
            min-md:bg-[linear-gradient(180deg,_#212121_0%,_#040404_100%)]
            min-lg:!basis-[63.5%] min-lg:h-[760px] min-lg:p-[40px]
            min-xxl:!basis-[unset] min-xxl:min-w-[850px] min-xxl:min-h-[760px]
            min-xxxl:min-w-[1020px] min-xxxl:min-h-[912px]
          `}
        >
          <div
            className={`
              max-w-[696px] max-h-[405px]
              min-lg:max-w-[770px] min-lg:max-h-[448px]
            `}
          >
            <video
              autoPlay
              muted
              loop
              src={video}
              className="w-full h-auto"
            >
              <track kind="captions" src={video} />
            </video>
          </div>
        </div>
      )}
      <VRARContent
        className={`
          p-[30px_15px] min-md:p-[30px_30px_60px] min-lg:p-0
          min-lg:basis-[36%] min-xxl:basis-auto
          min-xxxl:basis-auto min-xxxl:max-w-[750px]
        `}
      >
        <MainTitleWithoutSize
          tag="h3"
          className={`
            text-[20px] leading-[28px] pb-[20px]
            min-md:text-[30px] min-md:leading-[40px] min-md:pb-[30px] min-md:max-w-full
            min-lg:max-w-unset
          `}
        >
          {title}
        </MainTitleWithoutSize>
        {text}
      </VRARContent>
    </div>
  );
}

export default SolutionCard;
