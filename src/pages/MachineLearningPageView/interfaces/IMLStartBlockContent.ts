interface IMLStartBlockContent {
  data: IMLStartBlockContentData[],
}

interface IMLStartBlockContentData {
  id: number,
  title: string,
  icon: JSX.Element,
}

export default IMLStartBlockContent;
