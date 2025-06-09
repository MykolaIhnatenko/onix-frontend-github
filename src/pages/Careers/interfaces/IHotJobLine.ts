export interface IHotJobLine {
  numberString: string;
  jobName: string;
  jobTag: string;
  link: string;
  setNextIndex: (index: number) => void;
  indexItem: number;
  indexNext: number;
  darkMode?: boolean;
}
