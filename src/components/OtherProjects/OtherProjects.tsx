import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { IOtherProjects } from './interfaces/IOtherProjects';
import ImageComponent from '../Image/Image';
import { useAppSelector } from 'hook/reduxToolkit';

function OtherProjects({ projects, classes }: IOtherProjects) {
  const { windowWidth } = useAppSelector((state) => state.app);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number | undefined>(cardRef.current?.clientWidth);

  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;

  useEffect(() => {
    setCardWidth(cardRef.current?.clientWidth);
  }, [windowWidth, cardRef.current?.clientWidth]);

  return (
    <div className={`
        flex justify-between gap-[60px] screen-lg:gap-[32px] screen-md:gap-[24px] screen-sm:flex-col
        ${classes?.section || ''}
      `}
    >
      {projects?.map((project) => {
        const imgSrc = project.attributes.picture?.data?.attributes?.url;
        const pathString = project.attributes.page?.data?.attributes?.url;

        const title = project?.attributes?.header;
        const subTitle = project?.attributes?.description;

        return (
          <Link
            key={project?.id}
            href={`/${pathString}`}
            prefetch={false}
            className={`flex flex-col flex-1 relative screen-md:w-full group/card ${classes?.card || ''}`}
          >
            <div ref={cardRef}>
              <div className={`
                  relative overflow-hidden max-h-[360px] w-full screen-sm:h-[200px]
                  ${classes?.cardImageContainer || ''}
                `}
              >
                <ImageComponent
                  src={`${adminPath}${imgSrc}`}
                  width={0}
                  height={0}
                  alt="project picture"
                  className={`
                    w-full h-full transition-all duration-300 ease-in-out object-cover object-left-top
                    group-hover/card:scale-125 min-sm:min-h-[213px]
                    ${classes?.cardImage || ''}
                  `}
                />
              </div>
              {title && (
                <h3 className={`
                    relative font-semibold text-color-black text-[20px]/[33px] pt-[16px] 
                    screen-lg:text-[16px]/[27px] screen-lg:pt-[12px] screen-md:text-[16px]/[24px] screen-md:pt-[8px]
                    ${classes?.cardTitle || ''}
                  `}
                >
                  {title}
                </h3>
              )}
              {subTitle && (
                <p
                  style={{ width: cardWidth }}
                  className={`
                    font-main font-medium text-[14px]/[20px] truncate text-[#C9CACA]
                    screen-lg:text-[10px]/[14px] screen-md:text-[12px]/[20px] screen-sm:mt-[4px]
                    ${classes?.cardSubTitle || ''}
                  `}
                >
                  {subTitle}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default OtherProjects;
