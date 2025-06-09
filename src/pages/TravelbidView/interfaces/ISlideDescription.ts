interface ISlideDescription {
  type: string,
  header: string,
  content: string,
  selectSlide?: (event: MouseEvent) => void,
  isActive: boolean,
}

export default ISlideDescription;
