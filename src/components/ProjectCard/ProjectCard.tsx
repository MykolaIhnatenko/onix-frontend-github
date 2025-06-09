import Link from 'next/link';

import IProjectCard from './interfaces/IProjectCard';
import { counterCutText } from '../../utils/helpers';
import ItemCard from './ItemCard';
import { useAppSelector } from 'hook/reduxToolkit';

function ProjectCard({
  url, image, header, description,
}:IProjectCard) {
  const {
    screenSizes: {
      isSMDevice, isXSDevice, isMDDevice,
    },
    windowWidth,
  } = useAppSelector((state) => state.app);
  const isMobile = isXSDevice || isSMDevice;
  const isTablet = isMDDevice;
  const cutTextLength = counterCutText(isTablet, isMobile);
  const cutTextLengthTitle = !isTablet ? 100 : 55;
  const cutTextLengthVariant = 67;

  const cutTextSym = windowWidth <= 1300 ? cutTextLengthVariant : cutTextLength;

  return (
    <div>
      {url ? (
        <Link
          href={url}
          className={`w-full max-w-[420px] h-[calc(33.33vw-96px)] max-h-[380px]
            relative flex flex-col items-center justify-end cursor-pointer group
            screen-lg:min-h-fit screen-lg:max-h-fit screen-lg:h-fit screen-lg:cursor-default
            screen-md:pb-[32px] screen-sm:pb-[25px] screen-sm:max-w-full`}
        >
          <ItemCard
            image={image}
            isTablet={isTablet}
            isMobile={isMobile}
            header={header}
            cutTextLengthTitle={cutTextLengthTitle}
            description={description}
            cutTextSym={cutTextSym}
          />
        </Link>
      ) : (
        <div
          className={`w-full max-w-[420px] h-[calc(33.33vw-96px)] max-h-[380px]
            relative flex flex-col items-center justify-end cursor-default
            screen-lg:min-h-fit screen-lg:max-h-fit screen-lg:h-fit screen-lg:cursor-default
            screen-md:pb-[32px] screen-sm:pb-[25px] screen-sm:max-w-full`}
        >
          <ItemCard
            image={image}
            isTablet={isTablet}
            isMobile={isMobile}
            header={header}
            cutTextLengthTitle={cutTextLengthTitle}
            description={description}
            cutTextSym={cutTextSym}
          />
        </div>
      )}
    </div>

  );
}

export default ProjectCard;
