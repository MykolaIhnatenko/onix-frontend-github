import { useMemo } from 'react';

import useWindowSize from '../../../hook/useWindowSize';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import Business from '@/images/caseStudiesPage/ColoradoSports/img_business.webp';

import styles from '../sass/coloradoSportsVideoBusinessSection.module.scss';

function ColoradoSportsVideoBusinessSection() {
  const { width } = useWindowSize();

  const size = useMemo(() => {
    let imgSize = [555, 314];
    if (width >= MD_DEVICE && width < LG_DEVICE) {
      imgSize = [628, 314];
    }
    if (width < MD_DEVICE) {
      imgSize = [279, 180];
    }

    return imgSize;
  }, [width]);

  return (
    <section className={styles.businessSection}>
      <div className={`${styles.container} coloradoContainer leftContainer`}>
        <div className={`${styles.businessCard} cardContainer`}>
          <VRARContent>
            <p className="sectionTitle">Business Context</p>
          </VRARContent>
          <VRARContent>
            <h2>
              Colorado Sports Video (CSV)
              <br />
              <span> received many orders for game recordings and struggled </span>
              to delegate them between different videographers to record efficiently.
            </h2>
          </VRARContent>
          <VRARContent className={styles.imgWrapper}>
            <ImageComponent
              src={Business}
              width={size[0]}
              height={size[1]}
              sizes="100vh"
              alt="running"
            />
          </VRARContent>
          <VRARContent>
            <p className="fs16">
              That’s where the client reached out to Onix. We’ve gone through a few stages of negotiations and
              provided two estimates, and suggested our documentation development and project management approach.
              <br />
              <br />
              Together with all project stakeholders, we agreed on all offered suggestions
              and started our collaboration.
              <br />
              <br />
              After the requirements elicitation and design were confirmed, we could estimate the required resources
              to complete the project.
              <br />
              <br />
              Our estimates at this point exceeded the client&apos;s budget, so we proposed some solutions to adjust
              the scope and fit the budget.
            </p>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoBusinessSection;
