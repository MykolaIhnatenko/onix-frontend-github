import { useMemo } from 'react';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';

import BetterMePhones from '@/images/BetterMe/img_phones.png';
import styles from '../sass/betterMeMainSection.module.scss';

function BetterMeMainSection() {
  const { screenSizes: { isSMDevice, isXSDevice, isMDDevice } } = useAppSelector((state) => state?.app);

  const {
    bagWidth, bagHeight, shopifyWidth, shopifyHeight, circlesWidth, circlesHeight,
  } = useMemo(() => {
    let sizes = {
      bagWidth: 44,
      bagHeight: 50,
      shopifyWidth: 131,
      shopifyHeight: 42,
      circlesWidth: 564,
      circlesHeight: 564,
    };
    if (isMDDevice) {
      sizes = {
        bagWidth: 36.5,
        bagHeight: 43.5,
        shopifyWidth: 109,
        shopifyHeight: 37,
        circlesWidth: 442,
        circlesHeight: 442,
      };
    }
    if (isSMDevice || isXSDevice) {
      sizes = {
        bagWidth: 29,
        bagHeight: 34.5,
        shopifyWidth: 86,
        shopifyHeight: 29,
        circlesWidth: 244,
        circlesHeight: 279,
      };
    }

    return sizes;
  }, [isSMDevice, isXSDevice, isMDDevice]);

  return (
    <section className={styles.main}>
      <div className="betterMeContainer">
        <div className={styles.mainWrapper}>
          <div className={styles.description}>
            <div>
              <span>
                <Icon.IconBag className={styles.bag} width={bagWidth} height={bagHeight} />
                <Icon.IconBetterMeShopify className={styles.shopify} width={shopifyWidth} height={shopifyHeight} />
              </span>
              <h1>
                Store To Sell
                {' '}
                <br />
                Custom Sports Products By BetterMe Store
              </h1>
            </div>
            <p>How Onix developed a Shopify fitness store with unique fitness clothes for BetterMe customers</p>
          </div>
          <div className={styles.image}>
            <Icon.IconCircles className={styles.circles} width={circlesWidth} height={circlesHeight} />
            <ImageComponent
              className={styles.phones}
              src={BetterMePhones}
              width={510}
              height={638}
              alt="phones"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BetterMeMainSection;
