import { tokenData, tokenData2 } from '../../pages/FintechDevelopmentView/data/tokenData';
import ImageComponent from '../Image/Image';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

const rowItems = 'w-full flex justify-between screen-md:flex-wrap screen-md:max-w-[300px]';
const item = `w-[160px] flex flex-col items-center mb-[60px] screen-lg:mb-[30px]
  screen-md:w-[120px] screen-md:mb-[40px]`;
const imageStyles = 'w-[160px] h-[160px] screen-lg:w-[132px] screen-lg:h-[132px]';
const titleItem = `text-[24px] font-medium leading-[34px] mt-[20px] text-center whitespace-nowrap
  screen-lg:text-[20px] screen-lg:leading-[28px] screen-md:whitespace-normal font-generalSans`;

function InnovationFintech() {
  return (
    <div className="flex flex-col items-center w-full p-[50px_70px]
      min-xxxl:p-[50px_80px] screen-lg:p-[40px_30px] screen-md:p-[30px_15px_0]"
    >
      <div className="w-full flex flex-col">
        <p className="text-[18px] font-normal leading-[26px] mb-[20px] font-ibmPlexMono
          screen-lg:text-[20px] screen-lg:leading-[28px] screen-md:text-[14px] screen-md:leading-[26px]"
        >
          [ Driving the innovation in fintech ]
        </p>
        <MainTitleWithoutSize className="text-[50px] font-medium leading-[64px] w-[85%] font-generalSans
          screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:w-full
          screen-md:text-[24px] screen-md:leading-[34px]"
        >
          We don&apos;t just create fintech products.
          <br className="screen-lg:hidden" />
          {' '}
          We craft
          {' '}
          <span className="text-[#A8A8A8]">
            transformative solutions
          </span>
          {' '}
          that drive
          {' '}
          <span className="text-[#A8A8A8]">
            innovation and propel your financial services to new heights!
          </span>
        </MainTitleWithoutSize>
      </div>

      <div className="w-[1082px] p-[80px_0] flex flex-col screen-xl:w-full screen-xl:p-[50px_0_0]
        screen-md:p-[30px_0] screen-md:items-center [@media(max-width:361px)]:justify-center"
      >
        <div className={rowItems}>
          {tokenData.map(({ title, image, id }) => (
            <div
              key={[title, id].join('_')}
              className={item}
            >
              <ImageComponent
                sizes="100vw"
                className={imageStyles}
                src={image}
                alt="image"
              />
              <p className={titleItem}>
                {title}
              </p>
            </div>
          ))}
        </div>
        <div className={rowItems}>
          {tokenData2.map(({ title, image, id }) => (
            <div
              key={[title, id].join('_')}
              className={item}
            >
              <ImageComponent
                sizes="100vw"
                className={imageStyles}
                src={image}
                alt="image"
              />
              <p className={titleItem}>
                {title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default InnovationFintech;
