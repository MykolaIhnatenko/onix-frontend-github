import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import IDesignButtonsPanel from '../interfaces/IDesignButtonsPanel';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import CucumberButton from './CucumberButton';
import ShowButton from './ShowButton';

import styles from '../sass/designButtonsPanel.module.scss';

interface IButtonList {
  name: string;
  id: number;
}
function DesignButtonsPanel({ designTag, typeFilterHandle, designTagList }: IDesignButtonsPanel) {
  const [buttonList, setButtonList] = useState<IButtonList[]>([]);
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isTablet = isXSDevice || isSMDevice || isMDDevice;

  useEffect(() => {
    if (designTagList?.data && designTagList.data.length > 0) {
      const list = [...designTagList.data];
      const newListButtons:IButtonList[] = [{
        name: 'See All',
        id: 0,
      }];
      list.forEach((item, index) => {
        newListButtons.push({ name: item?.attributes?.name, id: index + 1 });
      });

      setButtonList(newListButtons);
    }
  }, [designTagList]);

  const handleMouseDownSale = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    setIsDragging(true);
    setStartX(event.pageX - target.offsetLeft);
    setScrollLeft(target.scrollLeft);
  };

  const handleMouseMoveSale = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const target = event.currentTarget as HTMLElement;
    const x = event.pageX - target.offsetLeft;
    const walk = (x - startX) * 2;
    target.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpSale = () => {
    setIsDragging(false);
  };

  return (
    <div className={styles.buttonsPanelContainer}>
      <div className={styles.buttonsPanel}>
        <motion.div
          className={styles.content}
          ref={ref}
          initial="collapsed"
          animate={isShowAll ? 'open' : 'collapsed'}
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 40 },
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={styles.container}
            onMouseDown={handleMouseDownSale}
            onMouseMove={handleMouseMoveSale}
            onMouseLeave={handleMouseUpSale}
            onMouseUp={handleMouseUpSale}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            {buttonList.length > 0 && buttonList.map(({ id, name }) => (
              <CucumberButton
                key={[id, name].join('_')}
                name={name}
                typeFilterHandle={typeFilterHandle}
                designTag={designTag}
              />
            ))}
          </div>
        </motion.div>
        <div className={isTablet ? styles.displayNone : styles.showAllWrapper}>
          <ShowButton
            setIsShowAll={setIsShowAll}
            prevState={isShowAll}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignButtonsPanel;
