import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll } from 'react-use-gesture';

import { ITasksIncludedItems } from '../interfaces/IBetterMePage';
import { useAppSelector } from '../../../hook/reduxToolkit';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/tasksIncluded.module.scss';

function TasksIncluded({ taskIncludedItems } : { taskIncludedItems : ITasksIncludedItems[] }) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);

  const isMobile = isSMDevice || isXSDevice || isMDDevice;
  const [activeItemIndex, setActiveItemIndex] = useState<null | number>(null);

  const [ref, inView] = useInView({ threshold: 0 });

  const runAnimation = () => {
    const ANIMATION_OFFSET_START = 198;
    const elements = document.querySelectorAll('.task-included-item');
    const elementsArray = Array.from(elements);
    let activeElementsCount = 0;
    elementsArray.forEach((element, index) => {
      const { top } = element.getBoundingClientRect();
      const isElementInAnimationArea = top < ANIMATION_OFFSET_START && top > 0;
      const isElementFirstFromOtherActiveElements = activeElementsCount === 0;
      if (isElementInAnimationArea && isElementFirstFromOtherActiveElements) {
        if ((index) !== activeItemIndex) {
          setActiveItemIndex(index);
        }
        activeElementsCount += 1;
      }

      const isNeedToUnsetFirstItem = activeItemIndex === 0 && index === 0 && top > ANIMATION_OFFSET_START;
      if (isNeedToUnsetFirstItem) {
        setActiveItemIndex(null);
      }
    });
  };

  const handleScroll = () => {
    const isRunAnimation = inView && !isMobile;
    if (isRunAnimation) {
      runAnimation();
    } else {
      setActiveItemIndex(null);
    }
  };

  useScroll(handleScroll, { domTarget: typeof window !== 'undefined' ? window : null });

  return (
    <section className={styles.tasksIncluded}>
      <div className="betterMeContainer">
        <div className={styles.background}>
          <VRARContent className={styles.sticky}>
            <h2>The Onix team tasks included:</h2>
          </VRARContent>
          <div className={styles.taskIncludedItems} ref={ref}>
            {taskIncludedItems.map(({ id, icon, description }) => (
              <VRARContent
                key={id}
                className={`${styles.taskIncludedItem} task-included-item`}
              >
                <span className={`${styles.number} ${activeItemIndex === id ? styles.numberActive : ''}`}>
                  0
                  {id + 1}
                </span>
                {icon}
                <p>
                  {description}
                </p>
              </VRARContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TasksIncluded;
