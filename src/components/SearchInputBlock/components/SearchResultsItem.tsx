import Icons from '../../../assets/icon';
import { ISearchResultsItem } from '../interfaces/ISearchInput';
import LinkComponent from '../../Link/Link';

function SearchResultsItem({
  title, searchTerm, attributes, isCategories,
}: ISearchResultsItem) {
  const getHref = () => {
    let href = '';
    if (isCategories && attributes?.categoryUrl) {
      href = `/blogs/${attributes?.categoryUrl}/${attributes?.url}`;
    } else if (isCategories) {
      href = `/blogs/${attributes?.url}`;
    } else {
      href = `/blog/${attributes?.url}`;
    }

    return href;
  };

  return (
    <li className="group">
      {title?.toLowerCase().includes(searchTerm.toLowerCase().trim()) && (
      <LinkComponent href={getHref()} className="flex items-center pt-[20px]">
        <Icons.IconArrowUp45Blogs className="w-[11px] h-[11px] mr-[15px] flex-shrink-0" />
        <span className={`font-ibmPlexMono font-normal text-[18px]/[26px]
          whitespace-nowrap text-color-black group-hover:font-medium`}
        >
          {title}
        </span>
      </LinkComponent>
      )}
    </li>
  );
}

export default SearchResultsItem;
