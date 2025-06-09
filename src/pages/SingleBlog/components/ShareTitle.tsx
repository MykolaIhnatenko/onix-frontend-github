import ContentText from '../../../components/ContentText/ContentText';
import IShareTitle from '../interfaces/IShareTitle';

import styles from '../sass/shareTitle.module.scss';

function ShareTitle({ title, variant }: IShareTitle) {
  return (
    <ContentText className={`${styles.title} ${variant ? styles[variant] : ''}`}>
      {title}
    </ContentText>
  );
}

export default ShareTitle;
