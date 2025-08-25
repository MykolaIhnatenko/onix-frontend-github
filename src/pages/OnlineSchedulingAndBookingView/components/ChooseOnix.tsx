import { IChooseOnix } from '../interfaces/IChooseOnix';

function ChooseOnix({
  title, data, classes,
}: IChooseOnix) {
  return (
    <div
      className={`w-full bg-white p-[80px_70px] min-xxxl:p-[80px]
      screen-lg:p-[80px_30px] screen-md:p-[60px_15px] ${classes?.container || ''}`}
    >
      <h2
        className={`inline-block w-[60%] mb-[40px] text-[50px] leading-[64px] font-generalSans
        font-medium screen-lg:text-[40px] screen-lg:mb-0 screen-lg:w-full
        screen-md:text-[25px] screen-md:leading-[35px] ${classes?.title || ''}`}
      >
        {title}
      </h2>
      {data.map((item, index) => (
        <div
          key={[item.title, index].join('_')}
          className={`grid grid-cols-[50%_50%] gap-[10px] p-[33px_0] border-b-[2px] border-black
            last:border-b-transparent screen-lg:flex screen-lg:flex-col screen-lg:gap-0
            screen-lg:p-[30px_0] screen-md:p-[20px_0] ${classes?.item || ''}`}
        >
          <div className={`grid w-full grid-cols-[10%_90%] gap-[10px] screen-lg:mb-[20px] ${classes?.titleBox || ''}`}>
            <div
              className={`text-[24px] leading-[34px] font-medium screen-md:text-[20px] font-generalSans
              screen-md:leading-[28px] ${classes?.textItem || ''}`}
            >
              {item.id}
            </div>
            <h3 className={`text-[24px] leading-[34px] font-medium screen-md:text-[20px] font-generalSans
              screen-md:leading-[28px] ${classes?.textItem || ''}`}
            >
              {item.title}
            </h3>
          </div>
          <p className={`font-normal font-ibmPlexMono text-[18px] leading-[26px] ${classes?.descItem || ''}`}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChooseOnix;
