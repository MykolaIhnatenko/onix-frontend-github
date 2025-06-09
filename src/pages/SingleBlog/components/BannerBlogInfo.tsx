import { DateTime } from 'luxon';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ContentText from 'components/ContentText/ContentText';
import IBannerBlogInfo from '../interfaces/IBannerBlogInfo';
import shareBlockData from '../data/ShareBlockData';

import styles from '../sass/bannerBlogInfo.module.scss';

function BannerBlogInfo({
  datePublication, timeToReading, views, isWhitepapers,
}: IBannerBlogInfo) {
  const { asPath } = useRouter();
  const path = process.env.NEXT_PUBLIC_BASE_URL as string;

  return (
    <div className={styles.blogInfoBlock}>
      <div className={styles.dateBlock}>
        {!isWhitepapers ? (
          <>
            {datePublication && (
              <ContentText tag="p" className={styles.blogInfo}>
                {DateTime.fromISO(datePublication).toFormat('LLL dd,yyyy')}
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
      <div className={styles.shareBlock}>
        <ContentText tag="p" className={styles.shareTitle}>
          Share
        </ContentText>
        <div className={styles.links}>
          {shareBlockData.map(({
            id, icon, iconHover, href, ariaLabel,
          }) => (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={`${href}${path + asPath}`}
              prefetch={false}
              aria-label={ariaLabel}
              className={styles.link}
              key={id}
            >
              {icon}
              {iconHover}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerBlogInfo;
