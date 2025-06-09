import IBlog from '../../../interfaces/IBlog';

export default interface ISportsAndFitnessServices {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | [];
}
