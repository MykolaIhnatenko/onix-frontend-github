import useBackground from '../../../hook/useBackground';
import { MD_DEVICE } from '../../../constants/constants';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import downloadEbookBlockData from '../data/DownloadEbookBlockData.json';
import ContentText from '../../../components/ContentText/ContentText';
import DownloadForm from './DownloadForm';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';
import BlogsFormModal from './BlogsFormModal';
import { FormMessageButtonVariant } from '../../../constants/enums';

import BlogsDownloadEbookBgMobile from '@/images/blogsPage/img_dowload_ebook_mobile@2x.webp';
import BlogsDownloadEbookBgTablet from '@/images/blogsPage/img_dowload_ebook_tablet@2x.webp';
import BlogsDownloadEbookBg from '@/images/blogsPage/img_dowload_ebook@2x.webp';
import styles from '../sass/downloadEbookBlock.module.scss';

function DownloadEbookBlock() {
  const bg = useBackground(
    BlogsDownloadEbookBg,
    BlogsDownloadEbookBgTablet,
    BlogsDownloadEbookBgMobile,
    MD_DEVICE,
  );

  return (
    <>
      <div className={styles.downloadEbookBlock}>
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
          <div className={styles.textBlock}>
            <MainTitle className={styles.title}>
              Join us now and get your FREE copy of &quot;Software Development Cost Estimation&quot;!
            </MainTitle>
            <ContentText tag="p" className={styles.subtitle}>
              This pricing guide is created to enhance transparency, empower you to make well-informed decisions,
              and alleviate any confusion associated with pricing. In this guide, you&apos;ll find:
            </ContentText>
            {downloadEbookBlockData.map(({ id, text }) => (
              <ContentText key={id} tag="p" className={styles.item}>
                {text}
              </ContentText>
            ))}
          </div>
          <DownloadForm salesChannel={PagesToSalesChannels.BLOG_SUBSCRIPTION_EBOOK} />
        </PageContainer>
      </div>
      <BlogsFormModal btnVariant={FormMessageButtonVariant.BLOGS} />
    </>
  );
}

export default DownloadEbookBlock;
