import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import useBackground from '../../hook/useBackground';
import ImageComponent from '../Image/Image';
import { ITransparentCard } from './interfaces/ITransparentCard';
import { MD_DEVICE } from '../../constants/constants';
import { TransparentCardVariant } from 'constants/enums';

import styles from './sass/transparentCard.module.scss';

function TransparentCard({
  bg, bgTablet, bgMobile, icon, title, text, variant, withoutMinWidth = false,
}: ITransparentCard) {
  const background = useBackground(
    bg,
    bgTablet,
    bgMobile,
    MD_DEVICE,
  );

  return (
    <div className={`${styles.item} ${styles[variant || ''] || ''} ${withoutMinWidth ? styles.withoutMinWidth : ''}`}>
      {
        background && (
          <ImageComponent
            src={background}
            fill
            alt="card-background"
            className={styles.bg}
            sizes="100vw"
          />
        )
      }
      {icon}
      <MainTitle
        tag={
          variant === TransparentCardVariant.DOCTOR
          || variant === TransparentCardVariant.DESIGN_AUDIT ? 'div' : 'h3'
        }
        className={styles.itemTitle}
      >
        {title}
      </MainTitle>
      <ContentText
        className={styles.itemText}
        tag={
          variant === TransparentCardVariant.DEDICATED_TEAM
          || variant === TransparentCardVariant.PRODUCT_DISCOVERY ? 'div' : 'p'
        }
      >
        {text}
      </ContentText>
    </div>
  );
}

export default TransparentCard;
