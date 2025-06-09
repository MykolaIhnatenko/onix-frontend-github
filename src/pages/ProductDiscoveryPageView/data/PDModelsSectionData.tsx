import { IModelsSectionData } from 'components/ModelsSection/interfaces/IModelsSection';
import PDModelsSectionBg from '@/images/productDiscovery/img_PDModelsSectionBg@2x.webp';
import PDModelsSection2Bg from '@/images/productDiscovery/img_PDModelsSection2Bg.webp';
import PDModelsSectionTabletBg from '@/images/productDiscovery/img_PDModelsSectionTabletBg@2x.webp';
import PDModelsSectionMobileBg from '@/images/productDiscovery/img_PDModelsSectionMobileBg@2x.webp';

import styles from '../sass/PDModelsSection.module.scss';

const modelsData: IModelsSectionData[] = [
  {
    id: 11,
    title: '01',
    subTitle: `Ensure that it's technically possible to implement your product idea and\u00A0build
      a\u00A0commercially successful product.`,
    text: (
      <div className={styles.list}>
        <p>﹂ Well-defined technical requirements</p>
        <p>﹂ Elimination of risks</p>
        <p>﹂ Reduction of the development costs</p>
        <p>﹂ Increase of product added value</p>
      </div>
    ),
    bg: PDModelsSectionBg,
    bgTablet: PDModelsSectionTabletBg,
    bgMobile: PDModelsSectionMobileBg,
  },
  {
    id: 12,
    title: '02',
    subTitle: `Understand that your idea will not bring you the desired results and avoid
      wasting money on the development of an irrelevant product.`,
    text: (
      <div className={styles.list}>
        <p>﹂ Eliminate risks</p>
        <p>﹂ Don&apos;t build the irrelevant product</p>
        <p>﹂ Avoid wasting money</p>
      </div>
    ),
    bg: PDModelsSection2Bg,
    bgTablet: PDModelsSectionTabletBg,
    bgMobile: PDModelsSectionMobileBg,
  },
];

export default modelsData;
