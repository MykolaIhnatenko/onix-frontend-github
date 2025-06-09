import { IBreadcrumbsItem } from '../layout/interfaces/IBreadcrumbs';
import isEmpty from './isEmptyObject';
import IBlogSubcategory, { IBlogSubcategories } from '../interfaces/IBlogSubcategory';
import { ICategories, ICategoriesList, ICategoryAttributes } from '../interfaces/ICategories';
import { ISubcategoryCrumb } from '../interfaces/IBlogDetailsPage';
import { IPagination } from 'interfaces/IBlogsList';

const breadcrumbs:IBreadcrumbsItem[] = [
  {
    id: 1,
    title: 'Onix',
    path: '/',
  },
  {
    id: 2,
    title: 'Blog',
    path: '/blogs',
  },
];

const getBlogsCategoryBreadcrumbs = (
  categoryTitle: string,
  categoryUrl = '',
  currentSubcategory: IBlogSubcategory | undefined = undefined,
  page: string | undefined = undefined,
) => {
  let isEmptyCurrentSubcategory;
  let subcategoryBreadcrumbs;
  const newBreadcrumbs = [...breadcrumbs];

  if (currentSubcategory?.id) {
    isEmptyCurrentSubcategory = isEmpty(currentSubcategory);
    subcategoryBreadcrumbs = currentSubcategory ? `${currentSubcategory?.attributes?.name}` : '';
    const subcategoryUrl = currentSubcategory ? `${currentSubcategory?.attributes?.url}` : '';
    newBreadcrumbs.push(
      {
        id: 4,
        title: `${categoryTitle}`,
        path: isEmptyCurrentSubcategory ? '' : `/blogs/${categoryUrl}`,
      },
      {
        id: 5,
        title: isEmptyCurrentSubcategory ? '' : subcategoryBreadcrumbs,
        path: page ? `/blogs/${categoryUrl}/${subcategoryUrl}/${page}` : `/blogs/${categoryUrl}/${subcategoryUrl}`,
      },
    );
  } else {
    newBreadcrumbs.push(
      {
        id: 4,
        title: `${categoryTitle}`,
        path: page ? `/blogs/${categoryUrl}/${page}` : `/blogs/${categoryUrl}`,
      },
    );
  }

  return newBreadcrumbs;
};

export const getSingleBlogBreadcrumbs = (
  categoryCrumb: ICategoryAttributes,
  subcategoryCrumb: ISubcategoryCrumb,
  blogCrumb: { lastCrumbTitle: string, slug?: string },
) => {
  const newBreadcrumbs = [...breadcrumbs];
  const subcategory = categoryCrumb?.url && subcategoryCrumb?.url
    ? `/blogs/${categoryCrumb?.url}/${subcategoryCrumb?.url}` : '';
  if (categoryCrumb.title) {
    newBreadcrumbs.push({
      id: 4,
      title: categoryCrumb?.title || '',
      path: `/blogs/${categoryCrumb?.url}`,
    });
  }
  if (subcategoryCrumb.name || subcategoryCrumb.label) {
    newBreadcrumbs.push({
      id: 5,
      title: subcategoryCrumb.name || subcategoryCrumb?.label || '',
      path: subcategory,
    });
  }
  if (blogCrumb.lastCrumbTitle) {
    newBreadcrumbs.push({
      id: 6,
      title: blogCrumb.lastCrumbTitle || '',
      path: blogCrumb.slug ? `/blog/${blogCrumb.slug}` : '',
    });
  }
  return newBreadcrumbs;
};

interface IGetNewBlogSubcategories {
  blogSubcategories?: IBlogSubcategories;
  id: number;
  title: string;
  url: string;
}
export const getNewBlogSubcategories = ({
  blogSubcategories, id, title, url,
}: IGetNewBlogSubcategories) => {
  let newBlogSubcategories = [
    {
      id: 'all',
      attributes: {
        order: 0,
        name: 'All',
        url: '',
        category: {
          data: {
            id,
            attributes: {
              title,
              url,
            },
          },
        },
      },
    } as IBlogSubcategory,
  ];

  if (blogSubcategories?.data) {
    const blogSubcategoriesHaveBlogs = blogSubcategories?.data?.filter((
      subcategory,
    ) => subcategory?.attributes?.blogs?.data?.length > 0);

    if (blogSubcategoriesHaveBlogs?.length > 0) {
      newBlogSubcategories.push(...blogSubcategoriesHaveBlogs);
    } else newBlogSubcategories = [];
  }

  return newBlogSubcategories;
};
export const getFilteredBlogsCategories = (categories: ICategoriesList): ICategories[] | undefined => categories?.data
  ?.filter(({
    attributes: { blogs },
  }) => blogs?.data && blogs?.data?.length > 0)
  ?.map(({ attributes, ...rest }) => ({
    ...rest,
    attributes: {
      ...attributes,
      blogSubcategories: {
        ...attributes.blogSubcategories,
        data: attributes?.blogSubcategories?.data?.filter(({
          attributes: { blogs },
        }) => blogs?.data?.length > 0),
      },
    },
  }));

export default getBlogsCategoryBreadcrumbs;

export const checkPagination = (pagination: IPagination | undefined) => {
  if (!pagination) return false;
  const { start, limit, total } = pagination;
  if (!start || !limit || !total) return false;
  return (start / limit) > (total / limit);
};
