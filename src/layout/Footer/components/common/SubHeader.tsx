import ISubHeader from '../../interfaces/ISubHeader';

import styles from '../../sass/subHeader.module.scss';

function SubHeader({ title, children, variant }: ISubHeader) {
  return (
    <div className={`${styles.subHeader} ${styles[variant || '']}`}>
      {title || children}
    </div>
  );
}

export default SubHeader;
