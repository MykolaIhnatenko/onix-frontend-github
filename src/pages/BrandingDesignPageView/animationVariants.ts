export const variantText = {
  enter: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
};

export const variantTextMobile = {
  enter: (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
};

export const variantTitleImage = {
  enter: (dir: number) => ({ x: dir < 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
};

export const transitionText = {
  x: { duration: 0.6 },
  opacity: { duration: 0.6 },
};

export const getSlideClassName = (slide:number) => {
  if (slide === 1) {
    return 'firstVariant';
  }
  if (slide === 2) {
    return 'secondVariant';
  }
  return '';
};
