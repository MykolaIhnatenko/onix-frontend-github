import ErrorPageBg from '@/images/ErrorPage/img_errorPageBg@2x.webp';
import ErrorPageBgMobile from '@/images/ErrorPage/img_errorPageBgMobile@2x.webp';
import ErrorPageBgTablet from '@/images/ErrorPage/img_errorPageBgTablet@2x.webp';
import ContentText from '../../components/ContentText/ContentText';
import ImageComponent from '../../components/Image/Image';
import LinkComponent from '../../components/Link/Link';
import MainTitle from '../../components/MainTitle/MainTitle';
import useBackground from '../../hook/useBackground';
import IErrorPageView from './interfaces/IErrorPageView';

import styles from './sass/errorPageView.module.scss';

function ErrorPageView({ is403Page }: IErrorPageView) {
  const background = useBackground(ErrorPageBg, ErrorPageBgTablet, ErrorPageBgMobile);
  return (
    <div className={styles.container}>
      {background && !is403Page && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            sizes="100vw"
            priority
            alt="background"
          />
        </div>
      )}
      <div className={styles.content}>
        <MainTitle className={styles.title}>
          Oh no!
          <br />
          Something went wrong.
        </MainTitle>
        <ContentText className={styles.text}>
          We are working to resolve the problem
        </ContentText>
        {!is403Page && (
          <LinkComponent
            href="/"
            className={styles.link}
            absolute={false}
          >
            Return to main page
          </LinkComponent>
        )}

      </div>
    </div>
  );
}

export default ErrorPageView;
