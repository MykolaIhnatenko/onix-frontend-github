import OurSolutionsImg1 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions1_tablet@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions2_tablet.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions3_tablet.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions4_tablet.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions1_mobile.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions2_mobile.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions3_mobile.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/vyraCasePage/ourSolutions/img_ourSolutions4_mobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Learning platform',
    text: [
      `We developed a robust learning platform within the website, granting companies access to various
      sustainability learning content. This powerful feature boasts a comprehensive library of resources,
      empowering organizations to achieve their training objectives efficiently.`,
      'The platform caters to various educational modules, ensuring users\' holistic and engaging experiences.',
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'User-friendly interface',
    text: (
      <>
        <ItemText
          content={`Through our thoughtful design process, we have successfully delivered a modern, fresh,
            and user-friendly platform that resonates with users and facilitates efficient management for admins.`}
          withAnimate
        />
        <ItemList
          list={[
            `We made the website more dynamic and captivating by incorporating animations and videos.
            This enhanced the user experience and created a more interactive and enjoyable interface.`,
            'We provided a more polished and professional appearance and replaced emojis with modern icons.',
            `We focused on empowering admins’ platform and group admins with enhanced functionality,
            including advanced reports and dashboards, to streamline their management tasks.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'WordPress integration',
    text: [
      `Ensuring a seamless data flow and consistent user experience was a top priority for our team at Onix while
      integrating the learning platform with their WordPress website. This process demanded careful planning and
      technical expertise to create a harmonious synergy between the two systems.`,
      `We achieved a top-notch user experience across different website sections by meticulously coordinating data
      transfer and optimizing user interfaces.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Reports',
    text: `Our team meticulously crafted a robust reports feature, allowing for gaining meaningful insights
      into employee engagement. This feature accurately measures learning time and tracks estimated CO2 equivalents
      pledged through actions. The data is presented through visually engaging graphs and statistics,
      providing dynamic information at users' fingertips.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
];

export default ourSolutionsData;
