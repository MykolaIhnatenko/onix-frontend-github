import IOnlyUkraine from './interfaces/IOnlyUkraine';
import Icons from '../../assets/icon';

function OnlyUkraine({ darkMode, classes = {} }: IOnlyUkraine) {
  return (
    <div className={`w-fit flex items-center ${classes?.container || ''} `}>
      {darkMode ? (
        <Icons.IconInfo className="mr-[10px] w-[32px] h-[32px] screen-md:w-[24px] screen-md:h-[24px]" />
      ) : (
        <Icons.IconInfoBlack className="mr-[10px] w-[32px] h-[32px] screen-md:w-[24px] screen-md:h-[24px]" />
      )}
      <p
        className={`text-[18px] font-generalSans font-medium leading-[28px] text-black screen-md:text-[16px]
        ${classes?.text || ''}
         ${darkMode ? 'text-white' : ' '}`}
      >
        Hiring only in Ukraine
      </p>
    </div>
  );
}

export default OnlyUkraine;
