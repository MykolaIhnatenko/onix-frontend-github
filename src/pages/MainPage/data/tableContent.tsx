import { INumbersBlockItem } from '../../../components/NumbersBlock/interfaces/INumbersBlockData';

const tableContent: INumbersBlockItem[] = [
  {
    id: 1,
    leftTitle: 1100,
    leftPrefix: '+',
    leftContent: (
      <>
        Successfully delivered
        <br />
        projects
      </>
    ),
    rightTitle: 23,
    rightPrefix: '+',
    rightContent: (
      <>
        Years of experience in
        <br />
        software development
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
        <br />
        by clients
      </>
    ),
    rightTitle: 370,
    rightPrefix: '+',
    rightContent: (
      <>
        Talented multi‑dimensional
        <br />
        experts
      </>
    ),
  },
  {
    id: 3,
    leftTitle: 40,
    leftPrefix: '%',
    leftContent: (
      <>
        US and EU clients
      </>
    ),
    rightTitle: 30,
    rightPrefix: '%',
    rightContent: (
      <>
        Asian clients
      </>
    ),
  },
];

export default tableContent;
