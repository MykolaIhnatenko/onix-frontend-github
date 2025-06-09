import ImageComponent from '../../../components/Image/Image';
import IHeroSection from '../interfeaces/IHeroSection';
import VRARContent from 'components/VRARContent/VRARContent';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/HeroSection.module.scss';

function HeroSection({ title, backgroundImg }: IHeroSection) {
  return (
    <div className={styles.container}>
      {backgroundImg && (
        <div className={styles.bgContainer}>
          <ImageComponent
            src={backgroundImg}
            alt="MainBackground"
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}
      <PageContainer className={styles.titleContainer}>
        <VRARContent>
          {title || ''}
        </VRARContent>
      </PageContainer>
    </div>
  );
}

export default HeroSection;
