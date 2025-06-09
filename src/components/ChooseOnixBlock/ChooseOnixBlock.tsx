import chooseOnixData from '../../pages/OnlineSchedulingAndBookingView/data/chooseOnixData';
import IChooseOnixBlock from './interfaces/IChooseOnixBlock';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function ChooseOnixBlock({ title, data }: IChooseOnixBlock) {
  const dataView = data || chooseOnixData;
  return (
    <div className="w-full bg-white p-[80px_70px] min-xxxl:p-[80px]
      screen-lg:p-[80px_30px] screen-md:p-[60px_15px]"
    >
      <MainTitleWithoutSize className="inline-block text-[50px] font-medium leading-[64px] w-[60%] mb-[40px]
        screen-lg:text-[40px] screen-lg:leading-[56px]
        screen-md:text-[25px] screen-md:leading-[35px] screen-md:w-full screen-md:mb-[30px]"
      >
        {title || 'Why choose Onix'}
      </MainTitleWithoutSize>
      {dataView.map((item, index) => (
        <div
          className="grid grid-cols-2 py-[30px] border-b-[2px] border-black
            last:border-b-transparent last:pb-0 screen-lg:flex screen-lg:flex-col
            screen-md:py-[20px]"
          key={[item.title, index].join('_')}
        >
          <div className="grid [grid-template-columns:30px_90%] gap-[10px] screen-lg:mb-[20px]">
            <span className="text-[24px] font-medium leading-[34px] font-generalSans
              screen-md:text-[20px] screen-md:leading-[28px] screen-md:w-[90%]"
            >
              {item.id}
            </span>
            <MainTitleWithoutSize
              tag="h3"
              className="text-[24px] font-medium leading-[34px]
                screen-md:text-[20px] screen-md:leading-[28px] screen-md:w-[90%]"
            >
              {item.title}
            </MainTitleWithoutSize>
          </div>

          <p
            className="text-[18px] font-normal leading-[26px] font-ibmPlexMono
            screen-lg:max-w-[644px]
            screen-md:text-[16px] screen-md:leading-[24px]"
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChooseOnixBlock;
