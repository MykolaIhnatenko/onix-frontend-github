import ICard from './interfaces/ICard';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARContentText from 'components/VRARContentText/VRARContentText';

function Card({
  title, desc, number, classes,
}: ICard) {
  return (
    <div className={`
        flex flex-col justify-between border-2 border-color-black p-[40px] screen-md:p-[20px]
        gap-[40px] screen-md:gap-[30px] h-[380px] screen-md:h-[368px]
        ${classes?.card || ''}
      `}
    >
      <div>
        <VRARMainTitle
          tag="h3"
          title={title}
          classes={{
            title: '!text-[30px]/[40px] screen-md:!text-[20px]/[28px]',
          }}
        />
        {desc && (
          <VRARContentText
            text={desc}
            classes={{
              text: 'mt-[30px] screen-md:mt-[20px]',
            }}
          />
        )}
      </div>
      <VRARMainTitle
        tag="span"
        title={number}
        classes={{
          title: '!text-[30px]/[40px] screen-md:!text-[24px]/[34px]',
        }}
      />
    </div>
  );
}

export default Card;
