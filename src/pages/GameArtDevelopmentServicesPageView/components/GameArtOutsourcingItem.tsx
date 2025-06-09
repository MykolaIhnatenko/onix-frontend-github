import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import useBackground from '../../../hook/useBackground';
import IGameArtOutsourcingItem from '../interfaces/IGameArtOutsourcingItem';

import styles from '../sass/gameArtOutsourcingItem.module.scss';

function GameArtOutsourcingItem({
  image, title, text, imageTablet, imageMobile,
}: IGameArtOutsourcingItem) {
  const background = useBackground(image, imageTablet, imageMobile);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {background && (
          <ImageComponent
            src={background}
            alt="image"
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
        )}
      </div>
      <div className={styles.content}>
        <MainTitle tag="h3" className={styles.title}>
          {title}
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          {text}
        </ContentText>
      </div>
    </div>
  );
}

export default GameArtOutsourcingItem;
