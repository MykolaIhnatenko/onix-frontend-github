import AccordionImage from './AccordionImage';
import AccordionTitle from './AccordionTitle';
import { IAccordionItem } from '../interfaces/ITapAccordionData';
import AccordionContent from './AccordionContent';

function AccordionItem({
  item, isActive, setActiveId, isMobile, classes,
}:IAccordionItem) {
  const {
    id, icon, title, text, src,
  } = item;

  return (
    <li className={`relative overflow-hidden h-[80px] transition-[height] duration-300 ease-linear
      min-md:h-[120px] border-b-2 border-color-black last:border-b-0
      ${isActive ? 'bg-color-black !h-auto flex-1' : ''}
      ${classes ? classes.item : ''}
      ${isActive && classes ? classes.active : ''}`}
    >
      <AccordionImage src={src} isActive={isActive} classes={classes} />
      <AccordionTitle
        icon={icon}
        title={title}
        isActive={isActive}
        classes={classes}
        onTap={() => setActiveId(id)}
        isMobile={isMobile}
      />
      <AccordionContent text={text} isActive={isActive} classes={classes} />
    </li>
  );
}

export default AccordionItem;
