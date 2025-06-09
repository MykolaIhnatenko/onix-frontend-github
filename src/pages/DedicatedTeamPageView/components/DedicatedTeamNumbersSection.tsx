import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import ImageComponent from '../../../components/Image/Image';
import numbersData from '../data/numbersData';
import useBackground from '../../../hook/useBackground';
import DedicatedTeamNumbersBgTablet from '@/images/dedicatedTeamPage/img_numbers_bg_tablet@2x.webp';
import DedicatedTeamNumbersBgMobile from '@/images/dedicatedTeamPage/img_numbers_bg_mobile@2x.webp';
import DedicatedTeamNumbersBg from '@/images/dedicatedTeamPage/img_numbers_bg@2x.webp';

import styles from '../sass/dedicatedTeamNumbersSecion.module.scss';

function DedicatedTeamNumbersSection() {
  const background = useBackground(
    DedicatedTeamNumbersBg,
    DedicatedTeamNumbersBgTablet,
    DedicatedTeamNumbersBgMobile,
  );

  return (
    <section className={styles.numbersSection}>
      <div className={styles.bgContainer}>
        {background && (
          <ImageComponent
            src={background}
            fill
            sizes="100vh"
            alt="utilize-background"
          />
        )}
      </div>
      <PageContainer className={styles.container}>
        <MainTitle tag="h2" className={styles.title}>
          Figures speak for themselves
        </MainTitle>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: '!mt-[20px] min-md:!mt-[30px] min-xxl:!mt-[54px]',
            rowClasses: {
              tableRow: `!flex-row-reverse !border-b-[2px] !border-solid !border-white !p-[20px_0]
                min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
                not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white`,
              title: '!text-white',
              text: '!text-white',
            },
          }}
        />
      </PageContainer>
    </section>
  );
}

export default DedicatedTeamNumbersSection;
