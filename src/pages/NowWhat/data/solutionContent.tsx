import imgMobile1 from '../../../assets/images/nowWhat/solutionSection/img_mobile1@2x.webp';
import imgMobile2 from '../../../assets/images/nowWhat/solutionSection/img_mobile2@2x.webp';
import imgMobile3 from '../../../assets/images/nowWhat/solutionSection/img_mobile3@2x.webp';
import imgMobile4 from '../../../assets/images/nowWhat/solutionSection/img_mobile4@2x.webp';
import imgMobile5 from '../../../assets/images/nowWhat/solutionSection/img_mobile5@2x.webp';
import imgTablet1 from '../../../assets/images/nowWhat/solutionSection/img_tablet1@2x.webp';
import imgTablet2 from '../../../assets/images/nowWhat/solutionSection/img_tablet2@2x.webp';
import imgTablet3 from '../../../assets/images/nowWhat/solutionSection/img_tablet3@2x.webp';
import imgTablet4 from '../../../assets/images/nowWhat/solutionSection/img_tablet4@2x.webp';
import imgTablet5 from '../../../assets/images/nowWhat/solutionSection/img_tablet5@2x.webp';
import img1 from '../../../assets/images/nowWhat/solutionSection/img1@2x.webp';
import img2 from '../../../assets/images/nowWhat/solutionSection/img2@2x.webp';
import img3 from '../../../assets/images/nowWhat/solutionSection/img3@2x.webp';
import img4 from '../../../assets/images/nowWhat/solutionSection/img4@2x.webp';
import img5 from '../../../assets/images/nowWhat/solutionSection/img5@2x.webp';
import { ITabData } from 'components/TabsBlock/interfaces/ITab';

const solutionsContent: ITabData[] = [
  {
    id: 1,
    title: 'Informative website',
    subTitle:
      'Usability comes first. We\u00A0built an outstanding, fast, and\u00A0responsive informative website.',
    text:
      `The information structure is comprised of valuable articles and inspiring stories from other patients
      with well-planned and easy-to-scan content architecture, fast loading, simple yet effective navigation,
      and a pleasant color scheme.`,
    imgMobile: imgMobile1,
    imgTablet: imgTablet1,
    img: img1,
  },
  {
    id: 2,
    title: 'Convenient admin panel',
    subTitle: 'Now handling information is easier than ever.',
    text: [
      `We built an intuitive administrative panel that allows users to fill the site with information easily,
      handle it in the most convenient way possible, and organize the data through a straightforward interface.`,
      `The admin panel contains a list of registered users and statistics. This allows for managing
      the forum (adding tags, approving anonymous posts, and revising posts and comments that have been reported).`,
    ],
    imgMobile: imgMobile2,
    imgTablet: imgTablet2,
    img: img2,
  },
  {
    id: 3,
    title: 'Unique matching algorithm',
    subTitle: 'Finding people with similar worries and concerns.',
    text: `Thanks to a specially designed algorithm, members contact others who’ve experienced similar
      treatment paths, suffer similar side effects, or have similar worries and concerns.`,
    imgMobile: imgMobile3,
    imgTablet: imgTablet3,
    img: img3,
    imageStyle: 'object-left',
  },
  {
    id: 4,
    title: 'Extensive Q&A page',
    subTitle: 'All helpful information on prostate cancer is on one convenient page.',
    text: [
      `Our experts built a comprehensive Q&A page that serves as a constantly expanding source of value
      for the client's audience.`,
      `This page educates, informs, and provides helpful information on prostate cancer, its treatment,
      and more, offering ongoing emotional and lifestyle support.`,
    ],
    imgMobile: imgMobile4,
    imgTablet: imgTablet4,
    img: img4,
  },
  {
    id: 5,
    title: 'Chat',
    subTitle: 'This communication tool helps to build community and increase engagement among members.',
    text: `Private messages allow users to communicate with people who faced the same problem, share 
      experiences, find friends, and get support.`,
    imgMobile: imgMobile5,
    imgTablet: imgTablet5,
    img: img5,
  },
];

export default solutionsContent;
