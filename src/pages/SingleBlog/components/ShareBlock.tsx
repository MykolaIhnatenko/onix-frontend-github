import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ShareTitle from './ShareTitle';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import { XL_DEVICE } from '../../../constants/constants';
import shareBlockData from '../data/ShareBlockData';
import { ShareTitleVariant } from '../../../constants/enums';

import styles from '../sass/shareBlock.module.scss';

function ShareBlock() {
  const { asPath } = useRouter();
  const {
    screenWidth, isXXLDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isDesktop = isXXLDevice || isXXXLDevice || screenWidth > XL_DEVICE;

  const getTitle = () => (isDesktop ? 'SHARE' : 'SHARE:');
  const path = process.env.NEXT_PUBLIC_BASE_URL as string;

  return (
    <div className={styles.shareBlock}>
      <div className={styles.innerBlock}>
        <ShareTitle title={getTitle()} variant={ShareTitleVariant.SHARE} />
        <div className={styles.links}>
          {shareBlockData.map(({
            id, icon, iconHover, href, ariaLabel,
          }) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={id === 3 ? href : `${href}${path + asPath}`}
              aria-label={ariaLabel}
              prefetch={false}
              key={id}
              className={styles.link}
            >
              {icon}
              {iconHover}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareBlock;
