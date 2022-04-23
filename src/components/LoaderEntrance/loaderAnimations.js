export const animateBox = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

export const animateLogo = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const hideLogo = {
  initial: {
    opacity: 0,
    y: 100,
  },
};
