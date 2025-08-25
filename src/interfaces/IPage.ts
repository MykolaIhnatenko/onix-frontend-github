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
    achievements?: {
      data: {
        id: number,
        attributes: {
          title: string,
          url: string,
          description: string,
          image: IPicture,
        }
      }[]
    },
    project?: {
      data: {
        attributes: {
          picture:IPicture
        }
      }
    },
  };
}
