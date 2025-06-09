export const menuVariant = {
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      type: 'spring',
      duration: 0.2,
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  hidden: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: {
      type: 'spring',
      duration: 0.7,
    },
  },
};

export const itemMenuVariants = {
  visible: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const variantChildMenu = {
  initial: { clipPath: 'inset(0% 0% 100% 0%)', height: 0 },
  animate: { clipPath: 'inset(0% 0% 0% 0%)', height: 'auto' },
  exit: { clipPath: 'inset(0% 0% 100% 0%)', height: 0 },
};
