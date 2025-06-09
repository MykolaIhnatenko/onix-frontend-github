import AnimationColorBox from '../AnimationColorBox/AnimationColorBox';
import VRARContent from '../VRARContent/VRARContent';
import IconsData from './data/IconsData';
import openSans from 'fonts/OpenSans';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARContentText from 'components/VRARContentText/VRARContentText';

function AnimationTypographySection() {
  return (
    <div className={`w-full bg-black flex flex-col p-[0_15px_80px]
                     min-md:p-[0_30px_80px]
                     min-lg:p-[0_70px_120px]
                     min-xxxl:p-[0_80px_120px] text-color-white`}
    >
      <div className="w-full flex justify-start flex-col border-b-2 border-white pb-[20px] pt-[20px]
                      min-md:pb-[30px] min-md:pt-[30px]
                      min-lg:pb-[40px] min-lg:pt-[40px] min-lg:justify-between min-lg:flex-row"
      >
        <div className="w-fit flex min-w-[252px]
                        screen-lg:mb-[20px]"
        >
          <VRARMainTitle
            tag="div"
            title="01"
            classes={{
              title: `min-w-[30px] !text-[24px]/[34px] screen-md:!text-[20px]/[28px]
                mr-[45px] screen-lg:mr-[30px] screen-md:mr-[15px]`,
            }}
          />
          <VRARMainTitle
            tag="h3"
            title="Colors"
            classes={{ title: '!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
          />
        </div>
        <AnimationColorBox />
      </div>
      <div className="w-full flex justify-start flex-col border-b-2 border-white pb-[20px] pt-[20px]
                      min-md:pb-[30px] min-md:pt-[30px]
                      min-lg:pb-[40px] min-lg:pt-[40px] min-lg:justify-between min-lg:flex-row"
      >
        <div className="w-fit flex min-w-[252px]
                        screen-lg:mb-[20px]"
        >
          <VRARMainTitle
            tag="div"
            title="02"
            classes={{
              title: `min-w-[30px] !text-[24px]/[34px] screen-md:!text-[20px]/[28px]
                mr-[45px] screen-lg:mr-[30px] screen-md:mr-[15px]`,
            }}
          />
          <VRARMainTitle
            tag="h3"
            title="Typography"
            classes={{ title: '!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
          />
        </div>
        <div className={`w-full max-w-[672px] flex flex-col font-openSansPrimary
                         min-lg:w-[600px]
                         min-xl:w-[672px] ${openSans.variable}`}
        >
          <VRARContentText
            text="Aa-Zz"
            classes={{
              text: `!font-openSansPrimary !font-bold !text-[100px]/[120px] screen-md:!text-[64px]/[77px]
                mb-[20px] screen-md:mb-[15px]`,
            }}
          />
          <VRARContentText
            text="Open Sans"
            classes={{
              text: '!font-openSansPrimary !font-normal !text-[24px]/[34px] mb-[30px] screen-md:mb-[20px]',
            }}
          />
          <VRARContentText
            text="abcdefghijklmnopqrstuvwxyz"
            classes={{
              text: '!font-openSansPrimary !font-normal !text-[24px]/[43px] screen-md:!text-[20px]/[36px] uppercase',
            }}
          />
          <VRARContentText
            text="abcdefghijklmnopqrstuvwxyz"
            classes={{ text: '!font-openSansPrimary !font-normal !text-[24px]/[43px] screen-md:!text-[20px]/[36px]' }}
          />
          <VRARContentText
            text="1234567890(%)?“!”<>.,"
            classes={{ text: '!font-openSansPrimary !font-normal !text-[24px]/[43px] screen-md:!text-[20px]/[36px]' }}
          />
        </div>
      </div>
      <div className="w-full flex justify-start flex-col pb-[20px] pt-[20px]
                      min-md:pb-[30px] min-md:pt-[30px]
                      min-lg:pb-[40px] min-lg:pt-[40px] min-lg:justify-between min-lg:flex-row"
      >
        <div
          className="w-fit flex min-w-[252px]
                     screen-lg:mb-[20px]"
        >
          <VRARMainTitle
            tag="div"
            title="03"
            classes={{
              title: `min-w-[30px] !text-[24px]/[34px] screen-md:!text-[20px]/[28px]
                mr-[45px] screen-lg:mr-[30px] screen-md:mr-[15px]`,
            }}
          />
          <VRARMainTitle
            tag="h3"
            title="Icon pack"
            classes={{ title: '!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
          />
        </div>
        <div className="w-full flex flex-wrap gap-[40px] mt-[10px]
                        min-md:mt-[20px] min-md:gap-[60px]
                        min-lg:max-w-[600px] min-lg:mt-0
                        min-xl:max-w-[672px]"
        >
          {IconsData.map((item, index) => (
            <VRARContent key={[item.id, index].join('_')}>
              {item.icon}
            </VRARContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimationTypographySection;
