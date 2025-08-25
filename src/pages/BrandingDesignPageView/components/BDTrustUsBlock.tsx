import MainTitle from '../../../components/MainTitle/MainTitle';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import ImageComponent from '../../../components/Image/Image';
import { ITrustUsBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';

import VRTrustUsBackground from '@/images/vrServicesPage/img_trust_us_bg.webp';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';
import styles from '../sass/trustUsBlock.module.scss';

function BDTrustUsBlock({ title, data }: ITrustUsBlock) {
  return (
    <div className={styles.container}>
      <ImageComponent
        src={TrustUsBackgroundMobileWebp}
        alt="TrustUsBackground"
        fill
        className={styles.img}
      />
      <MainTitle className={styles.title}>{title}</MainTitle>
      <CardsBlock
        data={data}
        bg={VRTrustUsBackground}
        classes={{
          cards: 'border-b-0',
          dropBlock: 'hidden',
          cardClasses: {
            card: `min-xl:[&:nth-of-type(4)]:!border-b-2 min-md:[&:nth-of-type(5)]:!border-b-2
            [&:nth-of-type(6)]:!border-b-2`,
          },
        }}
      />
    </div>
  );
}

export default BDTrustUsBlock;
