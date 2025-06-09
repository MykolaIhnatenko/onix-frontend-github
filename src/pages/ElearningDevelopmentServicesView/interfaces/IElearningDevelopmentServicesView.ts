import IBlog from '../../../interfaces/IBlog';

export default interface IElearningDevelopmentServicesView {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | [];
}
