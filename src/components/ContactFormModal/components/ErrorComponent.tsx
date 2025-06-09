import { IError } from '../interfaces/IError';

import styles from '../sass/errorComponent.module.scss';

function ErrorComponent({ error, variant }: IError) {
  return (
    <div className={`${styles.error} ${styles[variant || '']}`}>{typeof error === 'string' && error}</div>
  );
}

export default ErrorComponent;
