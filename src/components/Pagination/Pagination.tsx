import IPaginationData from './interfaces/IPaginationData';
import PaginationItemArrow from './components/PaginationItemArrow';
import LinkComponent from '../Link/Link';
import { generalSans } from '../../fonts/MainFonts';
import { DEFAULT_BLOGS_PAGINATION_LIMIT } from '../../constants/constants';
import { usePagination, DOTS } from '../../hook/usePagination';

const activeStyles = `relative font-semibold text-black after:content-['']
    after:absolute after:h-[2px] after:w-[150%] after:bg-black
    after:bottom-0 after:left-[-25%]`;

function Pagination({
  pagination, category, subcategory, author,
}:IPaginationData) {
  const { limit = DEFAULT_BLOGS_PAGINATION_LIMIT, start = 0, total = 0 } = pagination || {};
  const currentPage = Math.ceil(start / limit) + 1 || 1;
  const paginationRange = usePagination({
    currentPage,
    totalCount: total,
    pageSize: limit,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const lastPage = paginationRange[paginationRange.length - 1];
  let categoryPath = '';
  if (category) {
    categoryPath = subcategory ? `${category}/${subcategory}` : `${category}`;
  }
  const getNextPage = () => {
    if (currentPage < +lastPage) {
      return currentPage + 1;
    }
    return currentPage;
  };

  const getHref = () => {
    if (author) {
      return `/author/${author}`;
    }
    return `/blogs/${categoryPath}`;
  };

  const currentPageSelector = () => {
    if (currentPage === 1) {
      return '';
    }
    return `/${currentPage - 1}`;
  };

  return (
    <div className={`d-flex d-item-center d-justify-center pt-[40px] min-md:pt-[60px] ${generalSans.variable}`}>
      <PaginationItemArrow
        href={currentPage === 2 ? `${getHref()}` : `${getHref()}${currentPageSelector()}`}
        disabled={currentPage === 1}
      />
      <div className={`d-flex d-row d-item-center d-justify-center
        font-generalSans font-medium text-[18px] leading-[28px] text-[#999]`}
      >
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <div
                className={`mr-[20px] min-sm:mr-[29px] min-md:mr-[40px]
                  ${index === 0 ? 'ml-[20px] min-sm:ml-[29px] min-md:ml-[40px]' : ''}`}
                key="dot"
              >
                ...
              </div>
            );
          }
          if (pageNumber === 1) {
            return (
              <LinkComponent
                key={pageNumber}
                href={`${getHref()}`}
                className={`relative mr-[20px] min-sm:mr-[29px] min-md:mr-[40px]
                  ${index === 0 ? 'ml-[20px] min-sm:ml-[29px] min-md:ml-[40px]' : ''}
                  ${currentPage === pageNumber ? activeStyles : ''}
                `}
              >
                {pageNumber}
              </LinkComponent>
            );
          }
          return (
            <LinkComponent
              key={pageNumber}
              href={`${getHref()}/${pageNumber}`}
              className={`relative mr-[20px] min-sm:mr-[29px] min-md:mr-[40px]
                ${index === 0 ? 'ml-[20px] min-sm:ml-[29px] min-md:ml-[40px]' : ''}
                ${currentPage === pageNumber ? activeStyles : ''}
              `}
            >
              {pageNumber}
            </LinkComponent>
          );
        })}
      </div>
      <PaginationItemArrow
        btnNext
        href={`${getHref()}/${getNextPage()}`}
        disabled={currentPage === +lastPage}
      />
    </div>
  );
}

export default Pagination;
