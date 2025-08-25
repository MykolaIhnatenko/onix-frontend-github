import { StaticImageData } from 'next/image';

interface ICaseStudyVideoCarouselItem {
  id: string;
  videoId: number;
  img: {
    sm:StaticImageData;
    md:StaticImageData;
    lg:StaticImageData;
  };
  icon: StaticImageData;
  logoSizes: {
    xxl: {
      width:number;
      height:number;
    };
    lg: {
      width:number;
      height:number;
    };
    sm: {
      width:number;
      height:number;
    };
  };
  cucumbersData?: {
    duration: string;
    teamSize: string;
  };
  clients: {
    name: string;
    position: string;
  }[];
  title: string;
  text: string;
  btnText: string;
  url: string;
  videoSrc: string;
}

export default ICaseStudyVideoCarouselItem;
