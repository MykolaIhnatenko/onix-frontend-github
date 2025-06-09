import { INumbersBlockItem } from '../../../components/NumbersBlock/interfaces/INumbersBlockData';

const motionGraphicsNumbersBlockData: INumbersBlockItem[] = [
  {
    id: 1,
    leftTitle: 23,
    leftPrefix: '+',
    leftContent: (
      <>
        Years of proven success
        {' '}
        <br className="screen-md:hidden" />
        and growth
      </>
    ),
    rightTitle: 1100,
    rightPrefix: '+',
    rightContent: (
      <>
        Onix’ clients
      </>
    ),
  },
  {
    id: 2,
    leftTitle: 55,
    leftPrefix: '+',
    leftContent: (
      <>
        Countries represented
        {' '}
        <br className="screen-md:hidden" />
        by clients
      </>
    ),
    rightTitle: 1,
    rightPrefix: 'M+',
    rightContent: (
      <>
        Use products
        {' '}
        <br className="screen-md:hidden" />
        we designed
      </>
    ),
  },
];

export default motionGraphicsNumbersBlockData;
