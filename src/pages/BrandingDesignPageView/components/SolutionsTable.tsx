import { useSelector } from 'react-redux';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { IISolutionTableProps } from '../interfaces/ISolutionTable';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import OurDevelopmentServicesBg from '@/images/brandingDesign/solutionsTable/img_ourDevelopmentServicesBg@2x.webp';
import OurDevelopmentServicesTabletBg from '@/images/brandingDesign/solutionsTable/img_ourDevelopmentServicesTabletBg@2x.webp';
import OurDevelopmentServicesMobileBg from '@/images/brandingDesign/solutionsTable/img_ourDevelopmentServicesMobileBg@2x.webp';

import styles from '../sass/solutionTable.module.scss';

function SolutionsTable({ data }:IISolutionTableProps) {
  const { title, subtitle, rows } = data;
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg = {
      background: OurDevelopmentServicesBg,
    };
    if (isMDDevice) {
      bg.background = OurDevelopmentServicesTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = OurDevelopmentServicesMobileBg;
    }
    return bg;
  };

  return (
    <section className={styles.solutionsTable}>
      <div className={styles.background}>
        <ImageComponent
          className={styles.bgImage}
          src={getBackground().background}
          alt="background"
        />
      </div>
      <PageContainer className={styles.container}>
        {title}
        {subtitle}
        <div>
          {rows?.map(({ id, title: titleRow, content }) => (
            <div key={id} className={styles.itemRow}>
              {titleRow}
              {content}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default SolutionsTable;
