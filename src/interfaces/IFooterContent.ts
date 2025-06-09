interface IFooterContent {
  topFields: IFieldsContent[];
  bottomFields: IFieldsContent[];
}

export interface IFieldsContent {
  id: number;
  sectionTitle: string;
  links: [
    {
      id: number;
      title: string;
      url: string;
    },
  ];
}

export default IFooterContent;
