import Icons from '../../../assets/icon';
import { ISearchInput } from '../interfaces/ISearchInput';

function SearchInput({
  searchTerm, setSearchTerm, label, setResults, classes,
}: ISearchInput) {
  const closeBtnClick = () => {
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div className={`
        flex items-center h-[56px] bg-color-input-gray px-[20px] py-[14px] min-lg:max-w-[300px] min-lg:m-0
        ${classes?.inputContainer || ''}
      `}
    >
      <div className="pr-[15px]">
        <Icons.IconSearch width={24} height={24} />
      </div>
      <div className="relative flex-grow-[3]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          aria-label="Search"
          className={`
            w-full border-none outline-none bg-input-gray font-ibmPlexMono
            text-[18px]/[26px] font-normal text-color-black bg-color-input-gray peer
            ${classes?.input || ''}
          `}
        />
        <span className={`
            peer-focus:hidden font-ibmPlexMono text-[18px]/[26px] font-normal
            text-[#504f53] absolute left-0 bottom-0 pointer-events-none
          `}
        >
          {searchTerm === '' && label}
        </span>
      </div>
      <div
        className={`${searchTerm === '' ? 'hidden' : 'min-lg:cursor-pointer'}`}
        onClick={closeBtnClick}
        role="presentation"
      >
        <Icons.IconBlogClose width={24} height={24} />
      </div>
    </div>
  );
}

export default SearchInput;
