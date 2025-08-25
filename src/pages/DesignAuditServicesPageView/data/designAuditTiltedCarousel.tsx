import { ITiltedCarouselData } from '../../../components/TiltedCarousel/interfaces/ITiltedCarouselItem';

import DesignAuditTiltedCarousel1Row1 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_1_row_1@2x.webp';
import DesignAuditTiltedCarousel1Row2 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_1_row_2@2x.webp';
import DesignAuditTiltedCarousel1Row3 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_1_row_3@2x.webp';
import DesignAuditTiltedCarousel1Row4 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_1_row_4@2x.webp';
import DesignAuditTiltedCarousel2Row1 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_2_row_1@2x.webp';
import DesignAuditTiltedCarousel2Row2 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_2_row_2@2x.webp';
import DesignAuditTiltedCarousel2Row3 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_2_row_3@2x.webp';
import DesignAuditTiltedCarousel2Row4 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_2_row_4@2x.webp';
import DesignAuditTiltedCarousel2Row5 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_2_row_5@2x.webp';
import DesignAuditTiltedCarousel3Row1 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_3_row_1@2x.webp';
import DesignAuditTiltedCarousel3Row3 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_3_row_3@2x.webp';
import DesignAuditTiltedCarousel3Row4 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_3_row_4@2x.webp';
import DesignAuditTiltedCarousel4Row1 from '@/images/designAuditServicesPage/tiltedCarousel/img_tilted_carousel_4_row_1@2x.webp';

const designAuditTiltedCarousel: ITiltedCarouselData[] = [
  {
    id: 1,
    reverse: false,
    data: [
      {
        key: 1,
        img: DesignAuditTiltedCarousel1Row1,
      },
      {
        key: 2,
        img: DesignAuditTiltedCarousel1Row2,
      },
      {
        key: 3,
        img: DesignAuditTiltedCarousel1Row3,
      },
      {
        key: 4,
        img: DesignAuditTiltedCarousel1Row4,
      },
      {
        key: 5,
        img: DesignAuditTiltedCarousel1Row2,
      },
      {
        key: 6,
        img: DesignAuditTiltedCarousel4Row1,
      },
    ],
  },
  {
    id: 2,
    reverse: true,
    data: [
      {
        key: 1,
        img: DesignAuditTiltedCarousel2Row1,
      },
      {
        key: 2,
        img: DesignAuditTiltedCarousel2Row2,
      },
      {
        key: 3,
        img: DesignAuditTiltedCarousel2Row3,
      },
      {
        key: 4,
        img: DesignAuditTiltedCarousel2Row4,
      },
      {
        key: 5,
        img: DesignAuditTiltedCarousel2Row5,
      },
      {
        key: 6,
        img: DesignAuditTiltedCarousel2Row2,
      },
    ],
  },
  {
    id: 3,
    reverse: false,
    data: [
      {
        key: 1,
        img: DesignAuditTiltedCarousel3Row1,
      },
      {
        key: 2,
        img: DesignAuditTiltedCarousel1Row1,
      },
      {
        key: 3,
        img: DesignAuditTiltedCarousel3Row3,
      },
      {
        key: 4,
        img: DesignAuditTiltedCarousel3Row4,
      },
      {
        key: 5,
        img: DesignAuditTiltedCarousel3Row1,
      },
      {
        key: 6,
        img: DesignAuditTiltedCarousel2Row3,
      },
    ],
  },
  {
    id: 4,
    reverse: true,
    data: [
      {
        key: 1,
        img: DesignAuditTiltedCarousel4Row1,
      },
      {
        key: 2,
        img: DesignAuditTiltedCarousel1Row3,
      },
      {
        key: 3,
        img: DesignAuditTiltedCarousel1Row2,
      },
      {
        key: 4,
        img: DesignAuditTiltedCarousel3Row1,
      },
      {
        key: 5,
        img: DesignAuditTiltedCarousel1Row1,
      },
      {
        key: 6,
        img: DesignAuditTiltedCarousel2Row4,
      },
    ],
  },
];

export default designAuditTiltedCarousel;
