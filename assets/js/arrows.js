class arrows {
  animate_arrows(arrows, isScrollingDown) {
    arrows.forEach((arr) => {
      if (isScrollingDown) {
        arr.classList.add("active");
      } else {
        arr.classList.remove("active");
      }
    });
  }
}
const arrows_obj = new arrows();
export default arrows_obj;