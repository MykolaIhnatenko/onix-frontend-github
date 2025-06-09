import ImageComponent from '../Image/Image';
import IImageSection from './interface/IImageSection';
import useAdaptiveImage from '../../hook/useAdaptiveImage';

function ImageSection({ data, classes = {} }: IImageSection) {
  const {
    img,
    heightMobile,
    height,
    imgMobile,
    heightTablet,
    imgTablet,
  } = data;

  const { bg, properties: { imgWidth, imgHeight } } = useAdaptiveImage({
    imgDesk: img,
    imgTablet,
    imgMobile,
    widthDesk: 1440,
    heightDesk: height,
    widthTablet: 768,
    heightTablet,
    widthMobile: 360,
    heightMobile,
  });

  return (
    <section className={`block w-full h-auto ${classes?.section || ''}`}>
      {bg && (
        <ImageComponent
          src={bg}
          width={imgWidth}
          height={imgHeight}
          sizes="100vw"
          quality={98}
          className={`w-full ${classes?.image || ''}`}
        />
      )}
    </section>
  );
}

export default ImageSection;
