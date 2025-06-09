import img1 from '../../../assets/images/hunter/solutionsCards/img1@2x.webp';
import img2 from '../../../assets/images/hunter/solutionsCards/img2@2x.webp';
import img3 from '../../../assets/images/hunter/solutionsCards/img3@2x.webp';
import img4 from '../../../assets/images/hunter/solutionsCards/img4@2x.webp';
import img5 from '../../../assets/images/hunter/solutionsCards/img5@2x.webp';
import img_tablet1 from '../../../assets/images/hunter/solutionsCards/img1_tablet@2x.webp';
import img_tablet2 from '../../../assets/images/hunter/solutionsCards/img2_tablet@2x.webp';
import img_tablet3 from '../../../assets/images/hunter/solutionsCards/img3_tablet@2x.webp';
import img_tablet4 from '../../../assets/images/hunter/solutionsCards/img4_tablet@2x.webp';
import img_tablet5 from '../../../assets/images/hunter/solutionsCards/img5_tablet@2x.webp';
import img_mobile1 from '../../../assets/images/hunter/solutionsCards/img1_mobile@2x.webp';
import img_mobile2 from '../../../assets/images/hunter/solutionsCards/img2_mobile@2x.webp';
import img_mobile3 from '../../../assets/images/hunter/solutionsCards/img3_mobile@2x.webp';
import img_mobile4 from '../../../assets/images/hunter/solutionsCards/img4_mobile@2x.webp';
import img_mobile5 from '../../../assets/images/hunter/solutionsCards/img5_mobile@2x.webp';
import ContentText from '../../../components/ContentText/ContentText';

const solutionCardsData = [
  {
    id: 1,
    title: (
      <>
        Addressing Clear Navigation
        {' '}
        <br className="hidden min-xl:block" />
        and Intuitive Design
      </>
    ),
    text: (
      <ContentText marginAbsent tag="p">
        To tackle the challenge of clear navigation, Onix implemented
        {' '}
        <span className="inline_block">a streamlined</span>
        {' '}
        and intuitive design layout.
        This involved creating
        {' '}
        <span className="inline_block">a user-centric</span>
        {' '}
        navigation flow across the Home Page, Product Category Page,
        and Individual Product Page.
        <br />
        <br />
        Clear and logical pathways were established to guide users effortlessly from browsing to purchasing,
        minimizing clicks
        {' '}
        <span className="inline_block">and ensuring</span>
        {' '}
        a frictionless experience.
      </ContentText>
    ),
    img: img1,
    imgTablet: img_tablet1,
    imgMobile: img_mobile1,
  },
  {
    id: 2,
    title: (
      <>
        Employing Compelling Visuals
        {' '}
        <br className="hidden min-xl:block" />
        and Engaging Design Elements
      </>
    ),
    text: (
      <ContentText marginAbsent tag="p">
        Understanding the importance of captivating visuals, our team focused on employing high-quality imagery
        and compelling design elements throughout the website.
        <br />
        <br />
        Vibrant visuals were strategically incorporated into the Home and Product Category Pages, enhancing
        visual appeal while ensuring
        {' '}
        <span className="inline_block">a coherent</span>
        {' '}
        brand representation.
        <br />
        <br />
        Attention-grabbing banners, product galleries, and interactive elements were utilized to engage
        users and encourage exploration.
      </ContentText>
    ),
    img: img2,
    imgTablet: img_tablet2,
    imgMobile: img_mobile2,
  },
  {
    id: 3,
    title: (
      <>
        Crafting Responsive Design
        for Seamless
        {' '}
        <span className="inline_block">Multi-Device</span>
        {' '}
        Experience
      </>
    ),
    text: (
      <ContentText marginAbsent tag="p">
        We adopted a responsive design approach. Our team meticulously designed and tested variations for desktop,
        tablet, and smartphone devices, ensuring
        {' '}
        <span className="inline_block">a consistent</span>
        {' '}
        and optimized user experience across all platforms.
        <br />
        <br />
        This involved fluid layouts, scalable images, and intuitive touch-friendly interfaces, guaranteeing
        seamless navigation and functionality.
      </ContentText>
    ),
    img: img3,
    imgTablet: img_tablet3,
    imgMobile: img_mobile3,
  },
  {
    id: 4,
    title: (
      <>
        Enhancing Intuitive Product Search
        {' '}
        <span className="inline_block">and Categorization</span>
        {' '}
      </>
    ),
    text: (
      <ContentText marginAbsent tag="p">
        Addressing the challenge of intuitive product search, Onix implemented
        {' '}
        <span className="inline_block">a robust</span>
        {' '}
        search function and
        categorized products logically.
        <br />
        <br />
        This involved intuitive filtering options on the Category Page,
        allowing users to refine searches efficiently.
        Predictive search suggestions and clear product categorization aided users in quickly finding
        desired items, fostering
        {' '}
        <span className="inline_block">a seamless</span>
        {' '}
        browsing experience.
      </ContentText>
    ),
    img: img4,
    imgTablet: img_tablet4,
    imgMobile: img_mobile4,
  },
  {
    id: 5,
    title: (
      <>
        Optimizing Performance without
        Compromising Design
      </>
    ),
    text: (
      <ContentText marginAbsent tag="p">
        To ensure optimal performance and speed, our team optimized images and minimized code bloat while
        preserving the aesthetic integrity of the design.
        <br />
        <br />
        This entailed striking a balance between sophisticated design elements and performance optimization
        to maintain fast loading times, crucial for retaining user engagement.
      </ContentText>
    ),
    img: img5,
    imgTablet: img_tablet5,
    imgMobile: img_mobile5,
  },
];

export default solutionCardsData;
