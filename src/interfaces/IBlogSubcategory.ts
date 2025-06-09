interface IBlogSubcategoryBlog {
  id: number;
  attributes: {
    title: string;
  }
}

export default interface IBlogSubcategory {
  id: number | string;
  attributes: {
    order: number;
    name: string;
    url: string;
    description: string;
    canonical: string;
    keywords: string;
    markupTitle: string;
    seoTitle?: string;
    category: {
      data: {
        id: number;
        attributes: {
          title: string;
          url: string;
        }
      }
    }
    blogs: {
      data: IBlogSubcategoryBlog[];
    }
  }
}

export interface IBlogSubcategories {
  data?: IBlogSubcategory[];
}

export interface IBlogSubcategorySearchResponse {
  id: number;
  attributes: {
    title: string;
    url: string;
  }
}

export interface IBlogSubcategoriesSearchResponse {
  data?: IBlogSubcategorySearchResponse[];
}
