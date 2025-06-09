import IAnimationChallengesDesktopItem from './interfaces/IAnimationChallengesDesktopItem';
import Icons from '../../assets/icon';

function AnimationChallengesDesktopItem({
  item, index, activeBlock, setActiveItem, iconBlack = false, classes = {}, lastItem,
}: IAnimationChallengesDesktopItem) {
  const renderArrowIcon = () => {
    const commonClasses = `min-w-[32px] min-h-[32px] ${activeBlock === index ? 'block' : 'hidden'}
                           ${classes?.icon || ''}`;

    return iconBlack
      ? <Icons.IconArrowRight className={commonClasses} />
      : <Icons.IconArrowRightWhite className={commonClasses} />;
  };

  return (
    <div
      className={`w-full flex items-center justify-between py-[30px]
      bg-transparent cursor-pointer
      screen-lg:cursor-default
        ${lastItem ? 'border-b-0' : 'border-b-2 border-black'}
      ${classes?.item || ''}`}
      onMouseEnter={() => setActiveItem(index)}
      role="presentation"
    >
      <div className={`
         flex text-color-black font-generalSans font-medium text-[30px]/[40px]
         ${activeBlock === index ? 'inline-flex text-black' : ''} ${classes?.title || ''}
        `}
      >
        <span className={`mr-[30px] min-w-[40px] ${classes?.number || ''}`}>
          0
          {index + 1}
        </span>
        <h3 className="unsetText">{item.title}</h3>
      </div>
      {renderArrowIcon()}
    </div>
  );
}

export default AnimationChallengesDesktopItem;
