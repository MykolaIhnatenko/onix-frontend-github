import IBorderedColumns from '../interfaces/IBorderedColumns';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import ImageComponent from 'components/Image/Image';
import VRARContent from 'components/VRARContent/VRARContent';
import TwoBorderedColumnsAnim from 'components/TwoBorderedColumnsAnim/TwoBorderedColumnsAnim';

import styles from '../sass/BorderedColumns.module.scss';

function BorderedColumns({
  title, data, background, isMobile,
}: IBorderedColumns) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.bg}>
        <ImageComponent
          src={background}
          alt="Background"
          sizes="100vw"
          quality={75}
        />
      </div>
      <PageContainer>
        <VRARContent>
          <MainTitle className={styles.title}>{title}</MainTitle>
        </VRARContent>
        <TwoBorderedColumnsAnim
          columns={data}
          withoutAnimateTable={isMobile}
        />
      </PageContainer>
    </div>
  );
}

export default BorderedColumns;
