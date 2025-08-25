import ImageComponent from '../../../components/Image/Image';

import Result from '@/images/caseStudiesPage/ColoradoSports/img_result.webp';
import styles from '../sass/coloradoSportsVideoResultImage.module.scss';

function ColoradoSportsVideoResultImage({ imageStyle }: { imageStyle :'mobile' | 'desk' }) {
  return (
    <div className={`${styles.imgContainer} ${styles[imageStyle]}`}>
      <ImageComponent
        src={Result}
        width={1260}
        height={270}
        sizes="100vw"
        alt="desk"
      />
    </div>
  );
}

export default ColoradoSportsVideoResultImage;
