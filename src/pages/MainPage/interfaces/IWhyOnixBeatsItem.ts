interface IWhyOnixBeatsItem {
  leftContent: IContent;
  rightContent: IContent;
  index: number;
  whyOnixBeatsDataLength: number;
}

interface IContent {
  mainTitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  text: string | React.ReactNode;
}

export default IWhyOnixBeatsItem;
