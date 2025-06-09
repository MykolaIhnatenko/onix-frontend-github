import ImageComponent from 'components/Image/Image';
import IBannerAuthors from '../interfaces/IBannerAuthors';
import LinkComponent from 'components/Link/Link';
import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/bannerAuthors.module.scss';

function BannerAuthors({ executor, writers }: IBannerAuthors) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;
  const {
    attributes: {
      name,
      surname,
      position,
      url,
      picture,
    },
  } = executor;
  const writersMod = writers?.slice(0, 2);

  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <LinkComponent
          href={`/author/${url}`}
          prefetch={false}
        >
          {picture?.data?.attributes?.formats?.thumbnail?.url && (
            <ImageComponent
              height={80}
              width={80}
              src={`${adminPath}${picture?.data?.attributes?.formats?.thumbnail?.url}`}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              alt="executor photo"
              className={styles.photo}
            />
          )}
        </LinkComponent>
        <div className={styles.contentBlock}>
          <LinkComponent
            href={`/author/${url}`}
            prefetch={false}
          >
            <div className={styles.nameBlock}>
              <ContentText tag="p" className={styles.name}>
                {`${name} ${surname}`}
              </ContentText>
              <ContentText tag="p" className={styles.position}>{position}</ContentText>
            </div>
          </LinkComponent>
        </div>
      </div>
      {writersMod && writersMod.map((item, index) => (
        <div
          key={[item?.attributes?.name, index].join('_')}
          className={styles.author}
        >
          {item?.attributes?.picture?.data?.attributes?.formats?.thumbnail?.url && (
          <ImageComponent
            width={80}
            height={80}
            src={`${adminPath}${item?.attributes?.picture?.data?.attributes?.formats?.thumbnail?.url}`}
            alt={`${item?.attributes?.name} ${item?.attributes?.surname}`}
            className={styles.photo}
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          />
          )}
          <div className={styles.contentBlock}>
            <div className={styles.nameBlock}>
              <ContentText tag="p" className={styles.name}>
                {`${item?.attributes?.name} ${item?.attributes?.surname}`}
              </ContentText>
              <ContentText tag="p" className={styles.position}>{item?.attributes?.position}</ContentText>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerAuthors;
