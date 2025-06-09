import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import Technologies from '../../../components/Technologies/Technologies';
import MainTitle from '../../../components/MainTitle/MainTitle';
import getTechnologies from '../../../utils/getTechnologies';
import technologiesNames from '../data/technologiesData';

import styles from '../sass/dedicatedTeamTechnologiesSecion.module.scss';

function DedicatedTeamTechnologiesSection() {
  return (
    <section className={styles.technologiesSection}>
      <PageContainer className={styles.container}>
        <MainTitle>
          Technologies we use
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          To ensure a high level of performance and security we use both the latest and proven technologies
        </ContentText>
        <Technologies
          technologies={getTechnologies(technologiesNames)}
          classes={{
            keyTitle: `min-lg:!pt-[30px] min-lg:!w-auto min-lg:!float-none min-xl:!pt-[46px]
            min-xl:!w-[475px] min-xl:!float-left`,
            technologiesList: `min-lg:!overflow-visible min-lg:!left-auto min-lg:!p-[18px_0_40px]
            min-xl:!overflow-auto min-xl:!left-[-10px] min-xl:!p-[23px_0_23px_20px]`,
            item: `min-lg:!p-[7px_0] min-lg:!mr-[15px] min-lg:!leading-[1.4] min-xl:!p-[23px_0]
            min-xl:!mr-[30px] min-xl:!leading-[1.75]`,
          }}
        />
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamTechnologiesSection;
