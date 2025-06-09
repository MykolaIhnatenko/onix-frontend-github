import { IBracketologyText } from '../interfaces/IBracketologyText';

import styles from '../sass/BracketologyText.module.scss';

function BracketologyText({
  children, tag: Tag = 'p', variant, className,
}: IBracketologyText) {
  return (
    <Tag className={`${variant ? styles[variant] : ''} ${className || ''}`}>
      {children}
    </Tag>
  );
}

export default BracketologyText;
