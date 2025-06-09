import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import { IMachineLStartBlock } from '../interfaces/IMachineLearningStartBlock';
import ButtonTypes from '../../../constants/ButtonTypes';
import ImageComponent from '../../../components/Image/Image';
import { ButtonType } from 'constants/enums';

import styles from '../sass/machineLearningStartBlock.module.scss';

function MachineLStartBlock({
  pageTitle, subTitle, content, background,
}: IMachineLStartBlock) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          {background && (
            <ImageComponent
              src={background}
              alt="MainBackground"
              fill
              priority
            />
          )}
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.textContainer}>
            {pageTitle}
            {subTitle}
          </div>
          {content}
        </div>
      </div>
      <CallToActionComponent
        id={ButtonType.LAND}
        withButton
        title={(
          <>
            Wondering how machine learning can benefit you?
            <br />
            <br />
            Book your
            {' '}
            <span className={styles.bold}>free one-hour consultation</span>
            <br className={styles.brDesc} />
            {' '}
            and get your ML solution
            {' '}
            <span className={styles.bold}>demo</span>
            {' '}
            within a&nbsp;week!
          </>
        )}
        btnText="Get a consultation"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!bg-white !p-[0_70px_120px] screen-lg:!p-[0_30px_80px]
          screen-md:!p-[0_30px_30px] screen-sm:!p-[0_15px_30px]`,
          background: 'after:hidden',
          title: `!max-w-[1070px] !pb-[40px] !text-black !text-[30px] !leading-[40px]
          screen-md:!pb-[30px] screen-md:!text-[24px] screen-md:!leading-[35px]`,
          content: '',
          btn: '!max-w-[460px] screen-lg:!text-[18px] screen-md:!max-w-[330px]',
        }}
      />
    </>
  );
}

export default MachineLStartBlock;
