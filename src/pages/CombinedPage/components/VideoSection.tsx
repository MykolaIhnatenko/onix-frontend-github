import ProjectDescriptionMicroCase from '../../../components/ProjectDescriptionMicroCase/ProjectDescriptionMicroCase';
import Image from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageMicroCase from '../../../components/ImageMicroCase/ImageMicroCase';
import IVideoSection from '../interfaces/IVideoSection';

import styles from '../sass/CombinedPage.module.scss';

function VideoSection({
  stylesName, descriptionText, spanContent, videoSectionContent, color,
  isNotMobile, getContent, shadowColor, bgColor, width, height, src,
}: IVideoSection) {
  return (
    <div className={`${styles.videoSection} ${styles[stylesName]}`}>
      <div className={styles.container}>
        <VRARContent>
          <div className={styles.contentContainer}>
            <p>
              {descriptionText}
              {spanContent && (
              <span>{spanContent}</span>
              )}
            </p>
            <div className={styles.items}>
              {videoSectionContent.map((item) => (
                <ProjectDescriptionMicroCase
                  key={item.id}
                  item={item}
                  color={color}
                />
              ))}
            </div>
          </div>
        </VRARContent>
        <div className={styles.video}>
          {isNotMobile ? (
            getContent()
          ) : (
            <ImageMicroCase
              className="videoImgWrapper"
              shadowColor={shadowColor}
              bgColor={bgColor}
            >
              <Image
                width={width}
                height={height}
                src={src}
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                alt="icon"
              />
            </ImageMicroCase>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
