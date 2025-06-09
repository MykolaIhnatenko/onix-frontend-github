import IBlog from '../../../interfaces/IBlog';

export default interface ILMSDevelopment {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | [];
}
