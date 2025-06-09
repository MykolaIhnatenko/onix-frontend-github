import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import IconLinkedin from '../../../assets/icon/blog/ic_linkedin.svg';
import IconEmail from '../../../assets/icon/blog/ic_email.svg';
import { IntroductionSectionType } from '../interfaces/IAuthorPageView';
import AuthorBgTablet from '@/images/author/img_author_bg_tablet@2x.webp';
import AuthorBgMobile from '@/images/author/img_author_bg_mobile@2x.webp';
import AuthorBg from '@/images/author/img_author_bg@2x.webp';

import styles from '../sass/introductionSection.module.scss';

function IntroductionSection({ author }:IntroductionSectionType) {
  const {
    attributes: {
      name, surname, linkedin, email, position,
      description, picture,
    },
  } = author;

  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;

  const pictureSrc = picture?.data?.attributes?.url
      || picture?.data?.attributes?.formats?.small?.url
      || picture?.data?.attributes?.formats?.thumbnail?.url;

  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = ():StaticImageData => {
    if (isXSDevice) {
      return AuthorBgMobile;
    }
    if (isMDDevice || isSMDevice) {
      return AuthorBgTablet;
    }
    return AuthorBg;
  };

  return (
    <section className={styles.introSection}>
      <div className={styles.bg}>
        <ImageComponent
          src={getBackground()}
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 66vw"
          alt="page-background"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.photo}>
          {pictureSrc && (
            <ImageComponent
              src={`${adminPath}${pictureSrc}`}
              fill
              alt="author"
              priority
            />
          )}
        </div>
        <MainTitle className={styles.name} tag="h1">
          {`${name} ${surname}`}
        </MainTitle>
        <ContentText tag="h2" className={styles.position}>{position}</ContentText>
        <ContentText tag="p" className={styles.description}>{description}</ContentText>
        <div className={styles.socialBlock}>
          <a href={linkedin} aria-label="author linkedin" rel="noreferrer nofollow">
            <IconLinkedin className={styles.icon} />
          </a>
          <a href={`mailto:${email}`} aria-label="author email" rel="noreferrer nofollow">
            <IconEmail className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
