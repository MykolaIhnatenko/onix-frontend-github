import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MarkdownComponent from './MarkdownComponent';
import { IBlogArticle } from '../interfaces/IBlogArticle';
import useOnLoadImages from '../../../hook/useOnLoadImages';
import { generalSans } from '../../../fonts/MainFonts';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import AuthorBlock from './AuthorBlock';
import MiniBanner from './MiniBanner';
import { IHandleMiniBannerClickParams } from '../interfaces/IMiniBannerProps';
import sendClickStatsToBackend from '../../../api/sendClickStatsToBackend';
import { IBlogMiniBannerAttributes } from '../../../interfaces/IBlog';
import ImageComponent from 'components/Image/Image';
import TableOfContent from './TabletOfContent';
import DownloadForm from 'pages/Blogs/components/DownloadForm';
import PagesToSalesChannels from 'constants/PageToSalesChannels';
import { DownloadFormVariant } from 'constants/enums';

import styles from '../sass/blogArticle.module.scss';

function BlogArticle({
  html, contentTable, executor, writers, miniBanner, isWhitepapers, alt, bgPath, tableOfContent, mailerliteId,
}:IBlogArticle) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;
  const initMiniBanner = miniBanner?.length ? miniBanner[0]?.attributes : undefined;
  const { isFontReady, screenSizes: { screenWidth } } = useSelector<IStore, IApp>((state) => state.app);
  const { asPath } = useRouter();
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [isImagesPriority, setIsImagesPriority] = useState(false);
  const [clickedAnchor, setClickedAnchor] = useState<string | null>(null);
  const [blogMiniBanner, setBlogMiniBanner] = useState<IBlogMiniBannerAttributes | undefined>(initMiniBanner);
  const bannerRef = useRef<{ min: number, max?: number, bannerNumber: number }>({ min: 0, bannerNumber: 0 });

  const imagesLoaded = useOnLoadImages(contentWrapperRef, isImagesPriority);
  const isMiniBannerExist = !!miniBanner?.length;
  const isAuthorsExist = executor?.data || writers?.data;
  const isRightSideBarExist = isAuthorsExist || isMiniBannerExist;
  const isOneLine = screenWidth < 1130;

  useEffect(() => {
    if (isImagesPriority && clickedAnchor && imagesLoaded && isFontReady) {
      const TOP_EMPTY_OFFSET = 80;
      const contentElement = contentWrapperRef.current;

      if (contentElement) {
        const visitedLiElements = Array.from(contentElement.querySelectorAll(`.li-${clickedAnchor}`));
        visitedLiElements.forEach((el) => el.classList.add(styles.li_visited));
      }

      setTimeout(() => {
        const anchorElement = document.getElementById(clickedAnchor);
        const elementPosition = anchorElement?.getBoundingClientRect().top;
        let offsetPosition;

        if (elementPosition) {
          offsetPosition = elementPosition - TOP_EMPTY_OFFSET;
        }

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });

        setClickedAnchor(null);
      }, 200);
    }
  }, [clickedAnchor, isImagesPriority, imagesLoaded, isFontReady]);

  const anchorHandler = (event: MouseEvent, anchor = '') => {
    event.preventDefault();
    setIsImagesPriority(true);
    setClickedAnchor(anchor);
  };

  useEffect(() => {
    if (contentTable?.length !== 0) {
      let elements: HTMLLIElement[] = [];
      contentTable?.forEach((item) => {
        elements = Array.from(document.querySelectorAll(`.li-${item.anchor}`)) || [];
        elements?.forEach((element) => {
          element.addEventListener('click', (event) => anchorHandler(event, item.anchor));
        });
      });

      return () => {
        elements?.forEach((element) => {
          element.removeEventListener('click', (event) => anchorHandler(event));
        });
      };
    }
    return undefined;
  }, [isImagesPriority, clickedAnchor, contentTable]);

  const getHeightElement = (blogEl: HTMLElement | null) => (blogEl?.offsetHeight ? blogEl?.offsetHeight : 0);

  useEffect(() => {
    const handleScroll = (endpoints: number[]) => {
      const position = window.scrollY;
      const { current } = bannerRef;

      if (!current.max) {
        [, current.max] = endpoints;
      }
      const miniBannerLength = miniBanner?.length || 0;
      const isNotLastEndpoint = current.bannerNumber < miniBannerLength - 1;

      if (position > current.max && isNotLastEndpoint) {
        current.bannerNumber += 1;
        setBlogMiniBanner(miniBanner && miniBanner?.[current?.bannerNumber]?.attributes);
        current.min = current.max;
        current.max = endpoints[current.bannerNumber + 1];
      }

      if (position < current.min) {
        current.bannerNumber -= 1;
        setBlogMiniBanner(miniBanner && miniBanner?.[current?.bannerNumber]?.attributes);
        current.max = current.min;
        current.min = endpoints[current.bannerNumber];
      }
    };

    if (isMiniBannerExist) {
      const timer = setTimeout(() => {
        const miniBannerLength = miniBanner?.length;
        const blogEl = document.getElementById('blogPost');
        const heightEl: number = getHeightElement(blogEl);
        const offsetParent = blogEl?.offsetParent as HTMLDivElement;
        const offsetTopEl = offsetParent?.offsetTop;
        const offset = heightEl + offsetTopEl;
        const step = offset / miniBannerLength;
        if (step < 1440) {
          return;
        }
        let endpoints = miniBanner?.map((_, index) => step * index);
        endpoints = [...endpoints, offset];
        document.addEventListener('scroll', () => handleScroll(endpoints));
      }, 500);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('scroll', () => handleScroll([0, 0]));
      };
    }
    return undefined;
  }, [isMiniBannerExist, miniBanner]);

  const handleMiniBannerClick = async ({ to, miniBannerName }: IHandleMiniBannerClickParams) => {
    await sendClickStatsToBackend({
      data: {
        type: 'Mini Banner',
        name: miniBannerName,
        from: window.location.pathname,
        fromSalesChannel: asPath,
        to,
        publishedAt: new Date(),
      },
    });
  };

  return (
    <div className={styles.blogArticle} id="blogPost">
      <div className={styles.wrapper}>
        <PageContainer className={styles.container}>
          {bgPath && (
            <div className={styles.background}>
              <ImageComponent
                src={`${adminPath}${bgPath}`}
                width={100}
                height={100}
                alt={alt || ''}
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              />
            </div>
          )}
          <div className={styles.mobilePadding}>
            {isWhitepapers && isOneLine && (
              <DownloadForm
                salesChannel={PagesToSalesChannels.BLOG_SUBSCRIPTION_EBOOK}
                variant={DownloadFormVariant.WHITEPAPERS_FORM}
                mailerliteId={mailerliteId}
              />
            )}
            <div className={`${styles.blogPostContent} ${generalSans.variable}`} ref={contentWrapperRef}>
              <MarkdownComponent html={html} imagesPriority={isImagesPriority} />
            </div>
            {isAuthorsExist && (
              <div className={styles.blogAuthors}>
                {executor && (
                  <AuthorBlock
                    executor={executor?.data}
                    writers={writers?.data}
                    isColumn={false}
                  />
                )}
              </div>
            )}
          </div>
        </PageContainer>
        {isRightSideBarExist && (
          <aside className={styles.blogAuthorsAside}>
            {!isWhitepapers ? (
              <div className={`${styles.rightSticky} ${!isAuthorsExist ? styles.removeTopMargin : ''}`}>
                <div className={styles.asideWrapper}>
                  <div>
                    {tableOfContent && (
                      <TableOfContent anchorItems={tableOfContent} />
                    )}
                    {isMiniBannerExist && (
                      <MiniBanner
                        handleMiniBannerClick={handleMiniBannerClick}
                        miniBanner={blogMiniBanner}
                        isSmall={false}
                      />
                    )}
                  </div>
                </div>

              </div>
            ) : (
              <div className={`${styles.rightSticky} ${!isAuthorsExist ? styles.removeTopMargin : ''}`}>
                <DownloadForm
                  salesChannel={PagesToSalesChannels.BLOG_SUBSCRIPTION_EBOOK}
                  variant={DownloadFormVariant.WHITEPAPERS_FORM}
                  mailerliteId={mailerliteId}
                />
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default BlogArticle;
