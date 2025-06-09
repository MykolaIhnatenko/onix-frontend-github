import getBlogsCategoriesList from '../api/getBlogsCategoriesList';

async function getSubcategoriesPaths() {
  const pageArray = [2, 3, 4, 5];
  const categoryList = await getBlogsCategoriesList({
    isBlogSubcategories: true,
  });

  return categoryList?.data?.flatMap((category) => {
    const categoryUrl = category?.attributes?.url;
    if (!categoryUrl) {
      return [];
    }

    return category?.attributes?.blogSubcategories?.data?.flatMap((subcategory) => {
      const subcategoryUrl = subcategory?.attributes?.url;
      const blogsData = subcategory?.attributes?.blogs?.data || [];

      if (blogsData.length === 0) {
        return [];
      }

      return pageArray.map((page) => ({
        params: {
          category: categoryUrl,
          subcategory: subcategoryUrl,
          page: `${page}`,
        },
      }));
    });
  });
}

export default getSubcategoriesPaths;
