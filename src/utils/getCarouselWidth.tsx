const getCarouselWidth = (
  itemWidth: number | undefined,
  blogsLength: number | undefined,
  setCarouselWidth: (width: number) => void,
  gap = 20,
) => {
  if (itemWidth && blogsLength) {
    const width = itemWidth * blogsLength + gap * (blogsLength - 1);
    setCarouselWidth(width);
  }
};

export default getCarouselWidth;
