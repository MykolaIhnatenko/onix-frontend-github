import { ISearchResults } from '../interfaces/ISearchInput';
import SearchResultsItem from './SearchResultsItem';

function SearchResults({
  results, searchTerm, isCategories, classes,
}: ISearchResults) {
  return (
    <div className={`
        ${results?.length === 0 ? '!hidden' : ''}
        block absolute left-[15px] top-[56px] w-[calc(100%-30px)] max-h-[380px]
        bg-color-input-gray border-t border-solid border-color-black overflow-x-hidden overflow-y-auto z-10
        min-md:left-[30px] min-md:w-[calc(100%-60px)]
        min-lg:max-w-[300px] min-lg:left-0 min-lg:w-full

        [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar]:rounded-0 [&::-webkit-scrollbar]:opacity-20
        [&::-webkit-scrollbar]:bg-[#929292] [&::-webkit-scrollbar-thumb]:bg-color-black

        ${classes?.results || ''}
      `}
    >
      <ul className="list-none pb-[15px] pl-[15px]">
        {results?.map(({ id, attributes }) => (
          <SearchResultsItem
            key={id}
            searchTerm={searchTerm}
            title={attributes?.title}
            attributes={attributes}
            isCategories={isCategories}
          />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
