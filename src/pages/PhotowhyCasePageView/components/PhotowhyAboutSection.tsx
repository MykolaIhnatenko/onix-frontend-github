import { Fragment } from 'react';

import aboutContent from '../data/aboutContent';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/photowhyAboutSection.module.scss';

function PhotowhyAboutSection() {
  return (
    <section className={styles.aboutPlatformSection}>
      <div className={`${styles.container} container`}>
        <h2>
          The platform is unique&nbsp;
          <br />
          in its emphasis on learning the art of photography
        </h2>
        <div className={styles.contentBlock}>
          {aboutContent.map(({
            id, imgContainer: { src, blur }, title, content,
          }) => (
            <Fragment key={id}>
              <div className={styles.imgContainer}>
                <ImageComponent
                  width={419}
                  height={848}
                  src={src}
                  sizes="100vw"
                  alt="phone"
                />
                {blur}
              </div>
              <div className={styles.contentContainer}>
                <VRARContent className={styles.text}>
                  <h3>{title}</h3>
                  {content}
                </VRARContent>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotowhyAboutSection;
