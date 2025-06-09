import MainTitle from '../../MainTitle/MainTitle';
import ContentText from '../../ContentText/ContentText';
import FormMessagesButton from './FormMessagesButton';
import ImageComponent from '../../Image/Image';
import ErrorBg from '@/images/img_bg_error@2x.webp';
import LinkComponent from '../../Link/Link';

import styles from '../sass/errorView.module.scss';

function ErrorView() {
  return (
    <div className={styles.errorContent}>
      <MainTitle tag="h2" className={styles.title}>
        Oh no!
        <br />
        Something went wrong.
      </MainTitle>
      <ContentText className={styles.text}>
        We are working to resolve the problem
      </ContentText>
      <LinkComponent href="/">
        <FormMessagesButton title="Return to main page" />
      </LinkComponent>
      <div className={styles.bg}>
        <ImageComponent
          src={ErrorBg}
          fill
          priority
          alt="error-background"
        />
      </div>
    </div>
  );
}

export default ErrorView;
