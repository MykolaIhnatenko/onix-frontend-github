import { ibmPlexMono } from '../../fonts/MainFonts';
import IBlogSubcategoryTag from './interfaces/IBlogSubcategoryTag';

import styles from './sass/blogSubcategoryTag.module.scss';

function BlogSubcategoryTag({ text, variant }:IBlogSubcategoryTag) {
  return (
    <p
      className={`${styles.container} ${variant ? styles[variant] : ''} ${ibmPlexMono.variable}`}
    >
      {text}
    </p>
  );
}

export default BlogSubcategoryTag;
