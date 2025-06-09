import VRARContent from '../../../components/VRARContent/VRARContent';
import ContentText from '../../../components/ContentText/ContentText';
import OurSolutionsImg1 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImgTablet1 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgMobile1 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '@/images/apartmentBookingWebsiteView/ourSolutions/img_ourSolutionsMobile5@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Research and competitor analysis',
    text: [
      `First, the Onix team studied all the materials about Kozystay’s property management
      and online booking service and reviewed the provided wireframes to understand the
      future website’s structure and user journey.`,
      `Kozystay’s CEO showed Onix’s designers a reference site, wishing the new platform
      to be “like that but better.” The designers explored it and several other rivals in
      the niche to identify their strengths, unique features, and areas for improvement.
      It was determined that innovation and personalization should become Kozystay’s competitive advantages.`,
      `Simultaneously, Onix’s designers analyzed major booking platforms like Airbnb, Booking,
      and Sonder, looking for the latest trends and patterns that would be familiar to users
      worldwide: their use would ensure the Kozystay platform is intuitive and convenient.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Web app UX/UI design',
    text: [
      `Since the client provided wireframes for several web pages, Onix’s designers
      only drew the concept of the home page, enhanced the provided wireframes, and used
      them to design pages that were missing, such as the personal account and booking pages.`,
      `The designers employed an iterative approach to creating the Kozystay website UX/UI,
      working closely with software developers to ensure the feasibility of design solutions.
      Regular feedback from the client facilitated quick adjustments.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Booking service branding development',
    text: [
      `Simultaneously with the booking web app UX/UI design, Onix’s designer created
      a brand identity for Kozystay, including the logo, color palette, typography,
      and iconography to use for the website, mobile apps, marketing materials, etc.`,
      `The development of Kozystay’s logo went through three stages: concept mood
      board, logo and symbol creation, and visualization.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Prototyping',
    text: [
      `The designers developed interactive prototypes incorporating the platform’s key
      functionalities, transitions, and user interactions. They used these prototypes
      to gather feedback on usability, intuitiveness, and overall UX quality. Onix’s
      experts followed the best usability and accessibility practices to ensure the
      web app is easy to navigate and delightful to use.`,
      `The designers refined the prototypes through several iterations based on the client's
      feedback, hallway usability testing, and team discussions. The final approved version of
      the website design was adjusted for different screen sizes to ensure a consistent
      user experience across all devices.`,
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Platform development',
    text: (
      <>
        <VRARContent>
          <ContentText className="!mb-[20px] screen-md:!mb-[15px]" marginAbsent tag="p">
            After the client approved the final design, Onix’s developers programmed
            the accommodations booking platform. The development team included:
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText className="!mb-[30px] screen-md:!mb-[20px]" marginAbsent tag="div">
            <ol className="list-decimal !ml-[28px] screen-md:!ml-[25px]">
              <li><p>front-end developer</p></li>
              <li><p>back-end developer</p></li>
              <li><p>DevOps engineer</p></li>
              <li><p>quality assurance (QA) engineer</p></li>
              <li><p>project manager</p></li>
            </ol>
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText className="!mb-[20px] screen-md:!mb-[15px]" marginAbsent tag="p">
            The apartment booking site development process comprised the following steps:
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText marginAbsent tag="div">
            <ol className="list-decimal !ml-[28px] screen-md:!ml-[25px]">
              <li><p>The coding of features and functionalities for travelers</p></li>
              <li><p>Development of the administrator’s dashboard</p></li>
              <li>
                <p>
                  Integration of third-party services for property booking, digital concierge, payments, and live chat
                </p>
              </li>
              <li><p>Pre-production release and testing</p></li>
              <li><p>Production release</p></li>
            </ol>
          </ContentText>
        </VRARContent>
      </>
    ),
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default ourSolutionsData;
