import IPicture from './IPicture';

export default interface ISeoData {
  seoTitle?: string,
  title?: string,
  sale?: boolean,
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
  keywords?: string,
  description?: string,
  markupTitle?: string,
  canonical?: string,
  picture?: string,
  faq?: IFaq[]
  createdAt?: string,
  updatedAt?: string,
  popularBlogs?: {
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
}

interface IFaq {
  id: number,
  question: string,
  answer: string,
}
