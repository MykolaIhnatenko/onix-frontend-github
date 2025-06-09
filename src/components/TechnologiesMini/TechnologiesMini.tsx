import ImageComponent from '../Image/Image';
import { ITechnologiesMini } from './interfaces/ITechnologiesMini';
import ContentText from '../ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

import styles from './sass/technologiesMini.module.scss';

function TechnologiesMini({ blockTitle, background, data }: ITechnologiesMini) {
  return (
    <div className="relative p-[160px_0] text-center screen-md:p-[80px_0]">
      <div className="absolute left-0 top-0 w-full h-full">
        <ImageComponent
          alt="background"
          src={background}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <MainTitleWithoutSize
          className="m-0 text-white text-[50px] leading-[64px] pb-[80px]
            screen-md:text-[25px] screen-md:leading-[35px] screen-md:pb-[60px]"
        >
          {blockTitle}
        </MainTitleWithoutSize>
        <div className={`mx-auto max-w-[1008px] grid grid-cols-4 grid-rows-1 gap-x-[80px] gap-y-0 justify-items-center 
          screen-xl:gap-x-[60px] 
          screen-lg:max-w-[464px] screen-lg:grid-cols-2 screen-lg:grid-rows-2
          screen-lg:gap-x-[80px] screen-lg:gap-y-[60px] 
          screen-md:max-w-[330px] screen-md:gap-x-[20px] screen-md:gap-y-[60px] ${styles.content}`}
        >
          {data.map(({ id, title, icon }) => (
            <div key={id} className="w-[192px] flex flex-col items-center gap-[20px] screen-md:w-auto">
              <ContentText
                tag="p"
                className="!m-0 text-white !text-[20px] !leading-[28px]
                  screen-md:!text-[16px] screen-md:!leading-[26px]"
              >
                {title}
              </ContentText>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologiesMini;
