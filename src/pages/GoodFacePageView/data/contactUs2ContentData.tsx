import ImageComponent from '../../../components/Image/Image';
import GoodFaceContactBG2 from '../../../assets/images/goodFace/contactUsSection/img_bg2@2x.webp';
import GoodFaceContactBG2Mobile from '../../../assets/images/goodFace/contactUsSection/img_bg2-mobile.webp';

const contactUs2ContentData = {
  title: (
    <h2>
      Use our expertise to build a top-notch&nbsp;
      <br />
      solution tailored to your business needs!
    </h2>
  ),
  btnTitle: 'Contact us',
  bg: <ImageComponent
    src={GoodFaceContactBG2}
    alt="makeup"
    fill
  />,
  bgMobile: <ImageComponent
    src={GoodFaceContactBG2Mobile}
    alt="makeup"
    fill
  />,
};

export default contactUs2ContentData;
