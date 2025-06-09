import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import ICategoriesListBlock from '../interfaces/ICategoriesListBlock';
import Category from './Category';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import ShowButton from '../../../components/ShowButton/ShowButton';
import { IBlogs } from '../../../store/blogs/interfaces/IBlogs';
import { ShowButtonTitleVariants } from '../../../constants/enums';

import styles from '../sass/categoriesListBlock.module.scss';

function CategoriesListBlock({ categories }: ICategoriesListBlock) {
  const { isShowAll } = useSelector<IStore, IBlogs>((state) => state.blogs);
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;

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

  const getShowAllStyles = () => (isShowAll ? styles.displayNone : styles.showAllWrapper);

  return (
    <div className={styles.categoriesListBlock}>
      <AnimatePresence initial={false}>
        <motion.div
          className={`${styles.categoriesContainer} `}
          ref={ref}
          initial="collapsed"
          animate={isShowAll ? 'open' : 'collapsed'}
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 44 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div
            className={styles.categories}
            onMouseDown={handleMouseDownSale}
            onMouseMove={handleMouseMoveSale}
            onMouseLeave={handleMouseUpSale}
            onMouseUp={handleMouseUpSale}
            onKeyDown={() => {}}
            role="presentation"
          >
            {categories?.data?.map(({ id, attributes: { title, url } }) => (
              <Category
                key={id}
                title={title}
                url={url}
              />
            ))}
            {!isMobile && (
              <div className={styles.showAllWrapper}>
                <ShowButton title={ShowButtonTitleVariants.SHOW_LESS} />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className={isMobile ? styles.displayNone : getShowAllStyles()}>
        <ShowButton title={ShowButtonTitleVariants.SHOW_ALL} />
      </div>
    </div>
  );
}

export default CategoriesListBlock;
