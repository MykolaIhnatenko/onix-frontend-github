import ImageComponent from '../../../components/Image/Image';
import StridistGrayCard from './StridistGrayCard';
import { IGraySectionProps } from '../interfaces/IGraySection';

import styles from '../sass/stridistGraySection.module.scss';

function StridistGraySection({
  sectionContent, img, type, cardType, saleUrl,
}: IGraySectionProps) {
  const {
    title, subtitle, content, alt,
  } = sectionContent;

  return (
    <section className={`${styles.section} ${styles[type]}`}>
      <div className={`${styles.container} stridistContainer ${saleUrl ? styles.saleContainer : ''}`}>
        <StridistGrayCard type={cardType}>
          <div className={styles.text}>
            <div className={styles.titles}>
              <h2>{title}</h2>
              <h3 className="fs_20">{subtitle}</h3>
            </div>
            <div className={styles.paragraph}>
              {content}
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={`${styles.imageContainer} ${type}`}>
              <div className={styles.image}>
                <ImageComponent
                  src={img}
                  fill
                  alt={alt}
                />
              </div>
            </div>
          </div>
        </StridistGrayCard>
      </div>
    </section>
  );
}

export default StridistGraySection;
