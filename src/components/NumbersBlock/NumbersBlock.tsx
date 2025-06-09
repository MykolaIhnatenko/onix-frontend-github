import React from 'react';

import { INumbersBlockData } from './interfaces/INumbersBlockData';
import FullCycleRow from '../../pages/MainPage/components/FullCycleRow';

function NumbersBlock({
  data, classes,
}: INumbersBlockData) {
  return (
    <div className={`mt-[36px] screen-md:mt-[16px] ${classes?.table || ''}`}>
      {data.map((item) => (
        <FullCycleRow key={item.id} item={item} rowClasses={classes?.rowClasses} />
      ))}
    </div>
  );
}

export default NumbersBlock;
