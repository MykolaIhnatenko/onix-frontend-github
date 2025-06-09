import { useSelector } from 'react-redux';

import BlogPreviewsList from './BlogPreviewsList';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import IBlogPreviewsCarousel from '../interfaces/IBlogPreviewsCarousel';
import BlogPreviewCarousel from './BlogPreviewsCarousel';

function BlogPreviewsSelector({
  blogs, variant, generalSubcategory, categoryUrl,
}: IBlogPreviewsCarousel) {
  const {
    screenSizes: {
      isSMDevice, isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const isMobile = isSMDevice || isXSDevice;

  return isMobile ? (
    <BlogPreviewCarousel
      blogs={blogs}
      variant={variant}
      generalSubcategory={generalSubcategory}
      categoryUrl={categoryUrl}
    />
  ) : (
    <BlogPreviewsList
      blogs={blogs}
      variant={variant}
      generalSubcategory={generalSubcategory}
      categoryUrl={categoryUrl}
    />
  );
}

export default BlogPreviewsSelector;
