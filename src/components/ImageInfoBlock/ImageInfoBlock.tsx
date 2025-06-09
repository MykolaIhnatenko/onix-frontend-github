import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import MainTitle from 'components/MainTitle/MainTitle';
import IImageInfoBlock from './interfaces/IImageInfoBlock';
import ImageComponent from '../Image/Image';

function ImageInfoBlock({
  title, data, background,
}: IImageInfoBlock) {
  const [activeCard, setActiveCard] = useState(1);

  const activeCardHandler = (id:number) => setActiveCard(id);

  return (
    <div
      className="w-full flex flex-col p-[80px_0px] bg-black relative screen-lg:pb-[50px] screen-md:p-[60px_0px_45px]"
    >
      {background && (
        <div
          className={`absolute bottom-0 left-0 w-full h-[530px] screen-lg:h-[353px] screen-md:h-[271px]
            after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[70px]
            after:screen-lg:h-[110px] after:bg-[linear-gradient(0deg,_rgba(253,253,253,0)_15%,_#000_100%)]`}
        >
          <ImageComponent
            src={background}
            alt="BgAccordion"
            quality={100}
            fill
            sizes="(min-width: 768px) 100vw"
            className="object-cover object-bottom"
          />
        </div>
      )}
      {!!title && (
        <MainTitle
          className={`!text-[50px] !font-[500] !leading-[64px] w-[90%] p-[0px_70px] mb-[60px] text-white z-[2]
            min-xxxl:p-[0px_80px]
            screen-lg:!text-[40px] screen-lg:!leading-[56px] screen-lg:w-full screen-lg:mb-[10px] screen-lg:p-[0px_30px]
            screen-md:!text-[24px] screen-md:!leading-[34px] screen-md:p-[0px_15px] screen-md:mb-[25px]`}
        >
          {title}
        </MainTitle>
      )}
      <div
        className={`w-full flex items-center relative
        screen-lg:overflow-x-scroll screen-lg:overflow-y-hidden screen-lg:whitespace-nowrap screen-lg:p-[30px]
        screen-md:p-[15px]
        [&::-webkit-scrollbar]:w-[2px] 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-transparent`}
      >
        {data.length > 0 && data.map(({
          id, number, image, title: titleCard,
        }) => (
          <motion.div
            key={[number, title].join('_')}
            className={`w-[18%] h-[688px] relative flex flex-col justify-between p-[30px] transition-[width]
              duration-[500ms] ease-in-out outline outline-1 outline-white outline-offset-[-1px] z-[2]
              screen-lg:min-w-[600px] screen-lg:h-[600px] screen-lg:outline-none screen-lg:ml-[30px]
              screen-md:ml-[20px] screen-md:min-w-[280px] screen-md:h-[280px] screen-md:p-[15px]
              first:screen-lg:ml-0
              ${activeCard === id
              ? 'flex-[1_1_0%] w-[46%] outline-none screen-lg:min-w-[600px] screen-lg:h-[600px] '
                + 'screen-md:min-w-[280px] screen-md:h-[280px]'
              : ''}`}
            onHoverStart={() => activeCardHandler(id)}
            role="button"
            tabIndex={0}
          >
            <span
              className={`font-generalSans text-[36px] font-[500] leading-[46px] text-white p-0 z-[5] h-fit
                screen-md:text-[16px] screen-md:leading-[21px]`}
            >
              {number}
            </span>
            <MainTitle
              tag="h3"
              className={`!text-[36px] !font-[500] !leading-[46px] text-white p-0 z-[5]
                h-fit [writing-mode:vertical-rl] rotate-180
                screen-md:!text-[16px] screen-md:!leading-[21px]`}
            >
              {titleCard}
            </MainTitle>
            <Image
              className={`opacity-0 transition-opacity duration-[500ms] ease-in-out screen-lg:opacity-100
                ${activeCard === id ? 'opacity-100' : ''}`}
              src={image}
              alt="imageCard"
              priority
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ImageInfoBlock;
