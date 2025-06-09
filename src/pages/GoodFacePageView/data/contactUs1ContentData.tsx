import ImageComponent from '../../../components/Image/Image';
import GoodFaceContactBG1 from '../../../assets/images/goodFace/contactUsSection/img_bg1@2x.webp';
import GoodFaceContactBG1Mobile from '../../../assets/images/goodFace/contactUsSection/img_bg1-mobile.webp';

const contactUs1Content = {
  title: (
    <h2>
      Have a project in mind?
      <br />
      Let&apos;s talk!
    </h2>
  ),
  btnTitle: 'Get in touch with us',
  bg: <ImageComponent
    src={GoodFaceContactBG1}
    alt="makeup"
    fill
  />,
  bgMobile: <ImageComponent
    src={GoodFaceContactBG1Mobile}
    alt="makeup"
    fill
  />,
};

export default contactUs1Content;
