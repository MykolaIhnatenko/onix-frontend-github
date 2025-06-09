import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';

import ISingleBlogPageView from './interfaces/ISingleBlogPageView';
import Banner from './components/Banner';
import BlogArticle from './components/BlogArticle';
import FormBlock from './components/FormBlock';
import PageToSalesChannels from '../../constants/PageToSalesChannels';
import ImageComponent from 'components/Image/Image';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import RelatedBlogsBg from '@/images/blog/img_relatedBlogBg@2x.webp';
import RelatedBlogsTabletBg from '@/images/blog/img_relatedBlogTabletBg@2x.webp';
import RelatedBlogsMobileBg from '@/images/blog/img_relatedBlogMobileBg@2x.webp';
import CallToActionComponent from 'components/CallToActionBlock/CallToActionComponent';
import BlogsCallToActionBlockBg from '@/images/blogsPage/img_blogs_call_to_action_block@2x.webp';
import BlogsCallToActionBlockBgTablet from '@/images/blogsPage/img_blogs_call_to_action_block_tablet@2x.webp';
import BlogsCallToActionBlockBgMobile from '@/images/blogsPage/img_blogs_call_to_action_block_mobile@2x.webp';
import { ButtonType } from 'constants/enums';

import styles from './sass/singleBlogPage.module.scss';

const RelatedBlogsBlock = dynamic(() => import(
  './components/RelatedBlogsBlock'
), { ssr: false });

function SingleBlogPageView({ blog, isWhitepapers }: ISingleBlogPageView) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      relatedBlogsBg: RelatedBlogsBg,
      tellUs: BlogsCallToActionBlockBg,
    };
    if (isMDDevice) {
      bg.relatedBlogsBg = RelatedBlogsTabletBg;
      bg.tellUs = BlogsCallToActionBlockBgTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.relatedBlogsBg = RelatedBlogsMobileBg;
      bg.tellUs = BlogsCallToActionBlockBgMobile;
    }
    return bg;
  };

  const relatedSubcategory = {
    data: blog?.attributes?.relatedSubcategory?.map(({ id, label, ...params }) => ({
      id,
      attributes: {
        ...params,
        name: label,
      },
    })),
  };

  return (
    <>
      <Banner
        title={blog?.attributes?.blogTitle || blog?.attributes?.title}
        date={blog?.attributes?.datePublication || blog?.attributes?.publishedAt}
        timeToReading={blog?.attributes?.time_to_reading}
        views={blog?.attributes?.views}
        subcategories={relatedSubcategory.data || blog?.attributes?.blogSubcategories?.data}
        executor={blog?.attributes?.executor}
        writers={blog?.attributes?.writer}
        isWhitepapers={isWhitepapers || false}
      />
      <BlogArticle
        bgPath={blog?.attributes?.picture?.data?.attributes?.url || ''}
        alt={blog?.attributes?.picture?.data?.attributes?.alternativeText || 'blog picture'}
        html={blog?.attributes?.content}
        contentTable={blog?.attributes?.contentTable}
        executor={blog?.attributes?.executor}
        writers={blog?.attributes?.writer}
        miniBanner={blog?.attributes?.miniBanner?.data}
        isWhitepapers={isWhitepapers || false}
        tableOfContent={blog?.attributes?.contentTable}
        mailerliteId={blog?.attributes?.mailerliteId}
      />
      {!!blog?.attributes?.relatedBlogs && (
        <div className={styles.relatedBlogs}>
          <div className={styles.relatedBlogsBackground}>
            <ImageComponent
              src={getBackground().relatedBlogsBg}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              loading="lazy"
            />
          </div>
          <div className={styles.relatedBlogsContainer}>
            <RelatedBlogsBlock
              relatedBlogs={blog?.attributes?.relatedBlogs}
            />
          </div>
        </div>
      )}
      <FormBlock salesChannel={PageToSalesChannels.BLOG_SUBSCRIPTION_EBOOK_ARTICLE} />
      <CallToActionComponent
        id={ButtonType.BLOG}
        background={getBackground().tellUs}
        withButton
        title="Tell us about your product idea and let the magic&nbsp;unfold."
        btnText="Speak to Our Expert"
      />
    </>
  );
}

export default SingleBlogPageView;
