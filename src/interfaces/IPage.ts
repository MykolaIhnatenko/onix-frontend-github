import IPicture from './IPicture';

export default interface IPage {
  id: number;
  attributes?: {
    url?: string;
    sale?: boolean;
    title?: string;
    createdAt?: string;
    updatedAt?: string;
    keywords?: string;
    description?: string;
    canonical?: string;
    picture?:IPicture;
    popularBlogs?:{
      data: [
        {
          id: number,
          attributes:{
            picture:IPicture,
            url: string,
            title: string,
          }
        },
      ]
    }
    project?: {
      data: {
        attributes: {
          picture:IPicture
        }
      }
    },
  };
}
