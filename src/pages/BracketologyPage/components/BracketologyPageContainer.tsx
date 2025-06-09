import IPageContainer from '../../../components/PageContainer/interfaces/IPageContainer';

import styles from '../sass/BracketologyPageContainer.module.scss';

function BracketologyPageContainer({ children, className = '', variant }:IPageContainer) {
  return (
    <div className={`${styles.container} ${className} ${variant ? styles[variant] : ''}`}>
      {children}
    </div>
  );
}

export default BracketologyPageContainer;
