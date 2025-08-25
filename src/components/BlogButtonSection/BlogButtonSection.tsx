import PageContainer from '../PageContainer/PageContainer';
import useBackground from '../../hook/useBackground';
import ImageComponent from '../Image/Image';
import { MD_DEVICE } from '../../constants/constants';
import IBlogButtonSection from './interfaces/IBlogButtonSection';

import BlogsCalculateBg from '@/images/blogsPage/img_blogs_calculate_bg@2x.webp';
import BlogsCalculateBgTablet from '@/images/blogsPage/img_blogs_calculate_bg_tablet@2x.webp';
import BlogsCalculateBgMobile from '@/images/blogsPage/img_blogs_calculate_bg_mobile@2x.webp';

function BlogButtonSection({ children }: IBlogButtonSection) {
  const background = useBackground(
    BlogsCalculateBg,
    BlogsCalculateBgTablet,
    BlogsCalculateBgMobile,
    MD_DEVICE,
  );

  return (
    <section className="relative mt-[60px] min-md:mt-[80px] min-xl:mt-[120px]">
      {background && (
      <ImageComponent
        src={background}
        fill
        alt="calculate-background"
        className="object-cover z-[-1]"
        sizes="100vw"
      />
      )}
      <PageContainer
        className="pt-[80px] pb-[80px]
                   min-lg:pt-[120px] min-lg:pb-[120px]
                   min-xl:!pl-[100px]"
      >
        {children}
      </PageContainer>
    </section>
  );
}

export default BlogButtonSection;
