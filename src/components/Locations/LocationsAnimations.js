export const locationsVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};
