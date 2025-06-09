import { IJSAText } from '../interfaces/IJSAText';

import styles from '../sass/JSAText.module.scss';

function JSAText({
  children, tag: Tag = 'p', variant, className,
}: IJSAText) {
  return (
    <Tag className={`${variant ? styles[variant] : ''} ${className || ''}`}>
      {children}
    </Tag>
  );
}

export default JSAText;
