interface IProgressLine {
  delay?: number;
  vertical?: boolean;
  classes?: {
    container?: string;
    line?: string;
  }
  withoutAnimate?: boolean
}

export default IProgressLine;
