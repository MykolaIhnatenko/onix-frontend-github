interface IBlogSubcategory {
  id: number | string;
  attributes: {
    name: string;
    url: string;
  }
}
export default interface IBlogSubcategoryTagList {
  data?: IBlogSubcategory[] | [];
  classes?: {
    container?: string;
    tag?: string;
  }
}
