import { StaticImageData } from 'next/image';

interface ITechnologies {
  id: number,
  width: number
  height: number,
  src: StaticImageData,
}

interface ISalesforceTechnologySection {
  technologies: ITechnologies[],
  classes?: string,
}

export default ISalesforceTechnologySection;
