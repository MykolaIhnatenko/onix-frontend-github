import { useSelector } from 'react-redux';

import ImageComponent from 'components/Image/Image';
import IStore from 'store/interfaces/IStore';
import { IScreenSizes } from 'store/app/interfaces/IApp';
import PageContainer from 'components/PageContainer/PageContainer';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import ICostOptimizationMainScreen from '../interfaces/ICostOptimizationMainScreen';

import styles from '../sass/costOptimizationMainScreen.module.scss';

function CostOptimizationMainScreen({
  pageTitle, pageText, backgroundImg, rightImg,
}: ICostOptimizationMainScreen) {
  const {
    isMDDevice,
    isXSDevice,
    isSMDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const mobile = isSMDevice || isMDDevice || isXSDevice;

  return (
    <div className={styles.mainSection}>
      <div className={styles.bg}>
        <ImageComponent
          src={backgroundImg}
          alt="MainBackground"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.content}>
          <div>
            <MainTitle tag="h1" className={styles.contentTitle}>
              {pageTitle}
            </MainTitle>
            <ContentText tag="p" className={styles.contentText}>
              {pageText}
            </ContentText>
          </div>
        </div>
      </PageContainer>
      {!mobile && (
        <div className={styles.imageBlock}>
          <ImageComponent
            src={rightImg}
            alt="developers"
            priority
            fill
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
        </div>
      )}
    </div>
  );
}

export default CostOptimizationMainScreen;
