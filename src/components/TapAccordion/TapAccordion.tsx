import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ITapAccordionData } from './interfaces/ITapAccordionData';
import AccordionItem from './components/AccordionItem';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';

function TapAccordion({ data, classes }: ITapAccordionData) {
  const [activeId, setActiveId] = useState<number>(1);
  const {
    screenSizes: { isMDDevice, isSMDevice, isXSDevice },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <ul className={`list-none mix-blend-difference text-color-white ${classes ? classes.accordion : ''}`}>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          setActiveId={setActiveId}
          isMobile={isMobile}
          classes={classes}
        />
      ))}
    </ul>
  );
}

export default TapAccordion;
