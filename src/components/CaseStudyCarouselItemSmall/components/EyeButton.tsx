import Icons from '../../../assets/icon';
import IEyeButton from '../interfaces/IEyeButton';

function EyeButton({
  active, onClick, eyeBlackStyle, eyeBlackStyleMobile,
}: IEyeButton) {
  return (
    <div
      onClick={onClick}
      role="presentation"
      className={`
        flex justify-center items-center absolute right-[30px] bottom-[30px]
        screen-lg:right-[40px] screen-lg:bottom-[40px]
        screen-md:right-[15px] screen-md:bottom-[23px] w-[54px] h-[54px] screen-md:w-[40px] screen-md:h-[40px]
        rounded-[50%] border-[1px] border-solid backdrop-blur-[12px]
        border-[rgba(255,255,255,0.10)] bg-white/30
        transition-all duration-[.6s] ease-in-out
        ${eyeBlackStyle ? 'min-md:bg-[rgba(0,0,0,0.2)] min-md:border-[rgba(0,0,0,0.05)]' : ''}
        ${eyeBlackStyleMobile ? 'screen-md:bg-[rgba(0,0,0,0.2)] screen-md:border-[rgba(0,0,0,0.05)]' : ''}
        ${active ? '!bg-black/20 backdrop-blur-12' : ''}
      `}
    >
      <Icons.IconEye
        className={`
          w-[22px] h-[15px] screen-md:w-[16px] screen-md:h-[11px]
          transition-[fill] duration-[.6s] ease-in-out
          ${eyeBlackStyle ? 'min-md:fill-color-black' : ''}
          ${eyeBlackStyleMobile ? 'screen-md:fill-color-black' : ''}
          ${active ? '!fill-color-black' : '!fill-color-white'}
        `}
      />
    </div>
  );
}

export default EyeButton;
