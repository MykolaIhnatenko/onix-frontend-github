import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/technology.module.scss';

function TechContent({ data }: { data: string[] }) {
  return (
    <div className={styles.content}>
      <div className={styles.contentItem}>
        {data.map((item, index) => (
          <VRARContent key={item} delay={+`0.${index + 1}`}>
            <ContentText className={styles.itemText} tag="p">
              {item}
            </ContentText>
          </VRARContent>
        ))}
      </div>
    </div>
  );
}

export default TechContent;
