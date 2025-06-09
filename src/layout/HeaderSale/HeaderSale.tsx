import LinkComponent from 'components/Link/Link';
import Icons from 'assets/icon';
import IHeaderSale from './interfaces/IHeaderSale';

import styles from './sass/headerSale.module.scss';

function HeaderSale({ headerColorVariant, isBlockedIp }: IHeaderSale) {
  return (
    <header>
      <div className={styles.menuDesktop}>
        <div
          className={`
          ${styles.container} 
          ${headerColorVariant ? styles.white : ''}
        `}
        >
          <div className={`d-flex d-row d-item-center ${styles.headerContainer}`}>
            <div className={`flex1 d-flex ${styles.navigationBrand}`}>
              {isBlockedIp ? (
                <Icons.IconLogo width={128} height={32} />
              ) : (
                <LinkComponent href="/" ariaLabel="logo" absolute={false}>
                  <Icons.IconLogo width={128} height={32} />
                </LinkComponent>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSale;
