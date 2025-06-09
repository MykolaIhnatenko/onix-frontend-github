interface IVideoDotsList {
  list: {
    id: string | number,
    content: string,
  }[],
  variant: 'requirements' | 'ourSolutions',
}

export default IVideoDotsList;
