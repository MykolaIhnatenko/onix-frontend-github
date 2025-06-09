import { IJSAPageContainer } from '../interfaces/IJSAPageContainer';

import styles from '../sass/JSAPageContainer.module.scss';

function JSAPageContainer({ children, className = '' }: IJSAPageContainer) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

export default JSAPageContainer;
