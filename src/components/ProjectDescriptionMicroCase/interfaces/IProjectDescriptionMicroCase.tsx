export default interface IProjectDescriptionMicroCase {

  color: string;
  item: {
    id: number,
    className: string,
    title: string,
    description: string
  },
  fontSize?: string,
}
