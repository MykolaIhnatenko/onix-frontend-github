const getLetterSpacing = (fontSizePx: number[]) => {
  const breakpoints = ['', 'screen-lg:', 'screen-md:'];
  const classes: string[] = [];

  fontSizePx.forEach((size, i) => {
    if (size !== undefined && size !== null) {
      const spacing = (-0.01 * size).toFixed(2);
      classes.push(`${breakpoints[i]}tracking-[${spacing}px]`);
    }
  });

  return classes.join(' ');
};

export default getLetterSpacing;
