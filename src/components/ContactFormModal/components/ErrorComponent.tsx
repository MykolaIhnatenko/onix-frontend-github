import { IError } from '../interfaces/IError';

import styles from '../sass/errorComponent.module.scss';

function ErrorComponent({ error, variant, isJakarta }: IError) {
  return (
    <div className={`${styles.error} ${styles[variant || '']}
    ${isJakarta ? '!font-jakartaSans normal-case !text-[12px] font-medium tracking-[-0.01em] !max-w-full' : ''}
    `}
    >
      {typeof error === 'string' && error}
    </div>
  );
}

export default ErrorComponent;
