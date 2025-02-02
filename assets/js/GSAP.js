class GSAP {
  marquee__part__animation() {
    return gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear",
      })
      .totalProgress(0.5);
  }
  initial_animation__marquee__inner() {
    gsap.set(".marquee__inner", { xPercent: -50 });
  }
  update_marquee_anim_dir(tween, isScrollingDown) {
    gsap.to(tween, {
      timeScale: isScrollingDown ? 1 : -1,
    });
  }
}
const GSAP_obj = new GSAP();
export default GSAP_obj;
