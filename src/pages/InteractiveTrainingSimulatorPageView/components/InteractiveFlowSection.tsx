import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import VRARContent from '../../../components/VRARContent/VRARContent';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import FlowMobile from '@/images/caseStudiesPage/InteractiveTrainingSimulator/flow-img-mobile.webp';
import FlowTablet from '@/images/caseStudiesPage/InteractiveTrainingSimulator/flow-img-tablet.webp';
import Flow from '@/images/caseStudiesPage/InteractiveTrainingSimulator/flow-img.webp';
import { flowCards, flowContent, flowLastContent } from '../data/data';
import ImageComponent from '../../../components/Image/Image';
import InteractiveContent from './InteractiveContent';
import InteractiveFlowCard from './InteractiveFlowCard';
import InteractiveTitleBlock from './InteractiveTitleBlock';

import styles from '../sass/InteractiveFlowSection.module.scss';

function InteractiveFlowSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const imgSrc = useMemo(() => {
    let src = Flow;
    if (isSMDevice || isXSDevice) {
      src = FlowMobile;
    }
    if (isMDDevice) {
      src = FlowTablet;
    }

    return src;
  }, [isSMDevice, isXSDevice, isMDDevice]);

  return (
    <div
      className={`${styles.flowSection} white flowInteractive interactive-section mb`}
    >
      <div className={`${styles.container} container4D`}>
        <InteractiveTitleBlock
          variant="flow"
          title="The training simulation app’s user flow"
          number="03"
          color="gray"
        />
        <VRARContent>
          <h2>
            There are three user roles&nbsp;
            <br />
            in the application:
          </h2>
        </VRARContent>
        <div className={styles.cards}>
          {flowCards.map(({ id, title, content }) => (
            <InteractiveFlowCard
              key={id}
              id={id}
              title={title}
              content={content}
            />
          ))}
        </div>
        <VRARContent>
          <h3>
            An Instructor can organise training&nbsp;
            <br />
            for only one person, several individuals,&nbsp;
            <br />
            and multiple teams simultaneously.
          </h3>
        </VRARContent>
        <InteractiveContent
          content={flowContent}
          classes="content"
          variant="contentItem"
        />
        <div className={styles.image}>
          <ImageComponent
            src={imgSrc}
            width={1320}
            height={361}
            quality={100}
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
            alt="flow"
          />
        </div>
        <InteractiveContent
          content={flowLastContent}
          classes="lastContent"
          variant="contentItem"
        />
      </div>
    </div>
  );
}

export default InteractiveFlowSection;
