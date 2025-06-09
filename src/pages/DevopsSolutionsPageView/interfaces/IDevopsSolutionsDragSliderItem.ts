import { StaticImageData } from 'next/image';

interface IDevopsSolutionsDragSliderItem {
  image: StaticImageData;
  number: string;
  title: string;
  priority?: boolean;
}

export default IDevopsSolutionsDragSliderItem;
