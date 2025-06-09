import ISliderCardItem from './interfaces/ISliderCardItem';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function SliderCardItem({ id, title, desc }: ISliderCardItem) {
  return (
    <div className="flex flex-col justify-between relative w-[590px] p-[40px] bg-[var(--color-white)]
      mr-[30px] gap-[40px]"
    >
      <div className="w-full flex flex-col gap-[30px]">
        <MainTitleWithoutSize tag="h3" className="text-[30px] font-medium leading-[40px] m-0">
          {title}
        </MainTitleWithoutSize>
        <div>
          {desc.map((item) => {
            const isString = typeof item === 'string';
            return (
              <ContentTextNew
                text={item}
                key={id}
                className={isString ? '[&:not(:first-of-type)]:mt-[30px]' : 'mt-[20px]'}
                tag={isString ? 'p' : 'div'}
              />
            );
          })}
        </div>
      </div>
      <ContentTextNew
        text={id}
        className="text-[30px] font-medium leading-[40px]"
        tag="span"
      />
    </div>
  );
}

export default SliderCardItem;
