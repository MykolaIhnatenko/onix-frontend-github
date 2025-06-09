import { useRouter } from 'next/router';

import ICategoryPage from '../../../../src/interfaces/ICategories';
import isEmpty from '../../../../src/utils/isEmptyObject';
import PageToSalesChannels from '../../../../src/constants/PageToSalesChannels';
import CategoryBlogs from '../../../../src/pages/CategoryBlogsPage/CategoryBlogs';
import getSingleCategory from '../../../../src/api/getSingleCategory';
import getSeoData from '../../../../src/api/getSeoData';
import { seoDataType } from '../../../../src/constants/constants';
import getSingleSubcategory from '../../../../src/api/getSingleSubcategory';
import getBlogsList from '../../../../src/api/getBlogsList';
import getBlogsCategoryBreadcrumbs, { checkPagination, getNewBlogSubcategories } from '../../../../src/utils/blogsUtils';
import getSubcategoriesPaths from '../../../../src/utils/getSubcategoriesPaths';
import getFooterContent from 'api/getFooterContent';

function SubcategoryPagePagination({
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

  const { query } = useRouter();
  const page = query.page as string;
  const isEmptyCurrentSubcategory = currentSubcategory && isEmpty(currentSubcategory);
  const breadcrumbs = getBlogsCategoryBreadcrumbs(title, `${url}`, currentSubcategory, page);
  const newBlogSubcategories = getNewBlogSubcategories({
    blogSubcategories, id, title, url,
  });

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
    page: string;
  }
}

export async function getStaticProps({ params: { category, subcategory, page } }:IStaticProps) {
  const isPageNameNumber = Number.isInteger(+page);
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: `${subcategory}`, type: seoDataType.SINGLE_SUBCATEGORY });

  if (!isPageNameNumber || !seoData?.seoTitle) {
    return { notFound: true };
  }
  const categoryRes = await getSingleCategory(category);
  const subcategoryRes = await getSingleSubcategory(subcategory);
  const blogsUrl = `${subcategory}`;
  const currentPageNumber = +page;
  const isSubcategory = true;

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

  if (page === '0' || page === '1') {
    return {
      redirect: {
        destination: `/blogs/${category}/${subcategory}`,
      },
    };
  }

  return {
    props: {
      seoData,
      footerContent,
      category: categoryRes,
      currentSubcategory: subcategoryRes,
      blogs: data,
      pagination,
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

export default SubcategoryPagePagination;
