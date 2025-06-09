import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import CalculateBackgroundLG from '@/images/img_calculate_background_lg.webp';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import styles from '../sass/calculateBlock.module.scss';

function CalculateBlock() {
  return (
    <div
      className={`${styles.container}`}
      style={{
        backgroundImage: `url(${CalculateBackgroundLG.src})`,
      }}
    >
      <MainTitle className={styles.title} tag="h2">
        How much does it cost to hire a
        <br className={styles.brMd} />
        dedicated
        <br className={styles.brLg} />
        team to build a
        <br className={styles.brMd} />
        top-tier solution?
      </MainTitle>
      <ContentText className={styles.content}>
        Specify the number of experts and technologies you need
        <br />
        and get an approximate cost for your project!
      </ContentText>
      <div className="d-flex d-item-center d-justify-center">
        <ButtonLight
          styleContainer={styles.btn}
          text="Calculate now"
        />
      </div>
    </div>
  );
}

export default CalculateBlock;
