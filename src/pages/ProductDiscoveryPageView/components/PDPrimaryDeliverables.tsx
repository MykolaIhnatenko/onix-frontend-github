import { useAppSelector } from 'hook/reduxToolkit';
import deliverablesData from '../data/deliverablesData.json';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import DeliverableItems from './DeliverableItems';
import DeliverableBg from '../../../assets/images/productDiscovery/primaryDeliverables/img_primary_deliverables.webp';
import DeliverableBgTablet from '../../../assets/images/productDiscovery/primaryDeliverables/img_primary_deliverables_tablet.webp';
import DeliverableBgMobile from '../../../assets/images/productDiscovery/primaryDeliverables/img_primary_deliverables_mobile.webp';
import ImageComponent from 'components/Image/Image';

import styles from '../sass/PDPrimaryDeliverables.module.scss';

export default function PDPrimaryDeliverables() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: DeliverableBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = DeliverableBgTablet;
    } else if (isXSDevice) {
      bg.background = DeliverableBgMobile;
    }
    return bg;
  };

  return (
    <PageContainer className={styles.container}>
      <div className={styles.bgContainer}>
        <ImageComponent
          src={getBackground().background}
          fill
          alt="figures"
          sizes="100vw"
        />
      </div>
      <MainTitle className={styles.sectionTitle}>
        The primary deliverables of&nbsp;the discovery phase
      </MainTitle>
      <div className={styles.list}>
        {deliverablesData.map(({
          id, number, title, items,
        }) => (
          <DeliverableItems
            key={[id, title].join('_')}
            number={number}
            title={title}
            items={items}
          />
        ))}
      </div>
    </PageContainer>
  );
}
