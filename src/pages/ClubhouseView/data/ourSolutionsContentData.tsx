import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ContentText from '../../../components/ContentText/ContentText';

import OurSolutionsImg1 from '@/images/clubhouse/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/clubhouse/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImgTablet1 from '@/images/clubhouse/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/clubhouse/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgMobile1 from '@/images/clubhouse/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/clubhouse/ourSolutions/img_ourSolutionsMobile2.webp';

const contentData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Discovery phase activities included',
    text: (
      <VRARContent>
        <ContentText tag="div" marginAbsent>
          <ul>
            <li className="mb-[5px]">
              <p className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>
                  <b className="font-semibold">Brainstorming:</b>
                  Generating ideas with stakeholders to identify the best approach
                  for user engagement.
                </span>
              </p>
            </li>
            <li className="mb-[5px]">
              <p className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>
                  <b className="font-semibold">Research:</b>
                  Conducting surveys and interviews to understand user pain points and preferences.
                </span>
              </p>
            </li>
            <li className="mb-[5px]">
              <p className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>
                  <b className="font-semibold">Data Analysis:</b>
                  Examining user behavior and existing fitness solutions.
                </span>
              </p>
            </li>
            <li>
              <p className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>
                  <b className="font-semibold">Resource Assessment:</b>
                  Evaluating team, budget, and technical requirements.
                </span>
              </p>
            </li>
          </ul>
          <ContentText tag="p" marginAbsent className="!mt-[30px] screen-md:!mt-[20px]">
            Based on these findings, Onix proceeded with designing and developing the Clubhouse
            website, ensuring it met all functional and business goals.
          </ContentText>
        </ContentText>
      </VRARContent>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Key solutions implemented',
    text: (
      <VRARContent>
        <ContentText tag="div" marginAbsent>
          <ul>
            <li className="mb-[5px]">
              <p className="flex mb-[10px]">
                <span className="mr-[10px]">﹂</span>
                <b className="font-semibold">Personalized Workout Plans:</b>
              </p>
              <ul className="list-disc ml-[40px]">
                <li className="pb-[10px]">
                  <p>3-month structured workout plans for beginners</p>
                </li>
                <li className="pb-[10px]">
                  <p>1-month advanced training programs</p>
                </li>
              </ul>
            </li>
            <li className="mb-[5px]">
              <p className="flex mb-[10px]">
                <span className="mr-[10px]">﹂</span>
                <b className="font-semibold">Integrated Nutrition Support:</b>
              </p>
              <ul className="list-disc  ml-[40px]">
                <li className="pb-[10px]">
                  <p>Personalized meal plans to complement fitness goals</p>
                </li>
              </ul>
            </li>
            <li className="mb-[5px]">
              <p className="flex mb-[10px]">
                <span className="mr-[10px]">﹂</span>
                <b className="font-semibold">Optimized Payment Functionality:</b>
              </p>
              <ul className="list-disc  ml-[40px]">
                <li className="pb-[10px]">
                  <p>Seamless integration with Stripe for a secure payment process</p>
                </li>
              </ul>
            </li>
            <li className="mb-[5px]">
              <p className="flex mb-[10px]">
                <span className="mr-[10px]">﹂</span>
                <b className="font-semibold">Enhanced User Experience:</b>
              </p>
              <ul className="list-disc  ml-[40px]">
                <li className="pb-[10px]">
                  <p>A well-structured UI/UX design for effortless navigation and engagement</p>
                </li>
              </ul>
            </li>
            <li>
              <p className="flex mb-[10px]">
                <span className="mr-[10px]">﹂</span>
                <b className="font-semibold">Mailing Services:</b>
              </p>
              <ul className="list-disc  ml-[40px]">
                <li>
                  <p>Integration with MailChimp to streamline communication with users</p>
                </li>
              </ul>
            </li>
          </ul>
        </ContentText>
      </VRARContent>
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
];

export default contentData;
