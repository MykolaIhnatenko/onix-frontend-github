import { IAdvantagesData } from '../../../components/AdvantagesBlock/interfaces/IAdvantagesBlock';

import WebDesignAdvantagesBlockImg1 from '@/images/webDesignPage/advantagesBlock/img_advantages_block_1@2x.webp';
import WebDesignAdvantagesBlockImg2 from '@/images/webDesignPage/advantagesBlock/img_advantages_block_2@2x.webp';
import WebDesignAdvantagesBlockImg3 from '@/images/webDesignPage/advantagesBlock/img_advantages_block_3@2x.webp';

const webDesignAdvantagesBlock: IAdvantagesData[] = [
  {
    id: 1,
    image: WebDesignAdvantagesBlockImg1,
  },
  {
    id: 2,
    title: 'We become your reliable partner and assistant',
    text: [
      `At every stage of our polished website development process, Onix’s project managers, web
       developers, designers, and QA engineers will work closely with you to ensure the best outcomes.`,
      `You will receive regular, timely updates about the current progress and about any issues that
        may arise. Onix’s teams communicate daily with clients via emails, live chats, or video conferences.
        Regular written reports facilitate more formal tracking of software development progress.`,
    ],
  },
  {
    id: 3,
    image: WebDesignAdvantagesBlockImg2,
  },
  {
    id: 4,
    title: 'We make web development outsourcing trouble-free',
    text: [
      `Outsourcing web projects to Ukraine has turned into an established practice that guarantees
       cost efficiency, technology proficiency, and an excellent choice of professionals.`,
      `At Onix, you can hire a team of several developers for a long-term outsourced project, find
       an expert to join your in-house team on an ongoing basis, and receive consulting and technical assistance
       from other experts, such as business analysts, designers, and QA engineers.`,
    ],
  },
  {
    id: 5,
    image: WebDesignAdvantagesBlockImg3,
  },
  {
    id: 6,
    title: 'We combine creativity, inspiration, and technology',
    text: [
      `Creative collective effort, innovative and flexible use of modern technology, and artistic commitment
       to excellence blend together to create delightful user experiences and high-performance software products.`,
      `For your outsourced projects, Onix can ensure rapid completion that precisely aligns with
       your business needs.`,
    ],
  },
];

export default webDesignAdvantagesBlock;
