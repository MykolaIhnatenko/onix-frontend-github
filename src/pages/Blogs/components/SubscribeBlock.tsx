import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import useBackground from '../../../hook/useBackground';
import { MD_DEVICE } from '../../../constants/constants';
import ImageComponent from '../../../components/Image/Image';
import SubscribeForm from './SubscribeForm';
import { ISubscribeBlock } from '../interfaces/ISubscribeBlock';
import pageToSalesChannels from '../../../constants/PageToSalesChannels';
import BlogsFormModal from './BlogsFormModal';
import { FormMessageButtonVariant } from '../../../constants/enums';

import BlogsSubscribeBgMobile from '@/images/blogsPage/img_subscribe_blogs_mobile@2x.webp';
import BlogsSubscribeBgTablet from '@/images/blogsPage/img_subscribe_blogs_tablet@2x.webp';
import BlogsSubscribeBg from '@/images/blogsPage/img_subscribe_blogs@2x.webp';
import styles from '../sass/subscribeBlock.module.scss';

function SubscribeBlock({ categories }: ISubscribeBlock) {
  const bg = useBackground(
    BlogsSubscribeBg,
    BlogsSubscribeBgTablet,
    BlogsSubscribeBgMobile,
    MD_DEVICE,
  );

  return (
    <>
      <div className={styles.subscribeBlock} id="subscribeBlock">
        {bg && (
          <div className={styles.bg}>
            <ImageComponent
              src={bg}
              alt="subscribe-bg"
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            />
          </div>
        )}
        <PageContainer className={styles.container}>
          <MainTitle className={styles.title}>
            Give me the latest news!
          </MainTitle>
          <ContentText tag="p" className={styles.description}>
            Stay Informed and Inspired! Subscribe to Our Blog for the Latest in Tech Trends,
            Insights, and Innovations. Join the Conversation Today!
          </ContentText>
          <SubscribeForm
            salesChannel={pageToSalesChannels.BLOG_SUBSCRIPTION}
            categories={categories}
          />
        </PageContainer>
      </div>
      <BlogsFormModal btnVariant={FormMessageButtonVariant.BLOGS} />
    </>
  );
}
export default SubscribeBlock;
