import getSeoData from '../../../src/api/getSeoData';
import { seoDataType } from '../../../src/constants/constants';
import ICategoryPage from '../../../src/interfaces/ICategories';
import getSingleCategory, { ICategory } from '../../../src/api/getSingleCategory';
import CategoryBlogs from '../../../src/pages/CategoryBlogsPage/CategoryBlogs';
import getBlogsList from '../../../src/api/getBlogsList';
import getBlogsCategoriesList from '../../../src/api/getBlogsCategoriesList';
import PageToSalesChannels from '../../../src/constants/PageToSalesChannels';
import getBlogsCategoryBreadcrumbs, { checkPagination, getNewBlogSubcategories } from '../../../src/utils/blogsUtils';
import getFooterContent from 'api/getFooterContent';

function CategoryPage({
  category, seoData, footerContent, blogs, pagination,
}:ICategoryPage) {
  const {
    id,
    attributes: {
      title,
      url,
      description,
      blogSubcategories,
      markupTitle,
    },
  } = category;

  const newBlogSubcategories = getNewBlogSubcategories({
    blogSubcategories, id, title, url,
  });
  const breadcrumbs = getBlogsCategoryBreadcrumbs(title, url);
  const getSalesChannel = () => {
    const lowerCaseTitle = title.toLowerCase();

    if (lowerCaseTitle === 'news') {
      return PageToSalesChannels.BLOG_NEWS;
    }
    if (lowerCaseTitle === 'whitepapers') {
      return PageToSalesChannels.BLOG_WHITEPAPERS;
    }

    return PageToSalesChannels.BLOG_CATEGORIES;
  };

  return (
    <CategoryBlogs
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      title={markupTitle || title}
      url={url}
      description={description}
      blogSubcategories={newBlogSubcategories}
      blogs={blogs}
      pagination={pagination}
      salesChannel={getSalesChannel()}
      footerContent={footerContent}
    />
  );
}

interface IStaticProps {
  params:{
    category: string,
    page:number
  }
}

export async function getStaticProps({ params: { category } }:IStaticProps) {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: `${category}`, type: seoDataType.SINGLE_CATEGORY });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const categoryResponse = await getSingleCategory(category) as ICategory;
  const { data, pagination } = await getBlogsList(category, 1);

  const resultPagination = checkPagination(pagination);

  if (resultPagination && !data?.length) {
    return {
      notFound: true,
    };
  }

  if (!categoryResponse.id) {
    return { notFound: true };
  }
  return {
    props: {
      seoData,
      footerContent,
      category: categoryResponse,
      blogs: data,
      pagination,
    },
  };
}

export async function getStaticPaths() {
  const pageArray = [2, 3, 4, 5];
  const categoryList = await getBlogsCategoriesList();
  const paths = categoryList?.data?.map((category) => pageArray.map((item) => (
    {
      params: { category: category?.attributes?.url, page: `${item}` },
    }
  ))).flat(1);

  return {
    paths,
    fallback: 'blocking',
  };
}

export default CategoryPage;
