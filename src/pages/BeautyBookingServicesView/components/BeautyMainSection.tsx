import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import IBeautyMainSection from '../interfaces/IBeautyMainSection';
import ImageComponent from 'components/Image/Image';
import VRARContentText from 'components/VRARContentText/VRARContentText';

import styles from '../sass/BeautyMainSection.module.scss';

function BeautyMainSection({ title, desc, background }: IBeautyMainSection) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <VRARMainTitle
          tag="h1"
          title={title}
          classes={{ title: styles.title }}
        />
        <div className={styles.desc}>
          <VRARContentText text={desc} />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <ImageComponent
          src={background}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default BeautyMainSection;
