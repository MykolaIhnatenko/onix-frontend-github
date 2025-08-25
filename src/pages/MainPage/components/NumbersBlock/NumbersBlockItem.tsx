import {
  motion, useMotionValue, useTransform, animate,
} from 'framer-motion';

import JakartaText from 'components/JakartaText/JakartaText';
import VRARContent from 'components/VRARContent/VRARContent';
import { IINumbersBlockItem } from 'pages/MainPage/interfaces/INumbersBlock';

function NumbersBlockItem({
  prefix, title, value, prefixModifier, classes,
}: Omit<IINumbersBlockItem, 'id'>) {
  const countValue = useMotionValue(0);
  const roundedValue = useTransform(countValue, (latest) => Math.round(latest));

  const onView = ():void => {
    animate(countValue, value, {
      duration: 1.3,
    }).then(() => {}).catch(() => {});
  };
  return (
    <div
      className="w-full max-w-[calc(33.33333%_-_20px)]
      screen-lg:max-w-[calc(50%_-_15px)] screen-md:max-w-[calc(50%_-_10px)]"
    >
      <VRARContent>
        <motion.div
          onViewportEnter={() => onView()}
          onViewportLeave={() => null}
          viewport={{ once: true }}
        >
          <JakartaText
            tag="p"
            className="pb-[20px] text-[96px]/[1.1]
            screen-lg:text-[80px]/[1.1] screen-md:text-[38px]/[1.2] screen-md:pb-[15px]
            tracking-[-0.8px] screen-md:tracking-[-0.38px]"
          >
            <motion.span>{roundedValue}</motion.span>
            <span
              className={`${prefixModifier
                ? '' : 'text-[50px]/[1.2] screen-lg:text-[38px]/[1.2] screen-md:text-[28px]/[1.3] '
              + 'tracking-[-0.5px] screen-lg:tracking-[-0.38px] screen-md:tracking-[-0.28px]'}
              ${classes?.prefix || ''}`}
            >
              {prefix}
            </span>
          </JakartaText>
        </motion.div>
      </VRARContent>
      <VRARContent>
        <JakartaText
          className="text-[18px]/[1.4] screen-md:text-[16px]/[1.5]
          tracking-[-0.18px] screen-md:tracking-[-0.16px]"
        >
          {title}
        </JakartaText>
      </VRARContent>
    </div>
  );
}

export default NumbersBlockItem;
