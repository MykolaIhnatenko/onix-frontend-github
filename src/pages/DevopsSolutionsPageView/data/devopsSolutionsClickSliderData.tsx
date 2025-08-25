import { IClickSliderData } from '../../../components/ClickSlider/interfaces/IClickSlider';

import DevopsClickSliderTablet1 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImgTablet1.webp';
import DevopsClickSliderTablet2 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImgTablet2.webp';
import DevopsClickSliderTablet3 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImgTablet3.webp';
import DevopsClickSlider1 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImg1.webp';
import DevopsClickSlider2 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImg2.webp';
import DevopsClickSlider3 from '@/images/devopsSolutionsPageView/clickSlider/img_clickSliderImg3.webp';

const devopsSolutionsClickSliderData: IClickSliderData[] = [
  {
    id: 1,
    img: DevopsClickSlider1,
    imgTablet: DevopsClickSliderTablet1,
    number: '01',
    text: (
      <>
        Create infrastructure
        <br />
        for a new project
      </>
    ),
    title: (
      <>
        Using our DevOps services,
        <br />
        you can
      </>
    ),
  },
  {
    id: 2,
    img: DevopsClickSlider2,
    imgTablet: DevopsClickSliderTablet2,
    number: '02',
    text: (
      <>
        Improve the infrastructure
        <br />
        for the existing project
      </>
    ),
    title: (
      <>
        Using our DevOps services,
        <br />
        you can
      </>
    ),
  },
  {
    id: 3,
    img: DevopsClickSlider3,
    imgTablet: DevopsClickSliderTablet3,
    number: '03',
    text: (
      <>
        Migrate the infrastructure
        <br />
        from one Cloud provider to another
      </>
    ),
    title: (
      <>
        Using our DevOps services,
        <br />
        you can
      </>
    ),
  },
];

export default devopsSolutionsClickSliderData;
