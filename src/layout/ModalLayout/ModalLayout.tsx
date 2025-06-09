import ClientOnlyPortal from '../../components/ClientOnlyPortal/ClientOnlyPortal';
import { IModalLayout } from './interfaces/IModalLayout';

import styles from './sass/ModalLayout.module.scss';

function ModalLayout({ children, onClick, styleType }: IModalLayout) {
  return (
    <ClientOnlyPortal selector="#modal">
      <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`} onClick={onClick} aria-hidden="true">
        {children}
      </div>
    </ClientOnlyPortal>
  );
}

export default ModalLayout;
