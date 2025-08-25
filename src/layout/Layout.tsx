import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

import ILayout from './interfaces/ILayout';
import CustomHead from './CustomHead/CustomHead';
import Header from './Header/Header';
import {
  generalSans, ibmPlexMono, muktaVaaniFont, plusJakartaSans,
} from '../fonts/MainFonts';
import {
  setIsFontReady, setNavSubMenuVisibility, setScreenSizes, setWindowWidth,
} from '../store/app/slice';
import {
  cursorFollowerEnabledPaths,
  LG_DEVICE, MD_DEVICE, SM_DEVICE, XL_DEVICE, XS_DEVICE, XXL_DEVICE, XXXL_DEVICE,
} from '../constants/constants';
import { setIsDragListen } from '../store/app/contactForm/slice';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import useScrollBlocked from '../hook/useScrollBlocked';
import NavigateButton from '../components/NavigateButton/NavigateButton';
import Footer from './Footer/Footer';
import CursorFollower from './CursorFollower/CursorFollower';
import { HeaderColorVariant } from 'constants/enums';
import ContactFormModalLazy from '../components/ContactFormModal/ContactFormModal';
import BreadcrumbsJsonLd from '../components/BreadcrumbsJsonLd/BreadcrumbsJsonLd';
import { checkSaleUrl } from 'utils/helpers';
import HeaderSale from './HeaderSale/HeaderSale';
import FooterSale from './FooterSale/FooterSale';
import { useAppSelector } from 'hook/reduxToolkit';
import ArticleJsonLd from 'components/ArticleJsonLd/ArticleJsonLd';

import styles from './sass/Layout.module.scss';

