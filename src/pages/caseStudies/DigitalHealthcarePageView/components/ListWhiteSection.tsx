import MainTitle from '../../../../components/MainTitle/MainTitle';
import ContentText from '../../../../components/ContentText/ContentText';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ListItem from '../../../../components/CasesComponents/ListItem/ListItem';
import IListWhiteSection from '../interfaces/IListWhiteSection';

import styles from '../sass/listWhiteSection.module.scss';

function ListWhiteSection({
  title, subtitle, text, content, variant,
}: IListWhiteSection) {
  return (
    <section className={`${styles.listWhiteSection} ${variant ? styles[variant] : ''}`}>
      <div className={styles.container}>
        {title && (
          <VRARContent>
            <ContentText className={styles.sectionTitle} tag="p">{title}</ContentText>
          </VRARContent>
        )}
        <VRARContent>
          <MainTitle tag="h2" className={styles.subtitle}>
            {subtitle}
          </MainTitle>
        </VRARContent>
        {text && (
          <VRARContent>
            <ContentText className={styles.sectionText} tag="p">{text}</ContentText>
          </VRARContent>
        )}
        <div className={styles.content}>
          {content.map(({
            id, title: contentTitle, text: contentText, list,
          }) => (
            <VRARContent key={id} className={styles.item}>
              <div className={styles.titleBlock}>
                <p className={styles.number}>{id}</p>
                <MainTitle tag="h3" className={styles.title}>{contentTitle}</MainTitle>
              </div>
              <div className={styles.textBlock}>
                {contentText && (
                <ContentText className={styles.text} tag="p">
                  {contentText}
                </ContentText>
                )}
                <ul className={styles.list}>
                  {list.map((item) => (
                    <ListItem key={item} item={item} />
                  ))}
                </ul>
              </div>
            </VRARContent>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListWhiteSection;
