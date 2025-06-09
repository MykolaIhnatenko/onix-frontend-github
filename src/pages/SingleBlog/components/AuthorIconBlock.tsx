import Link from 'next/link';

import { IAuthorIconBlock } from '../interfaces/IAuthorBlock';
import Icons from '../../../assets/icon';

import styles from '../sass/authorIconsBlock.module.scss';

function AuthorIconBlock({ linkedin, email }: IAuthorIconBlock) {
  return (
    <div className={styles.iconGroup}>
      <Link href={linkedin} target="_blank" rel="noreferrer nofollow">
        <Icons.IconBlogLinkedin className={styles.icon} />
      </Link>
      <Link href={`mailto:${email}`} rel="noreferrer nofollow">
        <Icons.IconEmail className={styles.icon} />
      </Link>
    </div>
  );
}

export default AuthorIconBlock;
