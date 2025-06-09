import { useState, useEffect } from 'react';

import { IWorkMainSection } from '../interfaces/IWork';

import styles from '../sass/buttonsPanel.module.scss';

interface IButtonList {
  name: string;
  id: number;
}

function ButtonsPanel({ typeFilter, typeFilterHandle, technologiesList }: IWorkMainSection) {
  const [buttonList, setButtonList] = useState<IButtonList[]>([]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (technologiesList?.data && technologiesList.data.length > 0) {
      const list = [...technologiesList.data];
      const newListButtons:IButtonList[] = [{
        name: 'See All',
        id: 0,
      }];
      list.forEach((item, index) => {
        newListButtons.push({ name: item?.attributes?.name, id: index + 1 });
      });

      setButtonList(newListButtons);
    }
  }, [technologiesList]);

  const handleMouseDown = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    setIsDragging(true);
    setStartX(event.pageX - target.offsetLeft);
    setScrollLeft(target.scrollLeft);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const target = event.currentTarget as HTMLElement;
    const x = event.pageX - target.offsetLeft;
    const walk = (x - startX) * 2;
    target.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`d-flex ${styles.container}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      {buttonList.length > 0
       && buttonList.map(({ id, name }) => (
         <button
           key={[id, name].join('_')}
           className={typeFilter === name ? styles.activeButton : styles.button}
           onClick={() => typeFilterHandle(name)}
           type="button"
         >
           <span className={styles.textButton}>{name}</span>
         </button>
       ))}
    </div>
  );
}

export default ButtonsPanel;
