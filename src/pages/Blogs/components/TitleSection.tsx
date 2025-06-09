import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import useBackground from '../../../hook/useBackground';
import BlogBg from '@/images/blog/img_blogs@2x.webp';
import BlogBgTablet from '@/images/blog/img_blogs_tablet@2x.webp';
import BlogBgMobile from '@/images/blog/img_blogs_mobile@2x.webp';
import { TitleSectionType } from '../../../interfaces/IBlogsPage';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';
import { ClickHandler } from 'components/UI/interfaces/IButton';

import styles from '../sass/titleSection.module.scss';

function TitleSection({ seoData, description }: TitleSectionType) {
  const background = useBackground(
    BlogBg,
    BlogBgTablet,
    BlogBgMobile,
  );

  const getElementPosition = (element: HTMLElement) => {
    const { top, left } = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    return {
      top: top + scrollTop,
      left: left + scrollLeft,
    };
  };

  const handleClick: ClickHandler = () => {
    const element = document.getElementById('subscribeBlock');
    if (element) {
      const { top } = getElementPosition(element);
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.titleSection}>
      <div className={styles.bg}>
        {background && (
          <ImageComponent
            src={background}
            className={styles.bg}
            fill
            priority
            sizes="100vw"
            alt="blogs-background"
          />
        )}
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title} tag="h1">{seoData?.markupTitle || 'Discover the Onix blog'}</MainTitle>

        <div className={styles.buttonBlock}>
          <ContentText tag="p" className={styles.description}>
            {description}
          </ContentText>
          <ButtonPrimary
            text="Subscribe"
            styleContainer={styles.button}
            onClick={handleClick}
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default TitleSection;
