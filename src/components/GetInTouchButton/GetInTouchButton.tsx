import Image from 'next/image';

import IGetInTouchButton from './interfaces/IGetInTouchButton';
import Icons from '../../assets/icon';
import CircleText from '@/images/img_CircleText.webp';

import styles from './sass/GetInTouchButton.module.scss';

function GetInTouchButton({ onClickBtn, isContactModalBtn }: IGetInTouchButton) {
  return (
    <button
      onClick={onClickBtn}
      className={`${styles.roundButton} ${isContactModalBtn ? 'btnContactModal' : ''}`}
      type="button"
    >
      <Icons.IconArrowWhite1 className={styles.arrow} />
      <span className={styles.circleText}>
        <Image
          src={CircleText}
          alt="CircleText"
          priority
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'fill',
          }}
        />
      </span>
    </button>
  );
}

export default GetInTouchButton;
