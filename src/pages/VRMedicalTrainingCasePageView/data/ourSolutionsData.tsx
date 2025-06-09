import OurSolutionsImg1 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImgTablet1 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions1_tablet@2x.webp';
import OurSolutionsImgTablet2 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions2_tablet@2x.webp';
import OurSolutionsImgTablet3 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions3_tablet@2x.webp';
import OurSolutionsImgMobile1 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions1_mobile@2x.webp';
import OurSolutionsImgMobile2 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions2_mobile@2x.webp';
import OurSolutionsImgMobile3 from '@/images/vrMedicalTrainingCasePage/ourSolutions/img_ourSolutions3_mobile@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemList from 'components/ItemList/ItemList';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'User interface',
    text: (
      <ItemList
        listTitle="The user interface includes:"
        list={[
          'the main menu',
          'multiple choice quizzes at designated points of the user journey',
          'hints in video and audio format',
        ]}
        withAnimate
        marginBottomAbsent
      />
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Training rounds',
    text: 'The rounds are 3D stereo 360° videos. Additional stereo/video mode support ensures the feeling of presence.',
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Standalone VR',
    text: `Many institutions do not provide controllers to prevent users from going outside the application.
      Users don’t need a PC or specific controllers to use this application, only a Meta Quest VR headset.
      When they need to select a menu option, they move the cursor with their eye and hold it on the button
      for 2 seconds to select.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
];

export default ourSolutionsData;
