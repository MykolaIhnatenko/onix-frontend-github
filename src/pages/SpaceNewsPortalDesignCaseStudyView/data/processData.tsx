import { IProcessAccordionItem, IProcessImage } from '../../MainPage/interfaces/IProcess';

import ProcessImgTabletWebp1 from '@/images/spaceNewsPage/solutions/img_solution_tablet_1.webp';
import ProcessImgTabletWebp2 from '@/images/spaceNewsPage/solutions/img_solution_tablet_2.webp';
import ProcessImgTabletWebp3 from '@/images/spaceNewsPage/solutions/img_solution_tablet_3.webp';
import ProcessImgTabletWebp4 from '@/images/spaceNewsPage/solutions/img_solution_tablet_4.webp';
import ProcessImgTabletWebp5 from '@/images/spaceNewsPage/solutions/img_solution_tablet_5.webp';
import ProcessImgTabletWebp6 from '@/images/spaceNewsPage/solutions/img_solution_tablet_6.webp';
import ProcessImgMobileWebp1 from '@/images/spaceNewsPage/solutions/img_solution_mobile_1.webp';
import ProcessImgMobileWebp2 from '@/images/spaceNewsPage/solutions/img_solution_mobile_2.webp';
import ProcessImgMobileWebp3 from '@/images/spaceNewsPage/solutions/img_solution_mobile_3.webp';
import ProcessImgMobileWebp4 from '@/images/spaceNewsPage/solutions/img_solution_mobile_4.webp';
import ProcessImgMobileWebp5 from '@/images/spaceNewsPage/solutions/img_solution_mobile_5.webp';
import ProcessImgMobileWebp6 from '@/images/spaceNewsPage/solutions/img_solution_mobile_6.webp';
import ProcessImgWebp1 from '@/images/spaceNewsPage/solutions/img_solution_1.webp';
import ProcessImgWebp2 from '@/images/spaceNewsPage/solutions/img_solution_2.webp';
import ProcessImgWebp3 from '@/images/spaceNewsPage/solutions/img_solution_3.webp';
import ProcessImgWebp4 from '@/images/spaceNewsPage/solutions/img_solution_4.webp';
import ProcessImgWebp5 from '@/images/spaceNewsPage/solutions/img_solution_5.webp';
import ProcessImgWebp6 from '@/images/spaceNewsPage/solutions/img_solution_6.webp';

export const processImages: IProcessImage[] = [
  {
    id: 1,
    src: ProcessImgWebp1,
    srcTablet: ProcessImgTabletWebp1,
    srcBigDesk: ProcessImgWebp1,
  },
  {
    id: 2,
    src: ProcessImgWebp2,
    srcTablet: ProcessImgTabletWebp2,
    srcBigDesk: ProcessImgWebp2,
  },
  {
    id: 3,
    src: ProcessImgWebp3,
    srcTablet: ProcessImgTabletWebp3,
    srcBigDesk: ProcessImgWebp3,
  },
  {
    id: 4,
    src: ProcessImgWebp4,
    srcTablet: ProcessImgTabletWebp4,
    srcBigDesk: ProcessImgWebp4,
  },
  {
    id: 5,
    src: ProcessImgWebp5,
    srcTablet: ProcessImgTabletWebp5,
    srcBigDesk: ProcessImgWebp5,
  },
  {
    id: 6,
    src: ProcessImgWebp6,
    srcTablet: ProcessImgTabletWebp6,
    srcBigDesk: ProcessImgWebp6,
  },
];

const classNumber = 'min-w-[35px] screen-lg:min-w-[30px] screen-md:min-w-[25px]';
const classTitle = 'flex gap-[10px] min-md:gap-[20px] min-lg:gap-[30px]';

export const processAccordionData: IProcessAccordionItem[] = [
  {
    id: 1,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>01</span>
        <h3 className="unsetText screen-lg:max-w-[250px] screen-md:max-w-full">Created a balanced layout</h3>
      </div>
    ),
    content: ['The design team focused on creating a visually flat layout to mitigate information overload. '
    + 'They prioritized concise and attention-grabbing headlines and used strategically placed call-to-action'
    + ' buttons to guide users to explore further. ', 'The motion design and glitch transitions also pique curiosity '
    + 'and encourage users to delve deeper into the content.'],
    src: ProcessImgMobileWebp1,
  },
  {
    id: 2,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>02</span>
        <h3 className="unsetText">Audience engagement</h3>
      </div>
    ),
    content: ['The introduction of the glitch transition effect played a pivotal role in engaging the audience. '
    + 'This dynamic visual element captured users\' attention and created an element of surprise and excitement,'
    + ' making exploring space news more intriguing.'],
    src: ProcessImgMobileWebp2,
  },
  {
    id: 3,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>03</span>
        <h3 className="unsetText">Made design responsive</h3>
      </div>
    ),
    content: ['The design team ensured the visual elements were responsive and performed '
    + 'seamlessly on various devices and screen sizes. This involved extensive testing and optimization'
    + ' to guarantee a consistent and enjoyable user experience across all platforms.'],
    src: ProcessImgMobileWebp3,
  },
  {
    id: 4,
    itemTitle: (
      <div className={classTitle}>
        <span className={classNumber}>04</span>
        <h3 className="unsetText">Seamless brand identity</h3>
      </div>
    ),
    content: ['While introducing a fresh design concept, the team carefully incorporated elements '
    + 'that harmonized with the existing brand identity of the space news portal. The black-and-white '
    + 'color scheme, futuristic visuals, and font selection contributed to a cohesive and brand-aligned '
    + 'hero section.'],
    src: ProcessImgMobileWebp4,
  },
  {
    id: 5,
    itemTitle: (
      <div className={classTitle}>
        <span>05</span>
        <h3 className="unsetText">Optimized performance</h3>
      </div>
    ),
    content: ['To address performance concerns, the team optimized multimedia elements, such as '
    + 'images and motion design, for faster loading times. They also implemented efficient coding'
    + ' practices to minimize the negative impact on website performance while maintaining the glitch'
    + ' transitions\' visual appeal.'],
    src: ProcessImgMobileWebp5,
  },
  {
    id: 6,
    itemTitle: (
      <div className={classTitle}>
        <span>06</span>
        <h3 className="unsetText">Prioritized content</h3>
      </div>
    ),
    content: [`The team carefully curated and presented content in the hero section based on
     its relevance and interest to the target audience. The glitch transition effect, futuristic 
     visuals, and elegant typography were strategically used to draw attention to the most 
     compelling stories and updates.`],
    src: ProcessImgMobileWebp6,
  },
];
