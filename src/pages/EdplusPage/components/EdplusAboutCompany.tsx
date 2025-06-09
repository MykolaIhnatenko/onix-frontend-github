import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import Icon from '../../../assets/icon';
import aboutContent from '../data/aboutContent';
import EdplusText from './EdplusText';
import IEdplusAboutCompany from '../interfaces/IEdplusAboutCompany';
import { EdplusTextVariant } from '../../../constants/enums';
import VideoPreview from '../../../assets/images/EdplusPage/img_video.webp';
import VideoPreviewMobile from '../../../assets/images/EdplusPage/img_video-mobile.webp';

import styles from '../sass/edplusAboutCompany.module.scss';

function EdplusAboutCompany({
  videoClicked,
  handleOnCLick,
}: IEdplusAboutCompany) {
  const {
    isSMDevice,
    isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <div className={styles.aboutCompany}>
      <div className={styles.container}>
        <VRARContent
          translate="translateX"
          offset={-4}
          className={styles.imageBlock}
        >
          <Icon.IconEdplusYellowHalfCircle className={styles.halfCircle} />
          <div
            className={styles.videoImage}
            role="presentation"
            onClick={handleOnCLick}
          >
            {videoClicked ? (
              <iframe
                className={styles['iframe-video']}
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/mMPOFW5vE7g?autoplay=1"
                allow="autoplay; encrypted-media"
                title="bottomVideo"
              />
            ) : (
              <ImageComponent
                src={isMobile ? VideoPreviewMobile : VideoPreview}
                fill
                alt="video-image"
              />
            )}
          </div>
          <Icon.IconEdplusEdplusGreen className={styles.greenImage} />
        </VRARContent>
        <VRARContent
          translate="translateX"
          className={styles.textBlock}
        >
          <VRARContent translate="translateX">
            <h2 className={styles.edplusTitleStyle}>About EdPlus Company</h2>
          </VRARContent>
          {aboutContent.map(({
            id,
            content,
          }) => (
            <EdplusText key={id} content={content} variant={EdplusTextVariant.TOP_MARGIN_FIRST_CHILD} />
          ))}
        </VRARContent>
      </div>
    </div>
  );
}

export default EdplusAboutCompany;
