class cursor {
  animate_cursor(dir_x, dir_y) {
    gsap.to(".cursor_tracker", {
      top: dir_y - 24,
      left: dir_x - 24,
      duration: 1,
      ease: "back.out(1)",
    });
    console.log("testing");
  }
}
const cursor_obj = new cursor();
export default cursor_obj;
