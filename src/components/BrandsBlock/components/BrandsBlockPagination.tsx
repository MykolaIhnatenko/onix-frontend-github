import { IBrandsBlockPagination } from '../interfaces/IBrandsBlock';

function BrandsBlockPagination({
  activeId, setActiveId, directionSlider, classes,
}: IBrandsBlockPagination) {
  const pages = directionSlider.length < 3 ? [0, 1] : [0, 1, 2];

  const onClickHandler = (item: number) => {
    const newDirections: number[] = directionSlider;

    newDirections.forEach((i, index) => {
      if (index === item) {
        newDirections[index] = 0;
      }
      if (index < item) {
        newDirections[index] = -1;
      }
      if (index > item) {
        newDirections[index] = 1;
      }
    });

    setActiveId([item, newDirections]);
  };

  return (
    <div className={`absolute bottom-[-10px] left-0 w-full h-[28px]
      flex justify-center items-center ${classes?.pagination || ''}`}
    >
      {pages.map((item) => (
        <span
          key={['pagin_', item].join()}
          className={`inline-block w-[8px] h-[8px] bg-black mx-[4px] rounded-[4px]
            opacity-40 cursor-pointer relative transition-[width] duration-[300ms] ease-[cubic-bezier(1,1,1,1)]
            screen-lg:cursor-default after:content-[''] after:absolute after:top-[-10px] after:left-[-4px]
            after:w-[16px] after:h-[28px] after:z-[2]
            ${classes?.pageItem || ''} ${item === activeId ? '!opacity-100 !w-[20px]' : ''}`}
          onClick={() => onClickHandler(item)}
          role="presentation"
        />
      ))}
    </div>
  );
}

export default BrandsBlockPagination;
