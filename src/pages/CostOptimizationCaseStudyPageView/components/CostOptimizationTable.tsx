import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import ImageComponent from '../../../components/Image/Image';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import Table from '@/images/costOptimizationCaseStudyPageView/table/img_table@2x.webp';

import styles from '../sass/costOptimizationTable.module.scss';

function CostOptimizationTable() {
  const btnContainer = useRef<HTMLDivElement>(null);
  const tableContainer = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const [dragField, setDragField] = useState(0);

  const tableX = useMotionValue(0);
  const buttonX = useMotionValue(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const isMobile = isSMDevice || isXSDevice || isMDDevice;

  useEffect(() => {
    const updateOffset = () => {
      if (wrapperRef.current) {
        const wrapperRefContainer = wrapperRef.current?.clientWidth;
        if (isMDDevice) {
          setDragField(wrapperRefContainer - 30);
        }

        if (isSMDevice || isXSDevice) {
          setDragField(wrapperRefContainer - 15);
        }
      }
    };

    updateOffset();

    window.addEventListener('resize', updateOffset);
    return () => {
      window.removeEventListener('resize', updateOffset);
    };
  });

  const buttonJointDrag = () => {
    const btnContainerWidth = btnContainer.current?.clientWidth;
    const tableContainerWidth = tableContainer.current?.clientWidth;

    const transformStyleBtn = btnRef.current?.style.transform;
    const matchBtn = transformStyleBtn?.match(/translateX\((-?\d+(?:\.\d*)?)px\)/);

    if (matchBtn && btnContainerWidth && tableContainerWidth) {
      const btnPercent = (parseFloat(matchBtn[1]) * 100) / (btnContainerWidth - 53);
      const tableXPos = (-(1300 - tableContainerWidth) * btnPercent) / 100;
      tableX.set(tableXPos);
    } else if (matchBtn === null) {
      tableX.set(0);
    }
  };

  const tableJointDrag = () => {
    const btnContainerWidth = btnContainer.current?.clientWidth;
    const tableContainerWidth = tableContainer.current?.clientWidth;

    const transformStyleTable = tableRef.current?.style.transform;
    const matchTable = transformStyleTable?.match(/translateX\((-?\d+(?:\.\d*)?)px\)/);

    if (matchTable && btnContainerWidth && tableContainerWidth) {
      const tablePercent = (parseFloat(matchTable[1]) * 100) / (-(1300 - tableContainerWidth));
      const buttonXPos = ((btnContainerWidth - 53) * tablePercent) / 100;
      buttonX.set(buttonXPos);
    } else if (matchTable === null) {
      buttonX.set(0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        ref={wrapperRef}
        className={styles.table}
      >
        <div
          ref={tableContainer}
          className={styles.sliderContainer}
          style={{
            width: `${dragField}px`,
          }}
        />
        <motion.div
          ref={tableRef}
          drag={isMobile ? 'x' : undefined}
          dragConstraints={tableContainer}
          dragElastic={0}
          dragMomentum={false}
          onDrag={() => tableJointDrag()}
          style={{
            x: tableX,
          }}
          className={styles.tableDrag}
        >
          <ImageComponent
            src={Table}
            alt="Table"
            sizes="200vw"
          />
        </motion.div>
      </div>
      <div className={styles.scrollbarContainer}>
        <motion.div
          className={styles.scrollbar}
          ref={btnContainer}
        >
          <motion.div
            className={styles.scrollbarButton}
            ref={btnRef}
            drag="x"
            dragConstraints={btnContainer}
            dragElastic={0}
            dragMomentum={false}
            onDrag={() => buttonJointDrag()}
            style={{
              x: buttonX,
            }}
          >
            {'< Drag >'}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CostOptimizationTable;
