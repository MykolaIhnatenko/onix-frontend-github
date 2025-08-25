import { useRouter } from 'next/router';

import ICaseStudyVideoCarouselItem from 'components/CaseStudyVideoCarouselItem/interfaces/ICaseStudyVideoCarouselItem';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import JakartaText from 'components/JakartaText/JakartaText';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from 'components/Image/Image';
import Icon from '../../assets/icon';

function CaseStudyVideoCarouselItem({
  id, btnText, clients, icon, img, logoSizes, text, title, url, videoSrc, cucumbersData, videoId,
}: ICaseStudyVideoCarouselItem) {
  const router = useRouter();
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    if (isMDDevice) {
      return img.md;
    }

    if (isSMDevice || isXSDevice) {
      return img.sm;
    }

    return img.lg;
  };

  const getLogoSize = () => {
    const logo:{ [propName:string]: number } = {
      logoWidth: logoSizes.xxl.width,
      logoHeight: logoSizes.xxl.height,
    };
    if (isMDDevice) {
      logo.logoWidth = logoSizes.lg.width;
      logo.logoHeight = logoSizes.lg.height;
    } else if (isXSDevice || isSMDevice) {
      logo.logoWidth = logoSizes.sm.width;
      logo.logoHeight = logoSizes.sm.height;
    }

    return logo;
  };
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div
      key={id}
      className="text-white w-[992px] h-[649px] mr-[40px] screen-lg:w-[640px] screen-lg:h-[536px]
      screen-lg:mr-[30px] screen-md:mr-[15px] screen-md:w-[300px] screen-md:h-[334px] flex flex-col"
    >
      <div className="relative h-[675px] screen-lg:h-[360px] screen-md:h-[169px]">
        <VideoPlayer
          src={videoSrc}
          poster={getBackground()}
          classes={{
            container: '!w-full !h-full',
          }}
          id={videoId}
          isJakarta
        />
        <div
          className="pointer-events-none absolute top-0 left-0 w-full h-full p-[40px]
          screen-lg:p-[30px] screen-md:p-[10px] flex flex-col justify-between items-start"
        >
          <div className="flex flex-col gap-[15px] screen-lg:gap-[10px] screen-md:gap-[5px]">
            <ImageComponent
              src={icon}
              width={getLogoSize().logoWidth}
              height={getLogoSize().logoHeight}
              alt="case_study_icon"
            />
            <div className="flex gap-[10px] screen-md:flex-col screen-md:gap-[5px]">
              <div
                className={`flex w-fit gap-[5px] p-[10px_20px] screen-lg:p-[5px_15px] rounded-[23px]
                bg-[rgba(255,255,255,0.24)] screen-md:p-[2px_10px] screen-md:items-center`}
              >
                {isMobile ? (
                  <Icon.IconCelendar />
                ) : (
                  <JakartaText
                    className="text-white text-[16px]/[1.5] screen-lg:text-[14px]/[1.5] screen-md:text-[10px]/[1.5]
                    tracking-[-0.16px] screen-lg:tracking-[-0.14px] screen-md:tracking-[-0.1px]"
                  >
                    Duration:
                    {' '}
                  </JakartaText>
                )}
                <JakartaText
                  className="text-white !font-bold text-[16px]/[1.5] screen-lg:text-[14px]/[1.5]
                  screen-md:text-[10px]/[1.5]
                  tracking-[-0.16px] screen-lg:tracking-[-0.14px] screen-md:tracking-[-0.1px]"
                >
                  {cucumbersData?.duration}
                </JakartaText>
              </div>
              <div
                className={`flex w-fit gap-[5px] p-[10px_20px] screen-lg:p-[5px_15px] rounded-[23px]
                bg-[rgba(255,255,255,0.24)] screen-md:p-[2px_10px] screen-md:items-center`}
              >
                {isMobile ? (
                  <Icon.IconUser />
                ) : (
                  <JakartaText
                    className="text-white text-[16px]/[1.5] screen-lg:text-[14px]/[1.5] screen-md:text-[10px]/[1.5]
                    tracking-[-0.16px] screen-lg:tracking-[-0.14px] screen-md:tracking-[-0.1px]"
                  >
                    Team size:
                    {' '}
                  </JakartaText>
                )}
                <JakartaText
                  className="text-white !font-bold text-[16px]/[1.5] screen-lg:text-[14px]/[1.5]
                  screen-md:text-[10px]/[1.5]
                  tracking-[-0.16px] screen-lg:tracking-[-0.14px] screen-md:tracking-[-0.1px]"
                >
                  {cucumbersData?.teamSize}
                </JakartaText>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] screen-lg:gap-[40px] screen-md:gap-[15px]">
            {clients.map(({ name, position }, index) => (
              <div
                key={[name, index].join('')}
                className="flex flex-col justify-between gap-[15px] screen-lg:gap-[5px] screen-md:gap-[2px]"
              >
                <JakartaText
                  className="text-[34px]/[1.2] screen-lg:text-[20px]/[1.4] screen-md:text-[14px]/[1.4]
                  tracking-[-0.34px] screen-lg:tracking-[-0.28px] screen-md:tracking-[-0.2px]"
                >
                  {name}
                </JakartaText>
                <JakartaText
                  className="text-[20px]/[1.4] screen-lg:text-[14px]/[1.5] screen-md:text-[10px]/[1.5]
                  tracking-[-0.2px] screen-lg:tracking-[-0.14px] screen-md:tracking-[-0.1px]"
                >
                  {position}
                </JakartaText>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex pt-[20px] justify-between items-start gap-[30px] flex-[1]
        screen-lg:flex-col screen-lg:pt-[20px] screen-md:gap-[15px] screen-md:pt-[15px]"
      >
        <div className="flex flex-col gap-[10px]">
          <JakartaText
            className="text-[28px]/[1.3] screen-md:text-[20px]/[1.4]
            tracking-[-0.34px] screen-lg:tracking-[-0.2px] screen-md:tracking-[-0.14px]"
          >
            {title}
          </JakartaText>
          <JakartaText
            className="text-[18px]/[1.4] screen-lg:text-[16px]/[1.5] screen-md:text-[14px]/[1.5]
            tracking-[-0.18px] screen-lg:tracking-[-0.16px] screen-md:tracking-[-0.14px]"
          >
            {text}
          </JakartaText>
        </div>
        <ButtonLight
          text={btnText}
          classes={{
            container: '!max-w-[330px] screen-md:max-w-[300px]',
          }}
          isJakarta
          onClick={() => router.push(`${url}`)}
        />
      </div>
    </div>
  );
}

export default CaseStudyVideoCarouselItem;
