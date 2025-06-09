interface IRelatedSubcategoryTyped {
  data?: {
    id: number | string;
    attributes: {
      name: string;
      url: string;
    }
  }[];
}

export default IRelatedSubcategoryTyped;
