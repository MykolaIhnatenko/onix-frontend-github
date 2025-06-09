import { getFooterAddresses } from '../../data/getFooterData';

import styles from '../../sass/footer.module.scss';

function Locations() {
  return (
    <>
      {getFooterAddresses.map(({ flagPic, title, address }) => (
        <div key={title} className={styles.location}>
          <div
            className="flex items-center gap-[10px] mb-[15px] font-jetBrains text-[16px]/[22px] uppercase tracking-wide"
          >
            {flagPic}
            {title}
          </div>
          <p className={styles.details}>
            {address}
          </p>
        </div>
      ))}
    </>
  );
}

export default Locations;
