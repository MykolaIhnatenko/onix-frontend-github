import ImageComponent from '../../Image/Image';
import BlogsConfirmationBg from '@/images/blogsPage/img_blogs_confirmation@2x.webp';
import BlogsConfirmationBgMobile from '@/images/blogsPage/img_blogs_confirmation_mobile@2x.webp';
import Diamond from '@/images/img_diamond@2x.webp';
import MainTitle from '../../MainTitle/MainTitle';
import ContentText from '../../ContentText/ContentText';
import FormMessagesButton from './FormMessagesButton';
import ISuccessfulView from '../interfaces/ISuccessfulView';
import useBackground from '../../../hook/useBackground';
import { generalSans, ibmPlexMono } from '../../../fonts/MainFonts';
import { FormMessageButtonVariant } from '../../../constants/enums';

import styles from '../sass/successfulView.module.scss';

function SuccessfulView({ variant }: ISuccessfulView) {
  const bg = useBackground(BlogsConfirmationBg, BlogsConfirmationBg, BlogsConfirmationBgMobile);

  return (
    <div className={`${styles.successfulContent} ${variant ? styles[variant] : ''}`}>
      {variant === FormMessageButtonVariant.BLOGS && bg ? (
        <div className={styles.blogsImage}>
          <ImageComponent
            src={bg}
            fill
            priority
            alt="blogs-confirmation"
          />
        </div>
      ) : (
        <div className={styles.image}>
          <ImageComponent
            src={Diamond}
            width={160}
            height={160}
            priority
            alt="diamond"
          />
        </div>
      )}
      <MainTitle className={`${styles.title} ${generalSans.variable}`}>
        Thank you!
      </MainTitle>
      <ContentText className={`${styles.text} ${ibmPlexMono.variable}`}>
        {variant && variant !== FormMessageButtonVariant.CALCULATOR
          ? 'You have successfully subscribed to our blog.' : 'We will contact you as soon as possible.'}
      </ContentText>
      {variant !== FormMessageButtonVariant.CALCULATOR
        && <FormMessagesButton title="Send another message" variant={variant} />}
    </div>
  );
}

export default SuccessfulView;
