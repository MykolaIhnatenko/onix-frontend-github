import Link from 'next/link';
import { useDispatch } from 'react-redux';

import IMiniBannerProps from '../interfaces/IMiniBannerProps';
import ImageComponent from '../../../components/Image/Image';
import { PATH_TO_BACKEND_IMAGES } from '../../../constants/constants';
import { setShowContactForm } from 'store/app/contactForm/slice';

import styles from '../sass/miniBanner.module.scss';

function MiniBanner({
  miniBanner, isSmall, handleMiniBannerClick,
}: IMiniBannerProps) {
  const path = process.env.NEXT_PUBLIC_BASE_URL as string;
  const dispatch = useDispatch();

  const showContactForm = () => {
    dispatch(setShowContactForm({ showContactForm: true }));
  };

  const getSrc = () => {
    let src = '';
    if (isSmall) {
      src = miniBanner?.pictureSmall?.data?.attributes?.formats?.large?.url
        ?? miniBanner?.pictureSmall?.data?.attributes?.url ?? '';
    } else if (miniBanner?.pictureLarge.data?.attributes) {
      src = miniBanner?.pictureLarge?.data?.attributes?.formats?.large?.url
        ?? miniBanner?.pictureLarge?.data?.attributes?.url ?? '';
    }

    return src;
  };

  const onHandleMiniBannerClick = () => {
    if (miniBanner?.url === 'contact-us') {
      showContactForm();
    } else {
      handleMiniBannerClick({
        to: miniBanner?.url ?? '',
        miniBannerName: miniBanner?.miniBannerName ?? '',
      });
    }
  };

  return (
    <div
      className={`${styles.miniBanner} ${isSmall ? styles.miniBannerSmall : ''}`}
      onClick={onHandleMiniBannerClick}
      role="presentation"
    >
      <div className={styles.backgroundWrapper}>
        <ImageComponent
          fill
          src={`${PATH_TO_BACKEND_IMAGES}${getSrc()}`}
          alt={miniBanner?.buttonText ?? 'miniBanner'}
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          className={`${styles.miniBannerImg} miniBannerImg`}
        />
      </div>
      {(miniBanner && miniBanner?.url !== 'contact-us') && (
        <Link
          prefetch={false}
          href={{ pathname: `${path}/${miniBanner.url}` }}
        >
          <div className={styles.miniBannerContent}>
            {miniBanner?.title && <h4>{miniBanner.title}</h4>}
            {miniBanner?.buttonText && (
              <span className={`${miniBanner?.title ? '' : styles.spanTopMargin}`}>
                {miniBanner.buttonText}
              </span>
            )}
          </div>
        </Link>
      )}

    </div>
  );
}

export default MiniBanner;
