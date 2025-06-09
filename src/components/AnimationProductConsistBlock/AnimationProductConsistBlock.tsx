import IAnimationProductConsistBlock from './interfaces/IAnimationProductConsistBlock';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';

function AnimationProductConsistBlock({ title, list }: IAnimationProductConsistBlock) {
  return (
    <div
      className="w-full bg-transparent pt-[120px] pr-[70px] pb-0 pl-[70px] flex flex-col
        min-xxxl:pr-[80px] min-xxxl:pl-[80px]
        screen-lg:pt-[80px] screen-lg:pr-[30px] screen-lg:pl-[30px]
        screen-md:pr-[15px] screen-md:pl-[15px]"
    >
      <div
        className="mb-[80px] max-w-[1080px] min-xxxl:max-w-[1480px] screen-lg:mb-[60px]
        screen-lg:max-w-full screen-md:mb-[40px]"
      >
        <VRARMainTitle title={title} />
      </div>
      <div className="w-full flex screen-lg:flex-col">
        {list.map((item, index) => (
          <div
            key={[item.title, index].join('_')}
            className="w-full max-w-1/2 h-[400px] flex flex-col justify-between p-[40px]
            border-[2px] border-black border-r-[1px] last:border-l-[1px] last:border-r-[2px]
            screen-lg:max-w-full screen-lg:border-[2px] screen-lg:border-black screen-lg:border-b-[1px]
            screen-lg:last:border-t-[1px] screen-lg:last:border-b-[2px] screen-lg:last:border-l-[2px]
            screen-md:p-[20px] screen-md:h-[216px]"
          >
            <VRARMainTitle
              tag="h3"
              title={item.title}
              classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
            />
            <VRARMainTitle
              tag="span"
              title={item.id}
              classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px]' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimationProductConsistBlock;
