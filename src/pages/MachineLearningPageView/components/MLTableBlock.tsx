import { StaticImageData } from 'next/image';
import { useSelector } from 'react-redux';

import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import ImageBackground from '../../../assets/images/machineLearning/MLTableBlock/img_MLTableBlockBg@2x.webp';
import ImageBackgroundTablet from '../../../assets/images/machineLearning/MLTableBlock/img_MLTableBlockTabletBg@2x.webp';
import ImageBackgroundMobile from '../../../assets/images/machineLearning/MLTableBlock/img_MLTableBlockMobileBg@2x.webp';
import ImageComponent from 'components/Image/Image';
import ContentText from 'components/ContentText/ContentText';
import MainTitle from 'components/MainTitle/MainTitle';
import MLTableBlockData from '../data/MLTableBlockData';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/MLTableBlock.module.scss';

function MLTableBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ImageBackground,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = ImageBackgroundTablet;
    } else if (isXSDevice) {
      bg.background = ImageBackgroundMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          sizes="100vw"
          alt="background"
        />
      </div>
      <PageContainer className={styles.container}>
        <ContentText tag="p" className={styles.upTitle}>
          [ Onix&apos;s industry-specific ML
          {' '}
          <span className={styles.inlineBlock}>use cases ]</span>
        </ContentText>
        <MainTitle className={styles.title}>
          We’re a competent machine learning development company that delivers
          reliable products for various industry domains:
        </MainTitle>
        <div className={styles.content}>
          {MLTableBlockData.map(({ title, content }) => (
            <div key={title} className={styles.item}>
              <MainTitle tag="h3" className={styles.itemTitle}>{title}</MainTitle>
              <ul className={styles.itemList}>
                {content.map((item, index) => (
                  <li key={['﹂MLTableBlockDataItem', index].join('_')} className={styles.listItem}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default MLTableBlock;
