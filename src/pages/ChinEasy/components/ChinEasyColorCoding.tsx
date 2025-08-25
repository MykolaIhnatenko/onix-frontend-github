import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import IColorCoding from '../interface/IColorCoding';

import styles from '../sass/colorCoding.module.scss';

function ColorCoding({
  img, title, color, value,
}: IColorCoding) {
  return (
    <div className={styles.colorCoding}>
      <div className={styles.image}>
        <ImageComponent
          src={img}
          alt="Color Coding Image"
          width={240}
          height={240}
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <div className={styles.content}>
        <MainTitle className={styles.title} tag="p">
          {title}
        </MainTitle>
        <ContentText className={styles.color} tag="p">
          {color}
        </ContentText>
        <ContentText className={styles.text} tag="p">
          {value}
        </ContentText>
      </div>
    </div>
  );
}

export default ColorCoding;
