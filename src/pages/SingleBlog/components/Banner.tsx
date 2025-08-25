import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';

import IBanner from '../interfaces/IBanner';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BlogSubcategoryTagList from '../../../components/BlogSubcategoryTagList/BlogSubcategoryTagList';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import BlogContainer from './BlogContainer';
import BannerAuthors from './BannerAuthors';
import BannerBlogInfo from './BannerBlogInfo';
import ContentText from 'components/ContentText/ContentText';

import BannerBg from '@/images/blog/img_blogBannerBg@2x.webp';
import BannerTabletBg from '@/images/blog/img_blogBannerTabletBg@2x.webp';
import BannerMobileBg from '@/images/blog/img_blogBannerMobileBg@2x.webp';
import styles from '../sass/banner.module.scss';

function Banner({
  title, date, subcategories, timeToReading, views, executor, writers, isWhitepapers,
}:IBanner) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      banner: BannerBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.banner = BannerTabletBg;
    } else if (isXSDevice) {
      bg.banner = BannerMobileBg;
    }

    return bg;
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bg}>
        <ImageComponent
          src={getBackground().banner}
          alt="Background"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <BlogContainer className={styles.container}>
        <div className={styles.titleBlock}>
          {!!subcategories?.length && (
            <BlogSubcategoryTagList
              data={subcategories}
              classes={{
                container: '!flex !flex-wrap !relative !gap-y-[10px] min-md:!p-0',
                tag: `!bg-white !border-[2px] !border-black !p-[3px_20px] !mb-0
                  min-md:!text-[16px] min-md:!leading-[22px] min-md:!p-[8px_20px]`,
              }}
            />
          )}
          <div className={styles.dateBlock}>
            {!isWhitepapers ? (
              <>
                {date && (
                <ContentText tag="p" className={styles.blogInfo}>
                  {DateTime.fromISO(date).toFormat('LLL dd,yyyy')}
                </ContentText>
                )}
                <span className={styles.circle} />
                <ContentText tag="p" className={styles.blogInfo}>
                  {timeToReading || 15}
                  {' '}
                  min read
                </ContentText>
                <span className={styles.circle} />
                <ContentText tag="p" className={styles.blogInfo}>
                  {views || 100}
                  {' '}
                  views
                </ContentText>
              </>
            ) : (
              <ContentText tag="p" className={styles.blogInfo}>
                {views || 100}
                {' '}
                views
              </ContentText>
            )}
          </div>
          <MainTitle className={styles.title} tag="h1">
            {title}
          </MainTitle>
          { executor?.data && writers?.data && (
            <BannerAuthors
              executor={executor?.data}
              writers={writers?.data}
            />
          )}
        </div>
        <BannerBlogInfo blogTitle={title} />
      </BlogContainer>
    </div>
  );
}

export default Banner;
