import { IHaasText } from '../interfaces/IHaasText';

import styles from '../sass/HaasText.module.scss';

function HaasText({
  children, tag: Tag = 'p', variant, className,
}: IHaasText) {
  return (
    <Tag className={`${variant ? styles[variant] : ''} ${className || ''}`}>
      {children}
    </Tag>
  );
}

export default HaasText;
