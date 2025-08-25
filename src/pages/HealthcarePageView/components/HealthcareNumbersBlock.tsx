import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import numbersData from '../../UxAuditServicesPageView/data/numbersBenefitsData';

import HealthcareNumbersBlockTabletBg from '@/images/healthcare/numberBlock/img_number_block_tablet_bg@2x.webp';
import HealthcareNumbersBlockMobileBg from '@/images/healthcare/numberBlock/img_number_block_mobile_bg@2x.webp';
import HealthcareNumbersBlockBg from '@/images/healthcare/numberBlock/img_number_block_bg@2x.webp';
import styles from '../sass/healthcareNumbersBlock.module.scss';

function HealthcareNumbersBlock() {
  const background = useBackground(
    HealthcareNumbersBlockBg,
    HealthcareNumbersBlockTabletBg,
    HealthcareNumbersBlockMobileBg,
  );

  return (
    <div className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="background"
            sizes="(min-width: 768px) 100vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <NumbersBlock
          data={numbersData}
          classes={{
            table: `!mt-0 !p-[94px_70px_76px]
              min-xxxl:!p-[94px_80px_76px]
              screen-lg:!p-[50px_30px]
              screen-md:!p-[10px_15px_30px]`,
            rowClasses: {
              tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
                min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
                not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white
                last:!border-none`,
              title: '!text-white',
              text: '!text-white',
            },
          }}
        />
      </div>
    </div>
  );
}

export default HealthcareNumbersBlock;
