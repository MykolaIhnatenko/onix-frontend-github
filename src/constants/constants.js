export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND || '';
export const PATH = process.env.NEXT_PUBLIC_BASE_URL || '';

export const DEFAULT_BLOGS_PAGINATION_LIMIT = 11;
export const DEFAULT_AUTHOR_BLOGS_PAGINATION_LIMIT = 11;

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const ALLOWED_FILES_EXTENSIONS = ['png', 'jpeg', 'jpg', 'doc', 'docx', 'pdf'];

export const HR_EMAIL = process.env.NEXT_PUBLIC_HR_EMAIL || '';
export const SALES_EMAIL = process.env.NEXT_PUBLIC_SALES_EMAIL || '';

export const GOOGLE_RE_CAPTCHA_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

export const seoDataType = {
  SINGLE_PAGE: 'singlePage',
  SINGLE_CATEGORY: 'singleCategory',
  SINGLE_SUBCATEGORY: 'singleSubcategory',
  SINGLE_AUTHOR: 'singleAuthor',
  SINGLE_HOLIDAY: 'singleHoliday',
  SINGLE_CAREER: 'singleCareer',
  SINGLE_BLOG: 'singleBlog',
};

export const XXXL_DEVICE = 1920;
export const XXL_DEVICE = 1440;
export const XL_DEVICE = 1200;
export const LG_DEVICE = 992;
export const MD_DEVICE = 768;
export const SM_DEVICE = 576;
export const XS_DEVICE = 0;
export const ANIMATION_DECELERATOR = 8;

export const SUBJECT_STRING = '?subject=I\'m%20looking%20for%20';

export const BODY_STRING = '&body=%0A%0AThe%20letter%20was%20sent%20from%20';

export const FILTERS_VARIANT = {
  SEE_ALL: 'See All',
  ALL: 'All',
};

export const EXPERT = 'expert';
export const EXPERTS = 'experts';
export const COMPANY = 'company';
export const EMAIL = 'email';
export const NAME = 'name';
export const COUNTRY = 'country';
export const INIT_SALES_CHANNEL = 'Onix Website';
export const PHONE = 'phone';
export const MESSAGE = 'message';
export const FOUND_OUT_US = 'howFoundOutAboutUs';
export const I = 'i';

export default BACKEND_URL;

export const DEFAULT_PROJECTS_PAGINATION_LIMIT = 9;
export const EASY_PROJECTS_PAGINATION_LIMIT = 9;
export const CATEGORIES_PAGE_HREF = '/blogs/categories';
export const SEARCH_INPUT_DEFAULT_DELAY = 800;

export const PATH_TO_BACKEND_IMAGES = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
  ? `${process.env.NEXT_PUBLIC_CDN_URL}`
  : `${process.env.NEXT_PUBLIC_BACKEND}`;

export const CONTACT_COMPANY = {
  EMAIL: 'hr@onix-systems.com',
  ADDRESS: '76 Tarasa Karpy Street, 25006',
  CITY: 'Kropyvnytskyi',
};

export const BADGE_TYPE = {
  SPECIALIST: 'specialist',
  TECHNOLOGY: 'technology',
  DOMAIN: 'domain',
  DURATION: 'duration',
};

export const HOSTS = {
  SALE: 'sales.onix.company',
  PRODUCTION: 'onix-systems',
  DEVELOPMENT: 'onix-systems-onix-frontend.dev.onix.team',
};
