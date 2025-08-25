import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import BstevrContentBlock from './BstevrContentBlock';
import bstevrDesingnData from '../data/bstevrDesingnData';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';

import ImageAgile from '@/images/BstevrCaseSudy/img_IconAgile.webp';
import ImageAgile2x from '@/images/BstevrCaseSudy/img_agile@2x.webp';
import ImageAgile3x from '@/images/BstevrCaseSudy/img_IconAgile@3x.webp';
import ImageFigma from '@/images/BstevrCaseSudy/img_figma.webp';
import ImageFigma2x from '@/images/BstevrCaseSudy/img_figma@2x.webp';
import ImageFigma3x from '@/images/BstevrCaseSudy/img_figma@3x.webp';
import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrDesignSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      agile: ImageAgile3x,
      figma: ImageFigma3x,
    };
    if (isMDDevice) {
      bg.agile = ImageAgile2x;
      bg.figma = ImageFigma2x;
    } else if (isXSDevice || isSMDevice) {
      bg.agile = ImageAgile;
      bg.figma = ImageFigma;
    }
    return bg;
  };

  return (
    <section className="design">
      <BstevrContentBlock>
        <h2>
          The visual design.
        </h2>
        <div className={styles.article}>
          <div className={styles.text}>
            <VRARContent>
              <p>
                For BSTEVR, Onix’s team was implementing the design created by the California&#8209;based
                agency Neuron.
                <span className="divider" />
                Like the development, the design was realized in increments, using Agile methodologies.&nbsp;
                After completing one stage, we jointly analyzed the outcomes and planned the
                necessary changes and the next stage’s tasks. All design-related work was done in Figma.
                Although the main work on the visual part is carried out by Real Core, we also contributed our help.
              </p>
            </VRARContent>
            <VRARContent className={styles.technologyIcons}>
              <ImageComponent
                src={getBackground().figma}
                alt="Figma"
                sizes="100vw"
              />
              <ImageComponent
                src={getBackground().agile}
                alt="Agile"
                sizes="100vw"
              />
            </VRARContent>
            <VRARContent>
              <p>
                Minor adjustments were made upon Real Core’s request,
                but generally, the product’s design has been successfully
                realized as closely as possible to the original mockup.
              </p>
            </VRARContent>
          </div>
          <VRARContent className={styles.resultingImages}>
            {bstevrDesingnData.map(({
              id, src, classes,
            }) => (
              <ImageComponent
                key={id}
                src={src}
                className={classes}
                alt="Visual Design"
                sizes="100vw"
              />
            ))}
          </VRARContent>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrDesignSection;
