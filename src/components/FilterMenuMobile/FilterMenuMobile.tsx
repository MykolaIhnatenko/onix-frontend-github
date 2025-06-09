import CloseButton from '../CloseButton/CloseButton';
import IFilterMenuMobile from './interfaces/IFilterMenuMobile';

function FilterMenuMobile({
  title, openModalHandle, filters, selectFilter, selectFilterHandle,
}: IFilterMenuMobile) {
  return (
    <div className="flex items-center flex-col w-full h-full bg-white p-[20px_15px]">
      <div className="flex items-center justify-between w-full mb-[40px]">
        <span className="font-generalSans text-[26px] font-medium leading-[34px]">
          { title}
        </span>
        <CloseButton
          classes={{
            container: 'bg-transparent',
            rectangle: '!bg-black',
          }}
          onClick={openModalHandle}
        />
      </div>
      <div className="flex flex-col items-start w-full h-screen overflow-y-auto overflow-x-hidden
        [scrollbar-width:thin] [scrollbar-color:black_transparent]"
      >
        {filters.length > 0 && filters.map(({ id, name }) => (
          <button
            key={[id, name].join('_')}
            className={`text-[24px] font-medium leading-[34px] flex items-center justify-start w-full mb-[20px]
              text-[#808080] bg-transparent border-none cursor-pointer
              last:mb-0 min-lg:hover:text-[#A8A8A8]
              screen-lg:text-[18px] screen-lg:font-medium screen-lg:leading-[34px] screen-lg:cursor-default
              ${selectFilter === name ? '!text-black !font-semibold screen-sm:hover:!text-black' : ''}`}
            onClick={() => selectFilterHandle(name)}
            type="button"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterMenuMobile;
