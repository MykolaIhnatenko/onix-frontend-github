import NumbersBlockItem from 'pages/MainPage/components/NumbersBlock/NumbersBlockItem';
import INumbersBlockRow from 'pages/MainPage/interfaces/INumbersBlock';

function NumbersBlockRow({ data }: INumbersBlockRow) {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <div
          key={['numbers-block-row', index].join('_')}
          className="flex gap-[40px] border-b-[2px] border-solid border-black
          pb-[40px] mb-[40px] last:border-0 last:pb-0 last:mb-0
          screen-lg:gap-[30px] screen-lg:pb-[30px] screen-lg:mb-[30px]
          screen-md:gap-[20px] screen-md:pb-[20px] screen-md:mb-[20px]"
        >
          {item.map(({
            id, prefix, title, value, prefixModifier, classes,
          }) => (
            <NumbersBlockItem
              key={['numbers-block-item', id].join('_')}
              prefix={prefix}
              title={title}
              value={value}
              prefixModifier={prefixModifier}
              classes={classes}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default NumbersBlockRow;
