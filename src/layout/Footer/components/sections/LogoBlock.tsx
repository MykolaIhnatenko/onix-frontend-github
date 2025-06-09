import ILogoBlock from '../../interfaces/ILogoBlock';
import Icons from '../../../../assets/icon';
import ClutchWidget from '../../../../components/ClutchWidget/ClutchWidget';
import LinkComponent from '../../../../components/Link/Link';
import PageLinks from '../../../../constants/PageLinks';

import styles from '../../sass/logoBlock.module.scss';

function LogoBlock({ withoutClutchWidget = false, sale = false }: ILogoBlock) {
  const copyrightString = `© 2000 - ${(new Date()).getFullYear()} Onix`;
  const copyrightStringSale = `© 2000 - ${(new Date()).getFullYear()} Onix`;

  return (
    <div className={`d-flex ${styles.logoBlock} ${sale ? styles.logoBlockSale : ''}`}>
      <div className={styles.iconBlock}>
        <Icons.IconLogo width={128} height={32} />
        <div className={styles.copyrights}>
          <div className={sale ? styles.copyrightsContainerSale : ''}>
            <span>
              {sale ? copyrightStringSale : copyrightString}
            </span>
            {!sale && (
              <br />
            )}
            <span className={sale ? styles.saleLinks : ''}>
              <LinkComponent href={PageLinks.PRIVACY_POLICY} absolute={false} className={styles.copyrightLink}>
                Privacy Policy
              </LinkComponent>
            </span>
          </div>
        </div>
      </div>
      {!withoutClutchWidget && (
        <div className={styles.clutchWrapper}>
          <ClutchWidget
            id="footer-widget"
            dataWidgetType="1"
            dataHeight="40"
          />
        </div>
      )}
    </div>
  );
}

export default LogoBlock;
