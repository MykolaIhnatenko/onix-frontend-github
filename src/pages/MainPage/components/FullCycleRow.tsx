import {
  Variants, motion, useMotionValue, useTransform, animate,
} from 'framer-motion';

import MainTitle from '../../../components/MainTitle/MainTitle';
import IFullCycleRowItem from '../../../interfaces/IFullCycleBlock';
import ContentText from 'components/ContentText/ContentText';

function FullCycleRow({ item, rowClasses }: IFullCycleRowItem) {
  const countLeft = useMotionValue(0);
  const countRight = useMotionValue(0);
  const roundedLeft = useTransform(countLeft, (latest) => Math.round(latest));
  const roundedRight = useTransform(countRight, (latest) => Math.round(latest));

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const onView = ():void => {
    animate(countLeft, item.leftTitle, {
      duration: 1.3,
    }).then(() => {}).catch(() => {});
    animate(countRight, item.rightTitle, {
      duration: 1.3,
    }).then(() => {}).catch(() => {});
  };

  return (
    <motion.div
      className={`
        flex
        p-[24px_0_44px]
        border-b-2 border-black last:border-b-0
        screen-lg:p-[20px_0_30px]
        ${rowClasses?.tableRow || ''}
      `}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className={`
          w-1/2
          screen-md:pr-[10px] last:pr-0
          ${rowClasses?.tableCol || ''}
        `}
        variants={cardVariants}
        onViewportEnter={() => onView()}
        onViewportLeave={() => null}
        viewport={{ once: true }}
      >
        <MainTitle
          tag="p"
          className={`
            text-[96px] leading-[132px] font-normal
            screen-lg:text-[80px] screen-lg:leading-[104px]
            screen-md:text-[42px] screen-md:leading-[56px]
            ${rowClasses?.title || ''}
          `}
        >
          {item.leftPostfix && (
          <motion.span className={`
            text-[50px] font-[500]
            screen-md:text-[30px] screen-md:font-[400]
            ${rowClasses?.leftPostfix || ''}
          `}
          >
            {item.leftPostfix}
            {' '}
          </motion.span>
          )}
          <motion.span>{roundedLeft}</motion.span>
          {item.leftPrefix}
        </MainTitle>
        <ContentText
          tag="p"
          className={`
            ${rowClasses?.text || ''}
            p-0
            !m-[8px_0_0]
            screen-lg:!m-[5px_0_0]
            screen-md:!text-[14px] screen-md:!leading-[20px]
          `}
        >
          {item.leftContent}
        </ContentText>
      </motion.div>
      <motion.div
        className={`
          w-1/2
          screen-md:pr-[10px] last:pr-0
          ${rowClasses?.tableCol || ''}
        `}
        variants={cardVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <MainTitle
          tag="p"
          className={`
            text-[96px] leading-[132px] font-normal
            screen-lg:text-[80px] screen-lg:leading-[104px]
            screen-md:text-[42px] screen-md:leading-[56px]
            ${rowClasses?.title || ''}
          `}
        >
          <motion.span>{roundedRight}</motion.span>
          {item.rightPrefix}
        </MainTitle>
        <ContentText
          tag="p"
          className={`
            p-0
            !m-[8px_0_0]
            screen-lg:!m-[5px_0_0]
            screen-md:!text-[14px] screen-md:!leading-[20px]
            ${rowClasses?.text || ''}
          `}
        >
          {item.rightContent}
        </ContentText>
      </motion.div>
    </motion.div>
  );
}

export default FullCycleRow;
