export const rectangleAVariant = {
  open: {
    y: 0.5,
    x: 0,
    rotate: -45,
    transition: {
      duration: 0.4,
    },
  },
  close: {
    y: 5,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const rectangleBVariant = {
  open: {
    y: -1.5,
    x: -0.5,
    rotate: 45,
    transition: {
      duration: 0.4,
    },
  },
  close: {
    y: -6,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const menuVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  close: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  close: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export const variantAnimate = {
  initial: { clipPath: 'inset(0% 0% 100% 0%)', height: 0 },
  animate: { clipPath: 'inset(0% 0% 0% 0%)', height: 'auto' },
  exit: { clipPath: 'inset(0% 0% 100% 0%)', height: 0 },
};
