const isEmpty = (arg: never[] | Record<never, never>) => {
  if (Array.isArray(arg)) {
    return arg.length === 0;
  }
  if (arg !== null && typeof arg === 'object') {
    return Object.keys(arg).length === 0;
  }
  return true;
};

export default isEmpty;
