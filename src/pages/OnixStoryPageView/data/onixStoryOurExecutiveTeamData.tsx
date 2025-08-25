import ImageComponent from '../../../components/Image/Image';

import OnixStoryKholin from '@/images/onixStory/OurExecutive/img_kholin.webp';
import OnixStorySheremetov from '@/images/onixStory/OurExecutive/img_sheremetov.webp';
import OnixStoryIvanchenko from '@/images/onixStory/OurExecutive/img_ivanchenko.webp';
import OnixStoryUmanenko from '@/images/onixStory/OurExecutive/img_umanenko.webp';
import OnixStoryMakarevich from '@/images/onixStory/OurExecutive/img_makarevich.webp';
import OnixStoryNevmerzhytska from '@/images/onixStory/OurExecutive/img_nevmerzhytska.webp';
import OnixStoryPemakhova from '@/images/onixStory/OurExecutive/img_pemakhova.webp';
import OnixStoryKatarovskyi from '@/images/onixStory/OurExecutive/img_katarovskyi.webp';
import styles from '../sass/onixStoryOurExecutiveTeam.module.scss';

const onixStoryOurExecutiveTeamData = [
  {
    id: 1,
    photo: <ImageComponent src={OnixStoryKholin} alt="Serhii Kholin" className={styles.photo} />,
    name: 'Serhii Kholin',
    position: 'CEO',
  },
  {
    id: 2,
    photo: <ImageComponent src={OnixStorySheremetov} alt="Denis Sheremetov" className={styles.photo} />,
    name: 'Denis Sheremetov',
    position: 'CTO',
  },
  {
    id: 3,
    photo: <ImageComponent src={OnixStoryIvanchenko} alt="Oleksanr Ivanchenko" className={styles.photo} />,
    name: 'Oleksandr Ivanchenko',
    position: 'CSMO',
  },
  {
    id: 4,
    photo: <ImageComponent src={OnixStoryUmanenko} alt="Anna Umanenko" className={styles.photo} />,
    name: 'Anna Umanenko',
    position: 'CMO',
  },
  {
    id: 5,
    photo: <ImageComponent src={OnixStoryMakarevich} alt="Nikolay Makarevich" className={styles.photo} />,
    name: 'Nikolay Makarevich',
    position: 'BDM',
  },
  {
    id: 6,
    photo: <ImageComponent src={OnixStoryNevmerzhytska} alt="Svitlana Nevmerzhytska" className={styles.photo} />,
    name: 'Svitlana Nevmerzhytska',
    position: 'HR',
  },
  {
    id: 7,
    photo: <ImageComponent src={OnixStoryPemakhova} alt="Marina Pemakhova" className={styles.photo} />,
    name: 'Marina Pemakhova',
    position: 'PMO',
  },
  {
    id: 8,
    photo: <ImageComponent src={OnixStoryKatarovskyi} alt="Volodymyr Katarovskyi" className={styles.photo} />,
    name: 'Volodymyr Katarovskyi',
    position: 'PMO',
  },
];

export default onixStoryOurExecutiveTeamData;
