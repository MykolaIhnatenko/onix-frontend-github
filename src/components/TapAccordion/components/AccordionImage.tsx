import ImageComponent from 'components/Image/Image';
import { IAccordionImageProps } from '../interfaces/ITapAccordionData';

function AccordionImage({ src, isActive, classes }:IAccordionImageProps) {
  return (
    <ImageComponent
      src={src}
      fill
      alt="background"
      className={`none object-cover
        ${isActive ? 'block z-[2]' : ''}
        ${classes ? classes.itemBg : ''}`}
    />
  );
}

export default AccordionImage;
