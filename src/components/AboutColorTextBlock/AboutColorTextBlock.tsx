import IAboutColorTextBlock from './interfaces/IAboutColorTextBlock';

import styles from './sass/AboutColorTextBlock.module.scss';

function AboutColorTextBlock({
  title, text, textGray, text2, textGray2, textSecondBlock, textGraySecondBlock,
  textGrayThirtyBlock, textThirtyBlock, variant, afterTextGray,
}: IAboutColorTextBlock) {
  return (
    <div className={`${styles.containerColorBlock} ${variant ? styles[variant] : ''}`}>
      <p className={`${styles.titleColorBox}`}>
        {title}
      </p>
      <div className={`${styles.contentBox}`}>
        <p className={`${styles.textBlack}`}>
          <span className={`${styles.textGray}`}>
            {afterTextGray}
          </span>
          {text}
          <span className={`${styles.textGray}`}>
            {textGray}
          </span>
          {text2}
          <span className={`${styles.textGray}`}>
            {textGray2}
          </span>
        </p>
        {textSecondBlock && textGraySecondBlock && (
          <div className={styles.secondBlock}>
            <p className={`${styles.textBlack}`}>
              {textSecondBlock}
              <span className={`${styles.textGray}`}>
                {textGraySecondBlock}
              </span>
            </p>
          </div>
        )}
        {textThirtyBlock && textGrayThirtyBlock && (
          <div className={styles.secondBlock}>
            <p className={`${styles.textBlack}`}>
              {textThirtyBlock}
              <span className={`${styles.textGray}`}>
                {textGrayThirtyBlock}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutColorTextBlock;
