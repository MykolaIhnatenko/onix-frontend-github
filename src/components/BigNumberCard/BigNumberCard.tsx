import VRARContent from '../VRARContent/VRARContent';
import MainTitle from '../MainTitle/MainTitle';
import IBigNumberBlock from '../../pages/ConvertCasePageView/interfaces/IBigNumberBlock';
import ContentText from 'components/ContentText/ContentText';

import styles from './sass/bigNumberCard.module.scss';

function BigNumberCard({
  id, title, desc, variant,
}: IBigNumberBlock) {
  return (
    <div className={`${styles.card} ${variant ? styles[variant] : ''}`}>
      <div>
        <VRARContent>
          <MainTitle tag="h3" className={styles.title}>{title}</MainTitle>
        </VRARContent>
        {desc && (
          <VRARContent>
            <ContentText tag="p" className={styles.desc}>{desc}</ContentText>
          </VRARContent>
        )}
      </div>
      <MainTitle tag="span" className={styles.number}>{id}</MainTitle>
    </div>
  );
}

export default BigNumberCard;
