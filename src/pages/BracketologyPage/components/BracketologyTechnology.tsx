import { IBracketologyTechnology } from '../interfaces/IBracketologyTechnology';
import ImageComponent from '../../../components/Image/Image';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyTechnology.module.scss';

function BracketologyTechnology({
  imgSrc, title, content,
}: IBracketologyTechnology) {
  return (
    <div className={styles.technology}>
      <div className={styles.icon}>
        <ImageComponent
          width={120}
          height={120}
          src={imgSrc}
          alt="icon"
        />
      </div>
      <BracketologyText tag="h3" variant="fs_30">{title}</BracketologyText>
      <BracketologyText tag="p" variant="text">{content}</BracketologyText>
    </div>
  );
}

export default BracketologyTechnology;
