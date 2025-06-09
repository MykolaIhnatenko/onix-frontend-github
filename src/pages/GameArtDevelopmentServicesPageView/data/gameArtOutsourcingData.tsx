import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import GameArtOutsourcingItem from '../components/GameArtOutsourcingItem';
import GameArtOutsourcingItem1 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem1@2x.webp';
import GameArtOutsourcingItem2 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem2@2x.webp';
import GameArtOutsourcingItem3 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem3@2x.webp';
import GameArtOutsourcingItem4 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem4@2x.webp';
import GameArtOutsourcingItem5 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem5@2x.webp';
import GameArtOutsourcingItem6 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItem6@2x.webp';
import GameArtOutsourcingItemTablet1 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet1@2x.webp';
import GameArtOutsourcingItemTablet2 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet2@2x.webp';
import GameArtOutsourcingItemTablet3 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet3@2x.webp';
import GameArtOutsourcingItemTablet4 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet4@2x.webp';
import GameArtOutsourcingItemTablet5 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet5@2x.webp';
import GameArtOutsourcingItemTablet6 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemTablet6@2x.webp';
import GameArtOutsourcingItemMobile1 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile1@2x.webp';
import GameArtOutsourcingItemMobile2 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile2@2x.webp';
import GameArtOutsourcingItemMobile3 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile3@2x.webp';
import GameArtOutsourcingItemMobile4 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile4@2x.webp';
import GameArtOutsourcingItemMobile5 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile5@2x.webp';
import GameArtOutsourcingItemMobile6 from '@/images/gameArt/artOutsourcing/img_gameArtOutsourcingItemMobile6@2x.webp';

const gameArtOutsourcingData: ICaseStudiesData[] = [
  {
    id: 1,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem1}
        imageTablet={GameArtOutsourcingItemTablet1}
        imageMobile={GameArtOutsourcingItemMobile1}
        title="3D Modeling"
        text="Our expert artists create detailed, optimized 3D models for characters, props, and
         environment assets, ensuring seamless integration with your game's engine and platform."
      />
    ),
  },
  {
    id: 2,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem2}
        imageTablet={GameArtOutsourcingItemTablet2}
        imageMobile={GameArtOutsourcingItemMobile2}
        title="Texturing & UV Mapping"
        text="We bring your 3D models to life with high-quality textures and materials, enhancing
         the visual appeal of your game assets while maintaining performance efficiency."
      />
    ),
  },
  {
    id: 3,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem3}
        imageTablet={GameArtOutsourcingItemTablet3}
        imageMobile={GameArtOutsourcingItemMobile3}
        title="Rigging & Animation"
        text="Our skilled animators provide professional rigging and animation services for characters,
         creatures, and props, delivering smooth, realistic movements that enhance gameplay and storytelling."
      />
    ),
  },
  {
    id: 4,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem4}
        imageTablet={GameArtOutsourcingItemTablet4}
        imageMobile={GameArtOutsourcingItemMobile4}
        title="3D Environment Design"
        text="We craft immersive game worlds by designing complex environments, from sprawling landscapes
         to bustling cityscapes, tailored to your game's unique aesthetic and atmosphere."
      />
    ),
  },
  {
    id: 5,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem5}
        imageTablet={GameArtOutsourcingItemTablet5}
        imageMobile={GameArtOutsourcingItemMobile5}
        title="Lighting & Rendering"
        text="Our team ensures your game looks stunning by implementing advanced lighting techniques and
         rendering solutions, creating visually striking scenes that captivate players."
      />
    ),
  },
  {
    id: 6,
    content: (
      <GameArtOutsourcingItem
        image={GameArtOutsourcingItem6}
        imageTablet={GameArtOutsourcingItemTablet6}
        imageMobile={GameArtOutsourcingItemMobile6}
        title="Optimization"
        text="We optimize assets for various platforms and devices, generating Level of Detail (LOD) models
         and employing efficient texture usage to maintain high performance without sacrificing visual quality."
      />
    ),
  },
];

export default gameArtOutsourcingData;
