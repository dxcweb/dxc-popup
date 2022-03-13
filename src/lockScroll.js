const onTouchMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const lockScroll = {
  lock: () => {
    document.addEventListener('touchmove', onTouchMove, { passive: false });
  },
};
export default lockScroll;
