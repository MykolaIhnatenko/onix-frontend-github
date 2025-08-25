import useBackground from '../../../hook/useBackground';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import Icon from '../../../assets/icon';
import salesforceNumberData from '../data/salesforceNumberData';
import { ButtonType } from '../../../constants/enums';

import NumbersBlockBg from '@/images/salesforcePage/callToAction/img_number_block.webp';
import NumbersBlockTabletBg from '@/images/salesforcePage/callToAction/img_number_block_tablet.webp';
import NumbersBlockMobileBg from '@/images/salesforcePage/callToAction/img_number_block_mobile.webp';
import styles from '../sass/salesforceNumberBlock.module.scss';

function SalesforceNumberBlock() {
  const background = useBackground(NumbersBlockBg, NumbersBlockTabletBg, NumbersBlockMobileBg);

  return (
    <>
      <div className={styles.container}>
        <MainTitle className={styles.title}>
          Our Offshore Salesforce
          <br />
          {' '}
          Development Team Experience
        </MainTitle>
        <NumbersBlock
          data={salesforceNumberData}
          classes={{
            table: '!mt-[20px] min-md:!mt-[10px] min-xxl:!mt-[39px]',
            rowClasses: {
              tableRow: `!border-b-[2px] !border-solid !border-white !p-[20px_0]
                min-md:!p-[30px_0] min-lg:!flex-row min-xxl:!p-[26px_0_44px]
                not-last:!border-b-[2px] not-last:!border-solid not-last:!border-white`,
              title: '!text-white',
              text: '!text-white',
            },
          }}
        />
        <div className={styles.awards}>
          <div className={styles.awardsItem}>
            <div className={styles.awardsIcon}>
              <Icon.IconAwardsNumberBlock />
            </div>
            <MainTitle tag="p" className={styles.awardsTitle}>
              Pro Salesforce-certified
              <br />
              {' '}
              developers
            </MainTitle>
          </div>
          <div className={styles.awardsItem}>
            <div className={styles.awardsIcon}>
              <Icon.IconAwardsNumberBlock />
            </div>
            <MainTitle tag="p" className={styles.awardsTitle}>
              Top-rated development
              <br />
              {' '}
              company on Clutch
            </MainTitle>
          </div>
        </div>
      </div>
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={background}
        withButton
        title="Take your Salesforce experience to the next level with a&nbsp;custom-built&nbsp;app."
        btnText="get started now"
        classes={{
          cta: `!p-[160px_70px] min-xxxl:!p-[160px_80px] screen-lg:!p-[120px_30px]
          screen-md:!p-[80px_30px] screen-sm:!p-[80px_15px]`,
          background: 'after:!hidden',
          title: '!max-w-[1078px] screen-lg:!max-w-[708px]',
        }}
      />
    </>
  );
}

export default SalesforceNumberBlock;