function Layout({
  children,
  seoData,
  showFooter = true,
  salesChannel,
  breadcrumbs,
  layoutBackground,
  className,
  breadcrumbsVariant,
  footerContent,
  blogAttributes,
  articleType,
  showNavigateButton = true,
  fixHeader = true,
  isBlogsPage = false,
  caseStudyLayout = false,
  smoothScroll = false,
  isBlockedIp = false,
}: ILayout) {
  const dispatch = useDispatch();
  const { query: { slug }, asPath } = useRouter();
  const {
    navSubMenuVisibility,
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      screenWidth,
    },
  } = useAppSelector((state) => state?.app);

  const isTablet = isMDDevice || isSMDevice || isXSDevice;
  const { videoFullScreen } = useAppSelector((state) => state.videoFullScreen);
  const { isShowContactForm } = useAppSelector((state) => state?.contactForm, shallowEqual);
  const { isShowDownloadForm } = useAppSelector((state) => state?.downloadForm, shallowEqual);
  const { isShowSubscribeForm } = useAppSelector((state) => state?.subscribeForm, shallowEqual);
  const { isShowCareersModal } = useAppSelector((state) => state?.careers, shallowEqual);
  const [isScroll, setIsScroll] = useState(false);
  const [showArrow, setShowArrow] = useState(<> </>);
  const [showForm, setShowForm] = useState(<> </>);
  const [showFooterRender, setShowFooterRender] = useState(<> </>);
  const saleUrl = checkSaleUrl();
  const pathname = usePathname();
  const cursorFollowerVisible = screenWidth > 1024;
  const enableCursorFollower = cursorFollowerEnabledPaths.includes(pathname);

  const getSalesChannel = () => {
    if (asPath.split('/')[1] !== 'blog') return salesChannel;
    let string;
    if (slug && typeof slug === 'string') {
      string = slug.replace(/-/g, ' ');
    }
    if (slug && Array.isArray(slug)) {
      string = slug.join(' ').replace(/-/g, ' ');
    }
    return string;
  };

  useScrollBlocked(isShowContactForm);
  useScrollBlocked(!!navSubMenuVisibility && isTablet);
  useScrollBlocked(isShowDownloadForm);
  useScrollBlocked(isShowSubscribeForm);
  useScrollBlocked(isShowCareersModal);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(<NavigateButton smoothScroll={smoothScroll} />);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(<ContactFormModalLazy salesChannel={getSalesChannel()} />);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowFooterRender(
        saleUrl
          ? <FooterSale />
          : (
            <Footer
              salesChannel={salesChannel}
              isBlogsPage={isBlogsPage}
              topFields={footerContent?.topFields}
              bottomFields={footerContent?.bottomFields}
            />
          ),
      );
    }, 2000);
  }, []);

  useEffect(() => {
    const onScreenWidthChange = () => {
      const screenWidthConst = window.innerWidth;
      dispatch(setScreenSizes({
        screenSizes: {
          isXXXLDevice: screenWidthConst >= XXXL_DEVICE,
          isXXLDevice: screenWidthConst >= XXL_DEVICE && screenWidthConst < XXXL_DEVICE,
          isXLDevice: screenWidthConst >= XL_DEVICE && screenWidthConst < XXL_DEVICE,
          isLGDevice: screenWidthConst > LG_DEVICE && screenWidthConst < XL_DEVICE,
          isMDDevice: screenWidthConst >= MD_DEVICE && screenWidthConst <= LG_DEVICE,
          isSMDevice: screenWidthConst >= SM_DEVICE && screenWidthConst < MD_DEVICE,
          isXSDevice: screenWidthConst >= XS_DEVICE && screenWidthConst < SM_DEVICE,
          screenWidth: screenWidthConst,
        },
      }));
    };

    const handleScroll = () => {
      if (navSubMenuVisibility) {
        dispatch(setNavSubMenuVisibility({ navSubMenuVisibility: 0 }));
      }
      setIsScroll(window.scrollY > 0);
    };

    onScreenWidthChange();

    const queries = [
      window.matchMedia('(min-width: 1920px)'),
      window.matchMedia('(max-width: 1440px)'),
      window.matchMedia('(max-width: 1200px)'),
      window.matchMedia('(max-width: 992px)'),
      window.matchMedia('(max-width: 768px)'),
      window.matchMedia('(max-width: 576px)'),
      window.matchMedia('(min-width: 0)'),
    ];

    queries.forEach((query) => query.addEventListener('change', onScreenWidthChange));
    window.addEventListener('scroll', handleScroll);

    return () => {
      queries.forEach((query) => query.removeEventListener('change', onScreenWidthChange));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, navSubMenuVisibility]);

  const setMobileScreenHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setMobileScreenHeight();
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (typeof window !== undefined) {
        dispatch(setWindowWidth({ windowWidth: window.innerWidth }));
        dispatch(setIsDragListen({ isDragListen: window.innerWidth < SM_DEVICE }));
      }
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [dispatch]);

  useEffect(() => {
    const isFontsReady = async () => {
      const res = await document.fonts.ready;
      if (res.status === 'loaded') {
        dispatch(setIsFontReady({ isFontReady: true }));
      }
    };
    dispatch(setIsFontReady({ isFontReady: false }));

    isFontsReady().catch(() => '');
  }, [asPath, dispatch]);

  return (
    <div id="modal" className={`${className || ''}`}>
      {cursorFollowerVisible && enableCursorFollower && (
        <CursorFollower />
      )}
      <CustomHead seoData={seoData} />
      <Head>
        {breadcrumbs && BreadcrumbsJsonLd(breadcrumbs)}
      </Head>
      {checkSaleUrl() && (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex" />
        </Head>
      )}
      {blogAttributes && (
        <Head>
          {ArticleJsonLd({ attributes: blogAttributes, articleType: articleType || 'BlogPosting' })}
        </Head>
      )}
      <div style={{
        position: caseStudyLayout ? 'absolute' : 'static',
        width: '100%',
      }}
      >
        {saleUrl || isBlockedIp ? (
          <HeaderSale
            headerColorVariant={isScroll ? HeaderColorVariant.WHITE : undefined}
            isBlockedIp={isBlockedIp}
          />
        ) : (
          <Header
            fixHeader={fixHeader}
            headerColorVariant={isScroll ? HeaderColorVariant.WHITE : undefined}
            isMDDevice={isMDDevice}
          />
        )}
        {(breadcrumbs && !saleUrl) && (
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            variant={breadcrumbsVariant}
          />
        )}
      </div>
      <main
        id="mainkk"
        className={`${ibmPlexMono.variable} ${generalSans.variable} ${muktaVaaniFont.variable}
          ${plusJakartaSans.variable}`}
      >
        {layoutBackground
        && (
          <div
            className={styles.pageBackgroundOverlay}
          >
            <Image
              src={layoutBackground}
              alt="page background"
              priority
              quality={100}
              fill
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              style={{ userSelect: 'none' }}
            />
          </div>
        )}
        <div
          style={{ zIndex: videoFullScreen ? 500000 : 2 }}
          className={styles.layoutContent}
        >
          {children}
          {showForm}
        </div>
      </main>
      {showNavigateButton && !videoFullScreen && (<div>{ showArrow }</div>)}
      {showFooter && (
      <div>
        {showFooterRender}
      </div>
      )}
    </div>
  );
}

export default Layout;
