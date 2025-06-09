import { useSelector } from 'react-redux';

import IAuthorBlock from '../interfaces/IAuthorBlock';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';
import AuthorIconBlock from './AuthorIconBlock';
import { IApp } from '../../../store/app/interfaces/IApp';
import IStore from '../../../store/interfaces/IStore';

import styles from '../sass/authorBlock.module.scss';

function AuthorBlock({
  isColumn, executor, writers,
}: IAuthorBlock) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;
  const {
    attributes: {
      shortBiography,
      linkedin,
      email,
      name,
      surname,
      position,
      url,
      picture,
    },
  } = executor;
  const writersMod = writers?.slice(0, 2);

  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const isMobile = isSMDevice || isXSDevice;

  return (
    <div className={`${styles.authorBlock} ${isColumn ? styles.authorAsideBlock : ''} authorsContent`}>
      {executor && (
        <div className={`${styles.authorContainer}${isColumn ? styles.asideExecutor : ''}`}>
          <div className={styles.author}>
            <div className={styles.authorContent}>
              <LinkComponent
                href={`/author/${url}`}
                prefetch={false}
              >
                {picture?.data?.attributes?.formats?.thumbnail?.url && (
                  <ImageComponent
                    src={`${adminPath}${picture?.data?.attributes?.formats?.thumbnail?.url}`}
                    alt="executor photo"
                    className={styles.photo}
                    sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
                    width={80}
                    height={80}
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
            {(!isColumn && !isMobile) && <AuthorIconBlock email={email} linkedin={linkedin} />}
          </div>
          <ContentText tag="p" className={styles.shortBio}>{shortBiography}</ContentText>
        </div>
      )}
      {writersMod && writersMod.map((item, index) => (
        <div
          key={[item.attributes.name, index].join('_')}
          className={`${styles.author} ${styles.writer}`}
        >
          <div className={styles.authorContent}>
            {item?.attributes?.picture?.data?.attributes?.formats?.thumbnail?.url && (
              <ImageComponent
                src={`${adminPath}${item?.attributes?.picture?.data?.attributes?.formats?.thumbnail?.url}`}
                className={styles.photo}
                width={80}
                height={80}
                alt={`${item.attributes.name} ${item.attributes.surname}`}
                sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
              />
            )}
            <div className={styles.contentBlock}>
              <div className={styles.nameBlock}>
                <ContentText tag="p" className={styles.writerName}>
                  {`${item.attributes.name} ${item.attributes.surname}`}
                </ContentText>
                <span className={styles.circle} />
                <ContentText tag="p" className={styles.position}>{item?.attributes?.position}</ContentText>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorBlock;
