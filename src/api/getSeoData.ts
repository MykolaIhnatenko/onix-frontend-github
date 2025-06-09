import { seoDataType } from '../constants/constants';
import ISeoData from '../interfaces/ISeoData';
import getSinglePage from './getSinglePage';
import getSingleCategory, { ICategory } from './getSingleCategory';
import getSingleBlog from './getSingleBlog';
import getAuthor from './getAuthor';
import getSingleSubcategory from './getSingleSubcategory';
import getSingleCareer from './getSingleCareer';
import IBlogSubcategory from 'interfaces/IBlogSubcategory';
import isEmpty from 'utils/isEmptyObject';

export default async function getSeoData(
  { page = '/', type = seoDataType.SINGLE_PAGE } = {},
): Promise<ISeoData> {
  const defaultSeoData = {
    seoTitle: '',
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    title: '!Offshore Software Development Company | Outsourcing Team - ONIX',
    keywords: 'onix-systems Ukraine developers',
    description: 'Outsourcing to web developers in Ukraine is time- and cost-effective.\n'
        + 'Onix is a top-tier software development company. CLICK HERE to pick our brains NOW!',
  };
  const action = {
    [seoDataType.SINGLE_PAGE]: async () => {
      const singlePage = await getSinglePage(page);

      if (!singlePage.attributes) {
        return defaultSeoData;
      }

      const {
        attributes: {
          title,
          createdAt,
          updatedAt,
          keywords,
          description,
          canonical,
          picture: {
            data: pictureData = {},
          } = {},
          project,
          popularBlogs,
          sale,
        } = {},
      } = await getSinglePage(page);

      const projectImage = project?.data?.attributes?.picture?.data?.attributes?.url || '';

      const {
        attributes: {
          formats: {
            medium: {
              url: mediumImage = '',
            } = {},
            thumbnail: {
              url: pngImage = '',
            } = {},
          } = {},
        } = {},
      } = pictureData || {};

      const pageData: ISeoData = {
        ...defaultSeoData,
        picture: mediumImage || pngImage || projectImage,
        seoTitle: title,
        createdAt,
        updatedAt,
        canonical,
        title,
        keywords,
        description,
        popularBlogs,
        sale,
      };
      return pageData || defaultSeoData;
    },
    [seoDataType.SINGLE_CATEGORY]: async () => {
      const singleCategory = await getSingleCategory(page) as ICategory;

      if (isEmpty(singleCategory)) {
        return defaultSeoData;
      }

      const {
        attributes: {
          title,
          keywords,
          description,
          canonical,
          markupTitle,
          seoTitle,
        } = {},
      } = singleCategory;

      const pageData: ISeoData = {
        ...defaultSeoData,
        seoTitle,
        canonical,
        title,
        keywords,
        description,
        markupTitle,
      };

      return pageData?.canonical ? pageData : defaultSeoData;
    },
    [seoDataType.SINGLE_SUBCATEGORY]: async () => {
      const singleSubcategory = await getSingleSubcategory(page) as IBlogSubcategory;
      if (isEmpty(singleSubcategory)) {
        return defaultSeoData;
      }

      const {
        attributes: {
          name,
          keywords,
          description,
          canonical,
          markupTitle,
          seoTitle,
        } = {},
      } = singleSubcategory;

      const pageData: ISeoData = {
        ...defaultSeoData,
        seoTitle,
        canonical,
        title: name,
        keywords,
        description,
        markupTitle,
      };
      return pageData || defaultSeoData;
    },
    [seoDataType.SINGLE_BLOG]: async () => {
      const blog = await getSingleBlog(page);
      const {
        attributes: {
          title,
          canonical,
          keywords,
          description,
          blogTitle,
          picture: {
            data: pictureData = {},
          } = {},
        },
      } = blog[0];

      const {
        attributes: {
          url: picture = '',
        } = {},
      } = pictureData || {};

      const pageData: ISeoData = {
        ...defaultSeoData,
        seoTitle: title,
        picture,
        canonical,
        title: blogTitle,
        keywords,
        description,
      };
      return pageData || defaultSeoData;
    },
    [seoDataType.SINGLE_AUTHOR]: async () => {
      const authorData = await getAuthor(page);

      if (!authorData || authorData.length === 0) {
        return defaultSeoData;
      }

      const {
        attributes: {
          canonical,
          title,
          keywords,
          description,
        } = {},
      } = authorData[0];

      const pageData: ISeoData = {
        ...defaultSeoData,
        seoTitle: title,
        canonical,
        title,
        keywords,
        description,
      };
      return pageData || defaultSeoData;
    },
    [seoDataType.SINGLE_CAREER]: async () => {
      const careers = await getSingleCareer(page);
      const {
        attributes: {
          title,
          canonical,
          keywords,
          description,
          picture: {
            data: pictureData = {},
          } = {},
        },
      } = careers[0];

      const {
        attributes: {
          url: picture = '',
        } = {},
      } = pictureData || {};

      const pageData: ISeoData = {
        ...defaultSeoData,
        picture,
        seoTitle: title,
        canonical,
        title,
        keywords,
        description,
      };
      return pageData || defaultSeoData;
    },
  };
  return action[type]();
}
