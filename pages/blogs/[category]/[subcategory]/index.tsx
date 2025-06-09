import getBlogsList from '../../../../src/api/getBlogsList';
import getSingleSubcategory from '../../../../src/api/getSingleSubcategory';
import getSingleCategory, { ICategory } from '../../../../src/api/getSingleCategory';
import CategoryBlogs from '../../../../src/pages/CategoryBlogsPage/CategoryBlogs';
import getSeoData from '../../../../src/api/getSeoData';
import { seoDataType } from '../../../../src/constants/constants';
import ICategoryPage from '../../../../src/interfaces/ICategories';
import isEmpty from '../../../../src/utils/isEmptyObject';
import PageToSalesChannels from '../../../../src/constants/PageToSalesChannels';
import getBlogsCategoryBreadcrumbs, { checkPagination, getNewBlogSubcategories } from '../../../../src/utils/blogsUtils';
import getSubcategoriesPaths from '../../../../src/utils/getSubcategoriesPaths';
import getFooterContent from 'api/getFooterContent';

function SubcategoryPage({
  currentSubcategory, category, seoData, blogs, pagination, footerContent,
}: ICategoryPage) {
  const {
    id,
    attributes: {
      title,
      url,
      description,
      blogSubcategories,
    },
  } = category;

  const newBlogSubcategories = getNewBlogSubcategories({
    blogSubcategories, id, title, url,
  });

  const isEmptyCurrentSubcategory = currentSubcategory && isEmpty(currentSubcategory);
  const breadcrumbs = getBlogsCategoryBreadcrumbs(title, `${url}`, currentSubcategory);

  return (
    <CategoryBlogs
      seoData={seoData}
      breadcrumbs={breadcrumbs}
      title={isEmptyCurrentSubcategory ? title : currentSubcategory?.attributes?.markupTitle}
      url={url}
      description={isEmptyCurrentSubcategory ? description : currentSubcategory?.attributes?.description}
      blogSubcategories={newBlogSubcategories}
      blogs={blogs}
      pagination={pagination}
      subcategoryUrl={isEmptyCurrentSubcategory ? '' : currentSubcategory?.attributes?.url}
      salesChannel={PageToSalesChannels.BLOG_SUBCATEGORIES}
      footerContent={footerContent}
    />
  );
}

interface IStaticProps {
  params: {
    category: string;
    subcategory: string;
  }
}

export async function getStaticProps({ params: { category, subcategory } }:IStaticProps) {
  const isCategoryNameNumber = !Number.isNaN(+subcategory);
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({
    page: `${isCategoryNameNumber ? category : subcategory}`,
    type: seoDataType[isCategoryNameNumber ? 'SINGLE_CATEGORY' : 'SINGLE_SUBCATEGORY'],
  });
  const categoryResponse = await getSingleCategory(category) as ICategory;

  if (!seoData?.seoTitle || !categoryResponse.id) {
    return {
      notFound: true,
    };
  }

  if (!isCategoryNameNumber) {
    const existSubcategory = categoryResponse?.attributes?.blogSubcategories?.data?.find(
      (item) => item?.attributes?.url === subcategory,
    );

    if (!existSubcategory) {
      return {
        redirect: { destination: `/blogs/${category}` },
      };
    }
  }

  const subcategoryRes = !isCategoryNameNumber ? await getSingleSubcategory(subcategory) : {};
  const blogsUrl = `${isCategoryNameNumber ? category : subcategory}`;
  const isSubcategory = !isCategoryNameNumber;
  const currentPageNumber = isCategoryNameNumber ? +subcategory : 1;

  const {
    data,
    pagination,
  } = await getBlogsList(blogsUrl, currentPageNumber, isSubcategory);
  const resultPagination = checkPagination(pagination);

  if (resultPagination && !data?.length) {
    return {
      notFound: true,
    };
  }

  if (subcategory === '0' || subcategory === '1' || !data?.length) {
    return {
      redirect: { destination: `/blogs/${category}` },
    };
  }

  return {
    props: {
      blogs: data,
      pagination,
      footerContent,
      seoData,
      category: categoryResponse,
      currentSubcategory: subcategoryRes,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getSubcategoriesPaths();

  return {
    paths,
    fallback: 'blocking',
  };
}

export default SubcategoryPage;
