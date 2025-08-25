import { motion } from 'framer-motion';
import {
  useEffect, useRef, useState,
} from 'react';

import Icon from '../../assets/icon';
import { generalSans, ibmPlexMono } from '../../fonts/MainFonts';
import { useAppSelector } from '../../hook/reduxToolkit';

import styles from './sass/cursorFollower.module.scss';

function CursorFollower() {
  const refBtn = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ left: 0, top: -15 });
  const [btnContent, setBtnContent] = useState<JSX.Element>(<div />);
  const [uiuxText, setUiUxText] = useState('sound on');
  const { uiUxSoudn } = useAppSelector((state) => state?.cursorFollower);

  const cursorFollowerModifier = (element: Element) => {
    const cursorType = getComputedStyle(element).cursor;
    const elemId = element.id;

    if (cursorType === 'none') {
      refBtn.current?.classList.add(styles.pointerDrag);
    } else {
      refBtn.current?.classList.remove(styles.pointerDrag);
    }

    switch (true) {
      case elemId.includes('uiUxVideo'):
        refBtn.current?.classList.add(styles.pointerUiUx);
        setBtnContent(() => (
          <>
            <Icon.IconVideoBtn className={styles.icon} />
            {uiuxText}
          </>
        ));
        break;
      default:
        refBtn.current?.classList.remove(styles.pointerUiUx);
        setBtnContent(() => <div />);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (Number.isFinite(clientX) && Number.isFinite(clientY)) {
        const element = document?.elementFromPoint(clientX, clientY);
        if (element) {
          cursorFollowerModifier(element);
          const cursorType = getComputedStyle(element).cursor;
          if (cursorType === 'none') {
            setCoordinates({ left: clientX, top: clientY });
          } else {
            setTimeout(() => {
              setCoordinates({ left: clientX, top: clientY });
            }, 50);
          }
        }
      }
    };

    const handleScroll = () => {
      const { left, top } = coordinates;
      if (Number.isFinite(left) && Number.isFinite(top)) {
        const element = document?.elementFromPoint(left, top);
        if (element) {
          cursorFollowerModifier(element);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const text = uiUxSoudn ? 'sound off' : 'sound on';
    setUiUxText(text);
    if (refBtn.current?.classList.contains(styles.pointerUiUx)) {
      setBtnContent(() => (
        <>
          <Icon.IconVideoBtn className={styles.icon} />
          {text}
        </>
      ));
    }
  }, [uiUxSoudn]);

  return (
    <motion.div
      className={`${styles.cursorFollower} ${generalSans.className} ${ibmPlexMono.className}`}
      ref={refBtn}
      style={{
        transform: `translate(-50%, -50%) translate(${coordinates.left}px, ${coordinates.top}px)`,
      }}
    >
      {btnContent}
    </motion.div>
  );
}

export default CursorFollower;
