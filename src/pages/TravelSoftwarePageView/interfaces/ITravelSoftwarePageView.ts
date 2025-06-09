import IBlog from '../../../interfaces/IBlog';

interface ITravelSoftwarePageView {
  isBannerHidden: boolean;
  pageBlogs?: [IBlog] | []
}

export default ITravelSoftwarePageView;
