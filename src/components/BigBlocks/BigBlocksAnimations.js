export const animateText = {
  show: {
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
  hide: {
    y: 300,
  },
};

export const animateImgOverlay = (direction = 1) => {
  return {
    show: {
      x: `${direction * 100}%`,
      transition: {
        duration: 1.5,
      },
    },
    hide: {
      x: 0,
    },
  };
};

export const imgVariant = (direction = 1) => {
  return {
    hide: {
      x: `${direction * 200}px`,
    },
    show: {
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
};
