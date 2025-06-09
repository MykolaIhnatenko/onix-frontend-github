import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Image from '../../components/Image/Image';
import combinePageData from '../../utils/combinePageData';
import { XXXL_DEVICE, SM_DEVICE, MD_DEVICE } from '../../constants/constants';
import useWindowSize from '../../hook/useWindowSize';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import { muktaVaaniFont } from '../../fonts/MainFonts';
import { ICombinedPage } from './interfaces/ICombinedPage';
import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import VRARContent from '../../components/VRARContent/VRARContent';
import ImageMicroCase from '../../components/ImageMicroCase/ImageMicroCase';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import { ButtonType, StylesNameCombinePage } from 'constants/enums';
import { checkStylesName } from 'utils/helpers';
import VideoSection from './components/VideoSection';
import OfferSection from './components/OfferSection';
import ResponsibilitySection from './components/ResponsibilitySection';
import ResultSection from './components/ResultSection';

import styles from './sass/CombinedPage.module.scss';

function CombinedPage({ latestBlogs, pathname, saleUrl }: ICombinedPage) {
  const dispatch = useDispatch();
  const [videoStarted, setVideoStarted] = useState(false);
  const { width } = useWindowSize();

  const {
    isSMDevice, isXSDevice, isMDDevice, isLGDevice, isXLDevice, isXXLDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const isNotMobile = isMDDevice || isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  const {
    videoSectionContent, cards, responsibilityCards, technologyCards, content, images, videoSrc, stylesName,
  } = combinePageData(pathname, saleUrl);

  const [
    { src: mainBgSrc, alt: mainBgAlt },
    { src: ourSolutionsBgSrc, alt: ourSolutionsBgAlt },
    { src: resultsImgSrc, alt: resultsImgAlt },
  ] = useMemo(() => {
    let paths = [{ src: '', alt: '' }, { src: '', alt: '' }, { src: '', alt: '' }];

    if (width !== 0 && width >= XXXL_DEVICE) {
      paths = [images.mainBackgroundDesktop, images.ourSolutionsDesktop, images.resultsImgDesktop];
    }
    if (width !== 0 && width < XXXL_DEVICE) {
      paths = [images.mainBackgroundDesktop, images.ourSolutionsDesktop, images.resultsImgDesktop];
    }
    if (width !== 0 && width < MD_DEVICE) {
      paths = [images.mainBackgroundTablet, images.ourSolutionsTablet, images.resultsImgDesktop];
    }
    if (width !== 0 && width < SM_DEVICE) {
      paths = [images.mainBackgroundMobile, images.ourSolutionsMobile, images.resultsImgMobile];
    }

    return paths;
  }, [width]);

  const { imgHeight: banskaStiavnicaImgHeight, imgWidth: banskaStiavnicaImgWidth } = useMemo(() => {
    let imgProperties = {
      imgWidth: 1440,
      imgHeight: 680,
    };

    if (isMDDevice) {
      imgProperties = {
        imgWidth: 768,
        imgHeight: 363,
      };
    }
    if (isSMDevice || isXSDevice) {
      imgProperties = {
        imgWidth: 360,
        imgHeight: 351,
      };
    }

    return imgProperties;
  }, [isMDDevice, isSMDevice, isXSDevice]);

  const getContent = () => {
    if (videoStarted) {
      return (
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          allow="autoplay; encrypted-media"
          title="bottomVideo"
        />
      );
    }

    return (
      <ImageMicroCase
        className="videoImgWrapper"
        shadowColor={content.videoSection.shadowColor}
        bgColor={content.videoSection.bgColor}
      >
        <>
          {images.videoIcon && (
            <Image
              width={images.videoIcon.width}
              height={images.videoIcon.height}
              src={images.videoIcon.src}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              alt="icon"
            />
          )}
          <span
            className={styles.playButton}
            role="button"
            aria-label="button"
            tabIndex={0}
            onClick={() => setVideoStarted(true)}
            onKeyDown={() => setVideoStarted(true)}
          />
        </>
      </ImageMicroCase>
    );
  };

  return (
    <div className={`${styles.combinePage} ${muktaVaaniFont.variable}`}>
      <div className={`${styles.mainSection} ${styles[stylesName]}`}>
        {checkStylesName(stylesName) && <div className={styles.overlay} />}
        <div className={styles.imgContainer}>
          {(width >= 450 || stylesName !== StylesNameCombinePage.banskaStiavnica) && mainBgSrc && (
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
              src={mainBgSrc}
              alt={mainBgAlt}
              priority
            />
          )}
          <div className={styles.container}>
            <VRARContent>
              <h1 className={styles.mainTitle}>{content.mainTitle}</h1>
              <p className={styles.mainDescription}>
                {content.mainDescription}
              </p>
            </VRARContent>
          </div>
        </div>
      </div>
      <VideoSection
        stylesName={stylesName}
        descriptionText={content.videoSection.descriptionText}
        spanContent={content.videoSection.spanContent || ''}
        videoSectionContent={videoSectionContent}
        color={content.videoSection.color}
        isNotMobile={isNotMobile}
        getContent={getContent}
        shadowColor={content.videoSection.shadowColor}
        bgColor={content.videoSection.bgColor}
        width={images.videoIcon.width}
        height={images.videoIcon.height}
        src={images.videoIcon.src}
      />
      <div className={styles.chalengesSection}>
        <div className={styles.container}>
          <VRARContent>
            <h2 className={`${styles.boldH2} ${styles[stylesName]}`}>Challenges</h2>
          </VRARContent>
          <VRARContent>
            <p className={styles.chalengesParagraph}>
              {content.challengesSection.description}
            </p>
          </VRARContent>
          <VRARContent className={styles.animationBlock}>
            <ImageMicroCase className="imgWrapper">
              <Image
                width={images.challengesImg.width}
                height={images.challengesImg.height}
                alt={images.challengesImg.alt}
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                src={images.challengesImg.src}
                className={`${styles.challengesImg} ${styles[stylesName]}`}
              />
            </ImageMicroCase>
          </VRARContent>
        </div>
      </div>
      <ResponsibilitySection
        title={content.responsibilitySection.title}
        responsibilityCards={responsibilityCards}
      />
      {!saleUrl && (
        <div className={styles.solutionSection}>
          <div className={styles.container}>
            <VRARContent>
              <h2 className={styles.boldH2}>{content.solutionSection.title}</h2>
            </VRARContent>
            <VRARContent>
              <div
                id={ButtonType.CASE}
                role="presentation"
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                className={`${styles.btn} btnContactModal ${styles[stylesName]}`}
              >
                Contact us
              </div>
            </VRARContent>
          </div>
          {(stylesName !== 'holokit') && (
            <div className={styles.solutionsImg}>
              <Image
                src={images.solutionsBg.src}
                alt={images.solutionsBg.alt}
                fill
                quality={100}
              />
            </div>
          )}
        </div>
      )}
      <div className={`${styles.ourSolutionsSection} ${styles.saleUrl}`}>
        <div className={styles.container}>
          <VRARContent>
            <h2 className={`${styles.boldH2} ${styles[stylesName]}`}>Our solutions</h2>
          </VRARContent>
          <VRARContent>
            <p>
              {content.ourSolutionsSection.description}
            </p>
          </VRARContent>
        </div>
        <div className={`${styles.ourSolutionsImg} ${styles[stylesName]}`}>
          {ourSolutionsBgSrc && pathname === '/banska-stiavnica' && (
          <Image
            src={ourSolutionsBgSrc}
            alt={ourSolutionsBgAlt}
            width={banskaStiavnicaImgWidth}
            height={banskaStiavnicaImgHeight}
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
          )}
          {ourSolutionsBgSrc && pathname !== '/banska-stiavnica' && (
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
              src={ourSolutionsBgSrc}
              alt={ourSolutionsBgAlt}
            />
          )}
        </div>
      </div>
      <OfferSection
        title={content.offerSection.title}
        cards={cards}
        shadowColor={content.offerSection.shadowColor}
        circleColor={content.offerSection.circleColor}
      />
      <div className={`${styles.technologySection} ${styles[stylesName]}`}>
        <div className={styles.container}>
          <VRARContent>
            <h2 className={`${styles.boldH2} ${styles[stylesName]}`}>Core technology</h2>
          </VRARContent>
          <div className={styles.technologiesContainer}>
            {technologyCards.map(({
              id, imgWidth, imgHeight, img,
            }) => (
              <VRARContent className={styles.technology} key={id}>
                <Image
                  width={imgWidth}
                  height={imgHeight}
                  src={img}
                  alt="technology"
                />
              </VRARContent>
            ))}
          </div>
        </div>
      </div>
      {content.testimonialSection && (
        <div className={styles.testimonialSection}>
          <div className={styles.container}>
            <h2 className={styles.boldH2}>Testimonial</h2>
            <p className={styles.content}>
              {content.testimonialSection.description}
            </p>
            <p className={styles.author}>
              {content.testimonialSection.author}
            </p>
          </div>
        </div>
      )}
      <ResultSection
        resultsImgSrc={resultsImgSrc}
        resultsImgAlt={resultsImgAlt}
        stylesName={stylesName}
        description={content.resultSection.description}
      />
      {!saleUrl && (
        <div className={`${styles.contactUs} ${styles[stylesName]}`}>
          <div className={styles.container}>
            <VRARContent>
              <h2 className={styles.boldH2}>
                {content.contactUsSection.title}
              </h2>
            </VRARContent>
            <VRARContent>
              <button
                id={ButtonType.CASE2}
                className={`${styles.btn} btnContactModal ${styles[stylesName]}`}
                type="button"
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              >
                Contact us
              </button>
            </VRARContent>
          </div>
        </div>
      )}
      {!saleUrl && (
        <LatestBlogs
          latestBlogs={latestBlogs}
          header={content.latestBlogsComponent.header}
          titleColor={content.latestBlogsComponent.color}
        />
      )}
    </div>
  );
}

export default CombinedPage;
