import ImageRide from '@/images/MarineSafetyPage/img_ride2x.webp';
import ImageHike from '@/images/MarineSafetyPage/img_hike2x.webp';
import ImageTravel from '@/images/MarineSafetyPage/img_travel2x.webp';

import styles from '../sass/MarineSafety.module.scss';

const images = [
  {
    src: ImageRide,
    alt: 'riding',
    width: 814,
    height: 345,
    className: styles.image1,
  },
  {
    src: ImageHike,
    alt: 'hike',
    width: 448,
    height: 345,
    className: styles.image2,
  },
  {
    src: ImageTravel,
    alt: 'travel',
    width: 326,
    height: 345,
    className: styles.image3,
  },
];

export default images;
