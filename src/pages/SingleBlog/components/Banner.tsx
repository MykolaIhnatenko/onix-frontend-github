import { useSelector } from 'react-redux';

import IBanner from '../interfaces/IBanner';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import BlogSubcategoryTagList from '../../../components/BlogSubcategoryTagList/BlogSubcategoryTagList';
import { BlogSubcategoryVariant } from '../../../constants/enums';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import BlogContainer from './BlogContainer';
import BannerAuthors from './BannerAuthors';
import BannerBg from '@/images/blog/img_blogBannerBg@2x.webp';
import BannerTabletBg from '@/images/blog/img_blogBannerTabletBg@2x.webp';
import BannerMobileBg from '@/images/blog/img_blogBannerMobileBg@2x.webp';
import BannerBlogInfo from './BannerBlogInfo';

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
            <BlogSubcategoryTagList data={subcategories} variant={BlogSubcategoryVariant.SINGLE_BLOG} />
          )}
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
        {date && (
          <BannerBlogInfo
            datePublication={date}
            timeToReading={timeToReading}
            views={views}
            isWhitepapers={isWhitepapers}
          />
        )}
      </BlogContainer>
    </div>
  );
}

export default Banner;
