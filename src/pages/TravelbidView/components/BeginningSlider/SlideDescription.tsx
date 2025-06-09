import ISlideDescription from '../../interfaces/ISlideDescription';

import styles from '../../sass/BeginningSlider/Slider.module.scss';

function SlideDescription({
  type, header, content, selectSlide, isActive,
}: ISlideDescription) {
  return (
    <div
      className={styles[`${type}`]}
      onClick={selectSlide ? (event) => selectSlide(event as unknown as MouseEvent) : undefined}
      role="presentation"
    >
      <div className={styles.separator}>
        <div className={styles.grayBar} />
        <div className={`${styles.coloredBar} ${isActive ? styles.animateColored : ''}`} />
      </div>
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
  );
}

export default SlideDescription;
