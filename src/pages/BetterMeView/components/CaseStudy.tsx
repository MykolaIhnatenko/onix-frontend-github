import { useAppSelector } from '../../../hook/reduxToolkit';
import Icon from '../../../assets/icon';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import caseStudyItems from '../data/caseStudyItemsData';

import BetterMeGirl from '@/images/BetterMe/img_girl.webp';
import BetterMeGirlPhone from '@/images/BetterMe/img_girlPhone.webp';
import BetterMeGirlTablet from '@/images/BetterMe/img_girlTablet.webp';
import styles from '../sass/caseStudy.module.scss';

function CaseStudy() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  let girlImgPath = BetterMeGirl;
  const isMobile = isSMDevice || isXSDevice;
  if (isMDDevice) girlImgPath = BetterMeGirlTablet;
  if (isSMDevice || isXSDevice) girlImgPath = BetterMeGirlPhone;

  return (
    <section className={styles.caseStudy}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>In this case study</h2>
        </VRARContent>
        <VRARContent className={styles.text}>
          <p>
            We will show you how the Onix team created an e-commerce website to provide customers with maximum
            convenience and the opportunity to purchase a product that can be used during training with the help
            of the BetterMe ecosystem.
          </p>
        </VRARContent>
        <VRARContent className={styles.caseStudyItems}>
          {caseStudyItems.map(({
            id, title, icon, description,
          }) => (
            <div className={styles.caseStudyItem} key={id}>
              {icon}
              <p className={styles.caseStudyItemTitle}>{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </VRARContent>
        <div className={styles.girlWrapper}>
          <ImageComponent
            src={girlImgPath}
            fill
            alt="girl"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
            quality={100}
          />
          <VRARContent className={styles.logo}>
            <Icon.IconBetterMeLogo
              width={isMobile ? 150 : 211}
              height={isMobile ? 58 : 82}
            />
            <p>
              Online sportswear store on shopify
            </p>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
