import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import LinkComponent from '../../../components/Link/Link';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import DesignAuditCaseStudiesBotMobileBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesBotMobileBg.webp';
import DesignAuditCaseStudiesBotTabletBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesBotTabletBg.webp';
import DesignAuditCaseStudiesBotBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesBotBg.webp';
import DesignAuditCaseStudiesMobileBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesMobileBg.webp';
import DesignAuditCaseStudiesTabletBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesTabletBg.webp';
import DesignAuditCaseStudiesBg from '@/images/designAuditServicesPage/caseStudi/img_designAuditCaseStudiesBg.webp';
import CaseStudiesBlock from 'components/CaseStudiesBlock/CaseStudiesBlock';

import styles from '../sass/designAuditCaseStudiesBlock.module.scss';

interface IDesignAuditCaseStudiesBlock {
  caseIds: number[];
}

function DesignAuditCaseStudiesBlock({ caseIds }: IDesignAuditCaseStudiesBlock) {
  const {
    isMDDevice, isSMDevice, isXSDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: DesignAuditCaseStudiesBg,
      backgroundBot: DesignAuditCaseStudiesBotBg,
    };
    if (isMDDevice) {
      bg.background = DesignAuditCaseStudiesTabletBg;
      bg.backgroundBot = DesignAuditCaseStudiesBotTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = DesignAuditCaseStudiesMobileBg;
      bg.backgroundBot = DesignAuditCaseStudiesBotMobileBg;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <CaseStudiesBlock
        sliderIds={caseIds}
        background={getBackground().background}
        classes={{
          container: '!pt-[80px] !pb-[88px] screen-lg:!pb-[80px]',
          bgContainer: 'h-[560px] screen-lg:h-[790px] screen-md:h-[250px]',
          bgImg: '!object-center',
        }}
      />
      <div className={styles.content}>
        <div className={styles.bgBot}>
          <ImageComponent
            src={getBackground().backgroundBot}
            fill
            sizes="100vw"
            alt="bot bg"
          />
        </div>
        <div className={styles.contentContainer}>
          <MainTitle className={styles.contentTitle}>
            More of our projects
          </MainTitle>
          <div className={styles.contentFlex}>
            <div className={styles.contentItem}>
              <Icon.IconBehance className={styles.icon} />
              <LinkComponent
                target="_blank"
                rel="noopener noreferrer"
                absolute={false}
                href="https://www.behance.net/onixdesign4d36"
                className={styles.contentItemTitle}
              >
                Behance
              </LinkComponent>
            </div>
            <div className={styles.contentItem}>
              <Icon.IconDribbble className={styles.icon} />
              <LinkComponent
                target="_blank"
                rel="noopener noreferrer"
                absolute={false}
                href="https://dribbble.com/onix_design"
                className={styles.contentItemTitle}
              >
                Dribbble
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignAuditCaseStudiesBlock;
