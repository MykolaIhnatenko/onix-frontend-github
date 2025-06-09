import { generalSans } from '../../fonts/MainFonts';
import jetBrains from '../../fonts/JetBrains';
import LogoBlock from '../Footer/components/sections/LogoBlock';

import styles from './sass/footerSale.module.scss';

function FooterSale() {
  return (
    <footer className={`${styles.footer} ${generalSans.variable} ${jetBrains.variable}`}>
      <div className={styles.container}>
        <div className={styles.desk}>
          <div className={styles.row}>
            <LogoBlock withoutClutchWidget sale />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSale;
