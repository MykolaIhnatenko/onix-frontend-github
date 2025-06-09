import { useState, useEffect } from 'react';

import { IResult, ISearchInputBlock } from './interfaces/ISearchInput';
import useDebounce from '../../hook/useDebounce';
import searchBlogs from '../../api/searchBlogs';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import searchCategories from '../../api/searchCategories';
import searchSubcategories from '../../api/searchSubcategories';

function SearchInputBlock({ label, isCategories, classes }: ISearchInputBlock) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<IResult[] | [] | undefined>([]);

  const debouncedSearchTerm = useDebounce(searchTerm.trim());

  useEffect(() => {
    const fetchBlogsNames = async () => {
      if (isCategories) {
        const resCategories = await searchCategories(debouncedSearchTerm);
        const resSubcategories = await searchSubcategories(debouncedSearchTerm);
        const result = resCategories.data && resSubcategories.data
            && [...resCategories.data, ...resSubcategories.data];
        setResults(result);
      } else {
        const res = await searchBlogs(debouncedSearchTerm);
        setResults(res.data);
      }
    };
    if (debouncedSearchTerm) {
      fetchBlogsNames()
        .catch((e: Error) => {
          throw new Error(e.message);
        });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm, isCategories]);

  return (
    <div className={`relative w-full min-lg:basis-[300px] ${classes?.inputBlock || ''}`}>
      <SearchInput
        label={label}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setResults={setResults}
        classes={classes}
      />
      <SearchResults
        searchTerm={searchTerm}
        results={results}
        isCategories={isCategories}
        classes={classes}
      />
    </div>
  );
}

export default SearchInputBlock;
