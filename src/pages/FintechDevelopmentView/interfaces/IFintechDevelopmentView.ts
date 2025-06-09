import IBlog from '../../../interfaces/IBlog';

export default interface IFintechDevelopmentView {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | [];
}
