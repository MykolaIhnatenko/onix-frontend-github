import ISimpleTechBlock from './interfaces/ISimpleTechBlock';

function SimpleTechBlock({ titleBlock, titleDesc, list }:ISimpleTechBlock) {
  return (
    <div className={`flex flex-col items-start w-full bg-black p-[80px_70px_100px]
      screen-lg:p-[80px_30px] screen-md:p-[80px_15px]`}
    >
      <div className="flex flex-col items-start w-full pb-[40px] border-b border-white">
        <p className={`font-ibmPlexMono text-[20px] font-normal leading-[28px] text-white
          mb-[20px] screen-lg:text-[18px] screen-lg:leading-[26px] screen-md:text-[14px]`}
        >
          {titleBlock}
        </p>
        <h2 className={`font-generalSans text-[50px] font-medium leading-[64px] text-white
          w-[80%] screen-lg:text-[40px] screen-lg:leading-[56px] screen-lg:w-full
          screen-md:text-[25px] screen-md:leading-[35px]`}
        >
          {titleDesc}
        </h2>
      </div>
      <div
        className="
          w-full grid grid-cols-4 gap-[60px] py-[54px]
          screen-lg:flex screen-lg:flex-wrap screen-lg:gap-[50px] screen-lg:pb-0
          screen-md:pt-[54px] screen-md:gap-[40px]
        "
      >
        {list.length > 0
          && list.map((item, index) => (
            <p
              key={[item, index].join('_')}
              className="
                font-ibmPlexMono
                text-[20px] font-normal leading-[28px] text-white w-fit
                min-lg:hover:font-semibold cursor-pointer
                screen-md:text-[16px]
              "
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}

export default SimpleTechBlock;
