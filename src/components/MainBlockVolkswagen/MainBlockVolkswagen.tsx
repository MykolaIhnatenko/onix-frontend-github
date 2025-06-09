import { motion } from 'framer-motion';

import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import IMainBlockVolkswagen from './interfaces/IMainBlockVolkswagen';

function MainBlockVolkswagen({
  title, backgroundImg, classes = {}, logo, subtitleText,
}: IMainBlockVolkswagen) {
  return (
    <section className={`h-screen min-h-[750px] max-h-[1400px] relative 
            screen-lg:h-full screen-lg:min-h-full screen-lg:max-h-full 
            screen-md:max-h-[740px] ${classes?.container || ''}`}
    >
      {backgroundImg && (
        <div className={`absolute top-0 left-0 w-full h-full min-xl:h-full ${classes?.bgContainer || ''}`}>
          <ImageComponent
            src={backgroundImg}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      <motion.div
        className={`relative h-full max-w-[427px] flex flex-col justify-center
          pl-[70px]
          min-xxxl:pl-[80px]
          screen-lg:pl-[30px] screen-lg:justify-start screen-lg:pt-[214px]
          screen-md:pl-[15px] screen-md:pt-[170px] ${classes?.titleContainer || ''}`}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        {logo && (
          <ImageComponent
            className={`object-cover mb-[40px] w-[331px] h-[72px] 
            screen-lg:w-[276px] screen-lg:h-[60px] screen-lg:mb-[30px]
             screen-md:w-[146px] screen-md:h-[32px] screen-md:mb-[15px]
             ${classes?.logo || ''}`}
            src={logo}
            alt="logo"
            sizes="100vw"
            priority
          />
        )}
        <MainTitle
          tag="h1"
          className={`text-white ${classes?.title || ''}`}
        >
          {title || ''}
        </MainTitle>
        {subtitleText && (
          <MainTitle
            tag="p"
            className={`mt-[40px] !font-medium !text-[30px]/[40px] text-white 
            screen-lg:!text-[24px]/[34px] screen-lg:mt-[30px]
          screen-md:!text-[20px]/[24px] screen-md:mt-[15px] ${classes?.subtitle || ''}`}
          >
            {subtitleText || ''}
          </MainTitle>
        )}
      </motion.div>
    </section>
  );
}

export default MainBlockVolkswagen;
