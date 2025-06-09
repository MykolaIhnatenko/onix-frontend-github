import PageContainer from '../../../components/PageContainer/PageContainer';
import WhitepappersBg from '@/images/singleBlog/img_whitepappers@2x.webp';
import WhitepappersBgTablet from '@/images/singleBlog/img_whitepappers_tablet@2x.webp';
import WhitepappersBgMobile from '@/images/singleBlog/img_whitepappers_mobile@2x.webp';
import useBackground from '../../../hook/useBackground';
import { MD_DEVICE, PATH_TO_BACKEND_IMAGES } from '../../../constants/constants';
import ImageComponent from '../../../components/Image/Image';
import IWhitepappersBanner from '../interfaces/IWhitepappersBanner';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BlogInfoBlock from '../../Blogs/components/BlogInfoBlock';
import { BlogSubcategoryVariant, DownloadFormVariant, FormMessageButtonVariant } from '../../../constants/enums';
import DownloadForm from '../../Blogs/components/DownloadForm';
import BlogsFormModal from '../../Blogs/components/BlogsFormModal';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';

import styles from '../sass/whitepappersBanner.module.scss';

function WhitepappersBanner({
  title, date, image, mailerliteId, views,
}:IWhitepappersBanner) {
  const bg = useBackground(WhitepappersBg, WhitepappersBgTablet, WhitepappersBgMobile, MD_DEVICE);
  const {
    data: {
      attributes: {
        alternativeText = '',
        url: defaultImage = '',
      } = {},
    } = {},
  } = image || {};

  return (
    <>
      <div className={styles.banner}>
        {bg && (
          <div className={styles.bg}>
            <ImageComponent
              src={bg}
              alt="whitepappers-background"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            />
          </div>
        )}
        <PageContainer className={styles.container}>
          <div className={styles.whitepapperPreview}>
            <MainTitle className={styles.title} tag="h1">{title}</MainTitle>
            <div className={styles.imgContainer}>
              <ImageComponent
                src={`${PATH_TO_BACKEND_IMAGES}${defaultImage}`}
                alt={alternativeText || 'blog-image'}
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                fill
              />
            </div>
            <BlogInfoBlock views={views} datePublication={date} variant={BlogSubcategoryVariant.WHITEPAPPERS} />
          </div>
          <div className={styles.form}>
            <DownloadForm
              salesChannel={PagesToSalesChannels.BLOG_SUBSCRIPTION_EBOOK}
              variant={DownloadFormVariant.WHITEPAPERS_FORM}
              mailerliteId={mailerliteId}
            />
          </div>
        </PageContainer>
      </div>
      <BlogsFormModal btnVariant={FormMessageButtonVariant.BLOGS} />
    </>
  );
}

export default WhitepappersBanner;
